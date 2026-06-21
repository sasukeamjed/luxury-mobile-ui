import { useEffect, useState } from 'react';
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
import NotificationPermissionPage from './pages/NotificationPermissionPage';
import { requestNotificationPermission } from './utils/notificationPrompt';

type StartupPhase = 'splash' | 'notifications' | null;

export default function App() {
  const location = useLocation();
  const [startupPhase, setStartupPhase] = useState<StartupPhase>(null);

  useEffect(() => {
    if (location.pathname === '/') {
      setStartupPhase('splash');
      return;
    }

    setStartupPhase(null);
  }, [location.pathname, location.key]);

  const finishStartupFlow = () => {
    setStartupPhase(null);
  };

  const advanceFromSplash = () => {
    setStartupPhase('notifications');
  };

  const handleSkipNotifications = () => {
    finishStartupFlow();
  };

  const handleAcceptNotifications = async () => {
    await requestNotificationPermission();
    finishStartupFlow();
  };

  const showStartupOnHome = location.pathname === '/';

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
        <Route path="/notification-permission" element={<NotificationPermissionPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {showStartupOnHome && startupPhase === 'splash' ? (
        <div
          className="fixed inset-0 z-[120] h-[100dvh] w-full"
          onClick={advanceFromSplash}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              advanceFromSplash();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Dismiss startup splash"
        >
          <SplashScreenPage onFinish={advanceFromSplash} autoCloseMs={3000} fill />
        </div>
      ) : null}

      {showStartupOnHome && startupPhase === 'notifications' ? (
        <div className="fixed inset-0 z-[120] h-[100dvh] w-full">
          <NotificationPermissionPage
            onSkip={handleSkipNotifications}
            onAccept={handleAcceptNotifications}
          />
        </div>
      ) : null}
    </>
  );
}
