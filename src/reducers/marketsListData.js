/**
 * @module reducers/marketsListData
 */

const DEFAULT = {
  query: null,
  isFetching: false,
  data: []
}
function marketsListData (state = DEFAULT, action) {
  switch (action.type) {
    case 'REQUEST_MARKETS_LIST':
      return Object.assign({}, state, {
        isFetching: true,
        query: action.query,
        data: []
      })
    case 'RECEIVE_MARKETS_LIST':
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      })
    case 'RESET_MARKETS_LIST':
      return Object.assign({}, state, DEFAULT)
    default:
      return state
  }
}

export default marketsListData
