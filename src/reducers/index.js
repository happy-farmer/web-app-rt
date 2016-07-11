/**
 * @module reducers/index
 * @description Default reducer for redux architeture
 */

import { combineReducers } from 'redux'

// import userData from './userData'
import marketsData from './marketsData'

/* Shape for the state data
  {
    userData: {
      token: null,
      isLoggedIn: false,
      isFetching: false,
      data: {}
    }
    marketsData: {
      query: null,
      isFetching: false,
      data: []
    }
  }
*/

const appReducers = combineReducers({
  // userData,
  marketsData
})

export default appReducers
