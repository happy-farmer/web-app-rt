/**
 * @module components/itemBase
 *
 */

import React, { PropTypes } from 'react'
import EditableDescriptionCont from '../containers/editableDescriptionCont'

let ItemBase = ({id, name, description, className}) => {
  return (
    <article className={className}>
      <h3>{name}</h3>
      <EditableDescriptionCont
        id={id}
        description={description}
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
