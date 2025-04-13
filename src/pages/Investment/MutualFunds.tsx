
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Star, 
  TrendingUp, 
  TrendingDown,
  Filter,
  Info,
  BarChart2,
  Percent
} from 'lucide-react';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const baskets = [
  { 
    id: 'crypto-blue-chip', 
    name: 'Crypto Blue Chip', 
    description: 'A collection of well-established cryptocurrencies',
    returns: { '1m': '4.2%', '3m': '12.5%', '1y': '28.7%' },
    trend: 'up',
    riskLevel: 'Moderate',
    minInvestment: '₹1,000',
    holdings: [
      { symbol: 'BTC', name: 'Bitcoin', allocation: '30%' },
      { symbol: 'ETH', name: 'Ethereum', allocation: '25%' },
      { symbol: 'BNB', name: 'Binance Coin', allocation: '15%' },
      { symbol: 'SOL', name: 'Solana', allocation: '10%' },
      { symbol: 'ADA', name: 'Cardano', allocation: '10%' },
      { symbol: 'DOT', name: 'Polkadot', allocation: '10%' }
    ]
  },
  { 
    id: 'defi-tracker', 
    name: 'DeFi Tracker', 
    description: 'Top tokens from decentralized finance ecosystem',
    returns: { '1m': '5.7%', '3m': '18.3%', '1y': '42.1%' },
    trend: 'up',
    riskLevel: 'High',
    minInvestment: '₹2,000',
    holdings: [
      { symbol: 'UNI', name: 'Uniswap', allocation: '20%' },
      { symbol: 'AAVE', name: 'Aave', allocation: '20%' },
      { symbol: 'CAKE', name: 'PancakeSwap', allocation: '15%' },
      { symbol: 'MKR', name: 'Maker', allocation: '15%' },
      { symbol: 'COMP', name: 'Compound', allocation: '15%' },
      { symbol: 'SNX', name: 'Synthetix', allocation: '15%' }
    ]
  },
  { 
    id: 'smart-contract', 
    name: 'Smart Contract', 
    description: 'Leading smart contract platforms', 
    returns: { '1m': '-2.3%', '3m': '8.5%', '1y': '32.9%' },
    trend: 'down',
    riskLevel: 'High',
    minInvestment: '₹1,500',
    holdings: [
      { symbol: 'ETH', name: 'Ethereum', allocation: '25%' },
      { symbol: 'SOL', name: 'Solana', allocation: '20%' },
      { symbol: 'ADA', name: 'Cardano', allocation: '15%' },
      { symbol: 'AVAX', name: 'Avalanche', allocation: '15%' },
      { symbol: 'DOT', name: 'Polkadot', allocation: '15%' },
      { symbol: 'ALGO', name: 'Algorand', allocation: '10%' }
    ]
  },
  { 
    id: 'web3', 
    name: 'Web3 Future', 
    description: 'Future of decentralized internet', 
    returns: { '1m': '3.1%', '3m': '11.2%', '1y': '37.6%' },
    trend: 'up',
    riskLevel: 'Moderate',
    minInvestment: '₹2,000',
    holdings: [
      { symbol: 'LINK', name: 'Chainlink', allocation: '20%' },
      { symbol: 'FIL', name: 'Filecoin', allocation: '20%' },
      { symbol: 'GRT', name: 'The Graph', allocation: '15%' },
      { symbol: 'THETA', name: 'Theta Network', allocation: '15%' },
      { symbol: 'AR', name: 'Arweave', allocation: '15%' },
      { symbol: 'LPT', name: 'Livepeer', allocation: '15%' }
    ]
  },
  { 
    id: 'nft-metaverse', 
    name: 'NFT & Metaverse', 
    description: 'Digital collectibles and virtual worlds', 
    returns: { '1m': '-3.4%', '3m': '9.7%', '1y': '28.3%' },
    trend: 'down',
    riskLevel: 'Very High',
    minInvestment: '₹3,000',
    holdings: [
      { symbol: 'AXS', name: 'Axie Infinity', allocation: '20%' },
      { symbol: 'SAND', name: 'The Sandbox', allocation: '20%' },
      { symbol: 'MANA', name: 'Decentraland', allocation: '20%' },
      { symbol: 'ENJ', name: 'Enjin Coin', allocation: '15%' },
      { symbol: 'FLOW', name: 'Flow', allocation: '15%' },
      { symbol: 'ILV', name: 'Illuvium', allocation: '10%' }
    ]
  }
];

const popularInvestments = [
  { 
    id: 'small-cap-gems', 
    name: 'Small Cap Gems', 
    returns: '58.3%',
    trend: 'up',
    members: '12,458',
    aum: '₹4.8 Cr'
  },
  { 
    id: 'hodl-strategy', 
    name: 'HODL Strategy', 
    returns: '37.6%',
    trend: 'up',
    members: '24,783',
    aum: '₹18.2 Cr'
  },
  { 
    id: 'crypto-income', 
    name: 'Crypto Income', 
    returns: '22.9%',
    trend: 'up',
    members: '8,291',
    aum: '₹6.7 Cr'
  }
];

