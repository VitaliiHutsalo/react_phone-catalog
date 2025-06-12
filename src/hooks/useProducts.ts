import { useLocation } from 'react-router-dom';
import { useAppDispatch } from './factoryHooks/useAppDispatch';
import { useEffect, useMemo } from 'react';
import { fetchPhones } from 'app/slices/phonesSlice/phonesSliceAsyncThunk';
import { fetchTablets } from 'app/slices/tabletsSlice/tabletSliceAsyncThunk';
// eslint-disable-next-line max-len
import { fetchAccessories } from 'app/slices/accessoriesSlice/accessoriesSliceAsyncThunk';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';
import { sortAndPaginate } from './factoryHooks/sortAndPagination';
import { SortFieldMap } from '@constants/sortFieldMap';
import { ProductCategories } from '@constants/productsCategories';
import { ProductsStateType } from '@models/state/productsStateType';
import { hideLoader, showLoader } from 'app/slices/loaderSlice';

export const useProducts = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const pagination = useSelector(
    (state: RootState) => state.searchParams.pagination,
  );
  const sort = useSelector((state: RootState) => state.searchParams.sort);
  const category = location.pathname.split('/')[1];

  const isLoading = useSelector((state: RootState) => state.loader.isLoading);
  const setIsLoading = (newLoading: boolean) => {
    if (newLoading) {
      dispatch(showLoader());
    } else {
      dispatch(hideLoader());
    }
  };

  const state: ProductsStateType = useSelector((state: RootState) => {
    switch (category) {
      case ProductCategories.TABLETS:
        return state.tablets;
      case ProductCategories.ACCESSORIES:
        return state.accessories;
      default:
        return state.phones;
    }
  });

  const processedData = useMemo(() => {
    return pagination
      ? sortAndPaginate(state.data, sort, SortFieldMap, pagination)
      : state.data;
  }, [state.data, sort, pagination]);

  useEffect(() => {
    switch (category) {
      case ProductCategories.PHONES:
        dispatch(fetchPhones());
        break;
      case ProductCategories.TABLETS:
        dispatch(fetchTablets());
        break;
      case ProductCategories.ACCESSORIES:
        dispatch(fetchAccessories());
        break;
      default:
        break;
    }
  }, [dispatch, category, sort, pagination]);

  return {
    data: processedData,
    isLoading,
    setIsLoading,
    error: state.error,
    totalLength: state.data.length,
  };
};
