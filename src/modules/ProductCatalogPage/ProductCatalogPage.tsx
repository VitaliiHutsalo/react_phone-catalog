import { CatalogList } from 'modules/_shared/components/molecules/CatalogList';
import styles from './ProductCatalogPage.module.scss';
import { Dropdown } from 'modules/_shared/components/atoms/Dropdown';

import cn from 'classnames';
import { PaginationPerPage } from '@constants/PaginationPerPage';

// eslint-disable-next-line max-len
import { useSyncSearchParamsWithStore } from '@hooks/effectHooks/useSearchParamsSync';
import { useEffect, useState } from 'react';

import { Breadcrumbs } from 'modules/_shared/components/molecules/Breadcrumbs';

import { useProducts } from '@hooks/useProducts';
import { PaginationButtons } from './components/PaginationButtons';
import { useSearchParamsNavigation } from '@hooks/useCustomSearchParams';

const sortFiels = {
  Newest: 'age',
  Alphabetically: 'title',
  Cheapest: 'price',
} as const;

export const ProductCatalogPage = () => {
  useSyncSearchParamsWithStore();

  const { data, error, totalLength, isLoading } = useProducts();
  const { pagination, sort, updateSearchParams } = useSearchParamsNavigation();

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(false);

    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    return () => clearTimeout(timeout);
  }, [pagination]);

  const handleSortChange = (key: string) => {
    updateSearchParams({ sort: sortFiels[key as keyof typeof sortFiels] });
  };

  const handlePerPageChange = (key: string) => {
    updateSearchParams({ perPage: key, page: '1' });
  };

  const handlePageChange = (number: number) => {
    updateSearchParams({ page: number.toString() });
  };

  const getPagesCount = () => {
    return pagination?.perPage === 'All'
      ? 1
      : Math.ceil(totalLength / Number(pagination?.perPage));
  };

  return (
    <div className={styles.catalogPage}>
      <Breadcrumbs />
      <div className={styles.catalogPageQuantity}>
        <h1 className={styles.catalogPageQuantityTitle}>{data[0]?.category}</h1>
        <span className={styles.catalogPageQuantityItems}>
          {isLoading ? 'Loading...' : `${totalLength} items`}
        </span>
      </div>

      <div className={styles.catalogPageSort}>
        <div className={cn(styles.catalogPageSortBy, styles.isWide)}>
          <span className={cn('smallText', styles.catalogPageSortByText)}>
            Sort by
          </span>
          <div className={styles.catalogPageSortByButton}>
            <Dropdown
              items={Object.keys(sortFiels)}
              activeItem={
                Object.entries(sortFiels).find(
                  ([, value]) => value === sort,
                )?.[0] || 'Alphabetically'
              }
              onSelect={handleSortChange}
            />
          </div>
        </div>

        <div className={styles.catalogPageSortBy}>
          <span className={cn('smallText', styles.catalogPageSortByText)}>
            Items on page
          </span>
          <div className={styles.catalogPageSortByButton}>
            <Dropdown
              items={Object.values(PaginationPerPage)}
              activeItem={pagination?.perPage}
              onSelect={handlePerPageChange}
            />
          </div>
        </div>
      </div>

      <div
        className={cn(styles.catalogPageList, {
          [styles.slideInLeft]: !isVisible,
          [styles.slideInLeftActive]: isVisible,
        })}
      >
        {isLoading && <div>Loading products...</div>}
        {error && <div>Error loading products: {error}</div>}
        {!isLoading && !error && <CatalogList products={data} />}
      </div>

      {pagination && pagination.perPage !== PaginationPerPage.All && (
        <PaginationButtons
          currentPage={pagination.page}
          totalPages={getPagesCount()}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
