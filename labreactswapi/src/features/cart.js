import { createAction, createReducer } from "@reduxjs/toolkit";

//add to cart, remove from cart
const addToCart = createAction("add to cart");
const removeFromCart = createAction("remove to cart");

const actions = { addToCart, removeFromCart };

const initialState = [
  // {
  // 	person: { name: 'Alex', birth_year: '1988', eye_color: 'blue' },
  // }
];

const reducer = createReducer(initialState, {
  [addToCart]: (state, action) => {
    let found = state.find(
      (cartItem) => cartItem.person.name === action.payload.name
    );
    if (found) {
      // return state.map(cartItem =>
      // 	(cartItem.person.name === action.payload.name) ? {...cartItem } : cartItem )

      return state.map((cartItem) => {
        if (cartItem.person.name === action.payload.name) {
          return { ...cartItem };
        } else {
          return cartItem;
        }
      });
      //if kan även lämnas helt tomt för att funka
    } else {
      return [...state, { person: action.payload }];
    }
  },

  [removeFromCart]: (state, action) => (
	  state.filter(cartItem => cartItem.person.name !== action.payload)
  )

  //   [removeFromCart]: (state, {payload}) => [...state, { todos: state.todos.filter((todo) => todo.id !== payload )}],
});

export { actions, reducer };
