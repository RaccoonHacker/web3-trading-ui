import { motion } from 'motion/react';
import { ArrowRight, Zap, Shield, Droplets, Terminal } from 'lucide-react';

export default function LandingView({ onEnter }: { onEnter: () => void }) {
  const stats = [
    { label: 'Trading Volume', value: '$42B+' },
    { label: 'Active Wallets', value: '1.2M' },
    { label: 'Execution Speed', value: '0.02s' },
    { label: 'Uptime Record', value: '99.9%' },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              Mainnet V1 Live Now
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-black tracking-tight leading-[0.9] text-white">
              THE FUTURE <br /> OF <span className="kinetic-gradient-text">DECENTRALIZED</span> <br /> TRADING
            </h1>
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
              Experience institutional-grade liquidity and sub-millisecond execution without ever giving up custody of your assets. Kinetic is the apex of Web3 commerce.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={onEnter}
                className="px-8 py-4 rounded-lg kinetic-gradient text-on-primary-fixed font-headline font-bold text-lg hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all active:scale-95"
              >
                Enter Terminal
              </button>
              <button className="px-8 py-4 rounded-lg glass-panel text-white font-headline font-bold text-lg hover:bg-surface-container-highest transition-all active:scale-95 border border-primary/20">
                View Documentation
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="glass-panel p-6 rounded-2xl relative z-10 neon-glow">
              <img 
                src="https://picsum.photos/seed/terminal/800/600" 
                alt="Terminal" 
                className="rounded-xl w-full h-[500px] object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-4 -right-4 px-6 py-4 glass-panel rounded-xl border-secondary/30">
                <span className="block text-xs text-slate-400 font-bold uppercase tracking-tighter">Avg Latency</span>
                <span className="text-2xl font-headline font-black text-secondary">0.02ms</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-white/5 bg-surface-container-low/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="block text-4xl md:text-5xl font-headline font-black text-white mb-2">{stat.value}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-32 px-6 container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-headline font-black mb-4">ENGINEERED FOR EXCELLENCE</h2>
          <p className="text-slate-400">The performance of a CEX with the freedom of a DEX. Kinetic bridges the gap with a custom order-matching engine.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          <div className="md:col-span-2 glass-panel p-8 rounded-2xl flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
            <div className="relative z-10">
              <Zap className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-headline font-bold mb-2">High-Speed Execution</h3>
              <p className="text-slate-400 max-w-md">Execute trades in under 50ms with our proprietary off-chain matching and on-chain settlement engine.</p>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl flex flex-col items-center justify-center text-center border-secondary/20">
            <Shield className="text-secondary mb-6" size={60} />
            <h3 className="text-2xl font-headline font-bold mb-2">Non-Custodial</h3>
            <p className="text-slate-400">Your keys, your coins. Kinetic never touches your private keys. Securely trade directly from your hardware wallet.</p>
          </div>

          <div className="glass-panel p-8 rounded-2xl flex flex-col justify-center">
            <Droplets className="text-tertiary mb-4" size={40} />
            <h3 className="text-2xl font-headline font-bold mb-2">Deep Liquidity</h3>
            <p className="text-slate-400">Aggregated liquidity from top global providers ensures minimal slippage even for large institutional orders.</p>
          </div>

          <div className="md:col-span-2 glass-panel p-8 rounded-2xl flex items-center gap-8 border-primary/10">
            <div className="hidden sm:block w-48 shrink-0">
              <Terminal className="w-full h-auto text-primary/40" size={120} />
            </div>
            <div>
              <h3 className="text-2xl font-headline font-bold mb-2">Institutional-Grade Tools</h3>
              <p className="text-slate-400 mb-4">Advanced order types including TWAP, Iceberg, and Trailing Stops with real-time risk management analytics.</p>
              <button className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Explore Pro Tools <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-5xl relative">
          <div className="absolute inset-0 bg-primary/10 blur-[150px] rounded-full" />
          <div className="glass-panel p-12 md:p-20 rounded-[2rem] text-center border-primary/20 relative z-10 overflow-hidden">
            <h2 className="text-5xl md:text-7xl font-headline font-black mb-6 leading-tight">READY TO TRADE <br /> THE FUTURE?</h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">Connect your wallet today and experience the next generation of decentralized finance. Zero gas fees for the first 48 hours.</p>
            <button 
              onClick={onEnter}
              className="px-12 py-5 rounded-lg kinetic-gradient text-on-primary-fixed font-headline font-black text-xl hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] transition-all active:scale-95"
            >
              Launch Terminal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
