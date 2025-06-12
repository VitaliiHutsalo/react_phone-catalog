import React, { useRef, useState } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Slider.module.scss';

import { ArrowButton } from '../../atoms/ArrowButton';
import { ArrowDirection } from '../../../../../constants/ArrowDirection';
import { Swiper as SwiperType } from 'swiper/types';

const images = [
  '/img/banner-accessories.png',
  '/img/banner-phones.png',
  '/img/banner-tablets.png',
];

export const Slider = () => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleBulletClick = (index: number) => {
    swiperRef.current?.swiper.slideTo(index);
  };

  return (
    <div className={styles.customSlider}>
      <div className={`${styles.arrowButtonWrapper} ${styles.left}`}>
        <ArrowButton direction={ArrowDirection.Left} click={handlePrev} />
      </div>

      <div className={styles.sliderControlsWrapper}>
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          onSlideChange={(swiper: SwiperType) =>
            setActiveIndex(swiper.realIndex)
          }
          className={styles.customSliderSwiper}
        >
          {images.map((src, index) => (
            <SwiperSlide key={src}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className={styles.customSliderImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.customPagination}>
          {images.map((_, index) => (
            <div
              key={index}
              className={`${styles.customPaginationBullet} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => handleBulletClick(index)}
            ></div>
          ))}
        </div>
      </div>

      <div className={`${styles.arrowButtonWrapper} ${styles.right}`}>
        <ArrowButton direction={ArrowDirection.Right} click={handleNext} />
      </div>
    </div>
  );
};
