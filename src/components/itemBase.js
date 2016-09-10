/**
 * @module components/itemBase
 *
 */

import React, { PropTypes } from 'react'

let ItemBase = ({id, name, description, className, onMarketsItemUpdate}) => {
  return (
    <article className={className}>
      <h3>{name}</h3>
      <p>{description || 'Add description!'}</p>
    </article>
  )
}

ItemBase.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  onMarketsItemUpdate: PropTypes.func
}

export default ItemBase
