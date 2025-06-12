import styles from './BackButton.module.scss';
import React from 'react';
import cn from 'classnames';

interface Props {
  isDark?: boolean;
  click?: () => void;
}

export const BackButton: React.FC<Props> = ({ isDark = true, click }) => {
  return (
    <button className={styles.back} onClick={click}>
      <div
        className={cn(styles.backArrow, {
          [styles.backArrowDark]: isDark,
        })}
      ></div>
      <span className={cn('smallText', styles.backText)}>Back</span>
    </button>
  );
};
