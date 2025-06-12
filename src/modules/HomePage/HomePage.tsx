import styles from './HomePage.module.scss';
import { Slider } from './components/Slider/Slider';
import { ShopByCategory } from './components/ShopByCategory';
import { HotPrices } from './components/HotPrices';
import { BrandNewModels } from './components/NewModels';

export const HomePage = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.visuallyHidden}>Product Catalog</h1>
      <div className={styles.bannerTitle}>
        <h1 className={styles.bannerTitleText}>
          <span className={styles.mobileOnly}>
            Welcome to Nice
            <br />
            Gadgets store!
          </span>
          <span className={styles.desktopOnly}>
            Welcome to Nice Gadgets store!
          </span>
        </h1>
      </div>

      <section className={styles.pageSection}>
        <Slider />
      </section>

      <section className={styles.pageSectionSpecificate}>
        <BrandNewModels />
      </section>

      <section className={styles.pageSection}>
        <ShopByCategory />
      </section>

      <section className={styles.pageSectionSpecificate}>
        <HotPrices />
      </section>
    </div>
  );
};
