import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import styles from './ShopByCategory.module.scss';
import { Link } from 'react-router-dom';
import { hideLoader, showLoader } from 'app/slices/loaderSlice';

interface CategoriesData {
  title: string;
  count: string;
  img: string;
  alt: string;
  modifier: string;
  link: string;
}

export const ShopByCategory = () => {
  const [categories, setCategories] = useState<CategoriesData[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        dispatch(showLoader());
        const response = await fetch('/api/category.json');
        const data = await response.json();

        setCategories(data);
      } finally {
        dispatch(hideLoader());
      }
    };

    fetchCategories();
  }, [dispatch]);

  return (
    <section className={styles.shopByCategory}>
      <h2 className={styles.shopByCategoryTitle}>Shop by category</h2>

      <div className={styles.shopByCategoryContainer}>
        {categories.map(category => (
          <Link
            key={category.title}
            to={category.link}
            className={cn(styles.category, styles[category.modifier])}
          >
            <div className={styles.categoryImageWrapper}>
              <img
                className={styles.categoryImage}
                src={category.img}
                alt={category.alt}
              />
            </div>

            <div className={styles.categoryContent}>
              <h4 className={styles.categoryTitle}>{category.title}</h4>
              <p className={styles.categoryCount}>{category.count}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
