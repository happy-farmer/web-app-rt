/**
 * @module components/marketsItem
 *
 */

import React, { PropTypes } from 'react'
import Loader from './loader'
import ItemBase from './itemBase'

const MarketsItem = ({isFetching, onMarketsItemUpdate, data}) => (
  isFetching
    ? <Loader />
    : <ItemBase
      className='markets-item'
      onMarketsItemUpdate={onMarketsItemUpdate}
      {...data} />
)

MarketsItem.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  onMarketsItemUpdate: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}

export default MarketsItem
