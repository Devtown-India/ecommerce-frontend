import { combineReducers } from 'redux'
import auth from './auth'
import loader from './loader'


export default combineReducers({
    auth,
    loader
})
