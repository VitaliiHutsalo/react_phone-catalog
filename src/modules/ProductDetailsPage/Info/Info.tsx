import React from 'react';
// eslint-disable-next-line max-len
import { ColorSelectorButton } from 'modules/_shared/components/atoms/ColorSelectorButton';
import { Link } from 'react-router-dom';
import { DefaultButton } from 'modules/_shared/components/atoms/DefaultButton';
// eslint-disable-next-line max-len
import { FavouriteButton } from 'modules/_shared/components/atoms/FavouriteButton';
import cn from 'classnames';
import styles from './Info.module.scss';
import { Color } from '@models/common/Color';
import { useCartItems } from '@hooks/useCartStore';
import { Product } from '@models/dto/Product';
import { useFavoritesItem } from '@hooks/useFavoritesItem';
import { Gadget } from '@models/dto/Gadget';

interface Props {
  gadget: Gadget;
  product: Product;
}

const getGadgetId = (namespaceId: string, capacity: string, color: Color) => {
  return [namespaceId, capacity.toLowerCase(), color].join('-');
};

export const Info: React.FC<Props> = ({ gadget, product }) => {
  const colorsAvailable: Color[] = gadget.colorsAvailable.map(
    color => color.replaceAll(' ', '-') as Color,
  );
  const currentColor = gadget.color.replaceAll(' ', '-') as Color;
  const { isInCart, addCart: add } = useCartItems();
  const { isFavorite, setFavorite } = useFavoritesItem();

  const addToCart = () => {
    add(product);
  };

  const changeFavourite = () => {
    setFavorite(product);
  };

  return (
    <div className={styles.info}>
      <div className={styles.infoBlock}>
        <p className={cn('smallText', styles.infoBlockText)}>
          Available Colors
        </p>
        <div className={styles.infoBlockButtons}>
          {colorsAvailable.map(color => {
            return (
              <Link
                to={`/${product.category}/${getGadgetId(gadget.namespaceId, gadget.capacity, color)}`}
                aria-label={color}
                key={color}
              >
                <ColorSelectorButton
                  color={color}
                  isActive={currentColor === color}
                />
              </Link>
            );
          })}
        </div>
      </div>

      <hr />

      <div className={styles.infoBlock}>
        <p className={cn('smallText', styles.infoBlockText)}>Select Capasity</p>
        <div className={styles.infoBlockButtons}>
          {gadget.capacityAvailable.map(capacity => {
            return (
              <Link
                to={`/${product.category}/${getGadgetId(gadget.namespaceId, capacity, currentColor)}`}
                aria-label={capacity}
                key={capacity}
              >
                <button
                  className={styles.infoBlockButtonsCapacity}
                  disabled={capacity === gadget.capacity}
                >
                  {capacity}
                </button>
              </Link>
            );
          })}
        </div>
      </div>

      <hr />

      <div className={styles.infoBlockControl}>
        <div className={styles.infoPrices}>
          <h2 className={styles.infoCurrent}>${gadget.priceDiscount}</h2>
          <p className={styles.infoPricesFull}>${gadget.priceRegular}</p>
        </div>

        <div className={styles.infoButtons}>
          <div className={styles.infoButtonsDefault}>
            <DefaultButton isSelected={isInCart(product.id)} click={addToCart}>
              {isInCart(product.id) ? 'Added' : 'Add to cart'}
            </DefaultButton>
          </div>
          <div className={styles.infoButtonsFavourite}>
            <FavouriteButton
              isFavourite={isFavorite(product.id)}
              click={changeFavourite}
            />
          </div>
        </div>
      </div>

      <ul className={styles.infoMain}>
        <li className={cn('smallText', styles.infoMainText)}>
          Screen: <span>{gadget.screen}</span>
        </li>
        <li className={cn('smallText', styles.infoMainText)}>
          Resolution: <span>{gadget.resolution}</span>
        </li>
        <li className={cn('smallText', styles.infoMainText)}>
          Processor: <span>{gadget.processor}</span>
        </li>
        <li className={cn('smallText', styles.infoMainText)}>
          RAM: <span>{gadget.ram}</span>
        </li>
      </ul>
    </div>
  );
};
