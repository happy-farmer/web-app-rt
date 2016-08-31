/**
 * @module actions/markets
 */

/* global fetch */
import 'whatwg-fetch'
import {marketsUri} from 'app.conf.json'
import m from './manifest'

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

export function updateMarketsItem ({id, data}) {
  return function (dispatch) {
    return fetch(`${marketsUri}/${id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(
      (resp) => resp.json()
    )
    .then(
      (data) => dispatch()
    )
  }
}
