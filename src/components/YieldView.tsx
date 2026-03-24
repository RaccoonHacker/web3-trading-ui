import { 
  Zap, 
  Shield, 
  Droplets, 
  ChevronRight, 
  Info,
  Calculator,
  ArrowUpRight
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function YieldView() {
  const pools = [
    { name: 'KNT-USDT LP', tvl: '$12.4M', apr: '42.5%', risk: 'Medium', icon: '⚡' },
    { name: 'SOL-KNT LP', tvl: '$8.2M', apr: '28.1%', risk: 'Low', icon: '☀️' },
    { name: 'ETH-KNT LP', tvl: '$15.1M', apr: '18.4%', risk: 'Low', icon: '💎' },
    { name: 'USDC-KNT LP', tvl: '$24.8M', apr: '12.2%', risk: 'Safe', icon: '💵' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <span className="text-slate-500 font-headline text-sm uppercase tracking-[0.3em] mb-2 block">Yield Terminal</span>
          <h1 className="text-6xl font-headline font-bold tracking-tighter text-white">
            MAXIMIZE <span className="kinetic-gradient-text">RETURNS</span>
          </h1>
        </div>
        <div className="flex gap-4">
          <div className="text-right">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest block">Total Value Locked</span>
            <span className="text-2xl font-headline font-bold text-white">$1.24B</span>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-right">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest block">24h Volume</span>
            <span className="text-2xl font-headline font-bold text-primary">$84.2M</span>
          </div>
        </div>
      </div>

      {/* Yield Overview */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <Zap className="text-primary/20 group-hover:text-primary/40 transition-colors" size={80} />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-headline font-bold mb-4">Active Stakes</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">KNT</div>
                    <div>
                      <div className="text-sm font-bold">Kinetic Governance</div>
                      <div className="text-[10px] text-slate-500">12,400.00 KNT</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-tertiary">+12.4% APR</div>
                    <div className="text-[10px] text-slate-500">Locked 12d</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-bold">SOL</div>
                    <div>
                      <div className="text-sm font-bold">Solana Validator</div>
                      <div className="text-[10px] text-slate-500">45.00 SOL</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-tertiary">+7.2% APR</div>
                    <div className="text-[10px] text-slate-500">Liquid</div>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 py-3 rounded-lg border border-primary/20 text-primary font-headline font-bold text-xs uppercase tracking-widest hover:bg-primary/10 transition-all">
                Manage All Stakes
              </button>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl border-secondary/20">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-headline font-bold">Yield Calculator</h3>
              <Calculator className="text-secondary" size={24} />
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] text-slate-500 font-bold uppercase">Staking Amount</label>
                <div className="relative flex items-center">
                  <input className="w-full bg-surface-container-low border-none text-sm font-mono p-3 rounded-lg text-white" type="text" defaultValue="10,000" />
                  <span className="absolute right-3 text-[10px] text-slate-500">KNT</span>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-slate-500 font-bold uppercase">Lock Period</label>
                <div className="grid grid-cols-4 gap-2">
                  {['1M', '3M', '6M', '1Y'].map((p) => (
                    <button key={p} className={cn("py-2 rounded text-[10px] font-bold border transition-all", p === '1Y' ? "bg-secondary/20 border-secondary text-secondary" : "bg-surface-container-low border-white/5 text-slate-500")}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-slate-500">Estimated Return</span>
                  <span className="text-lg font-headline font-bold text-white">1,240 KNT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500">Bonus Multiplier</span>
                  <span className="text-xs font-bold text-secondary">x1.42</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 glass-panel p-8 rounded-2xl bg-primary/5 border-primary/20 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-primary text-on-primary-fixed text-[10px] font-bold uppercase tracking-widest mb-4">
              Featured Pool
            </div>
            <h3 className="text-3xl font-headline font-black mb-2">KNT-SOL <br /> SUPERCHARGED</h3>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">Earn triple rewards including KNT, SOL, and ecosystem points by providing liquidity to our most active pair.</p>
            <div className="space-y-3 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Current APR</span>
                <span className="text-tertiary font-bold">124.5%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Total Liquidity</span>
                <span className="text-white font-bold">$4.2M</span>
              </div>
            </div>
          </div>
          <button className="w-full py-4 rounded-lg kinetic-gradient text-on-primary-fixed font-headline font-black uppercase tracking-[0.2em] shadow-lg active:scale-95 transition-all">
            Deposit Now
          </button>
        </div>
      </div>

      {/* Ecosystem Pools */}
      <div className="bg-surface-container-low rounded-xl overflow-hidden">
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
          <h3 className="font-headline font-bold uppercase tracking-widest text-white">Ecosystem Pools</h3>
          <div className="flex gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search pools..." 
                className="bg-surface-container-high border-none rounded-lg pl-9 pr-4 py-2 text-xs text-white focus:ring-1 focus:ring-primary w-64"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                <Info size={14} />
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-500 text-[10px] uppercase tracking-widest border-b border-white/5">
                <th className="px-6 py-4 font-medium">Pool Name</th>
                <th className="px-6 py-4 font-medium text-right">TVL</th>
                <th className="px-6 py-4 font-medium text-right">APR</th>
                <th className="px-6 py-4 font-medium text-right">Risk Score</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {pools.map((pool) => (
                <tr key={pool.name} className="hover:bg-surface-container-high transition-all group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xl">
                        {pool.icon}
                      </div>
                      <div className="font-bold text-sm text-white">{pool.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right font-headline font-medium text-sm text-slate-300">{pool.tvl}</td>
                  <td className="px-6 py-5 text-right font-headline font-bold text-sm text-tertiary">{pool.apr}</td>
                  <td className="px-6 py-5 text-right">
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded",
                      pool.risk === 'Safe' && "bg-tertiary/10 text-tertiary",
                      pool.risk === 'Low' && "bg-primary/10 text-primary",
                      pool.risk === 'Medium' && "bg-secondary/10 text-secondary",
                    )}>
                      {pool.risk}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-primary hover:text-white transition-colors">
                      <ArrowUpRight size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
