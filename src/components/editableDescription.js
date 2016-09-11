/**
 * @module components/editableDescription
 *
 */

import React, { PropTypes } from 'react'

let EditableDescription = ({
  description,
  startEditing,
  updateDescription
}) => {
  return (
    <p>
    {
      description ||
        <a
          onClick={startEditing}
          href='javascript:void(0)'>
            Add description!
        </a>
    }
    </p>
  )
}

EditableDescription.propTypes = {
  description: PropTypes.string,
  updateDescription: PropTypes.func
}

export default EditableDescription
