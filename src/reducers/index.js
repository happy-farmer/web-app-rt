/**
 * @module reducers/index
 * @description Default reducer for redux architeture
 */

import { combineReducers } from 'redux'

// import userData from './userData'
import marketsListData from './marketsListData'

/* Shape for the state data
  {
    userData: {
      token: null,
      isLoggedIn: false,
      isFetching: false,
      data: {}
    }
    marketsListData: {
      query: null,
      isFetching: false,
      data: []
    }
  }
*/

const appReducers = combineReducers({
  // userData,
  marketsListData
})

export default appReducers
