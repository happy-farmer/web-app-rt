/**
 * @module reducers/auth
 */

const DEFAULT = {
  token: null,
  isLoggedIn: false,
  isFetching: false,
  data: {}
}
function auth (state = DEFAULT, action) {
  switch (action.type) {
    case 'SET_USER':
      return Object.assign({}, state, action.userData)
    case 'RESET_USER':
      return Object.assign({}, state, DEFAULT)
    default:
      return state
  }
}

export default auth
