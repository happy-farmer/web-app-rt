/**
 * @module containers/editableNameCont
 */

import React from 'react'
import { connect } from 'react-redux'
import {
  patchMarketsItem,
  changeLocalMarketsItem,
  editStartMarketsItem,
  editEndMarketsItem,
  stashMarketsItem,
  rollbackMarketsItem
} from '../actions/marketsItemAct'

const EditableItemCont = ({
  children,
  onUpdate,
  onChange,
  onEditStart,
  onEditStop,
  editing,
  isUpdating
}) => {
  const connectedChildren = React.Children.map(children, (child) => {
    const propToEdit = child.type.propToEdit
    return React.cloneElement(child, {
      onUpdate: onUpdate.bind(null, propToEdit),
      onChange: onChange.bind(null, propToEdit),
      onEditStart: onEditStart.bind(null, propToEdit),
      onEditStop: onEditStop.bind(null, propToEdit),
      isEditing: editing.includes(propToEdit),
      isUpdating
    })
  })
  return <div>{connectedChildren}</div>
}

const mapStateToProps = (state) => {
  let {
    isUpdating,
    editing
  } = state.get('marketsItemData').toJS()

  return {
    isUpdating,
    editing
  }
}

const mapDispatchToProps = (dispatch) => ({
  onUpdate (propToEdit, id, value) {
    dispatch(editEndMarketsItem(propToEdit))
    dispatch(patchMarketsItem(id, {
      [propToEdit]: value
    }))
  },
  onChange (propToEdit, ev) {
    let value = ev.target.value
    dispatch(changeLocalMarketsItem({
      [propToEdit]: value
    }))
  },
  onEditStart (propToEdit) {
    dispatch(stashMarketsItem(propToEdit))
    dispatch(editStartMarketsItem(propToEdit))
  },
  onEditStop (propToEdit) {
    dispatch(editEndMarketsItem(propToEdit))
    dispatch(rollbackMarketsItem(propToEdit))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableItemCont)
