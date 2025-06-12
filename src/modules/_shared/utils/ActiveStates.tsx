import cn from 'classnames';
// import styles from '../components/organisms/Header/Header.module.scss';
import styles from '../components/organisms/Navbar/Navbar.module.scss';

export const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(styles.navLink, { [styles.isActive]: isActive });

export const getIconLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(styles.icon, { [styles.isActive]: isActive });
