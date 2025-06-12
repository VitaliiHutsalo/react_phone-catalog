import { BackButton } from 'modules/_shared/components/atoms/BackButton';
import styles from './ProductDetailsPage.module.scss';
import cn from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import { Info } from './Info';
import { MainSlider } from './MainSlider';
import { About } from './About';
import { TechSpecs } from './TechSpecs';
import { Recomendation } from './Recomendation';
import { Breadcrumbs } from 'modules/_shared/components/molecules/Breadcrumbs';
import { useGadgetDetails } from './useGadgetDetails';
import { RouterEnum } from '@constants/RouterEnum';
import { DefaultButton } from 'modules/_shared/components/atoms/DefaultButton';
import noProduct from '../../assets/no-product.webp';
import { GadgetCategory } from '@models/common/GadgetCategory';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';

export const ProductDetailsPage = () => {
  const { gadget, errorMessage, product } = useGadgetDetails();
  const navigate = useNavigate();
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);
  const { activeTheme } = useSelector((state: RootState) => state.theme);
  const isDark = activeTheme === 'dark';

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.productDetail}>
      {gadget && product && (
        <>
          <div className={styles.productDetailHead}>
            <Breadcrumbs />

            <div className={styles.productDetailTitle}>
              <BackButton isDark={isDark} click={goBack} />
              <h2>{gadget.name}</h2>
            </div>
          </div>

          <MainSlider images={gadget.images} />

          <Info gadget={gadget} product={product} />

          <About description={gadget.description} />

          <TechSpecs gadget={gadget} />

          <Recomendation gadgetCategory={product.category as GadgetCategory} />
        </>
      )}

      {!isLoading && !gadget && !errorMessage && (
        <div className={styles.productDetailNoProduct}>
          <img
            className={styles.productDetailNoProductImage}
            src={noProduct}
            alt="Product was not found"
          />
          <h2 className={styles.productDetailNoProductText}>
            Our store does not have this product
          </h2>
          <div
            className={cn(styles.productDetailNoProductButton, 'buttonText')}
          >
            <Link to={RouterEnum.HOME} aria-label="Go home">
              <DefaultButton>Go back to shopping</DefaultButton>
            </Link>
          </div>
        </div>
      )}

      {!isLoading && errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};
