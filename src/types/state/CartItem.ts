import { Product } from '../dto/Product';

export interface CartItemType {
  id: number;
  quantity: number;
  product: Product;
}
