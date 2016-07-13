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

export function requestMarketsItem (query) {
  return { type: 'REQUEST_MARKETS_ITEM', query }
}

export function receiveMarketsItem (data) {
  return { type: 'RECEIVE_MARKETS_ITEM', data }
}

export function resetMarketsItem () {
  return { type: 'RESET_MARKETS_ITEM' }
}

export function fetchMarketsItem (id) {
  return function (dispatch) {
    dispatch(requestMarketsList(id))
    return fetch(
      `${conf.marketsUri}/${id}`
    )
    .then(
      (resp) => resp.json()
    )
    .then(
      (data) => dispatch(receiveMarketsList(data))
    )
  }
}
