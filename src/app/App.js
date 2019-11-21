import React from 'react'
import { Container } from 'styled-bootstrap-grid'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import SurveyLanding from './components/templates/SurveyLandingPage'
import SurveyDetail from './components/organisms/SurveyDetails'

const App = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/surveys/:number">
            <SurveyDetail />
          </Route>
          <Route path="/">
            <SurveyLanding />
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default App
