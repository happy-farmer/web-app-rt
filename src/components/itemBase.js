/**
 * @module components/itemBase
 *
 */

import React, { PropTypes } from 'react'

let ItemBase = ({name, description, className}) => (
  <article className={className}>
    <h3>{name}</h3>
    <p>{description || 'Add description!'}</p>
  </article>
)

ItemBase.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default ItemBase
