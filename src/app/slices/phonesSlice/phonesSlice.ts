import { fetchPhones } from './phonesSliceAsyncThunk';
import { createSlice } from '@reduxjs/toolkit';
import { ProductsStateType } from '@models/state/productsStateType';

const initialState: ProductsStateType = {
  data: [],
  error: null,
};

const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPhones.pending, state => {
        state.error = null;
      })
      .addCase(fetchPhones.rejected, (state, action) => {
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(fetchPhones.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});

export default phonesSlice;
