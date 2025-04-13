
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  Plus,
  X,
  Edit,
  TrendingUp,
  TrendingDown,
  Search,
  Filter,
  MoreHorizontal,
  Pencil,
  Trash2,
  Check,
  ChevronDown,
  Info
} from 'lucide-react';

const cryptoList = [
  {
    id: 'btc',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '₹28,45,230',
    change: '+5.2%',
    marketCap: '₹5.4T',
    volume: '₹3.2B',
    trend: 'up',
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'eth',
    name: 'Ethereum',
    symbol: 'ETH',
    price: '₹1,52,480',
    change: '+3.1%',
    marketCap: '₹1.8T',
    volume: '₹1.5B',
    trend: 'up',
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'bnb',
    name: 'Binance Coin',
    symbol: 'BNB',
    price: '₹24,650',
    change: '-1.2%',
    marketCap: '₹403B',
    volume: '₹452M',
    trend: 'down',
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'sol',
    name: 'Solana',
    symbol: 'SOL',
    price: '₹7,840',
    change: '+8.7%',
    marketCap: '₹285B',
    volume: '₹350M',
    trend: 'up',
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'ada',
    name: 'Cardano',
    symbol: 'ADA',
    price: '₹45.32',
    change: '-0.5%',
    marketCap: '₹152B',
    volume: '₹95M',
    trend: 'down',
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'xrp',
    name: 'XRP',
    symbol: 'XRP',
    price: '₹38.75',
    change: '+1.3%',
    marketCap: '₹185B',
    volume: '₹127M',
    trend: 'up',
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'dot',
    name: 'Polkadot',
    symbol: 'DOT',
    price: '₹1,240',
    change: '+2.3%',
    marketCap: '₹142B',
    volume: '₹85M',
    trend: 'up',
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'doge',
    name: 'Dogecoin',
    symbol: 'DOGE',
    price: '₹7.25',
    change: '-3.1%',
    marketCap: '₹95B',
    volume: '₹48M',
    trend: 'down',
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'shib',
    name: 'Shiba Inu',
    symbol: 'SHIB',
    price: '₹0.0018',
    change: '+12.5%',
    marketCap: '₹72B',
    volume: '₹53M',
    trend: 'up',
    imageUrl: '/placeholder.svg'
  }
];

interface Watchlist {
  id: string;
  name: string;
  coins: string[];
  isDefault?: boolean;
}

const initialWatchlists: Watchlist[] = [
  {
    id: 'default',
    name: 'Default Watchlist',
    coins: ['btc', 'eth', 'bnb', 'sol'],
    isDefault: true
  },
  {
    id: 'defi',
    name: 'DeFi Coins',
    coins: ['eth', 'uni', 'aave', 'cake', 'link']
  },
  {
    id: 'metaverse',
    name: 'Metaverse & NFT',
    coins: ['mana', 'sand', 'axs', 'enj', 'flow']
  }
];

