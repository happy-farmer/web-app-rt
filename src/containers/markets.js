/**
 * @module containers/markets
 */

import { connect } from 'react-redux'
import Component from '../components/markets'

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

const Markets = connect(
  mapStateToProps
)(Component)

export default Markets