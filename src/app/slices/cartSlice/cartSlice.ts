import { Product } from '@models/dto/Product';
import { CartItemType } from '@models/state/CartItem';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItemStateType {
  cardItems: CartItemType[];
}

const stored = localStorage.getItem('cardItem');

const initialState: CartItemStateType = {
  cardItems: stored ? (JSON.parse(stored) as CartItemType[]) : [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Product>) => {
      const temp = state.cardItems.find(item => item.id === action.payload.id);

      if (temp) {
        temp.quantity++;

        return;
      }

      state.cardItems.push({
        id: action.payload.id,
        product: action.payload,
        quantity: 1,
      });
    },
    removeCart: (state, action: PayloadAction<number>) => {
      state.cardItems = state.cardItems.filter(
        item => item.id !== action.payload,
      );
    },

    setCarts: (state, action: PayloadAction<CartItemType[]>) => {
      state.cardItems = action.payload;
    },

    clearCarts: state => {
      state.cardItems = [];
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cardItems.find(i => i.id === action.payload);

      if (item) {
        item.quantity++;
      }
    },

    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cardItems.find(i => i.id === action.payload);

      if (item) {
        item.quantity--;
        if (item.quantity <= 0) {
          state.cardItems = state.cardItems.filter(
            i => i.id !== action.payload,
          );
        }
      }
    },
  },
});

export const {
  addCart,
  clearCarts,
  removeCart,
  setCarts,
  decrementQuantity,
  incrementQuantity,
} = cartSlice.actions;
export default cartSlice;
