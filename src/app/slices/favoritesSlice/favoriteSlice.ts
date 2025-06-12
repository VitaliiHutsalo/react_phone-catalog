import { Product } from '@models/dto/Product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FavType {
  favorites: Product[];
}

const stored = localStorage.getItem('favorites');
const initialState: FavType = {
  favorites: stored ? (JSON.parse(stored) as Product[]) : [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.favorites.push(action.payload);
    },
    remove: (state, action: PayloadAction<Product>) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload.id,
      );
    },
    set: (state, action: PayloadAction<Product[]>) => {
      state.favorites = action.payload;
    },
  },
});

export const { add, remove, set } = favoritesSlice.actions;
export default favoritesSlice;
