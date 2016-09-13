/**
 * @module containers/marketsItemCont
 */

import { connect } from 'react-redux'
import marketsItemCont from '../components/marketsItem'

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

const MarketsItemCont = connect(
  mapStateToProps
)(marketsItemCont)

export default MarketsItemCont
