/**
 * @module components/markets
 *
 */

import React, { PropTypes } from 'react'
import MarketsListItem from './marketsListItem'

const MarketsList = ({isFetching, data}) => (
  <div>
    {data.map((el, ix) => <MarketsListItem key={ix} {...el} />)}
  </div>
)

MarketsList.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired
}

export default MarketsList
