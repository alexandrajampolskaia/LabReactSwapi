import { combineReducers } from 'redux';
//import feature reducer
import { reducer as peopleReducer } from './people'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
	//add feature reducer
	people: peopleReducer,
	form: formReducer
})

export { rootReducer }