import React from 'react'
import { Container } from 'styled-bootstrap-grid'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
import SurveyLanding from './components/templates/SurveyLandingPage'
import SurveyDetail from './components/organisms/SurveyDetails'

const App = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route
            path="/surveys/:number"
            render={() => (
              <ErrorBoundary>
                <SurveyDetail />
              </ErrorBoundary>
            )}
          />
          <Route
            path="/"
            render={() => (
              <ErrorBoundary>
                <SurveyLanding />
              </ErrorBoundary>
            )}
          />
        </Switch>
      </Router>
    </Container>
  )
}

export default App
