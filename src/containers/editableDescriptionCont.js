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
    editing,
    data
  } = state.marketsItemData

  return {
    isUpdating,
    editing,
    data
  }
}

const mapDispatchToProps = (dispatch) => ({
  onDescriptionUpdate () {
    let item = 'description'
    dispatch(editEndMarketsItem(item))
    dispatch(patchMarketsItem())
  },
  onDescriptionChange (ev) {
    let description = ev.target.value
    dispatch(changeLocalMarketsItem({
      description
    }))
  },
  onDescriptionEditStart () {
    let item = 'description'
    dispatch(stashMarketsItem())
    dispatch(editStartMarketsItem(item))
  },
  onDescriptionEditStop () {
    let item = 'description'
    dispatch(editEndMarketsItem(item))
    dispatch(rollbackMarketsItem())
  }
})

const EditableDescriptionCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableDescription)

export default EditableDescriptionCont
