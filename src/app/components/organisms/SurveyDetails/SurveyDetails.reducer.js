/* eslint-disable indent */
import { GET_SURVEY_DETAIL_SUCCESS } from './SurveyDetails.contant'

const intialState = {
  surveyDetail: {},
}

const SurveyDetailReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_SURVEY_DETAIL_SUCCESS: {
      state = {
        ...state,
        surveyDetail: {
          ...action.surveyDetails,
        },
      }
      break
    }
    default:
  }
  return state
}

export default SurveyDetailReducer
