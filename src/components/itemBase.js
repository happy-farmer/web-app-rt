/**
 * @module components/itemBase
 *
 */

import React, { PropTypes } from 'react'
import EditableDescription from './editableDescription'

let ItemBase = ({id, name, description, className, onMarketsItemUpdate}) => {
  let updateDescription = onMarketsItemUpdate.bind(this, id)
  return (
    <article className={className}>
      <h3>{name}</h3>
      <EditableDescription
        description={description}
        updateDescription={updateDescription}
      />
    </article>
  )
}

ItemBase.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  onMarketsItemUpdate: PropTypes.func
}

export default ItemBase
