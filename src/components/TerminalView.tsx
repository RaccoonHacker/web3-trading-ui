import { useState } from 'react';
import { 
  BarChart2, 
  Settings, 
  Info, 
  ArrowUpRight, 
  ArrowDownRight,
  ChevronRight,
  Search,
  Filter
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function TerminalView() {
  const [activeTradeTab, setActiveTradeTab] = useState<'buy' | 'sell'>('buy');

  return (
    <div className="flex-1 flex flex-col overflow-hidden h-full">
      <div className="flex-1 grid grid-cols-12 overflow-hidden">
        {/* Order Book */}
        <section className="col-span-2 bg-surface-container-low border-r border-white/5 flex flex-col overflow-hidden">
          <div className="p-3 border-b border-white/5">
            <h3 className="font-headline text-xs uppercase tracking-widest text-slate-500 font-semibold">Order Book</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-1 text-[11px] font-mono">
            <div className="space-y-0.5">
              {[64245.5, 64240.0, 64232.1].map((price, i) => (
                <div key={price} className="flex justify-between px-2 py-0.5 relative group cursor-default">
                  <div 
                    className="absolute inset-0 bg-error/10 origin-right transition-transform" 
                    style={{ width: `${40 + i * 15}%`, left: 'auto', right: 0 }} 
                  />
                  <span className="text-error z-10">{price.toFixed(2)}</span>
                  <span className="text-slate-500 z-10">{(Math.random() * 2).toFixed(4)}</span>
                </div>
              ))}
            </div>
            <div className="my-4 text-center py-1 bg-surface-container text-xs font-bold font-headline border-y border-white/5">
              64,210.00 <span className="text-slate-500 font-normal">Spread: 4.5</span>
            </div>
            <div className="space-y-0.5">
              {[64205.5, 64200.0, 64195.1].map((price, i) => (
                <div key={price} className="flex justify-between px-2 py-0.5 relative group cursor-default">
                  <div 
                    className="absolute inset-0 bg-tertiary/10 origin-left transition-transform" 
                    style={{ width: `${55 + i * 10}%` }} 
                  />
                  <span className="text-tertiary z-10">{price.toFixed(2)}</span>
                  <span className="text-slate-500 z-10">{(Math.random() * 5).toFixed(4)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chart Area */}
        <section className="col-span-7 flex flex-col border-r border-white/5">
          <div className="h-10 bg-surface-container-low flex items-center px-4 gap-6 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="font-headline font-bold text-sm">BTC/USDT</span>
              <span className="text-tertiary text-xs">+2.45%</span>
            </div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-tighter text-slate-500 font-semibold">
              {['1m', '5m', '15m', '1h', '4h', '1D'].map((t) => (
                <span key={t} className={cn("hover:text-white cursor-pointer", t === '1m' && "text-primary border-b border-primary")}>{t}</span>
              ))}
            </div>
            <div className="ml-auto flex items-center gap-2">
              <BarChart2 size={14} className="text-slate-500 cursor-pointer hover:text-white" />
              <Settings size={14} className="text-slate-500 cursor-pointer hover:text-white" />
            </div>
          </div>
          <div className="flex-1 bg-surface relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #99f7ff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            <div className="absolute inset-0 flex flex-col p-8">
              <div className="flex-1 flex items-end gap-1">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "w-2 rounded-t-sm", 
                      i % 3 === 0 ? "bg-error-dim" : "bg-tertiary-dim"
                    )} 
                    style={{ height: `${40 + Math.random() * 50}%` }} 
                  />
                ))}
                <div className="absolute right-0 top-[12%] left-0 border-t border-dashed border-primary/40 flex items-center justify-end">
                  <span className="bg-primary text-on-primary-fixed text-[10px] font-bold px-1 rounded-l">64,210.00</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trade Panel */}
        <section className="col-span-3 bg-surface-container flex flex-col">
          <div className="p-4 flex gap-1 border-b border-white/5">
            <button 
              onClick={() => setActiveTradeTab('buy')}
              className={cn(
                "flex-1 py-2 text-xs font-headline font-bold uppercase tracking-widest rounded transition-all",
                activeTradeTab === 'buy' ? "bg-tertiary text-on-primary-fixed" : "text-slate-500 hover:bg-white/5"
              )}
            >
              Buy
            </button>
            <button 
              onClick={() => setActiveTradeTab('sell')}
              className={cn(
                "flex-1 py-2 text-xs font-headline font-bold uppercase tracking-widest rounded transition-all",
                activeTradeTab === 'sell' ? "bg-error text-white" : "text-slate-500 hover:bg-white/5"
              )}
            >
              Sell
            </button>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold text-slate-500">
              <span className="text-primary">Limit</span>
              <span>Market</span>
              <span>Stop</span>
            </div>
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-[10px] text-slate-500 font-bold uppercase">Price</label>
                <div className="relative flex items-center">
                  <input className="w-full bg-surface-container-lowest border-none text-sm font-mono p-3 focus:ring-1 focus:ring-primary rounded-lg text-white" type="text" defaultValue="64,210.00" />
                  <span className="absolute right-3 text-[10px] text-slate-500">USDT</span>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-slate-500 font-bold uppercase">Amount</label>
                <div className="relative flex items-center">
                  <input className="w-full bg-surface-container-lowest border-none text-sm font-mono p-3 focus:ring-1 focus:ring-primary rounded-lg text-white" placeholder="0.00" type="text" />
                  <span className="absolute right-3 text-[10px] text-slate-500">BTC</span>
                </div>
              </div>
              <div className="flex justify-between px-1">
                {[0, 25, 50, 75, 100].map((v) => (
                  <div key={v} className={cn("w-2.5 h-2.5 rounded-full border", v === 100 ? "bg-primary border-primary" : "bg-surface-container-highest border-white/10")} />
                ))}
              </div>
              <div className="p-3 bg-surface-container-low rounded-lg space-y-2">
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-500">Balance</span>
                  <span>14,520.42 USDT</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-500">Total</span>
                  <span className="text-primary font-bold">0.00 USDT</span>
                </div>
              </div>
              <button className={cn(
                "w-full py-4 text-on-primary-fixed font-headline font-black uppercase tracking-[0.2em] rounded-lg shadow-lg active:scale-[0.98] transition-all",
                activeTradeTab === 'buy' ? "kinetic-gradient" : "bg-error"
              )}>
                {activeTradeTab === 'buy' ? 'Buy BTC' : 'Sell BTC'}
              </button>
            </div>
            <div className="pt-6">
              <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-3">Public Trades</h4>
              <div className="space-y-1 text-[10px] font-mono">
                <div className="flex justify-between">
                  <span className="text-tertiary">64,210.00</span>
                  <span className="text-white">0.021</span>
                  <span className="text-slate-500">14:02:45</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-error">64,209.50</span>
                  <span className="text-white">1.405</span>
                  <span className="text-slate-500">14:02:44</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tertiary">64,211.20</span>
                  <span className="text-white">0.880</span>
                  <span className="text-slate-500">14:02:42</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Positions Area */}
      <section className="h-64 bg-surface-container-lowest border-t border-white/5 flex flex-col overflow-hidden">
        <div className="flex items-center gap-8 px-6 h-10 border-b border-white/5 text-[10px] font-bold uppercase tracking-widest">
          <button className="text-primary border-b-2 border-primary h-full">Open Orders (2)</button>
          <button className="text-slate-500 hover:text-white">Position History</button>
          <button className="text-slate-500 hover:text-white">Trade History</button>
          <button className="text-slate-500 hover:text-white">Asset Balances</button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <table className="w-full text-left text-xs">
            <thead className="sticky top-0 bg-surface-container-lowest text-slate-500 uppercase text-[10px] font-bold">
              <tr>
                <th className="px-6 py-3 border-b border-white/5">Time</th>
                <th className="px-6 py-3 border-b border-white/5">Pair</th>
                <th className="px-6 py-3 border-b border-white/5">Type</th>
                <th className="px-6 py-3 border-b border-white/5">Side</th>
                <th className="px-6 py-3 border-b border-white/5">Price</th>
                <th className="px-6 py-3 border-b border-white/5">Amount</th>
                <th className="px-6 py-3 border-b border-white/5">Filled</th>
                <th className="px-6 py-3 border-b border-white/5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="px-6 py-4 text-slate-500">2024-05-20 14:01:22</td>
                <td className="px-6 py-4 font-bold">BTC/USDT</td>
                <td className="px-6 py-4">Limit</td>
                <td className="px-6 py-4 text-tertiary">Buy</td>
                <td className="px-6 py-4 font-mono">64,150.00</td>
                <td className="px-6 py-4 font-mono">0.2500</td>
                <td className="px-6 py-4">
                  <div className="w-24 h-1.5 bg-surface-variant rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[45%]" />
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-error-dim hover:text-error font-bold uppercase text-[10px] tracking-widest">Cancel</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
