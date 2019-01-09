import types from '../actions/actionTypes'
import initialState from './initialState'
import {cloneDeep, filter} from 'lodash'

const quotationsReducer = (state = initialState.quotations, action)=> {
  let newState = null;
  switch (action.type) {
    case types.LOAD_QUOTATIONS_SUCCESS:
      newState = Object.assign({}, state);
      let sortedArrayOfQuotations = _.orderBy([...state.data, ...action.payload.quotations], ['id'], ['asc'])
      let uniqArrayOfQuotations = _.uniqBy(sortedArrayOfQuotations, 'id');
      newState.data =  uniqArrayOfQuotations
      newState.meta = action.payload.meta
      return newState;
    default:
      return state;
  }
}

export default quotationsReducer
