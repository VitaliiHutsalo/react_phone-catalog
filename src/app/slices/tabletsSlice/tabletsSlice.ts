import { fetchTablets } from './tabletSliceAsyncThunk';
import { createSlice } from '@reduxjs/toolkit';
import { ProductsStateType } from '@models/state/productsStateType';

const initialState: ProductsStateType = {
  data: [],
  error: null,
};

const tabletsSlice = createSlice({
  name: 'tablets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTablets.pending, state => {
        state.error = null;
      })
      .addCase(fetchTablets.rejected, (state, action) => {
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(fetchTablets.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});

export default tabletsSlice;
