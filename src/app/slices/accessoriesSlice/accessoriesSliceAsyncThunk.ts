import { ProductCategories } from '@constants/productsCategories';
import { Product } from '@models/dto/Product';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAccessories = createAsyncThunk(
  'product/accessories',
  async () => {
    const response = await fetch('/api/products.json');

    if (!response.ok) {
      throw new Error(`Failed to fetch accessories`);
    }

    const data = (await response.json()) as Product[];

    const accessories = data.filter(
      item => item.category === ProductCategories.ACCESSORIES,
    );

    return accessories;
  },
);
