import { useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import SplashScreenPage from './pages/SplashScreenPage';
import CategoriesPage from './pages/CategoriesPage.tsx';
import NotificationsPage from './pages/NotificationsPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import FavoritesPage from './pages/FavoritesPage';

export default function App() {
  const [showStartupSplash, setShowStartupSplash] = useState(true);
  const location = useLocation();
  const shouldShowStartupSplash = showStartupSplash && location.pathname === '/';

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<CreateAccountPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/splash" element={<SplashScreenPage />} />
        <Route path="/splash-light" element={<SplashScreenPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {shouldShowStartupSplash ? (
        <div
          className="fixed inset-0 z-[120]"
          onClick={() => setShowStartupSplash(false)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              setShowStartupSplash(false);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Dismiss startup splash"
        >
          <SplashScreenPage
            onFinish={() => setShowStartupSplash(false)}
            autoCloseMs={10000}
          />
        </div>
      ) : null}
    </>
  );
}
