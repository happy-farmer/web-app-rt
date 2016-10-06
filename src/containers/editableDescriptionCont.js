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

const mapStateToProps = (state) => {
  let {
    isUpdating,
    isEditing,
    data
  } = state.marketsItemData

  return {
    isUpdating,
    isEditing,
    data
  }
}

const mapDispatchToProps = (dispatch) => ({
  onDescriptionUpdate () {
    dispatch(patchMarketsItem())
  },
  onDescriptionChange (ev) {
    let description = ev.target.value
    dispatch(changeLocalMarketsItem({
      description
    }))
  },
  onDescriptionEditStart () {
    dispatch(stashMarketsItem())
    dispatch(editStartMarketsItem())
  },
  onDescriptionEditStop () {
    dispatch(editEndMarketsItem())
    dispatch(rollbackMarketsItem())
  }
})

const EditableDescriptionCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableDescription)

export default EditableDescriptionCont
