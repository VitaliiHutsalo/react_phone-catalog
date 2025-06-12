import React, { ReactNode, useState } from 'react';
import styles from './DefaultButton.module.scss';
import cn from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';
import { CartAnimation } from '../CartAnimation/CartAnimation';

interface Props {
  isSelected?: boolean;
  click?: () => void;
  children: ReactNode;
}

export const DefaultButton: React.FC<Props> = ({
  isSelected = false,
  click,
  children,
}) => {
  const [animateClick, setAnimateClick] = useState(false);

  const handleClick = () => {
    if (isSelected) {
      return;
    }

    setAnimateClick(true);
    click?.();

    setTimeout(() => {
      setAnimateClick(false);
    }, 800);
  };

  return (
    <button
      className={cn('buttonText', styles.defaultButton, {
        [styles.defaultButtonSelected]: isSelected,
      })}
      onClick={handleClick}
      disabled={isSelected}
    >
      <motion.span
        className={styles.text}
        animate={
          animateClick ? { x: '100%', opacity: 0 } : { x: 0, opacity: 1 }
        }
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.span>

      <AnimatePresence>{animateClick && <CartAnimation />}</AnimatePresence>
    </button>
  );
};
