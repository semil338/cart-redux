import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productAPI";

const initialState = {
  products: [],
  status: "idle",
};

export const fetchAsync = createAsyncThunk("product/fetchProduct", async () => {
  const response = await fetchProducts();
  return response.data;
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload.products;
      });
  },
});

// export const {} = productSlice.actions;

export default productSlice.reducer;
