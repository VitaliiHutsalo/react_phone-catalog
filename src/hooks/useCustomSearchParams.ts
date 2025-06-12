import { RootState } from 'app/store';
import {
  getSearchWith,
  SearchParams,
} from 'modules/_shared/utils/SearchParamsHelper';
import { useSelector } from 'react-redux';

export const useSearchParamsNavigation = () => {
  const { query, sort, pagination } = useSelector(
    (state: RootState) => state.searchParams,
  );

  const updateSearchParams = (paramsToUpdate: SearchParams) => {
    const hash = window.location.hash;
    const queryIndex = hash.indexOf('?');
    const basePath = hash.slice(1, queryIndex !== -1 ? queryIndex : undefined);
    const currentQuery = queryIndex !== -1 ? hash.slice(queryIndex) : '';

    const currentSearch = new URLSearchParams(currentQuery);
    const newSearch = getSearchWith(currentSearch, paramsToUpdate);

    const newHash = `#${basePath}?${newSearch}`;

    if (window.location.hash !== newHash) {
      window.location.hash = newHash;
    } else {
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    }
  };

  return {
    query,
    sort,
    pagination,
    updateSearchParams,
  };
};
