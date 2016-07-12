/**
 * @module components/market
 *
 */

import React, { PropTypes } from 'react'
import {Link} from 'react-router'

const Market = ({name, location, id}) => (
  <section className='user-timeline-item'>
    <h3>
      <Link to={`/markets/${id}`} title={name}>
        {name}
      </Link>
    </h3>
  </section>
)

Market.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
}

export default Market
