/**
 * @module containers/marketsListCont
 */

import { connect } from 'react-redux'
import marketsList from '../components/marketsList'

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

const MarketsListCont = connect(
  mapStateToProps
)(marketsList)

export default MarketsListCont
