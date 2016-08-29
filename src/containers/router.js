/**
 * @module containers/router
 * @description Router proxy container for onEnter/onLeave
 */

import { connect } from 'react-redux'
import Component from '../components/router'
import {
  fetchMarketsList,
  resetMarketsList,
  fetchMarketsItem,
  resetMarketsItem
} from '../actions/markets'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => {
  return {
    onMarketsListEnter (ev) {
      dispatch(fetchMarketsList())
    },
    onMarketsListLeave (ev) {
      dispatch(resetMarketsList())
    },
    onMarketsItemEnter (ev) {
      let id = ev.params.id
      dispatch(fetchMarketsItem(id))
    },
    onMarketsItemLeave (ev) {
      dispatch(resetMarketsItem())
    }
  }
}

const Router = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default Router
