import { call, takeLatest, put } from 'redux-saga/effects'
//import { service } from '../../global'

import {
  GET_SURVEY_DETAIL,
  GET_SURVEY_DETAIL_SUCCESS,
} from './SurveyDetails.contant'

export function* onGetSurveyDetail({ currentSurveyNumber }) {
  try {
    // yield put({ type: DISPLAY_LOADER, isLoading: true })
    // yield delay(3000)
    const data = yield call(
      fetch,
      `https://px2yf2j445.execute-api.us-west-2.amazonaws.com/production/surveys/${currentSurveyNumber}`
    )
    const surveyDetails = yield data.json()
    yield put({ type: GET_SURVEY_DETAIL_SUCCESS, surveyDetails })
    // yield put({ type: HIDE_LOADER, isLoading: false })
  } catch (e) {
    return 'No Record Found'
  }
}

export default function* getsurveyDetailSaga() {
  yield takeLatest(GET_SURVEY_DETAIL, onGetSurveyDetail)
}
