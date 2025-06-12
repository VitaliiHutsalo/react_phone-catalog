import { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from 'app/slices/loaderSlice/loaderSlice';

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Slider.module.scss';

import { ArrowButton } from '../../../_shared/components/atoms/ArrowButton';
import { ArrowDirection } from '../../../../constants/ArrowDirection';
import { Swiper as SwiperType } from 'swiper/types';
import { Banner } from 'modules/_shared/components/molecules/Banner';

interface BannerData {
  title: string;
  img: string;
  description: string;
  alt: string;
  to: string;
}

export const Slider = () => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [banners, setBanners] = useState<BannerData[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        dispatch(showLoader());

        const response = await fetch('/api/banners.json');
        const data = await response.json();

        setBanners(data);
      } finally {
        dispatch(hideLoader());
      }
    };

    fetchBanners();
  }, [dispatch]);

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
    <div className={styles.sliderComponentWrapper}>
      <div className={styles.sliderRow}>
        <div className={styles.arrowButtonWrapper}>
          <ArrowButton direction={ArrowDirection.Left} click={handlePrev} />
        </div>

        {banners.length > 0 && (
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
            {banners.map((banner, index) => (
              <SwiperSlide key={index}>
                <Banner
                  title={banner.title}
                  img={banner.img}
                  description={banner.description}
                  alt={banner.alt}
                  to={banner.to}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className={styles.arrowButtonWrapper}>
          <ArrowButton direction={ArrowDirection.Right} click={handleNext} />
        </div>
      </div>

      <div className={styles.customPagination}>
        {banners.map((_, index) => (
          <div
            key={index}
            className={`${styles.customPaginationBullet} ${
              activeIndex === index ? styles.active : ''
            }`}
            onClick={() => handleBulletClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
