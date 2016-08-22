/**
 * @module components/marketsItem
 *
 */

import React, { PropTypes } from 'react'
import Loader from './loader'
import ItemBase from './itemBase'

const MarketsItem = ({isFetching, data}) => (
  isFetching ? <Loader /> : <ItemBase className='markets-item' {...data} />
)

MarketsItem.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired
}

export default MarketsItem
