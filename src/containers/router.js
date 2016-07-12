/**
 * @module containers/router
 * @description Router proxy container for onEnter/onLeave
 */

import { connect } from 'react-redux'
import Component from '../components/router'
import {
  fetchMarketsList,
  resetMarketsList
} from '../actions/markets'

const mapDispatchToProps = (dispatch) => {
  return {
    onMarketsListEnter (ev) {
      dispatch(fetchMarketsList())
    },
    onMarketsListLeave (ev) {
      dispatch(resetMarketsList())
    },
    onMarketsItemEnter (ev) {
      dispatch(fetchMarketsList())
    },
    onMarketsItemLeave (ev) {
      dispatch(resetMarketsList())
    }
  }
}

const mapStateToProps = (state) => ({
})

const Router = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default Router
