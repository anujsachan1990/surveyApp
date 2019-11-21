import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSurvey } from './SurveyLanding.actions'

/**
 * @desc
 */

const SurveyLanding = () => {
  const dispatch = useDispatch()
  const surveyResult = useSelector(
    state => state.SurveyLandingReducer.survey_results
  )
  useEffect(() => {
    dispatch(getAllSurvey())
  }, [])

  return (
    <div>
      {surveyResult &&
        surveyResult.map(survey => {
          return (
            <Link to={survey.url} key={survey.name}>
              <div className="survey">
                {survey.name}
                {survey.url}
                {survey.participant_count}
                {survey.response_rate}
                {survey.submitted_response_count}
              </div>
            </Link>
          )
        })}
    </div>
  )
}

Text.propTypes = {
  children: PropTypes.string,
}

export default SurveyLanding
