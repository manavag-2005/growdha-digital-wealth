
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  TrendingDown,
  BarChart2,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  DollarSign,
  AlertCircle,
  Clock,
  Filter
} from 'lucide-react';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const portfolioData = {
  totalValue: '₹1,24,500',
  invested: '₹95,000',
  profit: '₹29,500',
  profitPercentage: '31.05%',
  monthlyChange: '+5.2%',
  holdings: [
    { 
      name: 'Bitcoin', 
      symbol: 'BTC', 
      value: '₹42,000', 
      allocation: '33.7%', 
      profit: '₹12,000', 
      profitPercentage: '40%', 
      trend: 'up' 
    },
    { 
      name: 'Ethereum', 
      symbol: 'ETH', 
      value: '₹28,500', 
      allocation: '22.9%', 
      profit: '₹8,500', 
      profitPercentage: '42.5%', 
      trend: 'up' 
    },
    { 
      name: 'Binance Coin', 
      symbol: 'BNB', 
      value: '₹18,000', 
      allocation: '14.5%', 
      profit: '₹3,000', 
      profitPercentage: '20%', 
      trend: 'up' 
    },
    { 
      name: 'Solana', 
      symbol: 'SOL', 
      value: '₹14,000', 
      allocation: '11.2%', 
      profit: '₹4,000', 
      profitPercentage: '40%', 
      trend: 'up' 
    },
    { 
      name: 'Cardano', 
      symbol: 'ADA', 
      value: '₹8,000', 
      allocation: '6.4%', 
      profit: '₹-800', 
      profitPercentage: '-9.1%', 
      trend: 'down' 
    },
    { 
      name: 'DeFi Index', 
      symbol: 'DEFI', 
      value: '₹14,000', 
      allocation: '11.2%', 
      profit: '₹2,800', 
      profitPercentage: '25%', 
      trend: 'up' 
    }
  ]
};

const transactionHistory = [
  { 
    type: 'buy', 
    asset: 'Bitcoin', 
    symbol: 'BTC', 
    amount: '0.012 BTC', 
    value: '₹18,000', 
    date: '2 days ago', 
    status: 'completed' 
  },
  { 
    type: 'sell', 
    asset: 'Ethereum', 
    symbol: 'ETH', 
    amount: '0.25 ETH', 
    value: '₹12,000', 
    date: '5 days ago', 
    status: 'completed' 
  },
  { 
    type: 'buy', 
    asset: 'Solana', 
    symbol: 'SOL', 
    amount: '2.5 SOL', 
    value: '₹6,000', 
    date: '7 days ago', 
    status: 'completed' 
  },
  { 
    type: 'buy', 
    asset: 'DeFi Index', 
    symbol: 'DEFI', 
    amount: '1.8 DEFI', 
    value: '₹5,400', 
    date: '12 days ago', 
    status: 'completed' 
  },
  { 
    type: 'sell', 
    asset: 'Cardano', 
    symbol: 'ADA', 
    amount: '120 ADA', 
    value: '₹3,600', 
    date: '15 days ago', 
    status: 'completed' 
  }
];

const activeSips = [
  { 
    name: 'Bitcoin SIP', 
    amount: '₹2,000', 
    frequency: 'Monthly', 
    nextDate: '15 Apr, 2025', 
    totalInvested: '₹24,000', 
    returns: '+15.2%' 
  },
  { 
    name: 'Ethereum SIP', 
    amount: '₹1,500', 
    frequency: 'Monthly', 
    nextDate: '20 Apr, 2025', 
    totalInvested: '₹18,000', 
    returns: '+22.8%' 
  },
  { 
    name: 'Crypto Blue Chip', 
    amount: '₹3,000', 
    frequency: 'Monthly', 
    nextDate: '5 May, 2025', 
    totalInvested: '₹12,000', 
    returns: '+8.7%' 
  }
];

