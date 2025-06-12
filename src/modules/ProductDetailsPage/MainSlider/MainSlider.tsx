import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import styles from './MainSlider.module.scss';

interface Props {
  images: string[];
}

export const MainSlider: React.FC<Props> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  if (!images || images.length === 0) {
    return <div>Немає зображень для відображення.</div>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.gallery}>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          breakpoints={{
            0: {
              direction: 'horizontal',
              slidesPerView: 5,
              spaceBetween: 8,
            },
            640: {
              direction: 'vertical',
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          className={styles.thumbs}
        >
          {images.map((url, index) => (
            <SwiperSlide key={url || index}>
              <div className={styles.thumbContainer}>
                <img
                  src={url}
                  alt={`Thumbnail ${index + 1}`}
                  className={styles.thumbImage}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          loop={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
          className={styles.main}
        >
          {images.map((url, index) => (
            <SwiperSlide key={url || index}>
              <img
                src={url}
                alt={`Product View ${index + 1}`}
                className={styles.mainImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
