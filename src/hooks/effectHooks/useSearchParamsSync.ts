import { PaginationPerPage } from '@constants/PaginationPerPage';
import { PaginationParams } from '@models/common/PaginationParamsType';
import { setParams } from 'app/slices/searchParamsSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

export const useSyncSearchParamsWithStore = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const syncParams = () => {
      const hash = window.location.hash;
      const queryStringIndex = hash.indexOf('?');
      const queryString =
        queryStringIndex !== -1 ? hash.substring(queryStringIndex) : '';

      const searchParams = new URLSearchParams(queryString);

      const query = searchParams.get('query') || null;
      const sort = searchParams.get('sort') || null;
      const page = searchParams.get('page') || 1;
      const perPage = searchParams.get('perPage') || PaginationPerPage.All;

      let pagination: PaginationParams | null = null;

      if (page !== null && perPage !== null) {
        pagination = {
          page: +page,
          perPage: perPage as PaginationPerPage,
        };
      }

      dispatch(setParams({ query, sort, pagination }));
    };

    const resetParams = () => {
      dispatch(
        setParams({
          query: null,
          sort: null,
          pagination: null,
        }),
      );
    };

    resetParams();
    syncParams();

    window.addEventListener('hashchange', syncParams);

    return () => {
      window.removeEventListener('hashchange', syncParams);
    };
  }, [dispatch, location.pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.search]);
};
