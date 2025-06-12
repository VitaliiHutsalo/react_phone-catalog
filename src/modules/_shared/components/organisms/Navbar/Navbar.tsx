import React, { useEffect } from 'react';
import styles from './Navbar.module.scss';
import logo from '@assets/icons/Logo.png';
import logoDark from '@assets/icons/LogoDark.png';
import iconFavorite from '@assets/icons/icon-favorite-heart.svg';
import iconFavoriteDark from '@assets/icons/icon-favorite-heart-dark.svg';
import iconBag from '@assets/icons/icon-shopping-bag.svg';
import iconBagDark from '@assets/icons/icon-shopping-bag-dark.svg';
import cn from 'classnames';
import { IconWithCounter } from '../../atoms/Icons/IconWithCounter';
import { Link, NavLink } from 'react-router-dom';
import { RouterEnum } from '@constants/RouterEnum';
import { getNavLinkClass, getIconLinkClass } from '../../../utils/ActiveState';
import { useFavoritesItem } from '@hooks/useFavoritesItem';
import { useCartItems } from '@hooks/useCartStore';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export const Navbar: React.FC<Props> = ({ onClose, isOpen }) => {
  const favorites = useFavoritesItem();
  const cart = useCartItems();
  const { activeTheme } = useSelector((state: RootState) => state.theme);
  const isDark = activeTheme === 'dark';

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <aside className={cn(styles.menu, 'uppercase')} id="menu">
      <div className={styles.container}>
        <div className={styles.menuTop}>
          <Link to="/" className={styles.logoLink}>
            <img
              src={isDark ? logo : logoDark}
              alt="Logo"
              className={styles.logo}
            />
          </Link>

          <div className={styles.headerIcons}>
            <button
              onClick={onClose}
              className={cn(styles.icon, styles.iconClose, {
                [styles.iconCloseDark]: isDark,
              })}
              aria-label="Close Menu"
            />
          </div>
        </div>

        <div className={styles.menuBottom}>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <NavLink
                  to={RouterEnum.HOME}
                  onClick={onClose}
                  className={({ isActive }) =>
                    getNavLinkClass(styles, { isActive })
                  }
                >
                  home
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to={RouterEnum.PHONES}
                  onClick={onClose}
                  className={({ isActive }) =>
                    getNavLinkClass(styles, { isActive })
                  }
                >
                  phones
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to={RouterEnum.TABLETS}
                  onClick={onClose}
                  className={({ isActive }) =>
                    getNavLinkClass(styles, { isActive })
                  }
                >
                  tablets
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to={RouterEnum.ACCESSORIES}
                  onClick={onClose}
                  className={({ isActive }) =>
                    getNavLinkClass(styles, { isActive })
                  }
                >
                  accessories
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.menuIcons}>
          <NavLink
            to={RouterEnum.FAVORITES}
            onClick={onClose}
            className={({ isActive }) => getIconLinkClass(styles, { isActive })}
            aria-label="Go to Favorites"
          >
            <IconWithCounter
              icon={isDark ? iconFavorite : iconFavoriteDark}
              count={favorites.items.length}
              alt="Favorites"
            />
          </NavLink>
          <NavLink
            to={RouterEnum.CART}
            onClick={onClose}
            className={({ isActive }) => getIconLinkClass(styles, { isActive })}
            aria-label="Go to Shopping Bag"
          >
            <IconWithCounter
              icon={isDark ? iconBag : iconBagDark}
              count={cart.cards.length}
              alt="Shopping Bag"
            />
          </NavLink>
        </div>
      </div>
    </aside>
  );
};
