/**
 * @module components/editableName
 *
 */

import React, { PureComponent } from 'react'

export default class EditableName extends PureComponent {
  static propToEdit = 'name'
  patchName = () => {
    let {
      id,
      name,
      onUpdate
    } = this.props
    onUpdate(id, name)
  }
  render () {
    let {
      name,
      isEditing,
      onChange,
      onEditStop,
      onEditStart
    } = this.props

    const style = {
      fontSize: 40,
      fontWeight: 600,
      lineHeight: '45px',
      width: '100%',
      magrin: '10px 0',
      padding: 0,
      border: 'none',
      outline: 'none'
    }

    return (
      <div>
        {
          isEditing
          ? <div>
            <input
              style={style}
              type='text'
              onChange={onChange}
              value={name}
            />
            <button onClick={this.patchName}>Save</button>
            <button onClick={onEditStop}>Cancel</button>
          </div>
          : <div>
            <h1 style={style}>{name}</h1>
            <button onClick={onEditStart}>Edit Name!</button>
          </div>
        }
      </div>
    )
  }
}
