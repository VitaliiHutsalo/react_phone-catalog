import React from 'react';
import styles from './Banner.module.scss';
import banner from '@assets/icons/category-accessories.png';

interface Props {
  title: string;
  img: string;
  description: string;
  alt: string;
  onClick?: () => void;
}

export const Banner: React.FC<Props> = ({
  title = 'Now available | in our store!',
  img = banner,
  description = 'Be the first!',
  alt = 'iPhone 14 Pro',
  onClick = () => {},
}) => {
  const parts = title.split('|');
  const firstLine = parts[0] || '';
  const secondLine = parts[1] || '';

  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <h2 className={styles.bannerTitle}>
          {firstLine}
          {secondLine && (
            <>
              <br />
              {secondLine}
            </>
          )}
          <span className={styles.bannerEmoji}>👌</span>
        </h2>

        {/* Цей блок буде тільки на планшеті і десктопі */}
        <div className={styles.bannerDesktopContent}>
          <p className={styles.bannerText}>{description}</p>
          <button onClick={onClick} className={styles.bannerButton}>
            Order Now
          </button>
        </div>
      </div>

      <div className={styles.bannerImageWrapper}>
        <img className={styles.bannerImage} src={img} alt={alt} />
      </div>
    </div>
  );
};
