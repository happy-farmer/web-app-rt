/**
 * @module reducers/userData
 */
import m from '../actions/manifest'
const DEFAULT = {
  token: null,
  isLoggedIn: false,
  isFetching: false,
  data: {}
}
function userData (state = DEFAULT, action) {
  switch (action.type) {
    case m.SET_USER:
      return Object.assign({}, state, action.userData)
    case m.RESET_USER:
      return Object.assign({}, state, DEFAULT)
    default:
      return state
  }
}

export default userData
