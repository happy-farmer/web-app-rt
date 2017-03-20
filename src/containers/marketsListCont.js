/**
 * @module containers/marketsListCont
 */

import { connect } from 'react-redux'
import marketsList from '../components/marketsList'

import {
  fetchMarketsList,
  resetMarketsList
} from '../actions/marketsListAct'

const mapStateToProps = (state) => {
  let {
    isFetching,
    data
  } = state.get('marketsListData').toJS()

  return {
    isFetching,
    data
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchMarketsList () { dispatch(fetchMarketsList()) },
  resetMarketsList () { dispatch(resetMarketsList()) }
})

const MarketsListCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(marketsList)

export default MarketsListCont
