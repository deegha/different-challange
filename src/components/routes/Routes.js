/**
 * Created by Deegha 10/04/2019
 */

import React from "react" 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LandingPage from '../../pages/landingPage/LandingPage'
import LeasePage from '../../pages/leasePage/LeasePage' 
import PageNotFound from '../../pages/pageNotFound/pageNotFound'

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/lease/:id" component={LeasePage} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
)

