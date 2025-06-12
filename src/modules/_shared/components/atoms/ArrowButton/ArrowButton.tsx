import React from 'react';
import styles from './ArrowButton.module.scss';
import cn from 'classnames';
import { ArrowDirection } from '@constants/ArrowDirection';

interface Props {
  direction?: ArrowDirection;
  isDisabled?: boolean;
  click?: () => void;
}

export const ArrowButton: React.FC<Props> = ({
  direction = ArrowDirection.Up,
  isDisabled = false,
  click,
}) => {
  return (
    <button
      className={cn(
        styles.arrow,
        styles[`arrow${direction}`],
        styles.arrowButton,
        {
          [styles.arrowDisabled]: isDisabled,
          [styles.arrowButtonDisabled]: isDisabled,
        },
      )}
      disabled={isDisabled}
      onClick={click}
    ></button>
  );
};
