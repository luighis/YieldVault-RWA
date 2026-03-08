import { useState } from 'react';
import Navbar from './components/Navbar';
import VaultDashboard from './components/VaultDashboard';
import './index.css';

function App() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const handleConnect = async (address: string) => {
    setWalletAddress(address);
  };

  const handleDisconnect = () => {
    setWalletAddress(null);
  };

  return (
    <div className="app-container">
      <Navbar
        walletAddress={walletAddress}
        onConnect={handleConnect}
        onDisconnect={handleDisconnect}
      />
      <main className="container" style={{ marginTop: '100px', paddingBottom: '60px' }}>
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="tag cyan" style={{ marginBottom: '16px' }}>Stellar RWA Yield</span>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '16px' }}>
            Institutional Yields, <br />
            <span className="text-gradient">Decentralized Access.</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Deposit USDC to earn stable, predictable yield backed by tokenized Sovereign Debt and Real-World Assets.
          </p>
        </header>

        <VaultDashboard walletAddress={walletAddress} />
      </main>
    </div>
  );
}

export default App;
