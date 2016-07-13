/**
 * @module reducers/marketsItemData
 */

const DEFAULT = {
  id: null,
  isFetching: false,
  data: {}
}
function marketsItemData (state = DEFAULT, action) {
  switch (action.type) {
    case 'REQUEST_MARKETS_ITEM':
      return Object.assign({}, state, {
        isFetching: true,
        id: action.id,
        data: {}
      })
    case 'RECEIVE_MARKETS_ITEM':
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      })
    case 'RESET_MARKETS_ITEM':
      return Object.assign({}, state, DEFAULT)
    default:
      return state
  }
}

export default marketsItemData
