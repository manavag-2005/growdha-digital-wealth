
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpDown,
  Calendar,
  ChevronDown,
  Clock,
  Filter,
  Info,
  Search,
  TrendingDown,
  TrendingUp
} from 'lucide-react';

const futuresContracts = [
  {
    symbol: 'BTC-PERP',
    name: 'Bitcoin Perpetual',
    price: '₹28,45,230',
    change: '+1.25%',
    fundingRate: '0.01%',
    marketCap: '₹5.4T',
    volume: '₹3.2B',
    openInterest: '₹1.8B',
    trend: 'up'
  },
  {
    symbol: 'ETH-PERP',
    name: 'Ethereum Perpetual',
    price: '₹1,52,480',
    change: '-0.62%',
    fundingRate: '0.008%',
    marketCap: '₹1.8T',
    volume: '₹1.5B',
    openInterest: '₹920M',
    trend: 'down'
  },
  {
    symbol: 'BNB-PERP',
    name: 'BNB Perpetual',
    price: '₹24,650',
    change: '+0.95%',
    fundingRate: '0.005%',
    marketCap: '₹403B',
    volume: '₹452M',
    openInterest: '₹215M',
    trend: 'up'
  },
  {
    symbol: 'SOL-PERP',
    name: 'Solana Perpetual',
    price: '₹7,840',
    change: '+2.12%',
    fundingRate: '0.02%',
    marketCap: '₹285B',
    volume: '₹350M',
    openInterest: '₹180M',
    trend: 'up'
  },
  {
    symbol: 'ADA-PERP',
    name: 'Cardano Perpetual',
    price: '₹45.32',
    change: '-1.05%',
    fundingRate: '0.003%',
    marketCap: '₹152B',
    volume: '₹95M',
    openInterest: '₹42M',
    trend: 'down'
  },
  {
    symbol: 'BTC-0625',
    name: 'Bitcoin Jun 2025',
    price: '₹28,65,520',
    change: '+1.42%',
    fundingRate: '-',
    marketCap: '₹5.4T',
    volume: '₹1.8B',
    openInterest: '₹950M',
    trend: 'up',
    expiry: '25 Jun, 2025'
  },
  {
    symbol: 'ETH-0625',
    name: 'Ethereum Jun 2025',
    price: '₹1,53,780',
    change: '-0.35%',
    fundingRate: '-',
    marketCap: '₹1.8T',
    volume: '₹750M',
    openInterest: '₹420M',
    trend: 'down',
    expiry: '25 Jun, 2025'
  }
];

const optionsContracts = [
  {
    symbol: 'BTC-25APR25-28500-C',
    name: 'BTC 28500 Call',
    underlying: 'BTC',
    price: '₹1,250',
    change: '+8.35%',
    strikePrice: '₹28,500',
    impliedVol: '65%',
    openInterest: '₹980M',
    type: 'Call',
    trend: 'up',
    expiry: '25 Apr, 2025'
  },
  {
    symbol: 'BTC-25APR25-28500-P',
    name: 'BTC 28500 Put',
    underlying: 'BTC',
    price: '₹950',
    change: '-5.12%',
    strikePrice: '₹28,500',
    impliedVol: '62%',
    openInterest: '₹850M',
    type: 'Put',
    trend: 'down',
    expiry: '25 Apr, 2025'
  },
  {
    symbol: 'ETH-25APR25-1500-C',
    name: 'ETH 1500 Call',
    underlying: 'ETH',
    price: '₹85',
    change: '+4.28%',
    strikePrice: '₹1,500',
    impliedVol: '72%',
    openInterest: '₹420M',
    type: 'Call',
    trend: 'up',
    expiry: '25 Apr, 2025'
  },
  {
    symbol: 'ETH-25APR25-1500-P',
    name: 'ETH 1500 Put',
    underlying: 'ETH',
    price: '₹65',
    change: '-3.52%',
    strikePrice: '₹1,500',
    impliedVol: '68%',
    openInterest: '₹380M',
    type: 'Put',
    trend: 'down',
    expiry: '25 Apr, 2025'
  }
];

