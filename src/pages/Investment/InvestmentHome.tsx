import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Star, 
  TrendingUp, 
  TrendingDown,
  Clock,
  Filter,
  LineChart,
  BarChart,
  Shield,
  Wallet
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
    name: 'ValueX 10', 
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
        <div className="flex flex-col gap-8">
          {/* Hero Section with 3D effect */}
          <section className="relative overflow-hidden rounded-2xl p-8 glass-card">
            <div className="absolute inset-0 bg-gradient-radial from-crypto-purple/20 via-transparent to-transparent opacity-30"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-crypto-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-crypto-purple/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Invest in the Future of Finance</h1>
              <p className="text-xl text-gray-300 mb-6 max-w-3xl">Diversified crypto portfolios designed for long-term wealth creation.</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 glass-card rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_5px_15px_rgba(155,135,245,0.3)]">
                  <p className="text-2xl font-bold text-crypto-purple mb-2">5M+</p>
                  <p className="text-gray-400">Active Users</p>
                </div>
                <div className="p-4 glass-card rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_5px_15px_rgba(59,130,246,0.3)]">
                  <p className="text-2xl font-bold text-crypto-blue mb-2">₹1.2T+</p>
                  <p className="text-gray-400">AUM</p>
                </div>
                <div className="p-4 glass-card rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_5px_15px_rgba(249,115,22,0.3)]">
                  <p className="text-2xl font-bold text-crypto-orange mb-2">24.7%</p>
                  <p className="text-gray-400">Avg. Returns</p>
                </div>
                <div className="p-4 glass-card rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_5px_15px_rgba(34,197,94,0.3)]">
                  <p className="text-2xl font-bold text-crypto-green mb-2">200+</p>
                  <p className="text-gray-400">Cryptocurrencies</p>
                </div>
              </div>
            </div>
          </section>

          {/* Dashboard Summary */}
          <section className="glass-card rounded-xl p-6 hover:shadow-[0_10px_40px_-15px_rgba(155,135,245,0.4)] transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Your Portfolio Summary</h2>
              <Link to="/investment/dashboard" className="text-sm text-crypto-purple hover:underline flex items-center">
                View Full Dashboard <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Current Value</span>
                  <span className="text-white font-medium text-xl">₹38,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Invested Amount</span>
                  <span className="text-white font-medium text-xl">₹32,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Returns</span>
                  <span className="text-crypto-green font-medium text-xl">₹6,500 (20.3%)</span>
                </div>
                
                <div className="h-px bg-gray-700 my-3"></div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card rounded-lg p-4 text-center transform hover:scale-105 transition-all duration-300">
                    <div className="text-sm text-gray-400">Active SIPs</div>
                    <div className="text-white font-medium text-xl">3</div>
                  </div>
                  <div className="glass-card rounded-lg p-4 text-center transform hover:scale-105 transition-all duration-300">
                    <div className="text-sm text-gray-400">Total Coins</div>
                    <div className="text-white font-medium text-xl">8</div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 relative">
                  <div className="absolute inset-0 rounded-full bg-gray-800/50"></div>
                  <div className="absolute inset-4 rounded-full bg-gray-800 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xl font-medium text-white">+20.3%</div>
                      <div className="text-xs text-gray-400">All-time return</div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-full h-full rounded-full border-8 border-crypto-purple/30" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
                  <div className="absolute top-0 right-0 w-full h-full rounded-full border-8 border-crypto-green/40" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 0)' }}></div>
                  <div className="absolute top-0 right-0 w-full h-full rounded-full border-8 border-crypto-blue/30" style={{ clipPath: 'polygon(100% 30%, 100% 70%, 0 100%, 0 0)' }}></div>
                  <div className="absolute top-0 right-0 w-full h-full rounded-full border-8 border-crypto-orange/30" style={{ clipPath: 'polygon(100% 70%, 100% 100%, 0 100%)' }}></div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Index Funds Section */}
          <section className="glass-card rounded-xl p-6 hover:shadow-[0_10px_40px_-15px_rgba(155,135,245,0.3)] transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Index Funds</h2>
              <Link to="/investment/index-funds" className="text-sm text-crypto-purple flex items-center">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="flex flex-col gap-4">
              {indexFunds.map(fund => (
                <Link 
                  key={fund.id} 
                  to={`/investment/fund/${fund.id}`} 
                  className="flex flex-col md:flex-row gap-4 items-center glass-card rounded-xl p-6 hover:border-crypto-purple/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-crypto-purple to-crypto-blue flex items-center justify-center shadow-xl">
                    <LineChart className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex-1 md:flex md:justify-between md:items-center text-center md:text-left">
                    <div>
                      <h3 className="font-semibold text-white text-xl">{fund.name}</h3>
                      <p className="text-sm text-gray-400">{fund.description}</p>
                    </div>
                    
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center justify-center md:justify-end gap-1">
                        {fund.trend === 'up' ? (
                          <TrendingUp className="h-4 w-4 text-crypto-green" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-crypto-red" />
                        )}
                        <span className={`font-medium ${fund.trend === 'up' ? 'text-crypto-green' : 'text-crypto-red'}`}>
                          {fund.returns}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400">{fund.allocation}</span>
                    </div>
                  </div>
                  
                  <div className="text-crypto-purple">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
          
          {/* Explore Top Cryptos Section */}
          <section className="glass-card rounded-xl p-6 hover:shadow-[0_10px_40px_-15px_rgba(155,135,245,0.3)] transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <h2 className="text-xl font-semibold text-white">Explore Top Cryptos</h2>
              
              <div className="flex items-center space-x-2 overflow-x-auto">
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
            
            <div className="space-y-4">
              {topCryptos.map(crypto => (
                <div key={crypto.id} className="glass-card rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:border-crypto-purple/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <Link to={`/investment/coin/${crypto.id}`} className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-700 mr-4 flex items-center justify-center text-base font-medium">
                        {crypto.symbol.slice(0, 2)}
                      </div>
                      <div>
                        <h4 className="font-medium text-white text-lg">{crypto.name}</h4>
                        <span className="text-sm text-gray-400">{crypto.symbol}</span>
                      </div>
                    </Link>
                    
                    <div className="flex items-center justify-between md:justify-end gap-8">
                      <div>
                        <div className="text-white font-medium">{crypto.price}</div>
                        <div className={`flex items-center text-sm ${crypto.trend === 'up' ? 'text-crypto-green' : 'text-crypto-red'}`}>
                          {crypto.trend === 'up' ? (
                            <TrendingUp className="h-4 w-4 mr-1" />
                          ) : (
                            <TrendingDown className="h-4 w-4 mr-1" />
                          )}
                          {crypto.change}
                        </div>
                      </div>
                      
                      <div className="text-right hidden md:block">
                        <div className="text-sm text-gray-400">Market Cap</div>
                        <div className="text-white">{crypto.marketCap}</div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 text-sm bg-crypto-purple text-white rounded-lg hover:bg-crypto-purple/80 transition-colors">
                          Buy
                        </button>
                        <button className="p-2 text-gray-400 hover:text-crypto-purple transition-colors">
                          <Star className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Watchlist */}
          <section className="glass-card rounded-xl p-6 hover:shadow-[0_10px_40px_-15px_rgba(155,135,245,0.3)] transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-white text-xl">Your Watchlist</h3>
              <Link to="/investment/watchlist" className="text-sm text-crypto-purple hover:underline">View All</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              {watchlistItems.map(item => (
                <div key={item.id} className="flex items-center justify-between p-4 glass-card rounded-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-700 mr-3 flex items-center justify-center text-sm font-medium">
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
              
              <button className="w-full py-3 border border-dashed border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-gray-400 flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add to Watchlist
              </button>
            </div>
          </section>
          
          {/* SIP Tracker */}
          <section className="glass-card rounded-xl p-6 hover:shadow-[0_10px_40px_-15px_rgba(155,135,245,0.3)] transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-white text-xl">SIP Tracker</h3>
              <div className="flex items-center text-sm text-crypto-purple">
                <Clock className="h-4 w-4 mr-1" />
                Next SIP: 2 days
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="p-4 glass-card rounded-xl transition-all duration-300 hover:scale-105">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-crypto-blue/20 flex items-center justify-center mr-3">
                      <Wallet className="h-5 w-5 text-crypto-blue" />
                    </div>
                    <span className="text-white font-medium">BTC SIP</span>
                  </div>
                  <span className="text-xs bg-crypto-purple/20 text-crypto-purple px-2 py-1 rounded-full">Active</span>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <div className="space-y-1">
                    <div className="text-sm text-gray-400">₹2,000 Monthly</div>
                    <div className="h-1.5 w-32 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-crypto-green rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <span className="text-crypto-green font-medium">+12.5%</span>
                </div>
              </div>
              
              <div className="p-4 glass-card rounded-xl transition-all duration-300 hover:scale-105">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-crypto-purple/20 flex items-center justify-center mr-3">
                      <Wallet className="h-5 w-5 text-crypto-purple" />
                    </div>
                    <span className="text-white font-medium">ETH SIP</span>
                  </div>
                  <span className="text-xs bg-crypto-purple/20 text-crypto-purple px-2 py-1 rounded-full">Active</span>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <div className="space-y-1">
                    <div className="text-sm text-gray-400">₹1,500 Monthly</div>
                    <div className="h-1.5 w-32 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-crypto-green rounded-full" style={{ width: '48%' }}></div>
                    </div>
                  </div>
                  <span className="text-crypto-green font-medium">+8.3%</span>
                </div>
              </div>
              
              <button className="w-full py-3 bg-crypto-purple text-white rounded-lg hover:bg-crypto-purple/90 transition-colors shadow-[0_5px_15px_rgba(155,135,245,0.3)] transform hover:scale-105 duration-300">
                Start New SIP
              </button>
            </div>
          </section>
          
          {/* Tools Section */}
          <section className="glass-card rounded-xl p-6 hover:shadow-[0_10px_40px_-15px_rgba(155,135,245,0.3)] transition-all duration-300">
            <h2 className="text-xl font-semibold text-white mb-6">Investor Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {[
                { icon: "📈", name: "Price Alerts" },
                { icon: "💰", name: "Portfolio" },
                { icon: "🔄", name: "SIP" },
                { icon: "📊", name: "Analytics" },
                { icon: "🔎", name: "Screener" },
              ].map((tool, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl p-6 text-center transform hover:scale-110 transition-all duration-300 hover:shadow-[0_5px_15px_rgba(155,135,245,0.3)]"
                >
                  <div className="text-3xl mb-3">{tool.icon}</div>
                  <h3 className="text-white font-medium">{tool.name}</h3>
                </div>
              ))}
            </div>
          </section>
          
          {/* Educational Resources */}
          <section className="glass-card rounded-xl p-6 hover:shadow-[0_10px_40px_-15px_rgba(155,135,245,0.3)] transition-all duration-300">
            <h2 className="text-xl font-semibold text-white mb-6">Learn & Grow</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card rounded-xl p-5 transition-all duration-300 hover:scale-105">
                <div className="h-14 w-14 rounded-lg bg-crypto-purple/20 flex items-center justify-center mb-4">
                  <Shield className="h-7 w-7 text-crypto-purple" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Crypto Investing 101</h3>
                <p className="text-sm text-gray-400 mb-4">Learn the basics of crypto investing and how to build a diversified portfolio.</p>
                <a href="#" className="text-sm text-crypto-purple hover:underline">Start Learning →</a>
              </div>
              
              <div className="glass-card rounded-xl p-5 transition-all duration-300 hover:scale-105">
                <div className="h-14 w-14 rounded-lg bg-crypto-blue/20 flex items-center justify-center mb-4">
                  <BarChart className="h-7 w-7 text-crypto-blue" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Technical Analysis</h3>
                <p className="text-sm text-gray-400 mb-4">Master chart patterns, indicators, and technical tools for better trading decisions.</p>
                <a href="#" className="text-sm text-crypto-blue hover:underline">View Course →</a>
              </div>
              
              <div className="glass-card rounded-xl p-5 transition-all duration-300 hover:scale-105">
                <div className="h-14 w-14 rounded-lg bg-crypto-orange/20 flex items-center justify-center mb-4">
                  <LineChart className="h-7 w-7 text-crypto-orange" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Risk Management</h3>
                <p className="text-sm text-gray-400 mb-4">Learn strategies to protect your capital and maximize returns in volatile markets.</p>
                <a href="#" className="text-sm text-crypto-orange hover:underline">Explore Guides →</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InvestmentHome;