const topSips = [
  { 
    id: 'growdha10-sip', 
    name: 'Growdha 10', 
    returns: '28.5%',
    trend: 'up',
    averageCost: '₹1,850',
    investedAmount: '₹22,200'
  },
  { 
    id: 'blue-chip-sip', 
    name: 'Crypto Blue Chip', 
    returns: '24.3%',
    trend: 'up',
    averageCost: '₹2,200',
    investedAmount: '₹26,400'
  }
];

const MutualFunds: React.FC = () => {
  const [selectedBasket, setSelectedBasket] = useState<string | null>(null);

  return (
    <div className="min-h-screen pb-16">
      {/* Navigation Tabs */}
      <div className="bg-[#212632] border-b border-gray-700 sticky top-16 z-40">
        <div className="container mx-auto">
          <div className="flex overflow-x-auto no-scrollbar">
            <Link to="/investment" className="px-4 py-4 border-b-2 border-transparent text-gray-400 hover:text-white font-medium whitespace-nowrap">
              Home
            </Link>
            <Link to="/investment/mutual-funds" className="px-4 py-4 border-b-2 border-crypto-purple text-white font-medium whitespace-nowrap">
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
            {/* Top Baskets Section */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">Top Crypto Baskets</h2>
                <div className="flex items-center space-x-2">
                  <button className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-gray-800">
                    <Filter className="h-5 w-5" />
                  </button>
                  <button className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-gray-800">
                    <Info className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {baskets.map(basket => (
                  <div 
                    key={basket.id} 
                    className={`glass-card rounded-xl p-4 hover:border-crypto-purple/50 transition-all duration-200 ${selectedBasket === basket.id ? 'border-crypto-purple' : ''}`}
                    onClick={() => setSelectedBasket(basket.id === selectedBasket ? null : basket.id)}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-white">{basket.name}</h3>
                        <p className="text-sm text-gray-400">{basket.description}</p>
                      </div>
                      <button className="text-gray-400 hover:text-crypto-purple">
                        <Star className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <span className="text-sm text-gray-400">1Y Returns</span>
                        <div className="flex items-center gap-1">
                          {basket.trend === 'up' ? (
                            <TrendingUp className="h-4 w-4 text-crypto-green" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-crypto-red" />
                          )}
                          <span className={`font-medium ${basket.trend === 'up' ? 'text-crypto-green' : 'text-crypto-red'}`}>
                            {basket.returns['1y']}
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <span className="text-sm text-gray-400">Risk Level</span>
                        <p className="text-white font-medium">{basket.riskLevel}</p>
                      </div>
                    </div>
                    
                    {selectedBasket === basket.id && (
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <h4 className="text-sm font-medium text-white mb-2">Holdings</h4>
                        <div className="space-y-2">
                          {basket.holdings.map(holding => (
                            <div key={holding.symbol} className="flex justify-between items-center">
                              <div className="flex items-center">
                                <div className="w-6 h-6 rounded-full bg-gray-700 mr-2 flex items-center justify-center text-xs">
                                  {holding.symbol.slice(0, 2)}
                                </div>
                                <span className="text-white text-sm">{holding.name}</span>
                              </div>
                              <span className="text-gray-400 text-sm">{holding.allocation}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 flex justify-between">
                          <span className="text-sm text-gray-400">Min. Investment: {basket.minInvestment}</span>
                          <button className="px-4 py-1.5 bg-crypto-purple rounded-lg text-white text-sm hover:bg-crypto-purple/90">
                            Invest Now
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
            
            {/* Performance Metrics */}
            <section className="glass-card rounded-xl p-4">
              <Tabs defaultValue="returns">
                <TabsList className="bg-gray-800/70 w-full grid grid-cols-3 mb-4">
                  <TabsTrigger value="returns">Historical Returns</TabsTrigger>
                  <TabsTrigger value="comparison">Fund Comparison</TabsTrigger>
                  <TabsTrigger value="allocations">Asset Allocations</TabsTrigger>
                </TabsList>
                
                <TabsContent value="returns" className="p-2">
                  <div className="h-64 w-full bg-gray-800/50 rounded-lg flex items-center justify-center">
                    <BarChart2 className="h-12 w-12 text-gray-600" />
                    <span className="ml-2 text-gray-500">Historical returns chart will appear here</span>
                  </div>
                </TabsContent>
                
                <TabsContent value="comparison" className="p-2">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="text-xs uppercase bg-gray-800/50 text-gray-400">
                        <tr>
                          <th className="px-4 py-3">Fund Name</th>
                          <th className="px-4 py-3">1M</th>
                          <th className="px-4 py-3">3M</th>
                          <th className="px-4 py-3">1Y</th>
                          <th className="px-4 py-3">Risk Level</th>
                          <th className="px-4 py-3">Min. Investment</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {baskets.map(basket => (
                          <tr key={basket.id} className="hover:bg-gray-800/30">
                            <td className="px-4 py-3 text-white font-medium">{basket.name}</td>
                            <td className={`px-4 py-3 ${basket.trend === 'up' ? 'text-crypto-green' : 'text-crypto-red'}`}>
                              {basket.returns['1m']}
                            </td>
                            <td className={`px-4 py-3 ${basket.trend === 'up' ? 'text-crypto-green' : 'text-crypto-red'}`}>
                              {basket.returns['3m']}
                            </td>
                            <td className={`px-4 py-3 ${basket.trend === 'up' ? 'text-crypto-green' : 'text-crypto-red'}`}>
                              {basket.returns['1y']}
                            </td>
                            <td className="px-4 py-3 text-white">{basket.riskLevel}</td>
                            <td className="px-4 py-3 text-white">{basket.minInvestment}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
                
                <TabsContent value="allocations" className="p-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <h3 className="text-white font-medium mb-2">Crypto Blue Chip</h3>
                      <div className="space-y-2">
                        {baskets[0].holdings.map(holding => (
                          <div key={holding.symbol} className="flex items-center">
                            <div 
                              className="h-2 bg-crypto-purple rounded-full mr-2"
                              style={{ width: holding.allocation.replace('%', '') + '%' }}
                            ></div>
                            <span className="text-sm text-gray-400">{holding.name} ({holding.allocation})</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <h3 className="text-white font-medium mb-2">DeFi Tracker</h3>
                      <div className="space-y-2">
                        {baskets[1].holdings.map(holding => (
                          <div key={holding.symbol} className="flex items-center">
                            <div 
                              className="h-2 bg-crypto-orange rounded-full mr-2"
                              style={{ width: holding.allocation.replace('%', '') + '%' }}
                            ></div>
                            <span className="text-sm text-gray-400">{holding.name} ({holding.allocation})</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </section>
          </div>
          
          {/* Sidebar (Right Side) */}
          <div className="space-y-6">
            {/* Popular Investments */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white">Popular Investments</h3>
                <Link to="#" className="text-xs text-crypto-purple">View All</Link>
              </div>
              
              <div className="space-y-4">
                {popularInvestments.map(investment => (
                  <div key={investment.id} className="p-3 bg-gray-800/50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <h4 className="text-white font-medium">{investment.name}</h4>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4 text-crypto-green" />
                        <span className="text-crypto-green">{investment.returns}</span>
                      </div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-400">
                      <span>{investment.members} members</span>
                      <span>AUM: {investment.aum}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* SIP Tracker */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white">Your SIPs</h3>
                <button className="text-xs px-3 py-1 bg-crypto-purple/20 text-crypto-purple rounded-full">
                  + Start New SIP
                </button>
              </div>
              
              <div className="space-y-3">
                {topSips.map(sip => (
                  <div key={sip.id} className="p-3 bg-gray-800/50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <h4 className="text-white font-medium">{sip.name}</h4>
                      <div className="flex items-center gap-1">
                        <Percent className="h-4 w-4 text-crypto-green" />
                        <span className="text-crypto-green">{sip.returns}</span>
                      </div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-400">
                      <span>Avg: {sip.averageCost}</span>
                      <span>Total: {sip.investedAmount}</span>
                    </div>
                  </div>
                ))}
                
                <div className="mt-3 pt-3 border-t border-gray-700">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Total Invested</span>
                    <span className="text-white font-medium">₹48,600</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-gray-400">Current Value</span>
                    <span className="text-white font-medium">₹62,784</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-gray-400">Overall Returns</span>
                    <span className="text-crypto-green">₹14,184 (29.2%)</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Learning Resources */}
            <div className="glass-card rounded-xl p-5">
              <h3 className="font-semibold text-white mb-4">Learn About Crypto Funds</h3>
              <div className="space-y-3">
                <div className="flex gap-3 items-center p-2 hover:bg-gray-800/30 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-crypto-purple/20 flex items-center justify-center text-crypto-purple">
                    1
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">Crypto Mutual Funds Basics</h4>
                    <p className="text-xs text-gray-400">5 min read</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center p-2 hover:bg-gray-800/30 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-crypto-purple/20 flex items-center justify-center text-crypto-purple">
                    2
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">SIP vs Lump Sum Investment</h4>
                    <p className="text-xs text-gray-400">7 min read</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center p-2 hover:bg-gray-800/30 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-crypto-purple/20 flex items-center justify-center text-crypto-purple">
                    3
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">Risk Assessment Guide</h4>
                    <p className="text-xs text-gray-400">6 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutualFunds;
