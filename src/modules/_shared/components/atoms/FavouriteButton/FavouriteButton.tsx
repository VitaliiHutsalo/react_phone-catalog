import React from 'react';
import styles from './FavouriteButton.module.scss';
import cn from 'classnames';

interface Props {
  isFavourite: boolean;
  click?: () => void;
}

export const FavouriteButton: React.FC<Props> = ({ isFavourite, click }) => {
  return (
    <button
      className={cn(styles.favouriteButton, {
        [styles.favouriteButtonSelected]: isFavourite,
      })}
      onClick={click}
    ></button>
  );
};
