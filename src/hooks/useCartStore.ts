import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';
import { useEffect } from 'react';
import {
  addCart,
  clearCarts,
  decrementQuantity,
  incrementQuantity,
  removeCart,
} from 'app/slices/cartSlice';
import { Product } from '@models/dto/Product';

export const useCartItems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cardItems);

  const isInCart = (productId: number) => {
    return cartItems.some(item => item.id === productId);
  };

  const remove = (id: number) => {
    dispatch(removeCart(id));
  };

  const add = (product: Product) => {
    dispatch(addCart(product));
  };

  const increment = (id: number) => {
    dispatch(incrementQuantity(id));
  };

  const decrement = (id: number) => {
    dispatch(decrementQuantity(id));
  };

  useEffect(() => {
    localStorage.setItem('cardItem', JSON.stringify(cartItems));
  }, [cartItems]);

  return {
    cards: cartItems,
    isInCart,
    addCart: add,
    removeCart: remove,
    incrementQuantity: increment,
    decrementQuantity: decrement,
    clear: () => dispatch(clearCarts()),
  };
};
