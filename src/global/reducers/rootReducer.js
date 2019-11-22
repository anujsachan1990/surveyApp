import { combineReducers } from 'redux'
import SurveyLandingReducer from '../../app/components/templates/SurveyLandingPage/SurveryLanding.reducer'
import SurveyDetailReducer from '../../app/components/organisms/SurveyDetails/SurveyDetails.reducer'

export default combineReducers({
  SurveyLandingReducer,
  SurveyDetailReducer,
})
