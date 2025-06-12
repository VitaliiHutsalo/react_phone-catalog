import { configureStore } from '@reduxjs/toolkit';
import accessoriesSlice from 'app/slices/accessoriesSlice/accessoriesSlice';
import cartSlice from 'app/slices/cartSlice/cartSlice';
import { favoritesSlice } from 'app/slices/favoritesSlice';
import phonesSlice from 'app/slices/phonesSlice/phonesSlice';
import { searchParamsSlice } from 'app/slices/searchParamsSlice';
import tabletsSlice from 'app/slices/tabletsSlice/tabletsSlice';
import loaderReducer from 'app/slices/loaderSlice/loaderSlice';
import themeSlice from 'app/slices/themeSlice/themeSlise';

const store = configureStore({
  reducer: {
    [phonesSlice.name]: phonesSlice.reducer,
    [tabletsSlice.name]: tabletsSlice.reducer,
    [accessoriesSlice.name]: accessoriesSlice.reducer,
    [searchParamsSlice.name]: searchParamsSlice.reducer,
    [favoritesSlice.name]: favoritesSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [themeSlice.name]: themeSlice.reducer,
    loader: loaderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
