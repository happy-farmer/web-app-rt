/**
 * @module containers/marketsList
 */

import { connect } from 'react-redux'
import Component from '../components/marketsList'

const mapStateToProps = (state) => {
  let {
    isFetching,
    data
  } = state.marketsListData

  return {
    isFetching,
    data
  }
}

const MarketsList = connect(
  mapStateToProps
)(Component)

export default MarketsList
