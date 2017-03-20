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

const propName = 'name'

const mapStateToProps = (state) => {
  let {
    isUpdating,
    editing,
    data
  } = state.get('marketsItemData').toJS()

  return {
    isUpdating,
    isEditing: editing.includes(propName),
    data
  }
}

const mapDispatchToProps = (dispatch) => ({
  onNameUpdate (id, name) {
    dispatch(editEndMarketsItem(propName))
    dispatch(patchMarketsItem(id, {
      [propName]: name
    }))
  },
  onNameChange (ev) {
    let name = ev.target.value
    dispatch(changeLocalMarketsItem({
      [propName]: name
    }))
  },
  onNameEditStart () {
    dispatch(stashMarketsItem(propName))
    dispatch(editStartMarketsItem(propName))
  },
  onNameEditStop () {
    dispatch(editEndMarketsItem(propName))
    dispatch(rollbackMarketsItem(propName))
  }
})

const EditableNameCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableName)

export default EditableNameCont
