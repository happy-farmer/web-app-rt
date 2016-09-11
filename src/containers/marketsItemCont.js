/**
 * @module containers/marketsItemCont
 */

import { connect } from 'react-redux'
import marketsItemCont from '../components/marketsItem'
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

const MarketsItemCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(marketsItemCont)

export default MarketsItemCont
