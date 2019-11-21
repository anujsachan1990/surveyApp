import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import Circle from 'react-circle'
import StarRatingComponent from 'react-star-rating-component'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSurvey } from './SurveyDetails.actions'
import { getAvgRating } from '../../../../utils'

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
    <div>
      {surveyDetail.survey_result_detail && (
        <div>
          Avg Participation:{' '}
          <Circle
            progress={
              surveyDetail.survey_result_detail.response_rate.toFixed(2) * 100
            }
          />
        </div>
      )}

      {surveyDetail.survey_result_detail &&
        surveyDetail.survey_result_detail.themes.map(theme => {
          return (
            <div key={theme.name}>
              <h2>Theme: {theme.name}</h2>

              {theme.questions.map(question => {
                return (
                  <div key={question.description}>
                    <div>Ques: {question.description}</div>
                    <div>
                      Ans: Avg Rating:
                      <StarRatingComponent
                        name="rate1"
                        editing={false}
                        starCount={5}
                        value={getAvgRating(question.survey_responses).avg}
                      />
                      {getAvgRating(question.survey_responses).avg.toFixed(2)}
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
    </div>
  )
}

SurveyDetails.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
}

export default withRouter(SurveyDetails)
