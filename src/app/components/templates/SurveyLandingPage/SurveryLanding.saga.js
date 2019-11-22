import { call, takeLatest, put } from 'redux-saga/effects'

import services from '../../../../global/services'
import { SHOW_LOADER, HIDE_LOADER } from '../../../../global/constant'

import {
  GET_ALL_SURVEY,
  GET_ALL_SURVEY_SUCCESS,
} from './SurvryLanding.constant'

export function* onGetAllSurvey() {
  try {
    yield put({ type: SHOW_LOADER })
    const data = yield call(fetch, services.getAllSurvey)
    const allSurveys = yield data.json()
    yield put({ type: GET_ALL_SURVEY_SUCCESS, allSurveys })
    yield put({ type: HIDE_LOADER })
  } catch (e) {
    return 'No Record Found'
  }
}

export default function* getAllServeySaga() {
  yield takeLatest(GET_ALL_SURVEY, onGetAllSurvey)
}
