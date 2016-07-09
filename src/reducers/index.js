/**
 * @module reducers/index
 * @description Default reducer for redux architeture
 */

import { combineReducers } from 'redux'

import authReducer from './auth'

/* Shape for the state data
  {
    userData: {
      token: null,
      isLoggedIn: false,
      isFetching: false,
      data: {}
    }
  }
*/

const appReducer = combineReducers({
  authReducer
})

export default appReducer
