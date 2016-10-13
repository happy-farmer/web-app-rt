/**
 * @module components/editableDescription
 *
 */

import React, { PropTypes } from 'react'

let EditableDescription = ({
  id,
  description,
  editing,
  onDescriptionChange,
  onDescriptionUpdate,
  onDescriptionEditStop,
  onDescriptionEditStart
}) => {
  return (
    <div>
      {
        editing.has('description')
        ? <div>
          <textarea
            onChange={onDescriptionChange}
            value={description}
          />
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
