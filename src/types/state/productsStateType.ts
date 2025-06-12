import { Product } from '@models/dto/Product';

export interface ProductsStateType {
  data: Product[];
  error: string | null;
}
