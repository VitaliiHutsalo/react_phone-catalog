import { ProductCategories } from '@constants/productsCategories';
import { Product } from '@models/dto/Product';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPhones = createAsyncThunk('products/phones', async () => {
  const url = '/api/products.json';
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch from ${url}`);
  }

  const data = (await response.json()) as Product[];

  const phones = data.filter(
    item => item.category === ProductCategories.PHONES,
  );

  return phones;
});
