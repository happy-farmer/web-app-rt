/**
 * @module components/editableDescription
 *
 */

import React, { PropTypes } from 'react'

let EditableDescription = ({
  id,
  description,
  isEditing,
  onDescriptionChange,
  onDescriptionUpdate,
  onDescriptionEditStop,
  onDescriptionEditStart
}) => {
  return (
    <div>
      {
        isEditing
        ? <div>
          <textarea onChange={onDescriptionChange}>{description}</textarea>
          <button onClick={onDescriptionUpdate}>Save</button>
          <button onClick={onDescriptionEditStop}>Cancel</button>
        </div>
        : <p>
          {description}
          <a
            onClick={onDescriptionEditStart}
            href='javascript:void(0)'>
              Edit description!
          </a>
        </p>
      }
    </div>
  )
}

EditableDescription.propTypes = {
  description: PropTypes.string
}

export default EditableDescription
