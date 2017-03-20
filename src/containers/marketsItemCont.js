/**
 * @module containers/marketsItemCont
 */

import { connect } from 'react-redux'
import marketsItemCont from '../components/marketsItem'
import {
  fetchMarketsItem,
  resetMarketsItem
} from '../actions/marketsItemAct'

const mapStateToProps = (state) => {
  let {
    isFetching,
    data
  } = state.get('marketsItemData').toJS()

  return {
    isFetching,
    data
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchMarketItem (id) { dispatch(fetchMarketsItem(id)) },
  resetMarketItem (id) { dispatch(resetMarketsItem(id)) }
})

const MarketsItemCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(marketsItemCont)

export default MarketsItemCont
