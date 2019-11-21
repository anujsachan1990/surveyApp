import {
  GET_SURVEY_DETAIL,
  GET_SURVEY_DETAIL_SUCCESS,
} from './SurveyDetails.contant'

export function getAllSurvey(currentSurveyNumber) {
  return {
    type: GET_SURVEY_DETAIL,
    currentSurveyNumber,
  }
}

export function getAllSurveySuccess(surveyDetails) {
  return {
    type: GET_SURVEY_DETAIL_SUCCESS,
    surveyDetails,
  }
}
