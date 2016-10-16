/**
 * @module containers/editableDescriptionCont
 */

import { connect } from 'react-redux'
import EditableDescription from '../components/editableDescription'
import {
  patchMarketsItem,
  changeLocalMarketsItem,
  editStartMarketsItem,
  editEndMarketsItem,
  stashMarketsItem,
  rollbackMarketsItem
} from '../actions/marketsItemAct'

const propName = 'description'

const mapStateToProps = (state) => {
  let {
    isUpdating,
    editing,
    data
  } = state.marketsItemData

  return {
    isUpdating,
    isEditing: editing.has(propName),
    data
  }
}

const mapDispatchToProps = (dispatch) => ({
  onDescriptionUpdate (id, value) {
    dispatch(editEndMarketsItem(propName))
    dispatch(patchMarketsItem(id, {
      [propName]: value
    }))
  },
  onDescriptionChange (ev) {
    let value = ev.target.value
    dispatch(changeLocalMarketsItem({
      [propName]: value
    }))
  },
  onDescriptionEditStart () {
    dispatch(stashMarketsItem(propName))
    dispatch(editStartMarketsItem(propName))
  },
  onDescriptionEditStop () {
    dispatch(editEndMarketsItem(propName))
    dispatch(rollbackMarketsItem(propName))
  }
})

const EditableDescriptionCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableDescription)

export default EditableDescriptionCont
