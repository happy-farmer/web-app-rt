/**
 * @module reducers/index
 * @description Default reducer for redux architeture
 */

import { combineReducers } from 'redux'

// import userData from './userData'
import marketsListData from './marketsListData'
import marketsItemData from './marketsItemData'

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
    marketsItemData: {
      id: null,
      isFetching: false,
      isUpdating: false,
      isEditing: false,
      data: {},
      prevData: {}
    }
  }
*/

const appReducers = combineReducers({
  // userData,
  marketsListData,
  marketsItemData
})

export default appReducers
