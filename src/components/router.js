/**
 * @module components/router
 * @description Router to container proxy
 */

import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import App from '../components/app'
import MarketsList from '../containers/marketsList'
import MarketsItem from '../containers/marketsItem'

let RouterProxy = ({
  onMarketsListEnter,
  onMarketsItemEnter
}) => (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route
        path='/'
        onEnter={onMarketsListEnter}
        component={MarketsList}
      />
      <Route
        path='/markets/:id'
        onEnter={onMarketsItemEnter}
        component={MarketsItem}
      />
    </Route>
  </Router>
)

export default RouterProxy
