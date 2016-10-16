/**
 * @module reducers/marketsItemData
 */
import m from '../actions/manifest'
const emptySet = new Set([])
const DEFAULT = {
  id: null,
  isFetching: false,
  isUpdating: false,
  editing: emptySet,
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
    case m.EDIT_START_MARKETS_ITEM: {
      let editing = new Set(state.editing)
      editing.add(action.item)
      return Object.assign({}, state, {
        editing
      })
    }
    case m.EDIT_END_MARKETS_ITEM: {
      let editing = new Set(state.editing)
      editing.delete(action.item)
      return Object.assign({}, state, {
        editing
      })
    }
    case m.CHANGE_LOCAL_MARKETS_ITEM:
      let data = Object.assign({}, state.data, action.data)
      return Object.assign({}, state, {
        data
      })
    case m.STASH_MARKETS_ITEM:
      let stashedData = Object.assign(
        {},
        state.data[action.item],
        state.stashedData[action.item]
      )
      debugger
      return Object.assign({}, state, {
        stashedData
      })
    case m.ROLLBACK_MARKETS_ITEM: {
      let data = Object.assign(
        {},
        state.stashedData[action.item],
        state.data[action.item]
      )
      debugger
      return Object.assign({}, state, {
        data
      })
    }
    default:
      return state
  }
}

export default marketsItemData
