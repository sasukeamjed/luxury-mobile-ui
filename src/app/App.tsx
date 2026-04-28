import { Navigate, Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import SplashScreenPage from './pages/SplashScreenPage';
import CategoriesPage from './pages/CategoriesPage.tsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/splash" element={<SplashScreenPage />} />
      <Route path="/splash-light" element={<SplashScreenPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
