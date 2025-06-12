import { toggleTheme } from 'app/slices/themeSlice';
import { RootState } from 'app/store';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import styles from './ThemeSwitcher.module.scss';
import sun from '@assets/icons/icon-sun.svg';
import moon from '@assets/icons/icon-moon.png';

export const ThemeSwitcher = () => {
  const { activeTheme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const isDark = activeTheme === 'dark';

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      aria-label="Toggle theme"
      className={cn(styles.themeSwitcher)}
    >
      <img
        className={styles.themeSwitcherIcon}
        src={isDark ? sun : moon}
        alt="Switch theme"
      />
    </button>
  );
};
