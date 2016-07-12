/**
 * @module actions/markets
 */

/* global fetch */
import 'whatwg-fetch'
import conf from 'app.conf.json'

export function requestMarketsList (query) {
  return { type: 'REQUEST_MARKETS_LIST', query }
}

export function receiveMarketsList (data) {
  return { type: 'RECEIVE_MARKETS_LIST', data }
}

export function resetMarketsList () {
  return { type: 'RESET_MARKETS_LIST' }
}

export function fetchMarketsList (query) {
  return function (dispatch) {
    dispatch(requestMarketsList(query))
    return fetch(
      conf.marketsUri
    )
    .then(
      (resp) => resp.json()
    )
    .then(
      (data) => dispatch(receiveMarketsList(data))
    )
  }
}
