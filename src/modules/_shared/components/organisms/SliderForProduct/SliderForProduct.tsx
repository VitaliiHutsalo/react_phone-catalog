import React, { useCallback, useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperCore } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/navigation';

import { ProductCard } from '../../molecules/ProductCard';
import { Product } from '@models/dto/Product';

import { ArrowButton } from '../../atoms/ArrowButton';
import { ArrowDirection } from '@constants/ArrowDirection';

import styles from './SliderForProduct.module.scss';

interface Props {
  products: Product[];
  title: string;
}

export const SliderForProduct: React.FC<Props> = ({ products, title }) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(products.length === 0);

  const prevButton = `carousel-button-prev-${title.replace(/\s+/g, '-')}`;
  const nextButton = `carousel-button-next-${title.replace(/\s+/g, '-')}`;

  const updateNavStatus = useCallback((swiper: SwiperCore) => {
    if (swiper) {
      setIsPrevDisabled(swiper.isBeginning);
      setIsNextDisabled(swiper.isEnd);
    }
  }, []);

  useEffect(() => {
    if (swiperInstance) {
      updateNavStatus(swiperInstance);
    }
  }, [swiperInstance, updateNavStatus]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselHeader}>
        <h2>{title}</h2>
        <div className={styles.carouselNavButtons}>
          <div className={`${styles.arrowButtonWrapper} ${prevButton}`}>
            <ArrowButton
              direction={ArrowDirection.Left}
              isDisabled={isPrevDisabled}
            />
          </div>

          <div className={`${styles.arrowButtonWrapper} ${nextButton}`}>
            <ArrowButton
              direction={ArrowDirection.Right}
              isDisabled={isNextDisabled}
            />
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={4}
        slidesPerGroup={1}
        loop={false}
        navigation={{
          nextEl: `.${nextButton}`,
          prevEl: `.${prevButton}`,
        }}
        onSwiper={setSwiperInstance}
        onSlideChange={updateNavStatus}
        className={styles.swiperWrapper}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 16,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 16,
          },
          770: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          900: {
            slidesPerView: 3.5,
            spaceBetween: 16,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
        }}
      >
        {products.map(product => (
          <SwiperSlide key={product.id} className={styles.swiperSlide}>
            <div className={styles.imageOverflowWrapper}>
              <ProductCard product={product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
