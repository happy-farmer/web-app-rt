/**
 * @module bootstrap
 * @description Bootstap application
 */

import React from 'react'
import { Map } from 'immutable'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMw from 'redux-thunk'
import createHistory from 'history/createHashHistory'
import {
  ConnectedRouter,
  routerMiddleware
} from 'react-router-redux'
import {
  combineReducers
} from 'redux-immutable'

import routingReducer from './reducers/routingData'
import appReducers from './reducers'
import App from './components/app'

const history = createHistory()
const routerMw = routerMiddleware(history)

const rootReducer = combineReducers({
  ...appReducers,
  routing: routingReducer
})
const initialState = Map()
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(routerMw, thunkMw)
)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)
