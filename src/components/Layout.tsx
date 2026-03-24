import React from 'react';
import { 
  LayoutDashboard, 
  ArrowLeftRight, 
  Coins, 
  BarChart3, 
  HelpCircle, 
  Headphones,
  Bell,
  Settings,
  Wallet
} from 'lucide-react';
import { cn } from '../lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Layout({ children, activeTab, setActiveTab }: LayoutProps) {
  const navItems = [
    { id: 'exchange', icon: ArrowLeftRight, label: 'Exchange' },
    { id: 'earn', icon: Coins, label: 'Earn' },
    { id: 'portfolio', icon: LayoutDashboard, label: 'Portfolio' },
    { id: 'markets', icon: BarChart3, label: 'Markets' },
  ];

  return (
    <div className="min-h-screen bg-background text-slate-100 font-sans selection:bg-primary/30 selection:text-primary">
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 h-16 bg-background/80 backdrop-blur-xl z-50 border-b border-white/5">
        <div className="flex items-center gap-8">
          <span 
            className="text-2xl font-black tracking-tighter kinetic-gradient-text font-headline cursor-pointer"
            onClick={() => setActiveTab('landing')}
          >
            KINETIC
          </span>
          <nav className="hidden md:flex items-center gap-6 font-headline font-bold tracking-tight text-sm">
            <span className="text-primary border-b-2 border-primary pb-1">BTC $64,210</span>
            <span className="text-slate-400 hover:text-slate-100 transition-colors cursor-pointer">ETH $3,450</span>
            <span className="text-slate-400 hover:text-slate-100 transition-colors cursor-pointer">Vol $2.4B</span>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:bg-white/5 rounded-full transition-all">
            <Bell size={20} />
          </button>
          <button className="p-2 text-slate-400 hover:bg-white/5 rounded-full transition-all">
            <Settings size={20} />
          </button>
          <button className="hidden md:block px-4 py-1.5 rounded-lg border border-primary/20 text-slate-100 font-medium hover:bg-primary/10 transition-all text-sm">
            Profile
          </button>
          <button className="kinetic-gradient text-on-primary-fixed px-5 py-1.5 rounded-lg font-bold font-headline active:scale-95 duration-200 ease-out shadow-[0_0_12px_rgba(0,242,255,0.3)] text-sm">
            Connect Wallet
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-20 hover:w-64 transition-all duration-300 group overflow-hidden bg-background border-r border-primary/10 z-40 flex flex-col">
        <div className="flex flex-col py-6 gap-2 flex-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "flex items-center gap-6 px-6 py-4 transition-all duration-200 relative",
                activeTab === item.id 
                  ? "bg-primary/10 text-primary border-l-4 border-primary" 
                  : "text-slate-500 hover:text-slate-200 hover:bg-white/5"
              )}
            >
              <item.icon size={24} className="shrink-0" />
              <span className="font-headline text-sm uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {item.label}
              </span>
            </button>
          ))}
        </div>
        
        <div className="mt-auto border-t border-white/5 py-4">
          <button className="w-full text-slate-500 hover:text-slate-200 flex items-center gap-6 px-6 py-4 transition-all">
            <HelpCircle size={24} className="shrink-0" />
            <span className="font-headline text-sm uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Help
            </span>
          </button>
          <button className="w-full text-slate-500 hover:text-slate-200 flex items-center gap-6 px-6 py-4 transition-all">
            <Headphones size={24} className="shrink-0" />
            <span className="font-headline text-sm uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Support
            </span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={cn(
        "transition-all duration-300 min-h-screen",
        activeTab === 'landing' ? 'pl-0' : 'pl-20 pt-16'
      )}>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-white/5 flex flex-col md:flex-row justify-between items-center px-8 py-6 w-full gap-6 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-headline text-primary text-sm tracking-tighter">KINETIC PROTOCOL</span>
          <span>© 2024 KINETIC PROTOCOL. ALL RIGHTS RESERVED.</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary transition-colors">Discord</a>
          <a href="#" className="hover:text-primary transition-colors">Docs</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-tertiary animate-pulse" />
            System Status: Optimal
          </span>
          <span className="font-headline text-primary">v1.2.4-PRO</span>
        </div>
      </footer>
    </div>
  );
}
