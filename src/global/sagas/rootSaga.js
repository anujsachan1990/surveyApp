import { all } from 'redux-saga/effects'
import getAllServeySaga from '../../app/components/templates/SurveyLandingPage/SurveryLanding.saga'
import getsurveyDetailSaga from '../../app/components/organisms/SurveyDetails/SurveyDetails.saga'

export default function* rootSaga() {
  try {
    yield all([getAllServeySaga(), getsurveyDetailSaga()])
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e)
  }
}
