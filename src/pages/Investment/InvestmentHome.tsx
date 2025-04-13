
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Star, 
  TrendingUp, 
  TrendingDown,
  Clock,
  Filter
} from 'lucide-react';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const indexFunds = [
  { 
    id: 'growdha10', 
    name: 'Growdha 10', 
    description: 'Top 10 cryptocurrencies by market cap', 
    returns: '18.5%',
    trend: 'up',
    allocation: 'Large Cap',
    chart: '/placeholder.svg'
  },
  { 
    id: 'defi', 
    name: 'DeFi Index', 
    description: 'Basket of top DeFi protocols', 
    returns: '24.3%',
    trend: 'up',
    allocation: 'Mid Cap',
    chart: '/placeholder.svg'
  },
  { 
    id: 'nft-index', 
    name: 'NFT Index', 
    description: 'NFT platforms and marketplaces', 
    returns: '-5.2%',
    trend: 'down',
    allocation: 'Small Cap',
    chart: '/placeholder.svg'
  },
  { 
    id: 'web3', 
    name: 'Web3 Future', 
    description: 'Next generation web protocols', 
    returns: '12.7%',
    trend: 'up',
    allocation: 'Mid Cap',
    chart: '/placeholder.svg'
  },
];

const topCryptos = [
  { 
    id: 'btc', 
    name: 'Bitcoin', 
    symbol: 'BTC', 
    price: '₹28,45,230', 
    change: '+5.2%',
    marketCap: '₹5.4T',
    trend: 'up',
    chart: '/placeholder.svg'
  },
  { 
    id: 'eth', 
    name: 'Ethereum', 
    symbol: 'ETH', 
    price: '₹1,52,480', 
    change: '+3.1%',
    marketCap: '₹1.8T',
    trend: 'up',
    chart: '/placeholder.svg'
  },
  { 
    id: 'bnb', 
    name: 'Binance Coin', 
    symbol: 'BNB', 
    price: '₹24,650', 
    change: '-1.2%',
    marketCap: '₹403B',
    trend: 'down',
    chart: '/placeholder.svg'
  },
  { 
    id: 'sol', 
    name: 'Solana', 
    symbol: 'SOL', 
    price: '₹7,840', 
    change: '+8.7%',
    marketCap: '₹285B',
    trend: 'up',
    chart: '/placeholder.svg'
  },
  { 
    id: 'ada', 
    name: 'Cardano', 
    symbol: 'ADA', 
    price: '₹45.32', 
    change: '-0.5%',
    marketCap: '₹152B',
    trend: 'down',
    chart: '/placeholder.svg'
  },
];

const watchlistItems = [
  { 
    id: 'dot', 
    name: 'Polkadot', 
    symbol: 'DOT', 
    price: '₹1,240', 
    change: '+2.3%',
    marketCap: '₹142B',
    trend: 'up',
    chart: '/placeholder.svg'
  },
  { 
    id: 'link', 
    name: 'Chainlink', 
    symbol: 'LINK', 
    price: '₹980', 
    change: '+4.5%',
    marketCap: '₹52B',
    trend: 'up',
    chart: '/placeholder.svg'
  },
  { 
    id: 'uni', 
    name: 'Uniswap', 
    symbol: 'UNI', 
    price: '₹540', 
    change: '-1.7%',
    marketCap: '₹40B',
    trend: 'down',
    chart: '/placeholder.svg'
  },
];

