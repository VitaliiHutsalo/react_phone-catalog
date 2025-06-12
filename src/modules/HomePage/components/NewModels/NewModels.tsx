import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from 'app/slices/loaderSlice/loaderSlice';
// eslint-disable-next-line max-len
import { SliderForProduct } from '../../../_shared/components/organisms/SliderForProduct/SliderForProduct';
import { Product } from '@models/dto/Product';

export const BrandNewModels = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNewModels = async () => {
      try {
        dispatch(showLoader());
        const response = await fetch('/api/newModel.json');
        const data: Product[] = await response.json();

        const sortedByYear = data.sort((a, b) => b.year - a.year);

        setProducts(sortedByYear);
      } finally {
        dispatch(hideLoader());
      }
    };

    fetchNewModels();
  }, [dispatch]);

  if (!products.length) {
    return null;
  }

  return <SliderForProduct title="Brand New Models" products={products} />;
};
