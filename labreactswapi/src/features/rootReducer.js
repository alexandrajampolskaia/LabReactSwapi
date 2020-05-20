import { combineReducers } from 'redux';
//import feature reducer
import { reducer as cartReducer } from './cart'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
	//add feature reducer
	cart: cartReducer,
	form: formReducer
})

export { rootReducer }