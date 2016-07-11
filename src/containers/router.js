/**
 * @module containers/router
 * @description Router proxy container for onEnter/onLeave
 */

import { connect } from 'react-redux'
import Component from '../components/router'
import {
  fetchMarkets,
  resetMarkets
} from '../actions/markets'

const mapDispatchToProps = (dispatch) => {
  return {
    onMarketsEnter (ev) {
      dispatch(fetchMarkets())
    },
    onMarketsLeave (ev) {
      dispatch(resetMarkets())
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
