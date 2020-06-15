import { createAction, createReducer } from "@reduxjs/toolkit";

const addToFaveList = createAction("add to cart");
const removeFromFaveList = createAction("remove to cart");

const actions = { addToFaveList, removeFromFaveList };

const initialState = [];

const reducer = createReducer(initialState, {
  [addToFaveList]: (state, action) => {
    let found = state.find(
      (listItem) => listItem.person.name === action.payload.name
    );
    if (found) {
      return state.map((listItem) => {
        if (listItem.person.name === action.payload.name) {
          return { ...listItem };
        } else {
          return listItem;
        }
      });
    } else {
      return [...state, { person: action.payload }];
    }
  },

  [removeFromFaveList]: (state, action) => (
	  state.filter(listItem => listItem.person.name !== action.payload)
  )
});

export { actions, reducer };
