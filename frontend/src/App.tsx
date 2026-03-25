import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import VaultDashboard from './components/VaultDashboard';
import AppHero from './components/AppHero';
import AnalyticsPage from './components/AnalyticsPage';
import './index.css';

type AppPath = '/' | '/analytics';

const resolvePath = (pathname: string): AppPath => {
  if (pathname === '/analytics') {
    return '/analytics';
  }
  return '/';
};

function App() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState<AppPath>(() => resolvePath(window.location.pathname));

  useEffect(() => {
    const normalizedPath = resolvePath(window.location.pathname);
    if (window.location.pathname !== normalizedPath) {
      window.history.replaceState({}, '', normalizedPath);
    }
    setCurrentPath(normalizedPath);

    const handlePopState = () => {
      const nextPath = resolvePath(window.location.pathname);
      if (window.location.pathname !== nextPath) {
        window.history.replaceState({}, '', nextPath);
      }
      setCurrentPath(nextPath);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleConnect = async (address: string) => {
    setWalletAddress(address);
  };

  const handleDisconnect = () => {
    setWalletAddress(null);
  };

  const handleNavigate = (path: AppPath) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
  };

  return (
    <div className="app-container">
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        walletAddress={walletAddress}
        onConnect={handleConnect}
        onDisconnect={handleDisconnect}
      />
      <main className="container" style={{ marginTop: '100px', paddingBottom: '60px' }}>
        {currentPath === '/' ? (
          <>
            <AppHero />
            <VaultDashboard walletAddress={walletAddress} />
          </>
        ) : (
          <AnalyticsPage />
        )}
      </main>
    </div>
  );
}

export default App;
