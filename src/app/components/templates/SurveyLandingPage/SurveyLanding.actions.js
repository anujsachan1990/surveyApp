import {
  GET_ALL_SURVEY,
  GET_ALL_SURVEY_SUCCESS,
} from './SurvryLanding.constant'

export function getAllSurvey() {
  return {
    type: GET_ALL_SURVEY,
  }
}

export function getAllSurveySuccess(allSurveys) {
  return {
    type: GET_ALL_SURVEY_SUCCESS,
    allSurveys,
  }
}
