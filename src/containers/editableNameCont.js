/**
 * @module containers/editableNameCont
 */

import { connect } from 'react-redux'
import EditableName from '../components/editableName'
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
  onNameUpdate () {
    let item = 'name'
    dispatch(editEndMarketsItem(item))
    dispatch(patchMarketsItem())
  },
  onNameChange (ev) {
    let name = ev.target.value
    dispatch(changeLocalMarketsItem({
      name
    }))
  },
  onNameEditStart () {
    let item = 'name'
    dispatch(stashMarketsItem())
    dispatch(editStartMarketsItem(item))
  },
  onNameEditStop () {
    let item = 'name'
    dispatch(editEndMarketsItem(item))
    dispatch(rollbackMarketsItem())
  }
})

const EditableNameCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableName)

export default EditableNameCont
