import React from 'react';
import { motion } from 'framer-motion';
import styles from './CartAnimation.module.scss';

export const CartAnimation: React.FC = () => {
  return (
    <motion.div
      className={styles.linesWrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className={styles.cartIconWrapper}
        initial={{ scale: 0, opacity: 0, x: -20 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        exit={{ scale: 0, opacity: 0, x: -20 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className={`${styles.line} ${styles.line1}`}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          exit={{ scaleY: 0, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div className={styles.cartIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 256 256"
          >
            <g transform="translate(1.41 1.41) scale(2.8 2.9)">
              <circle cx="28.25" cy="75.8" r="6.5" fill="white" />
              <circle cx="68.29" cy="75.8" r="6.5" fill="white" />
              <path
                // eslint-disable-next-line max-len
                d="M19.3 23.4c-1.4 0-2.6-.95-2.9-2.35l-2-8.5A3 3 0 0 1 17.3 9h4.6a3 3 0 0 1 2.9 2.25l1.8 8.15h46.6a3 3 0 0 1 2.9 3.75l-5.8 25A3 3 0 0 1 67.6 50H28.4l.9 4h39a3 3 0 0 1 0 6H31.5a3 3 0 0 1-2.9-2.25l-2.9-12.8a3 3 0 0 1 2.9-3.75h37.2l4.6-20H22.2l-.6-2.65a3 3 0 0 0-2.9-2.3z"
                fill="white"
              />
            </g>
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
