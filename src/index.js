/**
 * @module bootstrap
 * @description Bootstap application
 */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import appReducers from './reducers'
import Router from './containers/router'

let store = createStore(
  appReducers,
  applyMiddleware(thunkMiddleware)
)

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('app')
)
