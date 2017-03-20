/**
 * @module components/editableDescription
 *
 */

import React, { PureComponent } from 'react'

export default class EditableDescription extends PureComponent {
  static propToEdit = 'description'
  patchDescription = () => {
    let {
      id,
      description,
      onUpdate
    } = this.props
    onUpdate(id, description)
  }
  render () {
    let {
      description,
      isEditing,
      onChange,
      onEditStop,
      onEditStart
    } = this.props

    return (
      <div>
        {
          isEditing
          ? <div>
            <textarea
              onChange={onChange}
              value={description}
            />
            <button onClick={this.patchDescription}>Save</button>
            <button onClick={onEditStop}>Cancel</button>
          </div>
          : <p>
            {description}
            <button onClick={onEditStart}>Edit description!</button>
          </p>
        }
      </div>
    )
  }
}
