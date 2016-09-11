/**
 * @module containers/routerCont
 * @description Router proxy container for onEnter/onLeave
 */

import { connect } from 'react-redux'
import Router from '../components/router'
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

const RouterCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(Router)

export default RouterCont
