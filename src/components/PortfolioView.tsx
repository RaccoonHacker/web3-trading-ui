import { motion } from 'motion/react';
import { 
  TrendingUp, 
  PieChart as PieIcon, 
  Bolt, 
  History, 
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  ArrowLeftRight,
  Coins
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { cn } from '../lib/utils';
import { CHART_DATA, ALLOCATION_DATA, MOCK_TOKENS, MOCK_ACTIVITY } from '../constants';

export default function PortfolioView() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <span className="text-slate-500 font-headline text-sm uppercase tracking-[0.3em] mb-2 block">Net Worth Overview</span>
          <div className="flex items-baseline gap-4">
            <h1 className="text-6xl font-headline font-bold tracking-tighter text-white">
              $142,840.<span className="text-3xl text-slate-500">52</span>
            </h1>
            <span className="text-tertiary font-headline font-bold flex items-center gap-1 mb-1">
              <TrendingUp size={16} />
              +12.4%
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          {['1D', '1W', '1M', '1Y', 'ALL'].map((range) => (
            <button 
              key={range}
              className={`px-4 py-2 rounded text-xs font-headline font-bold transition-colors ${
                range === '1M' 
                  ? 'bg-primary/20 border border-primary/30 text-primary' 
                  : 'bg-surface-container-high text-slate-500 hover:text-primary'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid Row 1 */}
      <div className="grid grid-cols-12 gap-6">
        {/* Main Chart */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8">
            <span className="text-slate-500 text-[10px] uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Live Sync Active
            </span>
          </div>
          <div className="h-[300px] w-full pt-12">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={CHART_DATA}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#99f7ff" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#99f7ff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1c2024', border: '1px solid #45484c', borderRadius: '8px' }}
                  itemStyle={{ color: '#99f7ff' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#99f7ff" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Allocation Donut */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <h3 className="font-headline text-sm font-bold uppercase tracking-widest text-white">Allocation</h3>
            <PieIcon className="text-slate-500" size={20} />
          </div>
          <div className="relative h-48 mx-auto my-6 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={ALLOCATION_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {ALLOCATION_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-headline font-bold text-white">5</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-tighter">Assets</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {ALLOCATION_DATA.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-xs text-slate-500">{item.name} {item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Yield Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-high rounded-xl p-6 border-l-2 border-primary/40 glass-panel">
          <span className="text-slate-500 text-[10px] uppercase tracking-widest block mb-1">Estimated APY</span>
          <div className="text-3xl font-headline font-bold text-primary">8.42%</div>
          <div className="mt-4 text-xs text-slate-500 flex items-center gap-1">
            <Bolt size={14} className="text-tertiary" />
            Optimized via Kinetic Protocol
          </div>
        </div>
        <div className="bg-surface-container-high rounded-xl p-6 border-l-2 border-secondary/40 glass-panel">
          <span className="text-slate-500 text-[10px] uppercase tracking-widest block mb-1">Total Yield Earned</span>
          <div className="text-3xl font-headline font-bold text-secondary">$1,245.80</div>
          <div className="mt-4 text-xs text-slate-500 flex items-center gap-1">
            <History size={14} className="text-secondary" />
            Last 30 days
          </div>
        </div>
        <div className="bg-surface-container-high rounded-xl p-6 border-l-2 border-tertiary/40 glass-panel">
          <span className="text-slate-500 text-[10px] uppercase tracking-widest block mb-1">Pending Rewards</span>
          <div className="text-3xl font-headline font-bold text-tertiary">$84.12</div>
          <div className="mt-4 flex gap-2">
            <button className="flex-1 py-1 rounded bg-tertiary/10 text-tertiary font-headline font-bold text-[10px] uppercase tracking-widest hover:bg-tertiary/20 transition-all">
              Claim Now
            </button>
          </div>
        </div>
      </div>

      {/* Asset Portfolio & Activity */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-8 bg-surface-container-low rounded-xl overflow-hidden">
          <div className="p-6 border-b border-white/5 flex justify-between items-center">
            <h3 className="font-headline font-bold uppercase tracking-widest text-white">Asset Portfolio</h3>
            <button className="text-primary text-xs font-bold font-headline uppercase tracking-widest flex items-center gap-2 hover:opacity-80">
              View All <ChevronRight size={14} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-slate-500 text-[10px] uppercase tracking-widest border-b border-white/5">
                  <th className="px-6 py-4 font-medium">Token</th>
                  <th className="px-6 py-4 font-medium text-right">Balance</th>
                  <th className="px-6 py-4 font-medium text-right">Price</th>
                  <th className="px-6 py-4 font-medium text-right">Value</th>
                  <th className="px-6 py-4 font-medium text-right">24h Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {MOCK_TOKENS.map((token) => (
                  <tr key={token.symbol} className="hover:bg-surface-container-high transition-all group">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center overflow-hidden">
                          <img src={token.icon} alt={token.symbol} className="w-5 h-5 object-contain" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-white">{token.name}</div>
                          <div className="text-[10px] text-slate-500">{token.symbol}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right font-headline font-medium text-sm">{token.balance.toFixed(4)}</td>
                    <td className="px-6 py-5 text-right font-headline font-medium text-sm text-slate-500">${token.price.toLocaleString()}</td>
                    <td className="px-6 py-5 text-right font-headline font-bold text-sm text-white">${(token.balance * token.price).toLocaleString()}</td>
                    <td className="px-6 py-5 text-right">
                      <span className={`text-xs font-bold ${token.change24h >= 0 ? 'text-tertiary' : 'text-error'}`}>
                        {token.change24h >= 0 ? '+' : ''}{token.change24h}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-4 bg-surface-container-low rounded-xl flex flex-col">
          <div className="p-6 border-b border-white/5">
            <h3 className="font-headline font-bold uppercase tracking-widest text-white">Recent Activity</h3>
          </div>
          <div className="flex-1 p-6 space-y-6">
            {MOCK_ACTIVITY.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4">
                <div className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
                  activity.type === 'swap' && "bg-primary/10 text-primary",
                  activity.type === 'deposit' && "bg-tertiary/10 text-tertiary",
                  activity.type === 'reward' && "bg-secondary/10 text-secondary",
                  activity.type === 'withdrawal' && "bg-error/10 text-error",
                )}>
                  {activity.type === 'swap' && <ArrowLeftRight size={20} />}
                  {activity.type === 'deposit' && <ArrowDownRight size={20} />}
                  {activity.type === 'reward' && <Coins size={20} />}
                  {activity.type === 'withdrawal' && <ArrowUpRight size={20} />}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div className="text-sm font-bold text-white">{activity.title}</div>
                    <div className="text-[10px] text-slate-500">{activity.time}</div>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{activity.description}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-4 border-t border-white/5 text-slate-500 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-surface-container-high transition-all">
            Complete History
          </button>
        </div>
      </div>
    </div>
  );
}
