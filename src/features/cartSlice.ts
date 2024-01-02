import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../models/product";

interface cartInitialliser {
  items: Product[];
  totalCount: number;
}

const initialState: cartInitialliser = {
  items: [],
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.totalCount = state.totalCount + 1;
      const matchItem = state.items.findIndex(
        (item: Product) => item.id === action.payload.id
      );
      if (matchItem > -1 && state.items[matchItem]) {
        state.items[matchItem] = {
          ...state.items[matchItem],
          count: (state.items[matchItem].count as number) + 1,
        };
      } else {
        action.payload = { ...action.payload, count: 1 };
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.items.filter((item: Product) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
