import { call, takeLatest, put } from 'redux-saga/effects'
//import { service } from '../../global'

import {
  GET_ALL_SURVEY,
  GET_ALL_SURVEY_SUCCESS,
} from './SurvryLanding.constant'

export function* onGetAllSurvey() {
  //const { getProductsList } = service
  try {
    // yield put({ type: DISPLAY_LOADER, isLoading: true })
    // yield delay(3000)
    const data = yield call(
      fetch,
      'https://px2yf2j445.execute-api.us-west-2.amazonaws.com/production/surveys'
    )
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
