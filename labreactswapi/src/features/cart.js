import { createAction, createReducer } from '@reduxjs/toolkit'


//add to cart, remove from cart
const addToCart = createAction('add to cart')
const removeFromCart = createAction('remove to cart')

const actions = {addToCart, removeFromCart}

const initialState = [
	{
		person: { name: 'Alex', birth_year: '1988', eye_color: 'blue' },
	}
]

const reducer = createReducer(initialState, {
	[addToCart]: (state, action) => [
		...state, 
		{ person: action.payload }]
})


export { actions, reducer }