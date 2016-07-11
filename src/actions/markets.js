/**
 * @module actions/markets
 */

/* global fetch */
import 'whatwg-fetch'

export function requestMarkets (query) {
  return { type: 'REQUEST_MARKETS', query }
}

export function receiveMarkets (data) {
  return { type: 'RECEIVE_MARKETS', data }
}

export function resetMarkets () {
  return { type: 'RESET_MARKETS' }
}

export function fetchMarkets (query) {
  return function (dispatch) {
    dispatch(requestMarkets(query))
    return fetch(
      'http://localhost:3004/markets/'
    )
    .then(
      (resp) => resp.json()
    )
    .then(
      (data) => dispatch(receiveMarkets(data))
    )
  }
}
