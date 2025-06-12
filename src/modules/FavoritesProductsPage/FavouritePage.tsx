/* eslint-disable prettier/prettier */
/* eslint-disable max-len */

import { CatalogList } from 'modules/_shared/components/molecules/CatalogList';
import styles from './FavoritePage.module.scss';
import { Link } from 'react-router-dom';
import { DefaultButton } from 'modules/_shared/components/atoms/DefaultButton';
import { RouterEnum } from '@constants/RouterEnum';
import noFavourite from '../../assets/shopping-bag.svg';
import cn from 'classnames';
import { Breadcrumbs } from 'modules/_shared/components/molecules/Breadcrumbs';
import { useFavoritesItem } from '@hooks/useFavoritesItem';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';

export const FavouritePage = () => {
  const { items } = useFavoritesItem();
  const { activeTheme } = useSelector((state: RootState) => state.theme);
  const isDark = activeTheme === 'dark';

  return (
    <>
      <div className={styles.favouritePage}>
        <Breadcrumbs />

        <div className={styles.favouritePageQuantity}>
          <h1 className={styles.favouritePageQuantityTitle}>Favourites</h1>
          {items.length !== 0 && (
            <span className={styles.favouritePageQuantityItems}>
              {items.length} items
            </span>
          )}
        </div>
        {items.length ? (
          <div className={styles.favouritePageList}>
            <CatalogList products={items} />
          </div>
        ) : (
          <div className={styles.favouritePageEmpty}>
            <img
              className={cn(styles.favouritePageEmptyImage, {
                [styles.favouritePageEmptyImageDark]: isDark,
              })}
              src={noFavourite}
              alt="Empty Cart"
            />
            <h2>No favourites yet</h2>
            <div className={cn(styles.favouritePageEmptyButton, 'buttonText')}>
              <Link to={RouterEnum.HOME} aria-label="Go home">
                <DefaultButton>Go back to shopping</DefaultButton>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
