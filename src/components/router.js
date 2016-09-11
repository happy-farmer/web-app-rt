/**
 * @module components/router
 * @description Router to container proxy
 */

import React from 'react'
import {Router, Route, Redirect, hashHistory as history} from 'react-router'
import App from '../components/app'
import MarketsListCont from '../containers/marketsListCont'
import MarketsItemCont from '../containers/marketsItemCont'

let RouterProxy = ({
  onMarketsListEnter,
  onMarketsItemEnter
}) => (
  <Router history={history}>
    <Route component={App}>
      <Route
        path='/'
        onEnter={onMarketsListEnter}
        component={MarketsListCont}
      />
      <Redirect from='/index' to='/' />
      <Route
        path='/markets/:id'
        onEnter={onMarketsItemEnter}
        component={MarketsItemCont}
      />
    </Route>
  </Router>
)

export default RouterProxy
