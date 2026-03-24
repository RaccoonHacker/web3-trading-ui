export interface Token {
  symbol: string;
  name: string;
  balance: number;
  price: number;
  change24h: number;
  icon: string;
}

export interface Activity {
  id: string;
  type: 'swap' | 'deposit' | 'reward' | 'withdrawal';
  title: string;
  description: string;
  time: string;
  status?: 'optimal' | 'warning' | 'error';
}

export const MOCK_TOKENS: Token[] = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    balance: 1.4502,
    price: 64210.00,
    change24h: 2.45,
    icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png'
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    balance: 12.5000,
    price: 3450.00,
    change24h: -0.82,
    icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png'
  },
  {
    symbol: 'SOL',
    name: 'Solana',
    balance: 45.0000,
    price: 145.20,
    change24h: 5.12,
    icon: 'https://cryptologos.cc/logos/solana-sol-logo.png'
  }
];

export const MOCK_ACTIVITY: Activity[] = [
  {
    id: '1',
    type: 'swap',
    title: 'Swap ETH for KNT',
    description: '0.45 ETH → 2,400.00 KNT',
    time: '2m ago'
  },
  {
    id: '2',
    type: 'deposit',
    title: 'Deposit BTC',
    description: '+0.05 BTC ($3,210.50)',
    time: '4h ago'
  },
  {
    id: '3',
    type: 'reward',
    title: 'Staking Reward',
    description: '+12.42 SOL ($1,803.12)',
    time: '1d ago'
  },
  {
    id: '4',
    type: 'withdrawal',
    title: 'Withdrawal ETH',
    description: '-2.00 ETH ($6,900.00)',
    time: '2d ago'
  }
];

export const ALLOCATION_DATA = [
  { name: 'BTC', value: 62, color: '#99f7ff' },
  { name: 'ETH', value: 24, color: '#bf81ff' },
  { name: 'SOL', value: 10, color: '#75ffb2' },
  { name: 'Other', value: 4, color: '#45484c' },
];

export const CHART_DATA = Array.from({ length: 20 }, (_, i) => ({
  name: i,
  value: 100000 + Math.random() * 50000 + i * 2000,
}));
