import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { RouterEnum } from './constants/RouterEnum';
// import { useEffect } from 'react';
import { ProductCatalogPage } from 'modules/ProductCatalogPage';
import { ProductDetailsPage } from 'modules/ProductDetailsPage';
import { NotFoundPage } from 'modules/NotFoundPage';
import { ShopingCartPage } from 'modules/ShoppingCartPage';
import { HomePage } from 'modules/HomePage/HomePage';
import { FavouritePage } from 'modules/FavoritesProductsPage';
import { DeveloperPage } from 'modules/DevelopersPage';

export const Root = () => {
  // useEffect(() => {
  //   if (!window.location.hash) {
  //     window.location.replace('/#/');
  //   }
  // }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path={RouterEnum.HOME} element={<App />}>
          <Route index element={<HomePage />} />
          <Route
            path="/home"
            element={<Navigate to={RouterEnum.HOME} replace={true} />}
          />

          <Route path={RouterEnum.PHONES}>
            <Route index element={<ProductCatalogPage />} />
            <Route path=":productId" element={<ProductDetailsPage />} />
          </Route>

          <Route path={RouterEnum.TABLETS}>
            <Route index element={<ProductCatalogPage />} />
            <Route path=":productId" element={<ProductDetailsPage />} />
          </Route>

          <Route path={RouterEnum.ACCESSORIES}>
            <Route index element={<ProductCatalogPage />} />
            <Route path=":productId" element={<ProductDetailsPage />} />
          </Route>

          <Route path={RouterEnum.FAVORITES} element={<FavouritePage />} />
          <Route path={RouterEnum.CART} element={<ShopingCartPage />} />

          <Route path={RouterEnum.CONTACTS} element={<DeveloperPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
