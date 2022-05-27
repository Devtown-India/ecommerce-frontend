import { combineReducers } from 'redux'
import auth from './auth'
import loader from './loader'
import category from './category'
import product from './product'
import cart from './cart'


export default combineReducers({
    auth,
    loader,
    category,
    product,
    cart
})
