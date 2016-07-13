/**
 * @module reducers/userData
 */

const DEFAULT = {
  token: null,
  isLoggedIn: false,
  isFetching: false,
  data: {}
}
function userData (state = DEFAULT, action) {
  switch (action.type) {
    case 'SET_USER':
      return Object.assign({}, state, action.userData)
    case 'RESET_USER':
      return Object.assign({}, state, DEFAULT)
    default:
      return state
  }
}

export default userData
