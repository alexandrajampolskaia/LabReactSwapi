import { createAction, createReducer } from "@reduxjs/toolkit";

//add to cart, remove from cart
const addToCart = createAction("add to cart");
const removeFromCart = createAction("remove to cart");

const actions = { addToCart, removeFromCart };

const initialState = [];

const reducer = createReducer(initialState, {
  [addToCart]: (state, action) => {
    let found = state.find(
      (cartItem) => cartItem.person.name === action.payload.name
    );
    if (found) {
      return state.map((cartItem) => {
        if (cartItem.person.name === action.payload.name) {
          return { ...cartItem };
        } else {
          return cartItem;
        }
      });
    } else {
      return [...state, { person: action.payload }];
    }
  },

  [removeFromCart]: (state, action) => (
	  state.filter(cartItem => cartItem.person.name !== action.payload)
  )
});

export { actions, reducer };
