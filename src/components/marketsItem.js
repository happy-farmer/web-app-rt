/**
 * @module components/marketsItem
 *
 */

import React, { PropTypes } from 'react'
import Loader from './loader'

const Item = ({name}) => (
  <article className='markets-item'>
    <h3>{name}</h3>
  </article>
)

Item.propTypes = {
  name: PropTypes.string.isRequired
}

const MarketsItem = ({isFetching, data}) => (
  isFetching ? <Loader /> : <Item {...data} />
)

MarketsItem.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired
}

export default MarketsItem