const topGainers = [
  {
    symbol: 'SOL-PERP',
    name: 'Solana Perpetual',
    price: '₹7,840',
    change: '+2.12%'
  },
  {
    symbol: 'DOT-PERP',
    name: 'Polkadot Perpetual',
    price: '₹1,240',
    change: '+1.85%'
  },
  {
    symbol: 'AVAX-PERP',
    name: 'Avalanche Perpetual',
    price: '₹2,350',
    change: '+1.67%'
  }
];

const topLosers = [
  {
    symbol: 'LINK-PERP',
    name: 'Chainlink Perpetual',
    price: '₹980',
    change: '-1.82%'
  },
  {
    symbol: 'ADA-PERP',
    name: 'Cardano Perpetual',
    price: '₹45.32',
    change: '-1.05%'
  },
  {
    symbol: 'XRP-PERP',
    name: 'XRP Perpetual',
    price: '₹38.75',
    change: '-0.92%'
  }
];

const expirations = [
  '25 Apr, 2025',
  '30 May, 2025',
  '25 Jun, 2025',
  '26 Sep, 2025',
  '26 Dec, 2025'
];

const Futures: React.FC = () => {
  const [contractType, setContractType] = useState('futures');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="min-h-screen pb-16">
      {/* Navigation Tabs */}
      <div className="bg-[#212632] border-b border-gray-700 sticky top-16 z-40">
        <div className="container mx-auto">
          <div className="flex overflow-x-auto no-scrollbar">
            <Link to="/trading" className="px-4 py-4 border-b-2 border-transparent text-gray-400 hover:text-white font-medium whitespace-nowrap">
              Home
            </Link>
            <Link to="/trading/futures" className="px-4 py-4 border-b-2 border-crypto-purple text-white font-medium whitespace-nowrap">
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content (Left Side) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Contract Type Toggle and Search */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex space-x-2">
                <button 
                  className={`px-4 py-2 rounded-lg ${contractType === 'futures' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
                  onClick={() => setContractType('futures')}
                >
                  Futures
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg ${contractType === 'options' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
                  onClick={() => setContractType('options')}
                >
                  Options
                </button>
              </div>
              
              <div className="w-full md:w-auto flex items-center">
                <div className="relative mr-2 flex-grow md:flex-grow-0 md:w-64">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search contracts..."
                    className="w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-800/50 focus:ring-crypto-purple focus:border-crypto-purple"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button className="p-2 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white">
                  <Filter className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Filters */}
            <div className="flex overflow-x-auto space-x-2">
              <button 
                className={`px-3 py-1.5 rounded-lg ${activeFilter === 'all' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              <button 
                className={`px-3 py-1.5 rounded-lg ${activeFilter === 'perpetual' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
                onClick={() => setActiveFilter('perpetual')}
              >
                Perpetual
              </button>
              <button 
                className={`px-3 py-1.5 rounded-lg ${activeFilter === 'quarterly' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
                onClick={() => setActiveFilter('quarterly')}
              >
                Quarterly
              </button>
              <button 
                className={`px-3 py-1.5 rounded-lg ${activeFilter === 'btc' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
                onClick={() => setActiveFilter('btc')}
              >
                BTC
              </button>
              <button 
                className={`px-3 py-1.5 rounded-lg ${activeFilter === 'eth' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
                onClick={() => setActiveFilter('eth')}
              >
                ETH
              </button>
              <button 
                className={`px-3 py-1.5 rounded-lg ${activeFilter === 'alts' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
                onClick={() => setActiveFilter('alts')}
              >
                Altcoins
              </button>
            </div>
            
            {/* Futures Table */}
            {contractType === 'futures' && (
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-800/50 text-left">
                      <tr>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Contract</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Price</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">24h Change</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Funding Rate</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Volume</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Open Interest</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Expiry</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {futuresContracts.map((contract, index) => (
                        <tr key={index} className="hover:bg-gray-800/30">
                          <td className="px-4 py-4">
                            <div>
                              <h4 className="font-medium text-white">{contract.symbol}</h4>
                              <p className="text-xs text-gray-400">{contract.name}</p>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-white">{contract.price}</td>
                          <td className={`px-4 py-4 ${contract.trend === 'up' ? 'text-crypto-green' : 'text-crypto-red'}`}>
                            <div className="flex items-center">
                              {contract.trend === 'up' ? (
                                <TrendingUp className="h-4 w-4 mr-1" />
                              ) : (
                                <TrendingDown className="h-4 w-4 mr-1" />
                              )}
                              {contract.change}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-white">{contract.fundingRate}</td>
                          <td className="px-4 py-4 text-white">{contract.volume}</td>
                          <td className="px-4 py-4 text-white">{contract.openInterest}</td>
                          <td className="px-4 py-4 text-white">{contract.expiry || 'Perpetual'}</td>
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
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
            {/* Options Table */}
            {contractType === 'options' && (
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="p-4 border-b border-gray-700 flex flex-wrap items-center gap-3">
                  <div className="flex items-center mr-4">
                    <span className="text-gray-400 mr-2">Expiry:</span>
                    <div className="relative">
                      <select className="pl-3 pr-8 py-1.5 border border-gray-700 rounded-lg bg-gray-800 text-white appearance-none focus:ring-crypto-purple focus:border-crypto-purple">
                        {expirations.map((date, index) => (
                          <option key={index} value={date}>{date}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-2 top-2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="flex items-center mr-4">
                    <span className="text-gray-400 mr-2">Underlying:</span>
                    <div className="relative">
                      <select className="pl-3 pr-8 py-1.5 border border-gray-700 rounded-lg bg-gray-800 text-white appearance-none focus:ring-crypto-purple focus:border-crypto-purple">
                        <option value="BTC">BTC</option>
                        <option value="ETH">ETH</option>
                        <option value="SOL">SOL</option>
                      </select>
                      <ChevronDown className="absolute right-2 top-2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="flex items-center mr-4">
                    <span className="text-gray-400 mr-2">Type:</span>
                    <div className="relative">
                      <select className="pl-3 pr-8 py-1.5 border border-gray-700 rounded-lg bg-gray-800 text-white appearance-none focus:ring-crypto-purple focus:border-crypto-purple">
                        <option value="all">All</option>
                        <option value="call">Call</option>
                        <option value="put">Put</option>
                      </select>
                      <ChevronDown className="absolute right-2 top-2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <button className="ml-auto px-3 py-1.5 bg-crypto-purple text-white rounded-lg hover:bg-crypto-purple/90 text-sm">
                    Options Chain
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-800/50 text-left">
                      <tr>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Contract</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Price</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">24h Change</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Type</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Strike</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">IV</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">OI</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Expiry</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {optionsContracts.map((contract, index) => (
                        <tr key={index} className="hover:bg-gray-800/30">
                          <td className="px-4 py-4">
                            <div>
                              <h4 className="font-medium text-white">{contract.symbol}</h4>
                              <p className="text-xs text-gray-400">{contract.name}</p>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-white">{contract.price}</td>
                          <td className={`px-4 py-4 ${contract.trend === 'up' ? 'text-crypto-green' : 'text-crypto-red'}`}>
                            <div className="flex items-center">
                              {contract.trend === 'up' ? (
                                <TrendingUp className="h-4 w-4 mr-1" />
                              ) : (
                                <TrendingDown className="h-4 w-4 mr-1" />
                              )}
                              {contract.change}
                            </div>
                          </td>
                          <td className={`px-4 py-4 ${contract.type === 'Call' ? 'text-crypto-green' : 'text-crypto-red'}`}>
                            {contract.type}
                          </td>
                          <td className="px-4 py-4 text-white">{contract.strikePrice}</td>
                          <td className="px-4 py-4 text-white">{contract.impliedVol}</td>
                          <td className="px-4 py-4 text-white">{contract.openInterest}</td>
                          <td className="px-4 py-4 text-white">{contract.expiry}</td>
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
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
            {/* Education Section */}
            <div className="glass-card rounded-xl p-5">
              <h3 className="text-lg font-semibold text-white mb-4">Learn About F&O Trading</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Futures Trading Basics</h4>
                  <p className="text-sm text-gray-400 mb-3">Learn the fundamentals of futures trading and leverage.</p>
                  <button className="text-sm text-crypto-purple">Read More →</button>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Options Trading Strategies</h4>
                  <p className="text-sm text-gray-400 mb-3">Discover popular options strategies to hedge or speculate.</p>
                  <button className="text-sm text-crypto-purple">Read More →</button>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Risk Management Guide</h4>
                  <p className="text-sm text-gray-400 mb-3">Learn how to manage risk effectively in derivatives trading.</p>
                  <button className="text-sm text-crypto-purple">Read More →</button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar (Right Side) */}
          <div className="space-y-6">
            {/* Market Overview */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white">Market Overview</h3>
                <button className="text-gray-400 hover:text-white">
                  <ArrowUpDown className="h-4 w-4" />
                </button>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">BTC Price</span>
                  <span className="text-white">₹28,45,230</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">ETH Price</span>
                  <span className="text-white">₹1,52,480</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">BTC Dominance</span>
                  <span className="text-white">42.5%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Total F&O Volume</span>
                  <span className="text-white">₹12.8B</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Total Open Interest</span>
                  <span className="text-white">₹8.2B</span>
                </div>
              </div>
              
              <div className="h-px bg-gray-700 my-4"></div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-white text-sm font-medium">Top Gainers (24h)</h4>
                  <button className="text-xs text-crypto-purple">View All</button>
                </div>
                <div className="space-y-2">
                  {topGainers.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-800/30 rounded-lg">
                      <div>
                        <h5 className="text-white text-sm">{item.symbol}</h5>
                        <p className="text-gray-400 text-xs">{item.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white text-sm">{item.price}</p>
                        <p className="text-crypto-green text-xs">{item.change}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="h-px bg-gray-700 my-4"></div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-white text-sm font-medium">Top Losers (24h)</h4>
                  <button className="text-xs text-crypto-purple">View All</button>
                </div>
                <div className="space-y-2">
                  {topLosers.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-800/30 rounded-lg">
                      <div>
                        <h5 className="text-white text-sm">{item.symbol}</h5>
                        <p className="text-gray-400 text-xs">{item.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white text-sm">{item.price}</p>
                        <p className="text-crypto-red text-xs">{item.change}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Upcoming Expirations */}
            <div className="glass-card rounded-xl p-5">
              <h3 className="font-semibold text-white mb-4">Upcoming Expirations</h3>
              
              <div className="space-y-3">
                {expirations.slice(0, 3).map((date, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-white">{date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-xs text-gray-400">
                        {index === 0 ? '12 days left' : index === 1 ? '47 days left' : '73 days left'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Trading Resources */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white">Resources</h3>
                <Info className="h-4 w-4 text-gray-400" />
              </div>
              
              <div className="space-y-3">
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <h4 className="text-white text-sm font-medium mb-1">Futures Contract Specs</h4>
                  <p className="text-xs text-gray-400">View detailed contract specifications for all futures.</p>
                  <button className="mt-2 text-xs text-crypto-purple">View Details</button>
                </div>
                
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <h4 className="text-white text-sm font-medium mb-1">Options Greeks Calculator</h4>
                  <p className="text-xs text-gray-400">Calculate option greeks to enhance your options trading.</p>
                  <button className="mt-2 text-xs text-crypto-purple">Use Calculator</button>
                </div>
                
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <h4 className="text-white text-sm font-medium mb-1">Trading Fee Schedule</h4>
                  <p className="text-xs text-gray-400">Review our competitive fee structure for F&O trading.</p>
                  <button className="mt-2 text-xs text-crypto-purple">View Fees</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Futures;
