import { call, takeLatest, put } from 'redux-saga/effects'
import services from '../../../../global/services'

import {
  GET_SURVEY_DETAIL,
  GET_SURVEY_DETAIL_SUCCESS,
} from './SurveyDetails.contant'

export function* onGetSurveyDetail({ currentSurveyNumber }) {
  try {
    const data = yield call(
      fetch,
      `${services.getAllSurvey}${currentSurveyNumber}`
    )
    const surveyDetails = yield data.json()
    yield put({ type: GET_SURVEY_DETAIL_SUCCESS, surveyDetails })
  } catch (e) {
    return 'No Record Found'
  }
}

export default function* getsurveyDetailSaga() {
  yield takeLatest(GET_SURVEY_DETAIL, onGetSurveyDetail)
}
