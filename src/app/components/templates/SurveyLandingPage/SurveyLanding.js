import React, { useEffect, Fragment, memo } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../atoms/Loader'
import { getAllSurvey } from './SurveyLanding.actions'
import { LandingPageStyle } from './SurveryLanding.style'
import Card from '../../molecules/Card'

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
    <Fragment>
      <h1>Survey Results</h1>

      <LandingPageStyle>
        {surveyResult &&
          surveyResult.map(survey => {
            return <Card survey={survey} key={survey.name} />
          })}
      </LandingPageStyle>
    </Fragment>
  )
}

Text.propTypes = {
  children: PropTypes.string,
}

export default memo(SurveyLanding)