const Dashboard: React.FC = () => {
  const [timeFilter, setTimeFilter] = useState('1Y');

  return (
    <div className="min-h-screen pb-16">
      {/* Navigation Tabs */}
      <div className="bg-[#212632] border-b border-gray-700 sticky top-16 z-40">
        <div className="container mx-auto">
          <div className="flex overflow-x-auto no-scrollbar">
            <Link to="/investment" className="px-4 py-4 border-b-2 border-transparent text-gray-400 hover:text-white font-medium whitespace-nowrap">
              Home
            </Link>
            <Link to="/investment/mutual-funds" className="px-4 py-4 border-b-2 border-transparent text-gray-400 hover:text-white font-medium whitespace-nowrap">
              Mutual Funds
            </Link>
            <Link to="/investment/dashboard" className="px-4 py-4 border-b-2 border-crypto-purple text-white font-medium whitespace-nowrap">
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
        {/* Portfolio Summary */}
        <section className="glass-card rounded-xl p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold text-white">Portfolio Summary</h2>
              <p className="text-gray-400 text-sm">Track all your crypto investments</p>
            </div>
            <div className="flex mt-4 md:mt-0">
              <button 
                className={`px-3 py-1 text-sm rounded-full mr-2 ${timeFilter === '1M' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
                onClick={() => setTimeFilter('1M')}
              >
                1M
              </button>
              <button 
                className={`px-3 py-1 text-sm rounded-full mr-2 ${timeFilter === '3M' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
                onClick={() => setTimeFilter('3M')}
              >
                3M
              </button>
              <button 
                className={`px-3 py-1 text-sm rounded-full mr-2 ${timeFilter === '6M' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
                onClick={() => setTimeFilter('6M')}
              >
                6M
              </button>
              <button 
                className={`px-3 py-1 text-sm rounded-full ${timeFilter === '1Y' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
                onClick={() => setTimeFilter('1Y')}
              >
                1Y
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="col-span-1 lg:col-span-2">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="glass-card p-4 rounded-lg">
                  <span className="text-gray-400 text-sm">Total Value</span>
                  <div className="flex items-end justify-between mt-1">
                    <h3 className="text-white text-xl font-bold">{portfolioData.totalValue}</h3>
                    <span className="text-crypto-green text-sm font-medium">{portfolioData.monthlyChange}</span>
                  </div>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <span className="text-gray-400 text-sm">Total Invested</span>
                  <div className="flex items-end justify-between mt-1">
                    <h3 className="text-white text-xl font-bold">{portfolioData.invested}</h3>
                    <span className="text-gray-400 text-sm">Amount</span>
                  </div>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <span className="text-gray-400 text-sm">Total Profit</span>
                  <div className="flex items-end justify-between mt-1">
                    <h3 className="text-crypto-green text-xl font-bold">{portfolioData.profit}</h3>
                    <span className="text-crypto-green text-sm font-medium">{portfolioData.profitPercentage}</span>
                  </div>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <span className="text-gray-400 text-sm">Active SIPs</span>
                  <div className="flex items-end justify-between mt-1">
                    <h3 className="text-white text-xl font-bold">{activeSips.length}</h3>
                    <span className="text-gray-400 text-sm">₹6,500/month</span>
                  </div>
                </div>
              </div>
              
              <div className="h-48 bg-gray-800/50 rounded-lg flex items-center justify-center">
                <BarChart2 className="h-12 w-12 text-gray-600" />
                <span className="ml-2 text-gray-500">Portfolio growth chart will appear here</span>
              </div>
            </div>
            
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-white font-medium mb-4">Asset Allocation</h3>
              <div className="flex items-center mb-6">
                <div className="w-32 h-32 bg-gray-800/50 rounded-full flex items-center justify-center mr-6">
                  <PieChart className="h-12 w-12 text-gray-600" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {portfolioData.holdings.map((holding, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-2 ${index % 5 === 0 ? 'bg-crypto-purple' : index % 5 === 1 ? 'bg-crypto-blue' : index % 5 === 2 ? 'bg-crypto-green' : index % 5 === 3 ? 'bg-crypto-orange' : 'bg-crypto-red'}`}></div>
                      <span className="text-sm text-gray-400">{holding.name} ({holding.allocation})</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-white font-medium">Top Performers</h3>
                  <button className="text-xs text-crypto-purple">See All</button>
                </div>
                <div className="space-y-2">
                  {portfolioData.holdings
                    .filter(holding => holding.trend === 'up')
                    .sort((a, b) => parseFloat(b.profitPercentage) - parseFloat(a.profitPercentage))
                    .slice(0, 2)
                    .map((holding, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-gray-800/30 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gray-700 mr-2 flex items-center justify-center text-xs">
                            {holding.symbol.slice(0, 2)}
                          </div>
                          <div>
                            <h4 className="text-white text-sm font-medium">{holding.name}</h4>
                            <p className="text-xs text-gray-400">{holding.value}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-crypto-green">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            <span>{holding.profitPercentage}</span>
                          </div>
                          <p className="text-xs text-crypto-green">{holding.profit}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Portfolio Details */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-xl p-6 mb-6">
              <Tabs defaultValue="holdings">
                <TabsList className="bg-gray-800/70 w-full grid grid-cols-3 mb-4">
                  <TabsTrigger value="holdings">Holdings</TabsTrigger>
                  <TabsTrigger value="transactions">Transactions</TabsTrigger>
                  <TabsTrigger value="sips">SIPs</TabsTrigger>
                </TabsList>
                
                <TabsContent value="holdings">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="text-xs uppercase bg-gray-800/50 text-gray-400">
                        <tr>
                          <th className="px-4 py-3">Asset</th>
                          <th className="px-4 py-3">Holding Value</th>
                          <th className="px-4 py-3">Allocation</th>
                          <th className="px-4 py-3">Profit/Loss</th>
                          <th className="px-4 py-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {portfolioData.holdings.map((holding, index) => (
                          <tr key={index} className="hover:bg-gray-800/30">
                            <td className="px-4 py-3">
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-700 mr-2 flex items-center justify-center text-xs">
                                  {holding.symbol.slice(0, 2)}
                                </div>
                                <div>
                                  <h4 className="text-white text-sm font-medium">{holding.name}</h4>
                                  <p className="text-xs text-gray-400">{holding.symbol}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-white">{holding.value}</td>
                            <td className="px-4 py-3 text-white">{holding.allocation}</td>
                            <td className="px-4 py-3">
                              <div className={holding.trend === 'up' ? 'text-crypto-green' : 'text-crypto-red'}>
                                <div className="flex items-center">
                                  {holding.trend === 'up' ? (
                                    <ArrowUpRight className="h-3 w-3 mr-1" />
                                  ) : (
                                    <ArrowDownRight className="h-3 w-3 mr-1" />
                                  )}
                                  <span>{holding.profitPercentage}</span>
                                </div>
                                <p className="text-xs">{holding.profit}</p>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex space-x-2">
                                <button className="px-3 py-1 text-xs bg-crypto-green text-white rounded-md hover:bg-crypto-green/90">
                                  Buy
                                </button>
                                <button className="px-3 py-1 text-xs bg-crypto-red text-white rounded-md hover:bg-crypto-red/90">
                                  Sell
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
                
                <TabsContent value="transactions">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="text-xs uppercase bg-gray-800/50 text-gray-400">
                        <tr>
                          <th className="px-4 py-3">Type</th>
                          <th className="px-4 py-3">Asset</th>
                          <th className="px-4 py-3">Amount</th>
                          <th className="px-4 py-3">Value</th>
                          <th className="px-4 py-3">Date</th>
                          <th className="px-4 py-3">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {transactionHistory.map((transaction, index) => (
                          <tr key={index} className="hover:bg-gray-800/30">
                            <td className="px-4 py-3">
                              <span className={`px-2 py-1 text-xs rounded-full ${transaction.type === 'buy' ? 'bg-crypto-green/20 text-crypto-green' : 'bg-crypto-red/20 text-crypto-red'}`}>
                                {transaction.type === 'buy' ? 'BUY' : 'SELL'}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-700 mr-2 flex items-center justify-center text-xs">
                                  {transaction.symbol.slice(0, 2)}
                                </div>
                                <div>
                                  <h4 className="text-white text-sm font-medium">{transaction.asset}</h4>
                                  <p className="text-xs text-gray-400">{transaction.symbol}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-white">{transaction.amount}</td>
                            <td className="px-4 py-3 text-white">{transaction.value}</td>
                            <td className="px-4 py-3 text-gray-400">{transaction.date}</td>
                            <td className="px-4 py-3">
                              <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-500">
                                {transaction.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
                
                <TabsContent value="sips">
                  <div className="space-y-4">
                    {activeSips.map((sip, index) => (
                      <div key={index} className="bg-gray-800/30 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-white font-medium">{sip.name}</h4>
                            <div className="flex items-center mt-1">
                              <DollarSign className="h-4 w-4 text-gray-400 mr-1" />
                              <span className="text-gray-400 text-sm">{sip.amount} {sip.frequency}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-crypto-green">{sip.returns}</div>
                            <div className="flex items-center text-xs text-gray-400 mt-1">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>Next: {sip.nextDate}</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-700 flex justify-between">
                          <span className="text-sm text-gray-400">Total Invested: {sip.totalInvested}</span>
                          <div className="flex space-x-2">
                            <button className="px-3 py-1 text-xs bg-gray-700 text-white rounded-md hover:bg-gray-600">
                              Edit
                            </button>
                            <button className="px-3 py-1 text-xs bg-gray-700 text-white rounded-md hover:bg-gray-600">
                              Pause
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <button className="w-full py-2 border border-dashed border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-gray-400 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Start New SIP
                    </button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Performance Card */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white">Performance</h3>
                <Filter className="h-4 w-4 text-gray-400" />
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Today</span>
                  <span className="text-crypto-green">+₹2,450 (1.9%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">This Week</span>
                  <span className="text-crypto-green">+₹5,200 (4.2%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">This Month</span>
                  <span className="text-crypto-green">+₹12,800 (10.3%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">This Year</span>
                  <span className="text-crypto-green">+₹29,500 (31.1%)</span>
                </div>
                
                <div className="h-px bg-gray-700 my-3"></div>
                
                <div>
                  <h4 className="text-white text-sm font-medium mb-2">Best Performing</h4>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-gray-700 mr-2 flex items-center justify-center text-xs">
                        ET
                      </div>
                      <span className="text-white text-sm">Ethereum</span>
                    </div>
                    <span className="text-crypto-green">+42.5%</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white text-sm font-medium mb-2">Worst Performing</h4>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-gray-700 mr-2 flex items-center justify-center text-xs">
                        AD
                      </div>
                      <span className="text-white text-sm">Cardano</span>
                    </div>
                    <span className="text-crypto-red">-9.1%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pending Actions */}
            <div className="glass-card rounded-xl p-5">
              <h3 className="font-semibold text-white mb-4">Pending Actions</h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <h4 className="text-white text-sm font-medium">Complete KYC</h4>
                    <p className="text-xs text-gray-400 mt-1">Complete KYC to increase your transaction limits</p>
                    <button className="mt-2 px-3 py-1 text-xs bg-amber-500/20 text-amber-500 rounded-full">
                      Complete Now
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg">
                  <Clock className="h-5 w-5 text-crypto-purple mt-0.5" />
                  <div>
                    <h4 className="text-white text-sm font-medium">Verify Bank Account</h4>
                    <p className="text-xs text-gray-400 mt-1">Add your bank details for seamless withdrawals</p>
                    <button className="mt-2 px-3 py-1 text-xs bg-crypto-purple/20 text-crypto-purple rounded-full">
                      Verify Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Activity Calendar */}
            <div className="glass-card rounded-xl p-5">
              <h3 className="font-semibold text-white mb-4">Activity Calendar</h3>
              <div className="bg-gray-800/50 p-4 rounded-lg flex items-center justify-center h-48">
                <Calendar className="h-12 w-12 text-gray-600" />
                <span className="ml-2 text-gray-500">Calendar will appear here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
