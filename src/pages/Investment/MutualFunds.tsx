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
    name: 'ValueX 10', 
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
        <div className="flex flex-col gap-8">
          {/* Main Content - Now a single column for all content */}
          <div className="space-y-8">
            {/* Hero Section with 3D effect */}
            <section className="relative overflow-hidden rounded-2xl p-6 glass-card">
              <div className="absolute inset-0 bg-gradient-radial from-crypto-purple/20 via-transparent to-transparent opacity-30"></div>
              <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-crypto-blue/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-crypto-purple/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h1 className="text-3xl font-bold mb-4 text-gradient">Crypto Mutual Funds</h1>
                <p className="text-gray-300 mb-6">Diversify your crypto portfolio with professionally managed baskets. Low fees, high returns.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 glass-card rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_5px_15px_rgba(155,135,245,0.3)]">
                    <p className="text-2xl font-bold text-crypto-purple mb-2">₹500 Cr+</p>
                    <p className="text-gray-400">Assets Managed</p>
                  </div>
                  <div className="p-4 glass-card rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_5px_15px_rgba(59,130,246,0.3)]">
                    <p className="text-2xl font-bold text-crypto-blue mb-2">28.7%</p>
                    <p className="text-gray-400">Avg. Returns</p>
                  </div>
                  <div className="p-4 glass-card rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_5px_15px_rgba(249,115,22,0.3)]">
                    <p className="text-2xl font-bold text-crypto-orange mb-2">24,500+</p>
                    <p className="text-gray-400">Active Investors</p>
                  </div>
                  <div className="p-4 glass-card rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_5px_15px_rgba(34,197,94,0.3)]">
                    <p className="text-2xl font-bold text-crypto-green mb-2">5+</p>
                    <p className="text-gray-400">Basket Types</p>
                  </div>
                </div>
              </div>
            </section>
            
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
              
              <div className="flex flex-col gap-4">
                {baskets.map(basket => (
                  <div 
                    key={basket.id} 
                    className={`glass-card rounded-xl p-6 hover:shadow-[0_10px_40px_-15px_rgba(155,135,245,0.5)] transition-all duration-300 hover:scale-105 hover:border-crypto-purple/50 ${selectedBasket === basket.id ? 'border-crypto-purple' : ''}`}
                    onClick={() => setSelectedBasket(basket.id === selectedBasket ? null : basket.id)}
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-xl text-white">{basket.name}</h3>
                            <p className="text-gray-400">{basket.description}</p>
                          </div>
                          <button className="text-gray-400 hover:text-crypto-purple">
                            <Star className="h-5 w-5" />
                          </button>
                        </div>
                        
                        <div className="flex justify-between items-center mt-4">
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
                          
                          <div className="text-right">
                            <span className="text-sm text-gray-400">Min. Investment</span>
                            <p className="text-white font-medium">{basket.minInvestment}</p>
                          </div>
                        </div>
                      </div>
                      
                      {basket.trend === 'up' ? (
                        <div className="w-24 h-12 bg-gradient-to-r from-transparent to-crypto-green/10 rounded-lg overflow-hidden flex items-end">
                          <div className="h-5 w-1 bg-crypto-green/50 mx-0.5 rounded-t"></div>
                          <div className="h-7 w-1 bg-crypto-green/60 mx-0.5 rounded-t"></div>
                          <div className="h-4 w-1 bg-crypto-green/50 mx-0.5 rounded-t"></div>
                          <div className="h-9 w-1 bg-crypto-green/70 mx-0.5 rounded-t"></div>
                          <div className="h-6 w-1 bg-crypto-green/60 mx-0.5 rounded-t"></div>
                          <div className="h-10 w-1 bg-crypto-green/80 mx-0.5 rounded-t"></div>
                          <div className="h-8 w-1 bg-crypto-green/70 mx-0.5 rounded-t"></div>
                        </div>
                      ) : (
                        <div className="w-24 h-12 bg-gradient-to-r from-transparent to-crypto-red/10 rounded-lg overflow-hidden flex items-end">
                          <div className="h-8 w-1 bg-crypto-red/70 mx-0.5 rounded-t"></div>
                          <div className="h-5 w-1 bg-crypto-red/50 mx-0.5 rounded-t"></div>
                          <div className="h-7 w-1 bg-crypto-red/60 mx-0.5 rounded-t"></div>
                          <div className="h-4 w-1 bg-crypto-red/40 mx-0.5 rounded-t"></div>
                          <div className="h-9 w-1 bg-crypto-red/80 mx-0.5 rounded-t"></div>
                          <div className="h-6 w-1 bg-crypto-red/60 mx-0.5 rounded-t"></div>
                          <div className="h-3 w-1 bg-crypto-red/30 mx-0.5 rounded-t"></div>
                        </div>
                      )}
                    </div>
                    
                    {selectedBasket === basket.id && (
                      <div className="mt-6 pt-4 border-t border-gray-700 animate-fade-in">
                        <h4 className="text-sm font-medium text-white mb-3">Holdings</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {basket.holdings.map(holding => (
                            <div key={holding.symbol} className="flex items-center glass-card p-3 rounded-lg">
                              <div className="w-8 h-8 rounded-full bg-gray-700 mr-2 flex items-center justify-center text-xs font-medium">
                                {holding.symbol}
                              </div>
                              <div>
                                <span className="text-white text-sm">{holding.name}</span>
                                <p className="text-xs text-gray-400">{holding.allocation}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 flex justify-center">
                          <button className="px-6 py-2.5 bg-crypto-purple rounded-lg text-white font-medium hover:bg-crypto-purple/90 transform hover:scale-105 transition-all duration-300 shadow-[0_5px_15px_rgba(155,135,245,0.3)]">
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
            <section className="glass-card rounded-xl p-6 hover:shadow-[0_10px_40px_-15px_rgba(155,135,245,0.3)] transition-all duration-300">
              <Tabs defaultValue="returns">
                <TabsList className="bg-gray-800/70 w-full grid grid-cols-3 mb-6">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            
            {/* Popular Investments */}
            <section className="glass-card rounded-xl p-6 hover:shadow-[0_10px_40px_-15px_rgba(155,135,245,0.3)] transition-all duration-300">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white text-xl">Popular Investments</h3>
                <Link to="#" className="text-sm text-crypto-purple hover:underline">View All</Link>
              </div>
              
              <div className="flex flex-col gap-4">
                {popularInvestments.map(investment => (
                  <div key={investment.id} className="p-4 glass-card rounded-xl transform hover:scale-102 transition-all duration-300">
                    <div className="flex justify-between items-center">
                      <h4 className="text-white font-medium text-lg">{investment.name}</h4>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4 text-crypto-green" />
                        <span className="text-crypto-green font-medium">{investment.returns}</span>
                      </div>
                    </div>
                    <div className="flex justify-between mt-3 text-sm text-gray-400">
                      <span>{investment.members} members</span>
                      <span>AUM: {investment.aum}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* SIP Tracker */}
            <section className="glass-card rounded-xl p-6 hover:shadow-[0_10px_40px_-15px_rgba(155,135,245,0.3)] transition-all duration-300">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white text-xl">Your SIPs</h3>
                <button className="px-4 py-1.5 bg-crypto-purple/20 text-crypto-purple rounded-full text-sm hover:bg-crypto-purple/30 transition-colors">
                  + Start New SIP
                </button>
              </div>
              
              <div className="flex flex-col gap-4">
                {topSips.map(sip => (
                  <div key={sip.id} className="p-4 glass-card rounded-xl transform hover:scale-102 transition-all duration-300">
                    <div className="flex justify-between items-center">
                      <h4 className="text-white font-medium text-lg">{sip.name}</h4>
                      <div className="flex items-center gap-1">
                        <Percent className="h-4 w-4 text-crypto-green" />
                        <span className="text-crypto-green font-medium">{sip.returns}</span>
                      </div>
                    </div>
                    <div className="flex justify-between mt-3 text-sm text-gray-400">
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
            </section>
            
            {/* Learning Resources */}
            <section className="glass-card rounded-xl p-6 hover:shadow-[0_10px_40px_-15px_rgba(155,135,245,0.3)] transition-all duration-300">
              <h3 className="font-semibold text-white text-xl mb-4">Learn About Crypto Funds</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-3 p-4 hover:bg-gray-800/30 rounded-lg transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-crypto-purple/20 flex items-center justify-center text-crypto-purple text-xl font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-medium">Crypto Mutual Funds Basics</h4>
                    <p className="text-sm text-gray-400 mt-1">Learn the fundamentals of crypto funds and how they differ from traditional mutual funds.</p>
                    <p className="text-xs text-crypto-purple mt-2">5 min read</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-4 hover:bg-gray-800/30 rounded-lg transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-crypto-blue/20 flex items-center justify-center text-crypto-blue text-xl font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-medium">SIP vs Lump Sum Investment</h4>
                    <p className="text-sm text-gray-400 mt-1">Compare strategies to find what works best for your financial goals and risk tolerance.</p>
                    <p className="text-xs text-crypto-blue mt-2">7 min read</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-4 hover:bg-gray-800/30 rounded-lg transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-crypto-orange/20 flex items-center justify-center text-crypto-orange text-xl font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-medium">Risk Assessment Guide</h4>
                    <p className="text-sm text-gray-400 mt-1">Understand how to evaluate risk in crypto investments and build a balanced portfolio.</p>
                    <p className="text-xs text-crypto-orange mt-2">6 min read</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutualFunds;
