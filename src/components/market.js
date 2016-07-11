/**
 * @module components/market
 *
 */

import React, { PropTypes } from 'react'

const Market = ({name, location, id}) => (
  <section className='user-timeline-item'>
    <h2>{name}</h2>
  </section>
)

Market.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
}

export default Market
