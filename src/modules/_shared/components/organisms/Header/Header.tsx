import React, { useState } from 'react';
import logo from '@assets/icons/Logo.png';
import logoDark from '@assets/icons/LogoDark.png';
import iconFavorite from '@assets/icons/icon-favorite-heart.svg';
import iconFavoriteDark from '@assets/icons/icon-favorite-heart-dark.svg';
import iconBag from '@assets/icons/icon-shopping-bag.svg';
import iconBagDark from '@assets/icons/icon-shopping-bag-dark.svg';
import styles from './Header.module.scss';
import cn from 'classnames';
import { Navbar } from '../Navbar/Navbar';
import { IconWithCounter } from '../../atoms/Icons/IconWithCounter';
import { Link, NavLink } from 'react-router-dom';
import { RouterEnum } from '@constants/RouterEnum';
import { getNavLinkClass, getIconLinkClass } from '../../../utils/ActiveState';
import { useFavoritesItem } from '@hooks/useFavoritesItem';
import { useCartItems } from '@hooks/useCartStore';
import { ThemeSwitcher } from '../../atoms/ThemeSwitcher';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';

export const Header: React.FC = () => {
  const favorites = useFavoritesItem();
  const cart = useCartItems();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeTheme } = useSelector((state: RootState) => state.theme);
  const isDark = activeTheme === 'dark';

  return (
    <>
      <header className={cn(styles.header, 'uppercase')}>
        {/* Логотип та Навігація */}
        <div className={styles.headerLeft}>
          <div className={styles.headerLogo}>
            <Link to="/" className={styles.logoLink}>
              <img
                className={styles.navImg}
                src={isDark ? logo : logoDark}
                alt="Logo"
              />
            </Link>
          </div>

          {/* Навігація */}
          <div className={styles.headerNav}>
            <nav className={styles.nav}>
              <ul className={styles.navList}>
                <li>
                  <NavLink
                    to={RouterEnum.HOME}
                    className={({ isActive }) =>
                      getNavLinkClass(styles, { isActive })
                    }
                  >
                    home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={RouterEnum.PHONES}
                    className={({ isActive }) =>
                      getNavLinkClass(styles, { isActive })
                    }
                  >
                    phones
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={RouterEnum.TABLETS}
                    className={({ isActive }) =>
                      getNavLinkClass(styles, { isActive })
                    }
                  >
                    tablets
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={RouterEnum.ACCESSORIES}
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
        </div>

        {/* Іконки та Бургер Меню */}
        <div className={styles.headerIcons}>
          <ThemeSwitcher />
          <NavLink
            to={RouterEnum.FAVORITES}
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
            className={({ isActive }) => getIconLinkClass(styles, { isActive })}
            aria-label="Go to Shopping Bag"
          >
            <IconWithCounter
              icon={isDark ? iconBag : iconBagDark}
              count={cart.cards.length}
              alt="Shopping Bag"
            />
          </NavLink>
          <button
            onClick={() => setIsMenuOpen(true)}
            className={cn(styles.iconBurgerMenu, {
              [styles.iconBurgerMenuDark]: isDark,
            })}
            aria-label="Menu"
          />
        </div>
      </header>

      {isMenuOpen && (
        <Navbar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      )}
    </>
  );
};
