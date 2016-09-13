/**
 * @module containers/editableDescriptionCont
 */

import { connect } from 'react-redux'
import EditableDescription from '../components/editableDescription'
import {
  patchMarketsItem
} from '../actions/marketsItem'

const mapStateToProps = (state) => {
  let {
    isUpdating,
    data
  } = state.marketsItemData

  return {
    isUpdating,
    data
  }
}

const mapDispatchToProps = (dispatch) => ({
  onDescriptionUpdate (id, data) {
    dispatch(patchMarketsItem(id, data))
  }
})

const EditableDescriptionCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableDescription)

export default EditableDescriptionCont
