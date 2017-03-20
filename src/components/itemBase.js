/**
 * @module components/itemBase
 *
 */

import React, { PropTypes, PureComponent } from 'react'
import EditableItemCont from '../containers/editableItemCont'
import EditableDescription from './editableDescription'
import EditableName from './editableName'

export default class ItemBase extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string
  }
  render () {
    const {id, name, description, className} = this.props
    return (
      <article className={className}>
        <EditableItemCont>
          <EditableName
            id={id}
            name={name}
          />
          <EditableDescription
            id={id}
            description={description}
          />
        </EditableItemCont>
      </article>
    )
  }
}
