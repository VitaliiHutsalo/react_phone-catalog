import { Product } from '@models/dto/Product';

export const SortFieldMap: Record<string, keyof Product> = {
  age: 'year',
  title: 'name',
  price: 'price',
};
