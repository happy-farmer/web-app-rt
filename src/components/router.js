/**
 * @module components/router
 * @description Router to container proxy
 */

import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import App from '../components/app'
import Markets from '../containers/markets'

let RouterProxy = ({
  onMarketsListEnter,
  onMarketsItemEnter
}) => (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route
        path='/'
        onEnter={onMarketsListEnter}
        component={Markets}
      />
      <Route
        path='/markets/:id'
        onEnter={onMarketsItemEnter}
        component={Markets}
      />
    </Route>
  </Router>
)

export default RouterProxy
