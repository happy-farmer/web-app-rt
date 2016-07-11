/**
 * @module components/router
 * @description Router to container proxy
 */

import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import App from '../components/app'
import Markets from '../containers/markets'

let RouterProxy = ({
  onMarketsEnter,
  onMarketsLeave
}) => (
  <Router history={hashHistory}>
    <Route component={App}>
      <Route
        path='/'
        onEnter={onMarketsEnter}
        component={Markets}
      />
    </Route>
  </Router>
)

export default RouterProxy
