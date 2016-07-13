/**
 * @module containers/marketsItem
 */

import { connect } from 'react-redux'
import Component from '../components/marketsItem'

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

const MarketsItem = connect(
  mapStateToProps
)(Component)

export default MarketsItem
