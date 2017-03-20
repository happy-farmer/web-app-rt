/**
 * @module reducers/marketsItemData
 */

import { Map, Set } from 'immutable'
import m from '../actions/manifest'

const DEFAULT = Map({
  id: null,
  isFetching: false,
  isUpdating: false,
  editing: Set(),
  data: {},
  stashedData: {}
})
function marketsItemData (state = DEFAULT, action) {
  switch (action.type) {
    case m.REQUEST_MARKETS_ITEM:
      return state.merge({
        isFetching: true,
        id: action.id,
        data: {}
      })

    case m.RECEIVE_MARKETS_ITEM:
      return state.merge({
        isFetching: false,
        data: action.data
      })

    case m.RESET_MARKETS_ITEM:
      return DEFAULT

    case m.UPDATE_START_MARKETS_ITEM:
      return state.set('isUpdating', true)

    case m.UPDATE_DONE_MARKETS_ITEM:
      return state.set('isUpdating', false)

    case m.EDIT_START_MARKETS_ITEM:
      return state.update('editing', set => set.add(action.item))

    case m.EDIT_END_MARKETS_ITEM:
      return state.update('editing', set => set.delete(action.item))

    case m.CHANGE_LOCAL_MARKETS_ITEM:
      return state.mergeIn(['data'], action.data)

    case m.STASH_MARKETS_ITEM:
      return state.setIn(['stashedData'], state.getIn(['data']))

    case m.ROLLBACK_MARKETS_ITEM: {
      const stashedItemData = state.getIn(['stashedData', action.item])
      return state.setIn(['data', action.item], stashedItemData)
    }
    default:
      return state
  }
}

export default marketsItemData
