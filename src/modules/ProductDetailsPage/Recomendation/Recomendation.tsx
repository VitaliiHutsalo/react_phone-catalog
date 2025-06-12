import React, { useEffect, useState } from 'react';
import styles from './Recomendation.module.scss';
// eslint-disable-next-line max-len
import { SliderForProduct } from 'modules/_shared/components/organisms/SliderForProduct/SliderForProduct';
import { Product } from '@models/dto/Product';
import { useDispatch } from 'react-redux';
import { hideLoader, showLoader } from 'app/slices/loaderSlice';
import { GadgetCategory } from '@models/common/GadgetCategory';

interface Props {
  gadgetCategory: GadgetCategory;
}

export const Recomendation: React.FC<Props> = ({ gadgetCategory }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRecomendation = async () => {
      try {
        dispatch(showLoader());

        const response = await fetch('/api/products.json');
        const data: Product[] = await response.json();

        const randomRecomendation = data.filter(
          product => product.category === gadgetCategory && Math.random() < 0.5,
        );

        setProducts(randomRecomendation);
      } finally {
        dispatch(hideLoader());
      }
    };

    fetchRecomendation();
  }, [dispatch, gadgetCategory]);

  if (!products.length) {
    return null;
  }

  return (
    <div className={styles.recomendation}>
      <SliderForProduct title="You may also like" products={products} />
    </div>
  );
};
