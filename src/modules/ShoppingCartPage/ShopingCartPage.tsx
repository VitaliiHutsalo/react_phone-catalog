import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './ShopingCart.module.scss';
import { BackButton } from 'modules/_shared/components/atoms/BackButton';
import { DefaultButton } from 'modules/_shared/components/atoms/DefaultButton';
import { RouterEnum } from '@constants/RouterEnum';
import emptyCart from '../../assets/empty-cart.png';
import { ShopingCartDialog } from './ShopingCartDialog';
import { useCartItems } from '@hooks/useCartStore';
import { CartItem } from 'modules/_shared/components/molecules/CartItem';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';

export const ShopingCartPage = () => {
  const cart = useCartItems();
  const { activeTheme } = useSelector((state: RootState) => state.theme);
  const isDark = activeTheme === 'dark';

  const totalPrice = cart.cards.reduce(
    (acc, item) => acc + item.quantity * item.product.price,
    0,
  );

  const totalItemsInCart = cart.cards.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  return (
    <div className={styles.shopingCart}>
      {cart.cards.length ? (
        <>
          <div className={styles.shopingCartBack}>
            <Link to={'../'} aria-label="Go back">
              <BackButton isDark={isDark} />
            </Link>
            <h1>Cart</h1>
          </div>

          <div className={styles.shopingCartCards}>
            {cart.cards.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onMinus={cart.decrementQuantity}
                onPlus={cart.incrementQuantity}
                onRemoveCartItem={cart.removeCart}
              />
            ))}
          </div>

          <div className={styles.shopingCartConfirm}>
            <div className={styles.shopingCartConfirmInfo}>
              <h2>${totalPrice}</h2>
              <p className={styles.shopingCartConfirmInfoCount}>
                Total for {totalItemsInCart} item
                {totalItemsInCart > 1 ? 's' : ''}
              </p>
            </div>
            <hr />
            <ShopingCartDialog onClear={cart.clear} />
          </div>
        </>
      ) : (
        <div className={styles.shopingCartEmpty}>
          <img
            className={styles.shopingCartEmptyImage}
            src={emptyCart}
            alt="Empty Cart"
          />
          <h2>Your cart is Empty</h2>
          <div className={cn(styles.shopingCartEmptyButton, 'buttonText')}>
            <Link to={RouterEnum.HOME} aria-label="Go home">
              <DefaultButton>Go back to shopping</DefaultButton>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
