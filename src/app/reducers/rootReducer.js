import { combineReducers } from 'redux'
import SurveyLandingReducer from '../components/templates/SurveyLandingPage/SurveryLanding.reducer'
import SurveyDetailReducer from '../components/organisms/SurveyDetails/SurveyDetails.reducer'

export default combineReducers({
  SurveyLandingReducer,
  SurveyDetailReducer,
})