const InvestmentHome: React.FC = () => {
  const [capFilter, setCapFilter] = useState('all');

  return (
    <div className="min-h-screen pb-16">
      {/* Navigation Tabs */}
      <div className="bg-[#212632] border-b border-gray-700 sticky top-16 z-40">
        <div className="container mx-auto">
          <div className="flex overflow-x-auto no-scrollbar">
            <Link to="/investment" className="px-4 py-4 border-b-2 border-crypto-purple text-white font-medium whitespace-nowrap">
              Home
            </Link>
            <Link to="/investment/mutual-funds" className="px-4 py-4 border-b-2 border-transparent text-gray-400 hover:text-white font-medium whitespace-nowrap">
              Mutual Funds
            </Link>
            <Link to="/investment/dashboard" className="px-4 py-4 border-b-2 border-transparent text-gray-400 hover:text-white font-medium whitespace-nowrap">
              Dashboard
            </Link>
            <Link to="/investment/ico-ido" className="px-4 py-4 border-b-2 border-transparent text-gray-400 hover:text-white font-medium whitespace-nowrap">
              ICO/IDO
            </Link>
            <Link to="/investment/news" className="px-4 py-4 border-b-2 border-transparent text-gray-400 hover:text-white font-medium whitespace-nowrap">
              News & Events
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content (Left Side) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Index Funds Section */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">Index Funds</h2>
                <Link to="/investment/index-funds" className="text-sm text-crypto-purple flex items-center">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {indexFunds.map(fund => (
                  <Link key={fund.id} to={`/investment/fund/${fund.id}`} className="glass-card rounded-xl p-4 hover:border-crypto-purple/50 transition-all duration-200">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-white">{fund.name}</h3>
                        <p className="text-sm text-gray-400">{fund.description}</p>
                      </div>
                      <button className="text-gray-400 hover:text-crypto-purple">
                        <Star className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm text-gray-400">1Y Returns</span>
                        <div className="flex items-center gap-1">
                          {fund.trend === 'up' ? (
                            <TrendingUp className="h-4 w-4 text-crypto-green" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-crypto-red" />
                          )}
                          <span className={`font-medium ${fund.trend === 'up' ? 'text-crypto-green' : 'text-crypto-red'}`}>
                            {fund.returns}
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <span className="text-sm text-gray-400">Allocation</span>
                        <p className="text-white font-medium">{fund.allocation}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
            
            {/* Explore Top Cryptos Section */}
            <section>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h2 className="text-xl font-semibold text-white">Explore Top Cryptos</h2>
                
                <div className="flex items-center space-x-2">
                  <button 
                    className={`px-3 py-1 text-sm rounded-full ${capFilter === 'all' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
                    onClick={() => setCapFilter('all')}
                  >
                    All
                  </button>
                  <button 
                    className={`px-3 py-1 text-sm rounded-full ${capFilter === 'large' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
                    onClick={() => setCapFilter('large')}
                  >
                    Large Cap
                  </button>
                  <button 
                    className={`px-3 py-1 text-sm rounded-full ${capFilter === 'mid' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
                    onClick={() => setCapFilter('mid')}
                  >
                    Mid Cap
                  </button>
                  <button 
                    className={`px-3 py-1 text-sm rounded-full ${capFilter === 'small' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
                    onClick={() => setCapFilter('small')}
                  >
                    Small Cap
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800/50 text-left">
                    <tr>
                      <th className="px-4 py-3 text-sm font-medium text-gray-400">Name</th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-400">Price</th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-400">24h Change</th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-400">Market Cap</th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-400">Chart</th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-400"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {topCryptos.map(crypto => (
                      <tr key={crypto.id} className="hover:bg-gray-800/30">
                        <td className="px-4 py-4">
                          <Link to={`/investment/coin/${crypto.id}`} className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-700 mr-3 flex items-center justify-center text-xs font-medium">
                              {crypto.symbol.slice(0, 2)}
                            </div>
                            <div>
                              <h4 className="font-medium text-white">{crypto.name}</h4>
                              <span className="text-xs text-gray-400">{crypto.symbol}</span>
                            </div>
                          </Link>
                        </td>
                        <td className="px-4 py-4 text-white">{crypto.price}</td>
                        <td className={`px-4 py-4 ${crypto.trend === 'up' ? 'text-crypto-green' : 'text-crypto-red'}`}>
                          <div className="flex items-center">
                            {crypto.trend === 'up' ? (
                              <TrendingUp className="h-4 w-4 mr-1" />
                            ) : (
                              <TrendingDown className="h-4 w-4 mr-1" />
                            )}
                            {crypto.change}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-white">{crypto.marketCap}</td>
                        <td className="px-4 py-4">
                          <img src={crypto.chart} alt="price chart" className="h-12 w-20" />
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex space-x-2">
                            <button className="px-3 py-1.5 text-xs bg-crypto-purple text-white rounded-lg hover:bg-crypto-purple/80">
                              Buy
                            </button>
                            <button className="p-1.5 text-gray-400 hover:text-crypto-purple">
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
            
            {/* Tools Section */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Tools</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {[
                  { icon: "📈", name: "Price Alerts" },
                  { icon: "💰", name: "Portfolio" },
                  { icon: "🔄", name: "SIP" },
                  { icon: "📊", name: "Analytics" },
                  { icon: "🔎", name: "Screener" },
                ].map((tool, index) => (
                  <div key={index} className="glass-card rounded-xl p-4 text-center hover:border-crypto-purple/50 transition-all">
                    <div className="text-2xl mb-2">{tool.icon}</div>
                    <h3 className="text-sm text-white">{tool.name}</h3>
                  </div>
                ))}
              </div>
            </section>
          </div>
          
          {/* Sidebar (Right Side) */}
          <div className="space-y-6">
            {/* Dashboard Summary */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white">Portfolio Summary</h3>
                <Link to="/investment/dashboard" className="text-xs text-crypto-purple">View Dashboard</Link>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Current Value</span>
                  <span className="text-white font-medium">₹38,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Invested Amount</span>
                  <span className="text-white font-medium">₹32,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Returns</span>
                  <span className="text-crypto-green font-medium">₹6,500 (20.3%)</span>
                </div>
                
                <div className="h-px bg-gray-700 my-3"></div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="glass-card rounded-lg p-2 text-center">
                    <div className="text-xs text-gray-400">Active SIPs</div>
                    <div className="text-white font-medium">3</div>
                  </div>
                  <div className="glass-card rounded-lg p-2 text-center">
                    <div className="text-xs text-gray-400">Total Coins</div>
                    <div className="text-white font-medium">8</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Watchlist */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white">Watchlist</h3>
                <Link to="/investment/watchlist" className="text-xs text-crypto-purple">View All</Link>
              </div>
              
              <div className="space-y-4">
                {watchlistItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-700 mr-2 flex items-center justify-center text-xs font-medium">
                        {item.symbol.slice(0, 2)}
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{item.name}</h4>
                        <span className="text-xs text-gray-400">{item.symbol}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-white font-medium">{item.price}</div>
                      <div className={`text-xs ${item.trend === 'up' ? 'text-crypto-green' : 'text-crypto-red'}`}>
                        {item.change}
                      </div>
                    </div>
                  </div>
                ))}
                
                <button className="w-full py-2 border border-dashed border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-gray-400 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add to Watchlist
                </button>
              </div>
            </div>
            
            {/* SIP Tracker */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white">SIP Tracker</h3>
                <div className="flex items-center text-xs text-crypto-purple">
                  <Clock className="h-3 w-3 mr-1" />
                  Next SIP: 2 days
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">BTC SIP</span>
                    <span className="text-xs bg-crypto-purple/20 text-crypto-purple px-2 py-0.5 rounded-full">Active</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-gray-400">₹2,000 Monthly</span>
                    <span className="text-crypto-green">+12.5%</span>
                  </div>
                </div>
                
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">ETH SIP</span>
                    <span className="text-xs bg-crypto-purple/20 text-crypto-purple px-2 py-0.5 rounded-full">Active</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-gray-400">₹1,500 Monthly</span>
                    <span className="text-crypto-green">+8.3%</span>
                  </div>
                </div>
                
                <button className="w-full py-2 text-sm bg-crypto-purple text-white rounded-lg hover:bg-crypto-purple/90">
                  Start New SIP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentHome;
