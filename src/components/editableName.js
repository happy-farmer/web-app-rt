/**
 * @module components/editableName
 *
 */

import React, { PropTypes, Component } from 'react'

export default class EditableName extends Component {
  constructor () {
    super()
    this.patchName = this.patchName.bind(this)
  }
  patchName () {
    let {
      id,
      name,
      onNameUpdate
    } = this.props
    onNameUpdate(id, name)
  }
  render () {
    let {
      name,
      isEditing,
      onNameChange,
      onNameEditStop,
      onNameEditStart
    } = this.props

    return (
      <div>
        {
          isEditing
          ? <div>
            <input
              type='text'
              onChange={onNameChange}
              value={name}
            />
            <button onClick={this.patchName}>Save</button>
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
}

EditableName.propTypes = {
  name: PropTypes.string
}
