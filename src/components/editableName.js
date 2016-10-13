/**
 * @module components/editableName
 *
 */

import React, { PropTypes } from 'react'

let EditableName = ({
  id,
  name,
  editing,
  onNameChange,
  onNameUpdate,
  onNameEditStop,
  onNameEditStart
}) => {
  return (
    <div>
      {
        editing.has('name')
        ? <div>
          <input
            type='text'
            onChange={onNameChange}
            value={name}
          />
          <button onClick={onNameUpdate}>Save</button>
          <button onClick={onNameEditStop}>Cancel</button>
        </div>
        : <div>
          <h1>{name}</h1>
          <a
            onClick={onNameEditStart}
            href='javascript:void(0)'>
              Edit Name!
          </a>
        </div>
      }
    </div>
  )
}

EditableName.propTypes = {
  name: PropTypes.string
}

export default EditableName
