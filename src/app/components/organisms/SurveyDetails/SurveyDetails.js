import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSurvey } from './SurveyDetails.actions'
import { getAvgRating } from '../../../../utils'
import { SurveyDetailStyle } from './SurveyDetails.style'
import Progress from '../../molecules/Progress'
import Rating from '../../molecules/Rating'

/**
 * @desc
 */

const SurveyDetails = ({ location }) => {
  const dispatch = useDispatch()
  const currentPath = location.pathname.split('/')
  const currentSurveyNumber = currentPath[currentPath.length - 1]

  const surveyDetail = useSelector(
    state => state.SurveyDetailReducer.surveyDetail
  )

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
              {'Overall '}
              {surveyDetail.survey_result_detail.name}
              {' Participation'}
            </h1>
          )}

          {surveyDetail.survey_result_detail && (
            <div>
              <Progress
                progress={
                  surveyDetail.survey_result_detail.response_rate.toFixed(2) *
                  100
                }
              />
            </div>
          )}
        </div>
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
                          <b>Question:</b>
                          {question.description}
                        </div>
                        <div>
                          <b>Avg Rating:</b>
                          <Rating
                            name="rate1"
                            editing={false}
                            starCount={5}
                            value={getAvgRating(question.survey_responses).avg}
                          />
                          {getAvgRating(question.survey_responses).avg.toFixed(
                            2
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

export default withRouter(SurveyDetails)
