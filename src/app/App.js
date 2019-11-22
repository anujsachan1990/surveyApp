import React from 'react'
import { Container } from 'styled-bootstrap-grid'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
import SurveyLanding from './components/templates/SurveyLandingPage'
import SurveyDetail from './components/organisms/SurveyDetails'
import Routes from '../global/routes'

const App = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route
            path={Routes.landingPage}
            render={() => (
              <ErrorBoundary>
                <SurveyLanding />
              </ErrorBoundary>
            )}
          />
          <Route
            path={Routes.surveyDetailPage}
            render={() => (
              <ErrorBoundary>
                <SurveyDetail />
              </ErrorBoundary>
            )}
          />
        </Switch>
      </Router>
    </Container>
  )
}

export default App
