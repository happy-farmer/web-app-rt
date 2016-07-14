/**
 * @module components/markets
 *
 */

import React, { PropTypes } from 'react'
import MarketsListItem from './marketsListItem'
import Loader from './loader'

const MarketsList = ({isFetching, data}) => (
  isFetching
  ? <Loader />
  : (
    <div className='markets-list'>
        {data.map((el, ix) => <MarketsListItem key={ix} {...el} />)}
    </div>
  )
)

MarketsList.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired
}

export default MarketsList
