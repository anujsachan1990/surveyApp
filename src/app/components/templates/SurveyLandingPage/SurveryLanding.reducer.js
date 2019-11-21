/* eslint-disable */
import { GET_ALL_SURVEY_SUCCESS } from './SurvryLanding.constant'

const intialState = {
  allSurvey: [],
}

const SurveyLandingReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ALL_SURVEY_SUCCESS: {
      state = {
        ...action.allSurveys,
      }
      break
    }
    default:
  }
  return state
}

export default SurveyLandingReducer
