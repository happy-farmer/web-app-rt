/**
 * @module containers/marketsItem
 */

import { connect } from 'react-redux'
import Component from '../components/marketsItem'
import {
  updateMarketsItem,
  updatedMarketsItem
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

})

const MarketsItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default MarketsItem
