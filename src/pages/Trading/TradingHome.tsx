
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Star, 
  TrendingUp, 
  TrendingDown,
  Clock,
  Filter,
  BarChart4,
  Eye
} from 'lucide-react';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const cryptoIndices = [
  { 
    id: 'crypto-index-10', 
    name: 'Crypto 10 Index', 
    value: '12,453.08', 
    change: '+2.3%',
    trend: 'up',
  },
  { 
    id: 'defi-index', 
    name: 'DeFi Index', 
    value: '2,893.45', 
    change: '-1.5%',
    trend: 'down',
  },
  { 
    id: 'metaverse-index', 
    name: 'Metaverse Index', 
    value: '845.12', 
    change: '+4.8%',
    trend: 'up',
  },
  { 
    id: 'web3-index', 
    name: 'Web3 Index', 
    value: '1,238.67', 
    change: '+0.7%',
    trend: 'up',
  },
];

const topCoins = [
  { 
    id: 'btc', 
    name: 'Bitcoin', 
    symbol: 'BTC', 
    price: '₹28,45,230', 
    change: '+5.2%',
    volume: '₹245B',
    trend: 'up',
    chart: '/placeholder.svg'
  },
  { 
    id: 'eth', 
    name: 'Ethereum', 
    symbol: 'ETH', 
    price: '₹1,52,480', 
    change: '+3.1%',
    volume: '₹120B',
    trend: 'up',
    chart: '/placeholder.svg'
  },
  { 
    id: 'bnb', 
    name: 'Binance Coin', 
    symbol: 'BNB', 
    price: '₹24,650', 
    change: '-1.2%',
    volume: '₹32B',
    trend: 'down',
    chart: '/placeholder.svg'
  },
  { 
    id: 'sol', 
    name: 'Solana', 
    symbol: 'SOL', 
    price: '₹7,840', 
    change: '+8.7%',
    volume: '₹18B',
    trend: 'up',
    chart: '/placeholder.svg'
  },
  { 
    id: 'ada', 
    name: 'Cardano', 
    symbol: 'ADA', 
    price: '₹45.32', 
    change: '-0.5%',
    volume: '₹9B',
    trend: 'down',
    chart: '/placeholder.svg'
  },
];

const topGainers = [
  { 
    id: 'arb', 
    name: 'Arbitrum', 
    symbol: 'ARB', 
    price: '₹125.75', 
    change: '+16.8%',
    trend: 'up',
  },
  { 
    id: 'pepe', 
    name: 'Pepe', 
    symbol: 'PEPE', 
    price: '₹0.00045', 
    change: '+12.3%',
    trend: 'up',
  },
  { 
    id: 'matic', 
    name: 'Polygon', 
    symbol: 'MATIC', 
    price: '₹52.40', 
    change: '+9.7%',
    trend: 'up',
  },
];

const topLosers = [
  { 
    id: 'doge', 
    name: 'Dogecoin', 
    symbol: 'DOGE', 
    price: '₹7.25', 
    change: '-8.4%',
    trend: 'down',
  },
  { 
    id: 'shib', 
    name: 'Shiba Inu', 
    symbol: 'SHIB', 
    price: '₹0.00085', 
    change: '-6.3%',
    trend: 'down',
  },
  { 
    id: 'ltc', 
    name: 'Litecoin', 
    symbol: 'LTC', 
    price: '₹8,450', 
    change: '-4.2%',
    trend: 'down',
  },
];

const positions = [
  {
    id: 'pos-1',
    asset: 'ETH-USDT',
    type: 'Long',
    entry: '₹1,45,230',
    current: '₹1,52,480',
    pnl: '+₹7,250 (4.99%)',
    trend: 'up',
  },
  {
    id: 'pos-2',
    asset: 'BTC-USDT',
    type: 'Short',
    entry: '₹29,45,800',
    current: '₹28,45,230',
    pnl: '+₹1,00,570 (3.41%)',
    trend: 'up',
  },
];

const orders = [
  {
    id: 'ord-1',
    asset: 'SOL-USDT',
    type: 'Buy Limit',
    price: '₹7,500',
    amount: '2 SOL',
    total: '₹15,000',
    status: 'Open',
  },
  {
    id: 'ord-2',
    asset: 'ADA-USDT',
    type: 'Sell Limit',
    price: '₹50.00',
    amount: '500 ADA',
    total: '₹25,000',
    status: 'Open',
  },
];

const watchlists = [
  {
    id: 'watchlist-1',
    name: 'My Favorites',
    coins: 8,
    items: [
      { symbol: 'BTC', price: '₹28,45,230', change: '+5.2%', trend: 'up' },
      { symbol: 'ETH', price: '₹1,52,480', change: '+3.1%', trend: 'up' },
      { symbol: 'SOL', price: '₹7,840', change: '+8.7%', trend: 'up' },
    ]
  },
  {
    id: 'watchlist-2',
    name: 'DeFi Tokens',
    coins: 5,
    items: [
      { symbol: 'UNI', price: '₹540', change: '-1.7%', trend: 'down' },
      { symbol: 'AAVE', price: '₹8,200', change: '+2.2%', trend: 'up' },
    ]
  },
];

