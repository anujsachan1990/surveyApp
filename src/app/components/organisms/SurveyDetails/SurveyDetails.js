import React, { useEffect, Fragment, memo } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSurvey } from './SurveyDetails.actions'
import {
  getAvgRating,
  setSurveyComplitionStatus,
  getTwoDecimalPlaces,
} from '../../../../utils'
import { SurveyDetailStyle } from './SurveyDetails.style'
import Progress from '../../atoms/Progress'
import Rating from '../../atoms/Rating'
import Locale from '../../../../locale'
import Route from '../../../../global/routes'

const SurveyDetails = ({ location }) => {
  const dispatch = useDispatch()
  const currentPath = location.pathname.split('/')
  const currentSurveyNumber = currentPath[currentPath.length - 1]

  const surveyDetail = useSelector(
    state => state.SurveyDetailReducer.surveyDetail
  )

  // update data once route is changed
  useEffect(
    () => {
      dispatch(getAllSurvey(currentSurveyNumber))
    },
    [currentSurveyNumber]
  )

  return (
    <Fragment>
      <SurveyDetailStyle>
        <div className="surveyStatus">
          {surveyDetail.survey_result_detail && (
            <h1>
              {Locale.overall}
              {surveyDetail.survey_result_detail.name}
              {Locale.participation}
            </h1>
          )}
          {surveyDetail.survey_result_detail && (
            <div>
              <Progress
                progress={
                  getTwoDecimalPlaces(
                    surveyDetail.survey_result_detail.response_rate
                  ) * 100
                }
                progressColor={setSurveyComplitionStatus(
                  surveyDetail.survey_result_detail.response_rate * 100
                )}
              />
            </div>
          )}
        </div>
        <Link to={Route.landingPage}>{Locale.back}</Link>
        <div className="surveyQuestions">
          {surveyDetail.survey_result_detail &&
            surveyDetail.survey_result_detail.themes.map(theme => {
              return (
                <div className="card" key={theme.name}>
                  <div className="header">
                    <h2>{theme.name}</h2>
                  </div>

                  {theme.questions.map(question => {
                    return (
                      <div key={question.description} className="question">
                        <div>
                          <b>{Locale.question}</b>
                          {question.description}
                        </div>
                        <div>
                          <b>{Locale.avgRating}</b>
                          <Rating
                            name="rate"
                            editing={false}
                            starCount={5}
                            value={getAvgRating(question.survey_responses).avg}
                          />
                          {getTwoDecimalPlaces(
                            getAvgRating(question.survey_responses).avg
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            })}
        </div>
      </SurveyDetailStyle>
    </Fragment>
  )
}

SurveyDetails.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
}

export default withRouter(memo(SurveyDetails))
