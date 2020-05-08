import { combineReducers } from 'redux';
//import feature reducer
import { reducer as cartReducer } from './cart'

const rootReducer = combineReducers({
	//add feature reducer
	cart: cartReducer
})

export { rootReducer }