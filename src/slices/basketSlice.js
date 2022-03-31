import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const id = state.items.findIndex(el => el.id === action.payload.id)
      let newBasket = [...state.items]

      if (id >= 0) {
        newBasket.splice(id, 1)
      } else {
        console.log('item is not in the basket');
      }

      state.items = newBasket
      // console.log('state', state)
      // console.log('action.payload', action.payload)
      // state.items = state.items.filter(el => el.id !== action.payload.id)
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
