/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import LandingView from './components/LandingView';
import PortfolioView from './components/PortfolioView';
import TerminalView from './components/TerminalView';
import YieldView from './components/YieldView';

export default function App() {
  const [activeTab, setActiveTab] = useState('landing');

  // Simple scroll to top on tab change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'landing':
        return <LandingView onEnter={() => setActiveTab('portfolio')} />;
      case 'portfolio':
        return <PortfolioView />;
      case 'exchange':
        return <TerminalView />;
      case 'earn':
        return <YieldView />;
      case 'markets':
        return (
          <div className="flex items-center justify-center min-h-[60vh] flex-col gap-4">
            <h2 className="text-4xl font-headline font-black text-white">MARKET DATA</h2>
            <p className="text-slate-500 uppercase tracking-widest text-sm">Coming Soon to Mainnet</p>
            <button 
              onClick={() => setActiveTab('portfolio')}
              className="px-6 py-2 rounded border border-primary/20 text-primary font-bold hover:bg-primary/10 transition-all"
            >
              Back to Portfolio
            </button>
          </div>
        );
      default:
        return <PortfolioView />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}

