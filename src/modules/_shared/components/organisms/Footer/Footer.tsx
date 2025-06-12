import styles from './Footer.module.scss';
import logo from '@assets/icons/Logo.png';
import logoDark from '@assets/icons/LogoDark.png';
import cn from 'classnames';
import { ArrowButton } from '../../atoms/ArrowButton';
import { ArrowDirection } from '@constants/ArrowDirection';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';

export const Footer = () => {
  const { activeTheme } = useSelector((state: RootState) => state.theme);
  const isDark = activeTheme === 'dark';

  const handleBackClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <img
            className={styles.footerLogoIcon}
            src={isDark ? logo : logoDark}
            alt="Logo"
          />
        </div>

        <div className={styles.footerNavContainer}>
          <a
            href="https://github.com/div-ine-Coders/product_catalog"
            target="_blank"
            rel="noopener noreferrer"
            className={cn('uppercase', styles.footerNavContainerLink)}
            aria-label="Visit GitHub page"
          >
            GitHub
          </a>

          <Link
            to="/contacts"
            className={cn('uppercase', styles.footerNavContainerLink)}
            aria-label="Contacts page"
          >
            Contacts
          </Link>

          <a
            href="#"
            className={cn('uppercase', styles.footerNavContainerLink)}
            aria-label="View rights information"
          >
            Rights
          </a>
        </div>

        <div className={styles.footerBackContainer}>
          <span className={cn('smallText', styles.footerBackContainerText)}>
            Back to top
          </span>
          <div
            className={styles.footerBackContainerButton}
            onClick={handleBackClick}
          >
            <ArrowButton direction={ArrowDirection.Up} isDisabled={false} />
          </div>
        </div>
      </div>
    </footer>
  );
};
