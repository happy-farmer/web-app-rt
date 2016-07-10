/**
 * @module bootstrap
 * @description Bootstap application
 */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import appReducer from './reducers'
import App from './components/app'

export default function bootstrap () {
  let store = createStore(
    appReducer,
    applyMiddleware(thunkMiddleware)
  )

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
}
