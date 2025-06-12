import { Product } from '@models/dto/Product';
import { ProductCard } from '../ProductCard';
import styles from './CatalogList.module.scss';
import React from 'react';

interface Props {
  products: Product[];
}

export const CatalogList: React.FC<Props> = ({ products }) => {
  return (
    <div className={styles.CatalogListContainer}>
      {products.map(product => (
        <ProductCard key={product.itemId} product={product} />
      ))}
    </div>
  );
};
