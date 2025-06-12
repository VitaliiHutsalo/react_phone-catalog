import { ProductCategories } from '@constants/productsCategories';
import { Product } from '@models/dto/Product';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTablets = createAsyncThunk('products/tablets', async () => {
  const url = '/api/products.json';
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch from ${url}`);
  }

  const data = (await response.json()) as Product[];

  const tablets = data.filter(
    item => item.category === ProductCategories.TABLETS,
  );

  return tablets;
});
