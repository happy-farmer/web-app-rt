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
  } = state.get('marketsItemData').toJS()

  return {
    isUpdating,
    isEditing: editing.includes(propName),
    data
  }
}

const mapDispatchToProps = (dispatch) => ({
  onDescriptionUpdate (id, description) {
    dispatch(editEndMarketsItem(propName))
    dispatch(patchMarketsItem(id, {
      [propName]: description
    }))
  },
  onDescriptionChange (ev) {
    let description = ev.target.value
    dispatch(changeLocalMarketsItem({
      [propName]: description
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
