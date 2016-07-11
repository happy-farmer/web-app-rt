/**
 * @module components/markets
 *
 */

import React, { PropTypes } from 'react'
import Market from './market'

const Markets = ({isFetching, data}) => (
  <div>
    {data.map((el, ix) => <Market key={ix} {...el} />)}
  </div>
)

Markets.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired
}

export default Markets
