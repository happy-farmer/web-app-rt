/**
 * @module reducers/marketsListData
 */
import m from '../actions/manifest'
const DEFAULT = {
  query: null,
  isFetching: false,
  data: []
}
function marketsListData (state = DEFAULT, action) {
  switch (action.type) {
    case m.REQUEST_MARKETS_LIST:
      return Object.assign({}, state, {
        isFetching: true,
        query: action.query,
        data: []
      })
    case m.RECEIVE_MARKETS_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      })
    case m.RESET_MARKETS_LIST:
      return Object.assign({}, state, DEFAULT)
    default:
      return state
  }
}

export default marketsListData
