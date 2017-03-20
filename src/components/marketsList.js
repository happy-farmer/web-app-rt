/**
 * @module components/markets
 *
 */

import React, { PropTypes, PureComponent } from 'react'
import MarketsListItem from './marketsListItem'
import Loader from './loader'

export default class MarketsList extends PureComponent {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired
  }

  componentDidMount () {
    this.props.fetchMarketsList()
  }

  componentWillUnmount () {
    this.props.resetMarketsList()
  }

  render () {
    const {isFetching, data} = this.props
    return isFetching
    ? <Loader />
    : <div className='markets-list'>
      {data.map((el) => <MarketsListItem key={el.id} {...el} />)}
    </div>
  }
}
