/* eslint-disable */
import { GET_ALL_SURVEY_SUCCESS } from './SurvryLanding.constant'
import { SHOW_LOADER, HIDE_LOADER } from '../../../../global/constant'

const intialState = {
  allSurvey: [],
  isLoading: false,
}

const SurveyLandingReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ALL_SURVEY_SUCCESS:
      state = {
        ...action.allSurveys,
      }
      break
    case SHOW_LOADER:
      state = {
        ...state,
        isLoading: true,
      }
      break
    case HIDE_LOADER:
      state = {
        ...state,
        isLoading: false,
      }
      break
    default:
      state = {
        ...state,
      }
      break
  }
  return state
}

export default SurveyLandingReducer
