/**
 * @module reducers/marketsItemData
 */
import m from '../actions/manifest'
const DEFAULT = {
  id: null,
  isFetching: false,
  isUpdating: false,
  isEditing: false,
  data: {},
  stashedData: {}
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
    case m.UPDATE_START_MARKETS_ITEM:
      return Object.assign({}, state, {
        isUpdating: true
      })
    case m.UPDATE_DONE_MARKETS_ITEM:
      return Object.assign({}, state, {
        isUpdating: false
      })
    case m.EDIT_START_MARKETS_ITEM:
      return Object.assign({}, state, {
        isEditing: true
      })
    case m.EDIT_END_MARKETS_ITEM:
      return Object.assign({}, state, {
        isEditing: false
      })
    case m.CHANGE_LOCAL_MARKETS_ITEM:
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, action.data)
      })
    case m.STASH_MARKETS_ITEM:
      return Object.assign({}, state, {
        stashedData: state.data
      })
    case m.ROLLBACK_MARKETS_ITEM:
      return Object.assign({}, state, {
        data: state.stashedData,
        stashedData: {}
      })
    default:
      return state
  }
}

export default marketsItemData
