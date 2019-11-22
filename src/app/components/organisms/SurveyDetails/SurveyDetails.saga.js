import { call, takeLatest, put } from 'redux-saga/effects'
import services from '../../../../global/services'
import { api } from '../../../../global/apiInterceptor'

import {
  GET_SURVEY_DETAIL,
  GET_SURVEY_DETAIL_SUCCESS,
} from './SurveyDetails.contant'

export function* onGetSurveyDetail({ currentSurveyNumber }) {
  try {
    const surveyDetails = yield call(
      api.get,
      `${services.getAllSurvey}/${currentSurveyNumber}`
    )
    yield put({ type: GET_SURVEY_DETAIL_SUCCESS, surveyDetails })
  } catch (e) {
    return 'handle Error here'
  }
}

export default function* getsurveyDetailSaga() {
  yield takeLatest(GET_SURVEY_DETAIL, onGetSurveyDetail)
}
