/**
 * @module actions/marketsListAct
 */

/* global fetch */
import 'whatwg-fetch'
import {marketsUri} from 'app.conf.json'
import m from './manifest'

export function requestMarketsList (query) {
  return { type: m.REQUEST_MARKETS_LIST, query }
}

export function receiveMarketsList (data) {
  return { type: m.RECEIVE_MARKETS_LIST, data }
}

export function resetMarketsList () {
  return { type: m.RESET_MARKETS_LIST }
}

export function fetchMarketsList (query) {
  return function (dispatch) {
    dispatch(requestMarketsList(query))
    return fetch(
      marketsUri
    )
    .then(
      (resp) => resp.json()
    )
    .then(
      (data) => dispatch(receiveMarketsList(data))
    )
  }
}
