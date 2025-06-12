import React from 'react';
import styles from './IconWithCounter.module.scss';

interface Props {
  icon: string;
  count: number;
  alt?: string;
}

const IconWithCounter: React.FC<Props> = ({ icon, count, alt }) => {
  return (
    <div className={styles.iconWrapper}>
      <img src={icon} alt={alt} className={styles.iconImage} />

      {count > 0 && <div className={styles.iconBadge}>{count}</div>}
    </div>
  );
};

export default IconWithCounter;
