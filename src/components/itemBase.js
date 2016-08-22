/**
 * @module components/itemBase
 *
 */

import React, { PropTypes } from 'react'

let ItemBase = ({name, className}) => (
  <article className={className}>
    <h3>{name}</h3>
  </article>
)

ItemBase.propTypes = {
  name: PropTypes.string.isRequired
}

export default ItemBase
