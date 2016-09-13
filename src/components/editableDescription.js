/**
 * @module components/editableDescription
 *
 */

import React, { PropTypes } from 'react'

let EditableDescription = ({
  id,
  description,
  onDescriptionUpdate
}) => {
  return (
    <p>
    {
      description ||
        <a
          onClick={onDescriptionUpdate}
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
