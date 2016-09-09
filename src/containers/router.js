/**
 * @module containers/router
 * @description Router proxy container for onEnter/onLeave
 */

import { connect } from 'react-redux'
import Component from '../components/router'
import {
  getMarketsItem,
  resetMarketsItem
} from '../actions/marketsItem'
import {
  fetchMarketsList,
  resetMarketsList
} from '../actions/marketsList'

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
      dispatch(getMarketsItem(id))
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
