import { PaginationParams } from '@models/common/PaginationParamsType';
import { SearchParamsStateType } from '@models/state/searchParamsStateType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: SearchParamsStateType = {
  query: '',
  sort: null,
  pagination: null,
};

export const searchParamsSlice = createSlice({
  name: 'searchParams',
  initialState: initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    setPagination(state, action: PayloadAction<PaginationParams>) {
      state.pagination = action.payload;
    },
    setParams(state, action: PayloadAction<Partial<SearchParamsStateType>>) {
      Object.assign(state, action.payload);
    },
  },
});

export const { setQuery, setSort, setPagination, setParams } =
  searchParamsSlice.actions;
export default searchParamsSlice;
