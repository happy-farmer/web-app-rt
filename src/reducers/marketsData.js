/**
 * @module reducers/markets
 */

const DEFAULT = {
  query: null,
  isFetching: false,
  data: []
}
function markets (state = DEFAULT, action) {
  switch (action.type) {
    case 'REQUEST_MARKETS':
      return Object.assign({}, state, {
        isFetching: true,
        query: action.query,
        data: []
      })
    case 'RECEIVE_MARKETS':
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      })
    case 'RESET_MARKETS':
      return Object.assign({}, state, DEFAULT)
    default:
      return state
  }
}

export default markets
