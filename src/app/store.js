import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from './sagas/rootSaga'

import SurveyLandingReducer from './components/templates/SurveyLandingPage/SurveryLanding.reducer'
import SurveyDetailReducer from './components/organisms/SurveyDetails/SurveyDetails.reducer'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
})

const store = createStore(
  combineReducers({
    SurveyLandingReducer,
    SurveyDetailReducer,
  }),
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store
