/**
 * @module components/marketsItem
 *
 */

import React, { PropTypes } from 'react'

const MarketsItem = ({isFetching, data}) => (
  <article className='user-timeline-item'>
    <h3>{data.name}</h3>
  </article>
)

MarketsItem.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired
}

export default MarketsItem
