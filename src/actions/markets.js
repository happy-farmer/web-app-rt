/**
 * @module actions/markets
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

export function requestMarketsItem (id) {
  return { type: m.REQUEST_MARKETS_ITEM, id }
}

export function receiveMarketsItem (data) {
  return { type: m.RECEIVE_MARKETS_ITEM, data }
}

export function resetMarketsItem () {
  return { type: m.RESET_MARKETS_ITEM }
}

export function fetchMarketsItem (id) {
  return function (dispatch) {
    dispatch(requestMarketsItem(id))
    return fetch(
      `${marketsUri}/${id}`
    )
    .then(
      (resp) => resp.json()
    )
    .then(
      (data) => dispatch(receiveMarketsItem(data))
    )
  }
}
