/**
 * @module containers/marketsItem
 */

import { connect } from 'react-redux'
import Component from '../components/marketsItem'
import {
  patchMarketsItem
} from '../actions/marketsItem'

const mapStateToProps = (state) => {
  let {
    isFetching,
    data
  } = state.marketsItemData

  return {
    isFetching,
    data
  }
}

const mapDispatchToProps = (dispatch) => ({
  onMarketsItemUpdate: patchMarketsItem
})

const MarketsItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default MarketsItem