const TradingHome: React.FC = () => {
  return (
    <div className="min-h-screen pb-16">
      {/* Top Indices */}
      <div className="bg-[#212632] border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto no-scrollbar">
            <div className="flex py-2 space-x-6">
              {cryptoIndices.map(index => (
                <div key={index.id} className="whitespace-nowrap">
                  <div className="flex items-center space-x-3">
                    <span className="text-white">{index.name}</span>
                    <div className="flex items-center">
                      <span className="text-white font-medium">{index.value}</span>
                      <span className={`ml-1 ${index.trend === 'up' ? 'text-crypto-green' : 'text-crypto-red'}`}>
                        {index.change}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Tabs */}
      <div className="bg-[#212632] border-b border-gray-700 sticky top-16 z-40">
        <div className="container mx-auto">
          <div className="flex overflow-x-auto no-scrollbar">
            <Link to="/trading" className="px-4 py-4 border-b-2 border-crypto-orange text-white font-medium whitespace-nowrap">
              Explore
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
            <Link to="/trading/watchlist" className="px-4 py-4 border-b-2 border-transparent text-gray-400 hover:text-white font-medium whitespace-nowrap">
              Watchlist
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content (Left Side) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Top Coins Section */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">Top Coins</h2>
                <Link to="/trading/markets" className="text-sm text-crypto-orange flex items-center">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800/50 text-left">
                    <tr>
                      <th className="px-4 py-3 text-sm font-medium text-gray-400">Name</th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-400">Price</th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-400">24h Change</th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-400">Volume</th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-400">Chart</th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-400"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {topCoins.map(coin => (
                      <tr key={coin.id} className="hover:bg-gray-800/30">
                        <td className="px-4 py-4">
                          <Link to={`/trading/coin/${coin.id}`} className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-700 mr-3 flex items-center justify-center text-xs font-medium">
                              {coin.symbol.slice(0, 2)}
                            </div>
                            <div>
                              <h4 className="font-medium text-white">{coin.name}</h4>
                              <span className="text-xs text-gray-400">{coin.symbol}</span>
                            </div>
                          </Link>
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
                        <td className="px-4 py-4 text-white">{coin.volume}</td>
                        <td className="px-4 py-4">
                          <img src={coin.chart} alt="price chart" className="h-12 w-20" />
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex space-x-2">
                            <button className="px-3 py-1.5 text-xs bg-crypto-green text-white rounded-lg hover:bg-crypto-green/80">
                              Buy
                            </button>
                            <button className="px-3 py-1.5 text-xs bg-crypto-red text-white rounded-lg hover:bg-crypto-red/80">
                              Sell
                            </button>
                            <button className="p-1.5 text-gray-400 hover:text-crypto-orange">
                              <Star className="h-5 w-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* Gainers & Losers Section */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Top Gainers */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-white">Top Gainers</h2>
                    <Link to="/trading/gainers" className="text-sm text-crypto-orange flex items-center">
                      View All <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                  
                  <div className="space-y-3">
                    {topGainers.map(coin => (
                      <Link key={coin.id} to={`/trading/coin/${coin.id}`} className="glass-card rounded-xl p-3 flex items-center justify-between hover:border-crypto-green/50 transition-all duration-200">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gray-700 mr-3 flex items-center justify-center text-xs font-medium">
                            {coin.symbol.slice(0, 2)}
                          </div>
                          <div>
                            <h4 className="font-medium text-white">{coin.name}</h4>
                            <span className="text-xs text-gray-400">{coin.symbol}</span>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-white font-medium">{coin.price}</div>
                          <div className="text-crypto-green text-sm flex items-center justify-end">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            {coin.change}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Top Losers */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-white">Top Losers</h2>
                    <Link to="/trading/losers" className="text-sm text-crypto-orange flex items-center">
                      View All <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                  
                  <div className="space-y-3">
                    {topLosers.map(coin => (
                      <Link key={coin.id} to={`/trading/coin/${coin.id}`} className="glass-card rounded-xl p-3 flex items-center justify-between hover:border-crypto-red/50 transition-all duration-200">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gray-700 mr-3 flex items-center justify-center text-xs font-medium">
                            {coin.symbol.slice(0, 2)}
                          </div>
                          <div>
                            <h4 className="font-medium text-white">{coin.name}</h4>
                            <span className="text-xs text-gray-400">{coin.symbol}</span>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-white font-medium">{coin.price}</div>
                          <div className="text-crypto-red text-sm flex items-center justify-end">
                            <TrendingDown className="h-3 w-3 mr-1" />
                            {coin.change}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            
            {/* Trading Tools */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Trading Tools</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {[
                  { icon: "📊", name: "Advanced Charts" },
                  { icon: "🔔", name: "Price Alerts" },
                  { icon: "⚡", name: "Quick Trade" },
                  { icon: "📱", name: "Mobile Trading" },
                  { icon: "🤖", name: "Trading Bots" },
                ].map((tool, index) => (
                  <div key={index} className="glass-card rounded-xl p-4 text-center hover:border-crypto-orange/50 transition-all">
                    <div className="text-2xl mb-2">{tool.icon}</div>
                    <h3 className="text-sm text-white">{tool.name}</h3>
                  </div>
                ))}
              </div>
            </section>
          </div>
          
          {/* Sidebar (Right Side) */}
          <div className="space-y-6">
            {/* Switch to Investment Mode */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-crypto-orange/20 to-crypto-purple/20 border border-white/10">
              <h3 className="font-semibold text-white mb-2">New to Trading?</h3>
              <p className="text-sm text-gray-300 mb-3">
                Start with simple investments and build your portfolio first.
              </p>
              <Link to="/investment" className="w-full py-2 text-sm bg-crypto-orange text-white rounded-lg hover:bg-crypto-orange/90 block text-center">
                Switch to Investment Mode
              </Link>
            </div>
            
            {/* Open Positions */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white">Open Positions</h3>
                <Link to="/trading/positions" className="text-xs text-crypto-orange">View All</Link>
              </div>
              
              <div className="space-y-3">
                {positions.length > 0 ? (
                  positions.map(position => (
                    <div key={position.id} className="p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className={`px-2 py-0.5 rounded text-xs ${position.type === 'Long' ? 'bg-crypto-green/20 text-crypto-green' : 'bg-crypto-red/20 text-crypto-red'}`}>
                            {position.type}
                          </span>
                          <span className="text-white font-medium ml-2">{position.asset}</span>
                        </div>
                        <button className="text-gray-400 hover:text-crypto-orange p-1">
                          <Eye className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 mt-2 text-xs">
                        <div>
                          <span className="text-gray-400">Entry</span>
                          <p className="text-white">{position.entry}</p>
                        </div>
                        <div>
                          <span className="text-gray-400">Current</span>
                          <p className="text-white">{position.current}</p>
                        </div>
                        <div>
                          <span className="text-gray-400">PnL</span>
                          <p className={position.trend === 'up' ? 'text-crypto-green' : 'text-crypto-red'}>
                            {position.pnl}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-3">
                    <p className="text-gray-400 text-sm">No open positions</p>
                    <Link to="/trading/markets" className="text-xs text-crypto-orange hover:underline">
                      Open a position
                    </Link>
                  </div>
                )}
              </div>
            </div>
            
            {/* Open Orders */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white">Open Orders</h3>
                <Link to="/trading/orders" className="text-xs text-crypto-orange">View All</Link>
              </div>
              
              <div className="space-y-3">
                {orders.length > 0 ? (
                  orders.map(order => (
                    <div key={order.id} className="p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{order.asset}</span>
                        <span className="text-xs px-2 py-0.5 bg-gray-700 rounded text-gray-300">
                          {order.type}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 mt-2 text-xs">
                        <div>
                          <span className="text-gray-400">Price</span>
                          <p className="text-white">{order.price}</p>
                        </div>
                        <div>
                          <span className="text-gray-400">Amount</span>
                          <p className="text-white">{order.amount}</p>
                        </div>
                        <div>
                          <span className="text-gray-400">Total</span>
                          <p className="text-white">{order.total}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-3">
                    <p className="text-gray-400 text-sm">No open orders</p>
                    <Link to="/trading/markets" className="text-xs text-crypto-orange hover:underline">
                      Place an order
                    </Link>
                  </div>
                )}
              </div>
            </div>
            
            {/* Watchlists */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white">Watchlists</h3>
                <Link to="/trading/watchlist" className="text-xs text-crypto-orange">Manage</Link>
              </div>
              
              <div className="space-y-4">
                {watchlists.map(watchlist => (
                  <div key={watchlist.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="text-white font-medium">{watchlist.name}</h4>
                      <span className="text-xs text-gray-400">{watchlist.coins} coins</span>
                    </div>
                    
                    <div className="space-y-2">
                      {watchlist.items.slice(0, 2).map((item, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="text-white">{item.symbol}</span>
                          <div className="text-right">
                            <span className="text-white block">{item.price}</span>
                            <span className={item.trend === 'up' ? 'text-crypto-green' : 'text-crypto-red'}>
                              {item.change}
                            </span>
                          </div>
                        </div>
                      ))}
                      
                      {watchlist.items.length > 2 && (
                        <Link to={`/trading/watchlist/${watchlist.id}`} className="text-xs text-crypto-orange hover:underline">
                          View all {watchlist.coins} coins
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
                
                <button className="w-full py-2 border border-dashed border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-gray-400 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Create New Watchlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingHome;
