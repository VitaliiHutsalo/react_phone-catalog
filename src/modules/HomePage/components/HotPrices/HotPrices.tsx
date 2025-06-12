import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from 'app/slices/loaderSlice/loaderSlice';
// eslint-disable-next-line max-len
import { SliderForProduct } from 'modules/_shared/components/organisms/SliderForProduct/SliderForProduct';
import { Product } from '@models/dto/Product';

export const HotPrices = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchHotPrices = async () => {
      try {
        dispatch(showLoader());
        const response = await fetch('/api/hotPrices.json');
        const data: Product[] = await response.json();

        const sortedByDiscount = data.sort(
          (a, b) => b.fullPrice - b.price - (a.fullPrice - a.price),
        );

        setProducts(sortedByDiscount);
      } finally {
        dispatch(hideLoader());
      }
    };

    fetchHotPrices();
  }, [dispatch]);

  if (!products.length) {
    return null;
  }

  return <SliderForProduct title="Hot Prices" products={products} />;
};
