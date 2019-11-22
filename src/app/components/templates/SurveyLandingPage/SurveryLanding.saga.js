import { call, takeLatest, put } from 'redux-saga/effects'

import services from '../../../../global/services'
import { SHOW_LOADER, HIDE_LOADER } from '../../../../global/constant'
import { api } from '../../../../global/apiInterceptor'

import {
  GET_ALL_SURVEY,
  GET_ALL_SURVEY_SUCCESS,
} from './SurvryLanding.constant'

export function* onGetAllSurvey() {
  try {
    yield put({ type: SHOW_LOADER })
    const allSurveys = yield call(api.get, services.getAllSurvey)
    yield put({ type: GET_ALL_SURVEY_SUCCESS, allSurveys })
    yield put({ type: HIDE_LOADER })
  } catch (e) {
    return 'handle Error here'
  }
}

export default function* getAllServeySaga() {
  yield takeLatest(GET_ALL_SURVEY, onGetAllSurvey)
}
