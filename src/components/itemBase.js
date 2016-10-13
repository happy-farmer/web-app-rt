/**
 * @module components/itemBase
 *
 */

import React, { PropTypes } from 'react'
import EditableDescriptionCont from '../containers/editableDescriptionCont'
import EditableNameCont from '../containers/editableNameCont'

let ItemBase = ({id, name, description, className}) => {
  return (
    <article className={className}>
      <EditableNameCont
        id={id}
        name={name}
      />
      <EditableDescriptionCont
        id={id}
        description={description}
      />
    </article>
  )
}

ItemBase.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default ItemBase
