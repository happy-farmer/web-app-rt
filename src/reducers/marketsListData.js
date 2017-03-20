/**
 * @module reducers/marketsListData
 */

import { Map } from 'immutable'
import m from '../actions/manifest'
const DEFAULT = Map({
  query: null,
  isFetching: false,
  data: []
})
function marketsListData (state = DEFAULT, action) {
  switch (action.type) {
    case m.REQUEST_MARKETS_LIST:
      return state.merge({
        isFetching: true,
        query: action.query,
        data: []
      })
    case m.RECEIVE_MARKETS_LIST:
      return state.merge({
        isFetching: false,
        data: action.data
      })
    case m.RESET_MARKETS_LIST:
      return DEFAULT
    default:
      return state
  }
}

export default marketsListData
