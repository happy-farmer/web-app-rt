/**
 * @module reducers/marketsItemData
 */
import m from '../actions/manifest'
const DEFAULT = {
  id: null,
  isFetching: false,
  data: {}
}
function marketsItemData (state = DEFAULT, action) {
  switch (action.type) {
    case m.REQUEST_MARKETS_ITEM:
      return Object.assign({}, state, {
        isFetching: true,
        id: action.id,
        data: {}
      })
    case m.RECEIVE_MARKETS_ITEM:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      })
    case m.RESET_MARKETS_ITEM:
      return Object.assign({}, state, DEFAULT)
    default:
      return state
  }
}

export default marketsItemData