const Watchlist: React.FC = () => {
  const [activeWatchlist, setActiveWatchlist] = useState('default');
  const [watchlists, setWatchlists] = useState<Watchlist[]>(initialWatchlists);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddWatchlistModal, setShowAddWatchlistModal] = useState(false);
  const [newWatchlistName, setNewWatchlistName] = useState('');
  const [showAddCoinModal, setShowAddCoinModal] = useState(false);
  const [editingWatchlist, setEditingWatchlist] = useState<Watchlist | null>(null);
  const [sortField, setSortField] = useState('marketCap');
  const [sortDirection, setSortDirection] = useState('desc');

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const getCurrentWatchlist = () => {
    return watchlists.find(w => w.id === activeWatchlist) || watchlists[0];
  };

  const getWatchlistCoins = () => {
    const currentWatchlist = getCurrentWatchlist();
    return cryptoList.filter(coin => currentWatchlist.coins.includes(coin.id));
  };

  const createWatchlist = () => {
    if (newWatchlistName.trim() === '') return;
    
    const newId = `watchlist-${Date.now()}`;
    const newWatchlist: Watchlist = {
      id: newId,
      name: newWatchlistName,
      coins: []
    };
    
    setWatchlists([...watchlists, newWatchlist]);
    setActiveWatchlist(newId);
    setNewWatchlistName('');
    setShowAddWatchlistModal(false);
  };

  const updateWatchlist = () => {
    if (!editingWatchlist || editingWatchlist.name.trim() === '') return;
    
    setWatchlists(watchlists.map(w => 
      w.id === editingWatchlist.id ? editingWatchlist : w
    ));
    setEditingWatchlist(null);
  };

  const deleteWatchlist = (id: string) => {
    if (id === 'default') return; // Don't delete default watchlist
    
    setWatchlists(watchlists.filter(w => w.id !== id));
    
    if (activeWatchlist === id) {
      setActiveWatchlist('default');
    }
  };

  const addCoinToWatchlist = (coinId: string) => {
    setWatchlists(watchlists.map(w => 
      w.id === activeWatchlist 
        ? { ...w, coins: [...new Set([...w.coins, coinId])] }
        : w
    ));
  };

  const removeCoinFromWatchlist = (coinId: string) => {
    setWatchlists(watchlists.map(w => 
      w.id === activeWatchlist 
        ? { ...w, coins: w.coins.filter(id => id !== coinId) }
        : w
    ));
  };

  return (
    <div className="min-h-screen pb-16">
      {/* Navigation Tabs */}
      <div className="bg-[#212632] border-b border-gray-700 sticky top-16 z-40">
        <div className="container mx-auto">
          <div className="flex overflow-x-auto no-scrollbar">
            <Link to="/trading" className="px-4 py-4 border-b-2 border-transparent text-gray-400 hover:text-white font-medium whitespace-nowrap">
              Home
            </Link>
            <Link to="/trading/futures" className="px-4 py-4 border-b-2 border-transparent text-gray-400 hover:text-white font-medium whitespace-nowrap">
              Futures & Options
            </Link>
            <Link to="/trading/positions" className="px-4 py-4 border-b-2 border-transparent text-gray-400 hover:text-white font-medium whitespace-nowrap">
              Positions
            </Link>
            <Link to="/trading/orders" className="px-4 py-4 border-b-2 border-transparent text-gray-400 hover:text-white font-medium whitespace-nowrap">
              Orders
            </Link>
            <Link to="/trading/watchlist" className="px-4 py-4 border-b-2 border-crypto-purple text-white font-medium whitespace-nowrap">
              Watchlist
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar (Left Side) */}
          <div className="space-y-6">
            {/* Watchlist Selector */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white">My Watchlists</h3>
                <button 
                  className="p-1.5 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white"
                  onClick={() => setShowAddWatchlistModal(true)}
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              
              <div className="space-y-2">
                {watchlists.map((watchlist) => (
                  <div 
                    key={watchlist.id}
                    className={`flex justify-between items-center p-2 rounded-lg cursor-pointer ${
                      activeWatchlist === watchlist.id ? 'bg-crypto-purple/20 text-crypto-purple' : 'hover:bg-gray-800/50 text-gray-300'
                    }`}
                    onClick={() => setActiveWatchlist(watchlist.id)}
                  >
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-2" fill={activeWatchlist === watchlist.id ? 'currentColor' : 'none'} />
                      <span>{watchlist.name}</span>
                      <span className="ml-2 text-xs text-gray-500">({watchlist.coins.length})</span>
                    </div>
                    
                    {!watchlist.isDefault && (
                      <div className="flex space-x-1">
                        <button 
                          className="p-1 rounded-full text-gray-400 hover:text-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingWatchlist({ ...watchlist });
                          }}
                        >
                          <Pencil className="h-3.5 w-3.5" />
                        </button>
                        <button 
                          className="p-1 rounded-full text-gray-400 hover:text-crypto-red"
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteWatchlist(watchlist.id);
                          }}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Price Alerts */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white">Price Alerts</h3>
                <button className="p-1.5 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white">
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              
              {[
                { coin: 'Bitcoin', symbol: 'BTC', target: '₹30,00,000', direction: 'above' },
                { coin: 'Ethereum', symbol: 'ETH', target: '₹1,45,000', direction: 'below' }
              ].map((alert, index) => (
                <div key={index} className="flex justify-between items-center p-3 mb-2 bg-gray-800/50 rounded-lg">
                  <div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-700 mr-2 flex items-center justify-center text-xs">
                        {alert.symbol.slice(0, 2)}
                      </div>
                      <div>
                        <h4 className="text-white text-sm">{alert.coin}</h4>
                        <p className="text-xs text-gray-400">{alert.symbol}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm ${alert.direction === 'above' ? 'text-crypto-green' : 'text-crypto-red'}`}>
                      {alert.direction === 'above' ? '≥' : '≤'} {alert.target}
                    </div>
                    <button className="text-xs text-gray-400 hover:text-crypto-red">Remove</button>
                  </div>
                </div>
              ))}
              
              <p className="text-xs text-gray-400 mt-2">
                Get notified when your selected cryptocurrencies reach your target price.
              </p>
            </div>
            
            {/* Market Overview */}
            <div className="glass-card rounded-xl p-5">
              <h3 className="font-semibold text-white mb-4">Market Overview</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Global Market Cap</span>
                  <span className="text-white">₹92.8T</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">24h Volume</span>
                  <span className="text-white">₹4.2T</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">BTC Dominance</span>
                  <span className="text-white">42.5%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Markets</span>
                  <span className="text-white">583</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Active Cryptocurrencies</span>
                  <span className="text-white">10,483</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="text-center">
                  <span className="text-xs text-gray-400">Last updated: 13 Apr, 2025 19:45 IST</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content (Right Side) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Watchlist Header */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-white">{getCurrentWatchlist().name}</h2>
                  <p className="text-gray-400 text-sm">{getWatchlistCoins().length} cryptocurrencies</p>
                </div>
                
                <div className="w-full md:w-auto flex items-center">
                  <div className="relative mr-2 flex-grow md:flex-grow-0 md:w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search coins..."
                      className="w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-800/50 focus:ring-crypto-purple focus:border-crypto-purple"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <button className="p-2 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white">
                    <Filter className="h-5 w-5" />
                  </button>
                  <button 
                    className="p-2 mr-2 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white"
                    onClick={() => setShowAddCoinModal(true)}
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                  <div className="relative">
                    <button className="p-2 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Watchlist Table */}
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800/50 text-left">
                    <tr>
                      <th className="px-4 py-3 text-sm font-medium text-gray-400 w-12"></th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-400 cursor-pointer" onClick={() => handleSort('name')}>
                        Name {sortField === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
                      </th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-400 cursor-pointer" onClick={() => handleSort('price')}>
                        Price {sortField === 'price' && (sortDirection === 'asc' ? '↑' : '↓')}
                      </th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-400 cursor-pointer" onClick={() => handleSort('change')}>
                        24h Change {sortField === 'change' && (sortDirection === 'asc' ? '↑' : '↓')}
                      </th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-400 cursor-pointer" onClick={() => handleSort('marketCap')}>
                        Market Cap {sortField === 'marketCap' && (sortDirection === 'asc' ? '↑' : '↓')}
                      </th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-400 cursor-pointer" onClick={() => handleSort('volume')}>
                        Volume (24h) {sortField === 'volume' && (sortDirection === 'asc' ? '↑' : '↓')}
                      </th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-400"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {getWatchlistCoins().length > 0 ? (
                      getWatchlistCoins()
                        .filter(coin => 
                          coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((coin) => (
                          <tr key={coin.id} className="hover:bg-gray-800/30">
                            <td className="px-4 py-4">
                              <button 
                                className="text-gray-400 hover:text-crypto-red"
                                onClick={() => removeCoinFromWatchlist(coin.id)}
                              >
                                <X className="h-5 w-5" />
                              </button>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-700 mr-3 flex items-center justify-center text-xs">
                                  {coin.symbol.slice(0, 2)}
                                </div>
                                <div>
                                  <h4 className="font-medium text-white">{coin.name}</h4>
                                  <p className="text-xs text-gray-400">{coin.symbol}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-white">{coin.price}</td>
                            <td className={`px-4 py-4 ${coin.trend === 'up' ? 'text-crypto-green' : 'text-crypto-red'}`}>
                              <div className="flex items-center">
                                {coin.trend === 'up' ? (
                                  <TrendingUp className="h-4 w-4 mr-1" />
                                ) : (
                                  <TrendingDown className="h-4 w-4 mr-1" />
                                )}
                                {coin.change}
                              </div>
                            </td>
                            <td className="px-4 py-4 text-white">{coin.marketCap}</td>
                            <td className="px-4 py-4 text-white">{coin.volume}</td>
                            <td className="px-4 py-4">
                              <div className="flex space-x-2">
                                <button className="px-3 py-1.5 text-xs bg-crypto-green text-white rounded-lg hover:bg-crypto-green/90">
                                  Buy
                                </button>
                                <button className="px-3 py-1.5 text-xs bg-crypto-red text-white rounded-lg hover:bg-crypto-red/90">
                                  Sell
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="px-4 py-8 text-center">
                          <p className="text-gray-400">No coins in this watchlist. Add some coins to get started.</p>
                          <button
                            className="mt-4 px-4 py-2 bg-crypto-purple text-white rounded-lg hover:bg-crypto-purple/90"
                            onClick={() => setShowAddCoinModal(true)}
                          >
                            Add Coins
                          </button>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Market Insights */}
            <div className="glass-card rounded-xl p-5">
              <h3 className="font-semibold text-white mb-4">Market Insights</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium">Top Gainers (24h)</h4>
                    <TrendingUp className="h-4 w-4 text-crypto-green" />
                  </div>
                  <div className="space-y-2">
                    {cryptoList
                      .filter(coin => coin.trend === 'up')
                      .sort((a, b) => parseFloat(b.change.replace('%', '')) - parseFloat(a.change.replace('%', '')))
                      .slice(0, 3)
                      .map((coin, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-gray-700 mr-2 flex items-center justify-center text-xs">
                              {coin.symbol.slice(0, 2)}
                            </div>
                            <span className="text-white text-sm">{coin.name}</span>
                          </div>
                          <span className="text-crypto-green">{coin.change}</span>
                        </div>
                      ))}
                  </div>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium">Top Losers (24h)</h4>
                    <TrendingDown className="h-4 w-4 text-crypto-red" />
                  </div>
                  <div className="space-y-2">
                    {cryptoList
                      .filter(coin => coin.trend === 'down')
                      .sort((a, b) => parseFloat(a.change.replace('%', '')) - parseFloat(b.change.replace('%', '')))
                      .slice(0, 3)
                      .map((coin, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-gray-700 mr-2 flex items-center justify-center text-xs">
                              {coin.symbol.slice(0, 2)}
                            </div>
                            <span className="text-white text-sm">{coin.name}</span>
                          </div>
                          <span className="text-crypto-red">{coin.change}</span>
                        </div>
                      ))}
                  </div>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium">Trending</h4>
                    <Info className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="space-y-2">
                    {['Bitcoin', 'Solana', 'Shiba Inu'].map((coin, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-gray-700 mr-2 flex items-center justify-center text-xs">
                            {index + 1}
                          </div>
                          <span className="text-white text-sm">{coin}</span>
                        </div>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-700 text-gray-300">
                          {index === 0 ? '24.5K' : index === 1 ? '18.2K' : '12.7K'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add Watchlist Modal */}
      {showAddWatchlistModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowAddWatchlistModal(false)}></div>
          <div className="glass-card rounded-xl w-full max-w-md z-10 relative">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-semibold text-white">Create New Watchlist</h2>
                <button 
                  className="text-gray-400 hover:text-white"
                  onClick={() => setShowAddWatchlistModal(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm">Watchlist Name</label>
                  <input
                    type="text"
                    placeholder="Enter watchlist name"
                    className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800/50 text-white focus:ring-crypto-purple focus:border-crypto-purple"
                    value={newWatchlistName}
                    onChange={(e) => setNewWatchlistName(e.target.value)}
                  />
                </div>
                
                <div className="flex justify-end space-x-3 mt-6">
                  <button 
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                    onClick={() => setShowAddWatchlistModal(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    className="px-4 py-2 bg-crypto-purple text-white rounded-lg hover:bg-crypto-purple/90"
                    onClick={createWatchlist}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Edit Watchlist Modal */}
      {editingWatchlist && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setEditingWatchlist(null)}></div>
          <div className="glass-card rounded-xl w-full max-w-md z-10 relative">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-semibold text-white">Edit Watchlist</h2>
                <button 
                  className="text-gray-400 hover:text-white"
                  onClick={() => setEditingWatchlist(null)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm">Watchlist Name</label>
                  <input
                    type="text"
                    placeholder="Enter watchlist name"
                    className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800/50 text-white focus:ring-crypto-purple focus:border-crypto-purple"
                    value={editingWatchlist.name}
                    onChange={(e) => setEditingWatchlist({ ...editingWatchlist, name: e.target.value })}
                  />
                </div>
                
                <div className="flex justify-end space-x-3 mt-6">
                  <button 
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                    onClick={() => setEditingWatchlist(null)}
                  >
                    Cancel
                  </button>
                  <button 
                    className="px-4 py-2 bg-crypto-purple text-white rounded-lg hover:bg-crypto-purple/90"
                    onClick={updateWatchlist}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Add Coin Modal */}
      {showAddCoinModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowAddCoinModal(false)}></div>
          <div className="glass-card rounded-xl w-full max-w-2xl z-10 relative">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-white">Add Coins to Watchlist</h2>
                  <p className="text-gray-400 text-sm">Select cryptocurrencies to add to your watchlist</p>
                </div>
                <button 
                  className="text-gray-400 hover:text-white"
                  onClick={() => setShowAddCoinModal(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search coins..."
                  className="w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-800/50 text-white focus:ring-crypto-purple focus:border-crypto-purple"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="max-h-96 overflow-y-auto pr-2">
                <div className="space-y-2">
                  {cryptoList
                    .filter(coin => 
                      (coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())) &&
                      !getCurrentWatchlist().coins.includes(coin.id)
                    )
                    .map((coin) => (
                      <div key={coin.id} className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gray-700 mr-3 flex items-center justify-center text-xs">
                            {coin.symbol.slice(0, 2)}
                          </div>
                          <div>
                            <h4 className="font-medium text-white">{coin.name}</h4>
                            <p className="text-xs text-gray-400">{coin.symbol}</p>
                          </div>
                        </div>
                        <button 
                          className="p-2 rounded-full bg-crypto-purple/20 text-crypto-purple hover:bg-crypto-purple/30"
                          onClick={() => addCoinToWatchlist(coin.id)}
                        >
                          <Plus className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  
                  {cryptoList.filter(coin => 
                    (coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())) &&
                    !getCurrentWatchlist().coins.includes(coin.id)
                  ).length === 0 && (
                    <div className="p-4 text-center">
                      <p className="text-gray-400">No coins found. Try a different search term.</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex justify-end mt-6">
                <button 
                  className="px-4 py-2 bg-crypto-purple text-white rounded-lg hover:bg-crypto-purple/90"
                  onClick={() => setShowAddCoinModal(false)}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Watchlist;
