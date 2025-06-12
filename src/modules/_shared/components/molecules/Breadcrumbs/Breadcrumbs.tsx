import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import homeIcon from '@assets/icons/icon-home.svg';
import homeIconDark from '@assets/icons/icon-home-dark.svg';
import arrowIcon from '@assets/icons/icon-arrow-left-grey.svg';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';

const nameMap: Record<string, string> = {
  products: 'Products',
  phones: 'Phones',
  tablets: 'Tablets',
  accessories: 'Accessories',
  favorites: 'Favorites',
  cart: 'Cart',
};

const toCapitalizedWords = (text: string) =>
  text
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);
  const { activeTheme } = useSelector((state: RootState) => state.theme);
  const isDark = activeTheme === 'dark';

  return (
    <div className={styles.breadcrumbs}>
      <Link to="/" className={styles.breadcrumbsLink}>
        <img src={isDark ? homeIcon : homeIconDark} alt="Home" />
      </Link>

      {pathnames.map((segment, index) => {
        const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
        const isLast = index === pathnames.length - 1;

        const displayName =
          nameMap[segment] || toCapitalizedWords(decodeURIComponent(segment));

        return (
          <React.Fragment key={routeTo}>
            <span className={styles.breadcrumbsSeparator}>
              <img src={arrowIcon} alt="arrow" />
            </span>

            {isLast ? (
              <span className={styles.breadcrumbsCurrent}>{displayName}</span>
            ) : (
              <Link to={routeTo} className={styles.breadcrumbsLink}>
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
