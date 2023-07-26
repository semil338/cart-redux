import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchItems, addItem, deleteItem, updateItem } from "./cartAPI";

const initialState = {
  items: [],
  status: "idle",
};

export const fetchAsync = createAsyncThunk("cart/fetchItem", async () => {
  const response = await fetchItems();
  return response.data;
});

export const addAsync = createAsyncThunk("cart/addItem", async (item) => {
  const response = await addItem(item);
  console.log(response.data);
  return response.data;
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload.carts;
        console.log(state.items);
      })
      .addCase(addAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items[0].products.push(action.payload);
        console.log(state.items);
      });
  },
});

// export const {} = productSlice.actions;

export default cartSlice.reducer;
