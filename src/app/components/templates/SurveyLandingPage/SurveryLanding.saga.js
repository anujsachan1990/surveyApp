import { call, takeLatest, put } from 'redux-saga/effects'
import services from '../../../../global/services'

import {
  GET_ALL_SURVEY,
  GET_ALL_SURVEY_SUCCESS,
} from './SurvryLanding.constant'

export function* onGetAllSurvey() {
  try {
    // yield put({ type: DISPLAY_LOADER, isLoading: true })
    // yield delay(3000)
    const data = yield call(fetch, services.getAllSurvey)
    const allSurveys = yield data.json()
    yield put({ type: GET_ALL_SURVEY_SUCCESS, allSurveys })
    // yield put({ type: HIDE_LOADER, isLoading: false })
  } catch (e) {
    return 'No Record Found'
  }
}

export default function* getAllServeySaga() {
  yield takeLatest(GET_ALL_SURVEY, onGetAllSurvey)
}
