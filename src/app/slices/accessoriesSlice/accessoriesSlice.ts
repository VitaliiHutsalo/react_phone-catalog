import { createSlice } from '@reduxjs/toolkit';
import { fetchAccessories } from './accessoriesSliceAsyncThunk';
import { ProductsStateType } from '@models/state/productsStateType';

const initialState: ProductsStateType = {
  data: [],
  error: null,
};

const accessoriesSlice = createSlice({
  name: 'accessories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAccessories.pending, state => {
        state.error = null;
      })
      .addCase(fetchAccessories.rejected, (state, action) => {
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(fetchAccessories.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});

export default accessoriesSlice;
