/**
 * @module components/editableDescription
 *
 */

import React, { PropTypes, Component } from 'react'

export default class EditableDescription extends Component {
  constructor () {
    super()
    this.patchDescription = this.patchDescription.bind(this)
  }
  patchDescription () {
    let {
      id,
      description,
      onDescriptionUpdate
    } = this.props
    onDescriptionUpdate(id, description)
  }
  render () {
    let {
      description,
      isEditing,
      onDescriptionChange,
      onDescriptionEditStop,
      onDescriptionEditStart
    } = this.props

    return (
      <div>
        {
          isEditing
          ? <div>
            <textarea
              onChange={onDescriptionChange}
              value={description}
            />
            <button onClick={this.patchDescription}>Save</button>
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
}

EditableDescription.propTypes = {
  description: PropTypes.string
}
