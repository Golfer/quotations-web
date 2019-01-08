import {combineReducers} from 'redux'
import quotationsReducer from './quotationsReducer'

const rootReducers = combineReducers({
  quotations: quotationsReducer,
})

export default rootReducers
