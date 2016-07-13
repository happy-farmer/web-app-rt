/**
 * @module components/marketsListItem
 *
 */

import React, { PropTypes } from 'react'
import {Link} from 'react-router'

const MarketsListItem = ({name, location, id}) => (
  <section className='user-timeline-item'>
    <h3>
      <Link to={`/markets/${id}`} title={name}>
        {name}
      </Link>
    </h3>
  </section>
)

MarketsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
}

export default MarketsListItem
