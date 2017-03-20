/**
 * @module components/marketsItem
 *
 */

import React, { PropTypes, PureComponent } from 'react'
import Loader from './loader'
import ItemBase from './itemBase'

export default class MarketsItem extends PureComponent {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired
  }

  componentDidMount () {
    this.props.fetchMarketItem(this.props.match.params.id)
  }

  componentWillUnmount () {
    this.props.resetMarketItem(this.props.match.params.id)
  }

  render () {
    const {isFetching, data} = this.props
    return isFetching || !data.name
      ? <Loader />
      : <ItemBase
        className='markets-item'
        {...data}
      />
  }
}
