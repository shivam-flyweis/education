import {combineReducers} from 'redux'
import ProductReducer from './productReducer'
import signinReducer from './signinReducer'

const rootReducer = combineReducers({

 product:ProductReducer,
 signIn:signinReducer
})

export default rootReducer