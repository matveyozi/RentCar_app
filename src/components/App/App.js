import Layout from 'components/Layout/Layout';
import CatalogPage from 'Pages/CatalogPage/CatalogPage';
import FavoritPage from 'Pages/FavoritPage/FavoritPage';
import HomePage from 'Pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorite" element={<FavoritPage />} />
      </Route>
    </Routes>
  );
}
