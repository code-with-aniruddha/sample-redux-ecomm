import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductInitialState } from "../models/product";

const initialState: ProductInitialState = {
  products: [],
  status: undefined,
};

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const res = await fetch("https://fakestoreapi.com/products", {
    method: "GET",
  });
  return await res.json();
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log(action);
        state.status = "success";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        console.log(action);
        state.status = "failed";
      });
  },
});

export default productSlice.reducer;
