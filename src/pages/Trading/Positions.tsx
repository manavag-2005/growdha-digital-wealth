
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Filter,
  AlertCircle,
  ChevronDown,
  BarChart2,
  X,
  Check,
  Info,
  Plus,
  Percent
} from 'lucide-react';

const openPositions = [
  {
    id: 'pos-1',
    symbol: 'BTC-PERP',
    name: 'Bitcoin Perpetual',
    type: 'Long',
    size: '0.15 BTC',
    value: '₹4,26,784',
    leverage: '5x',
    entryPrice: '₹27,85,230',
    markPrice: '₹28,45,230',
    liquidationPrice: '₹22,28,184',
    margin: '₹85,357',
    pnl: '₹90,000',
    pnlPercent: '21.08%',
    fundingRate: '0.01%',
    fundingTime: '4h 12m',
    trend: 'up'
  },
  {
    id: 'pos-2',
    symbol: 'ETH-PERP',
    name: 'Ethereum Perpetual',
    type: 'Short',
    size: '2.5 ETH',
    value: '₹3,81,200',
    leverage: '10x',
    entryPrice: '₹1,58,480',
    markPrice: '₹1,52,480',
    liquidationPrice: '₹1,74,328',
    margin: '₹38,120',
    pnl: '₹15,000',
    pnlPercent: '3.93%',
    fundingRate: '0.008%',
    fundingTime: '4h 12m',
    trend: 'up'
  },
  {
    id: 'pos-3',
    symbol: 'SOL-PERP',
    name: 'Solana Perpetual',
    type: 'Long',
    size: '15 SOL',
    value: '₹1,17,600',
    leverage: '3x',
    entryPrice: '₹7,680',
    markPrice: '₹7,840',
    liquidationPrice: '₹5,376',
    margin: '₹39,200',
    pnl: '₹2,400',
    pnlPercent: '2.04%',
    fundingRate: '0.02%',
    fundingTime: '4h 12m',
    trend: 'up'
  }
];

const positionHistory = [
  {
    id: 'hist-1',
    symbol: 'BNB-PERP',
    name: 'BNB Perpetual',
    type: 'Long',
    size: '1.2 BNB',
    entryPrice: '₹23,850',
    exitPrice: '₹24,650',
    pnl: '₹960',
    pnlPercent: '3.35%',
    leverage: '5x',
    closedAt: '12 Apr, 2025 14:23',
    duration: '2d 8h',
    trend: 'up'
  },
  {
    id: 'hist-2',
    symbol: 'ADA-PERP',
    name: 'Cardano Perpetual',
    type: 'Short',
    size: '1,000 ADA',
    entryPrice: '₹48.75',
    exitPrice: '₹45.32',
    pnl: '₹3,430',
    pnlPercent: '7.04%',
    leverage: '10x',
    closedAt: '10 Apr, 2025 09:15',
    duration: '1d 22h',
    trend: 'up'
  },
  {
    id: 'hist-3',
    symbol: 'DOT-PERP',
    name: 'Polkadot Perpetual',
    type: 'Long',
    size: '10 DOT',
    entryPrice: '₹1,280',
    exitPrice: '₹1,240',
    pnl: '-₹400',
    pnlPercent: '-3.13%',
    leverage: '3x',
    closedAt: '8 Apr, 2025 18:51',
    duration: '5h 33m',
    trend: 'down'
  }
];

const positionStats = {
  totalPositions: 3,
  totalValue: '₹9,25,584',
  totalPnl: '₹1,07,400',
  totalPnlPercent: '11.6%',
  totalMargin: '₹1,62,677',
  availableBalance: '₹3,58,450',
  usedMargin: '₹1,62,677',
  marginRatio: '31.2%',
  dailyPnl: '₹48,520',
  dailyPnlPercent: '5.24%'
};

const Positions: React.FC = () => {
  const [activeTab, setActiveTab] = useState('open');
  const [showRiskModal, setShowRiskModal] = useState(false);
  const [sortField, setSortField] = useState('value');
  const [sortDirection, setSortDirection] = useState('desc');

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
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
            <Link to="/trading/positions" className="px-4 py-4 border-b-2 border-crypto-purple text-white font-medium whitespace-nowrap">
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
          {/* Main Content (Left and Middle) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Tab Selector and Total Value */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex space-x-2">
                <button 
                  className={`px-4 py-2 rounded-lg ${activeTab === 'open' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
                  onClick={() => setActiveTab('open')}
                >
                  Open Positions ({openPositions.length})
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg ${activeTab === 'history' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
                  onClick={() => setActiveTab('history')}
                >
                  Position History
                </button>
              </div>
              
              <div className="glass-card p-3 rounded-lg flex items-center">
                <div className="mr-4">
                  <span className="text-gray-400 text-sm">Total PnL</span>
                  <div className="flex items-center text-crypto-green mt-1">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span className="font-medium">{positionStats.totalPnl} ({positionStats.totalPnlPercent})</span>
                  </div>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Total Value</span>
                  <p className="text-white font-medium mt-1">{positionStats.totalValue}</p>
                </div>
              </div>
            </div>
            
            {/* Open Positions Table */}
            {activeTab === 'open' && (
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                  <h3 className="font-semibold text-white">Open Positions</h3>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white">
                      <Filter className="h-5 w-5" />
                    </button>
                    <button className="px-3 py-1.5 text-sm rounded-lg bg-crypto-purple text-white hover:bg-crypto-purple/90 flex items-center">
                      <Plus className="h-4 w-4 mr-1" />
                      New Position
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-800/50 text-left">
                      <tr>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400 cursor-pointer" onClick={() => handleSort('symbol')}>
                          Symbol {sortField === 'symbol' && (sortDirection === 'asc' ? '↑' : '↓')}
                        </th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400 cursor-pointer" onClick={() => handleSort('type')}>
                          Type {sortField === 'type' && (sortDirection === 'asc' ? '↑' : '↓')}
                        </th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400 cursor-pointer" onClick={() => handleSort('size')}>
                          Size {sortField === 'size' && (sortDirection === 'asc' ? '↑' : '↓')}
                        </th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400 cursor-pointer" onClick={() => handleSort('value')}>
                          Value {sortField === 'value' && (sortDirection === 'asc' ? '↑' : '↓')}
                        </th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Entry Price</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Mark Price</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400 cursor-pointer" onClick={() => handleSort('pnl')}>
                          PnL {sortField === 'pnl' && (sortDirection === 'asc' ? '↑' : '↓')}
                        </th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Funding</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {openPositions.map((position) => (
                        <tr key={position.id} className="hover:bg-gray-800/30">
                          <td className="px-4 py-4">
                            <div>
                              <h4 className="font-medium text-white">{position.symbol}</h4>
                              <p className="text-xs text-gray-400">{position.name}</p>
                            </div>
                          </td>
                          <td className={`px-4 py-4 ${position.type === 'Long' ? 'text-crypto-green' : 'text-crypto-red'}`}>
                            {position.type}
                          </td>
                          <td className="px-4 py-4">
                            <div>
                              <p className="text-white">{position.size}</p>
                              <p className="text-xs text-gray-400">{position.leverage} Leverage</p>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-white">{position.value}</td>
                          <td className="px-4 py-4 text-white">{position.entryPrice}</td>
                          <td className="px-4 py-4 text-white">{position.markPrice}</td>
                          <td className={`px-4 py-4 ${position.trend === 'up' ? 'text-crypto-green' : 'text-crypto-red'}`}>
                            <div>
                              <div className="flex items-center">
                                {position.trend === 'up' ? (
                                  <ArrowUpRight className="h-4 w-4 mr-1" />
                                ) : (
                                  <ArrowDownRight className="h-4 w-4 mr-1" />
                                )}
                                <span>{position.pnl}</span>
                              </div>
                              <p className="text-xs">{position.pnlPercent}</p>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <div>
                              <p className="text-white">{position.fundingRate}</p>
                              <div className="flex items-center text-xs text-gray-400">
                                <Clock className="h-3 w-3 mr-1" />
                                <span>in {position.fundingTime}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex space-x-2">
                              <button className="px-3 py-1.5 text-xs bg-gray-700 text-white rounded-lg hover:bg-gray-600">
                                Edit
                              </button>
                              <button className="px-3 py-1.5 text-xs bg-crypto-red text-white rounded-lg hover:bg-crypto-red/90">
                                Close
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="p-4 border-t border-gray-700 flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1 text-amber-500" />
                    <span>Liquidation occurs if your margin ratio falls below the maintenance margin requirement.</span>
                  </div>
                  <button 
                    className="text-crypto-purple hover:underline"
                    onClick={() => setShowRiskModal(true)}
                  >
                    Risk Management
                  </button>
                </div>
              </div>
            )}
            
            {/* Position History Table */}
            {activeTab === 'history' && (
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                  <h3 className="font-semibold text-white">Position History</h3>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <select className="pl-3 pr-8 py-1.5 border border-gray-700 rounded-lg bg-gray-800 text-white appearance-none focus:ring-crypto-purple focus:border-crypto-purple">
                        <option value="7days">Last 7 Days</option>
                        <option value="30days">Last 30 Days</option>
                        <option value="90days">Last 90 Days</option>
                        <option value="all">All Time</option>
                      </select>
                      <ChevronDown className="absolute right-2 top-2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                    <button className="p-2 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white">
                      <Filter className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-800/50 text-left">
                      <tr>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Symbol</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Type</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Size</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Entry Price</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Exit Price</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">PnL</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Duration</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Closed At</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {positionHistory.map((position) => (
                        <tr key={position.id} className="hover:bg-gray-800/30">
                          <td className="px-4 py-4">
                            <div>
                              <h4 className="font-medium text-white">{position.symbol}</h4>
                              <p className="text-xs text-gray-400">{position.name}</p>
                            </div>
                          </td>
                          <td className={`px-4 py-4 ${position.type === 'Long' ? 'text-crypto-green' : 'text-crypto-red'}`}>
                            {position.type}
                          </td>
                          <td className="px-4 py-4">
                            <div>
                              <p className="text-white">{position.size}</p>
                              <p className="text-xs text-gray-400">{position.leverage} Leverage</p>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-white">{position.entryPrice}</td>
                          <td className="px-4 py-4 text-white">{position.exitPrice}</td>
                          <td className={`px-4 py-4 ${position.trend === 'up' ? 'text-crypto-green' : 'text-crypto-red'}`}>
                            <div>
                              <div className="flex items-center">
                                {position.trend === 'up' ? (
                                  <ArrowUpRight className="h-4 w-4 mr-1" />
                                ) : (
                                  <ArrowDownRight className="h-4 w-4 mr-1" />
                                )}
                                <span>{position.pnl}</span>
                              </div>
                              <p className="text-xs">{position.pnlPercent}</p>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-white">{position.duration}</td>
                          <td className="px-4 py-4 text-gray-400">{position.closedAt}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="p-4 border-t border-gray-700 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <button className="px-3 py-1.5 rounded-lg bg-gray-800 text-gray-400">Previous</button>
                    <button className="px-3 py-1.5 rounded-lg bg-crypto-purple text-white">1</button>
                    <button className="px-3 py-1.5 rounded-lg bg-gray-800 text-gray-400">Next</button>
                  </div>
                  <span className="text-sm text-gray-400">Showing 1-3 of 3 items</span>
                </div>
              </div>
            )}
            
            {/* Performance Chart */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white">Performance Chart</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm rounded-full bg-crypto-purple text-white">7D</button>
                  <button className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-400">30D</button>
                  <button className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-400">90D</button>
                  <button className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-400">1Y</button>
                </div>
              </div>
              
              <div className="h-64 bg-gray-800/50 rounded-lg flex items-center justify-center">
                <BarChart2 className="h-12 w-12 text-gray-600" />
                <span className="ml-2 text-gray-500">Performance chart will appear here</span>
              </div>
              
              <div className="flex flex-wrap justify-between mt-4">
                <div className="mt-2 mr-4">
                  <span className="text-gray-400 text-sm">Total PnL</span>
                  <p className="text-crypto-green font-medium">₹1,07,400 (11.6%)</p>
                </div>
                <div className="mt-2 mr-4">
                  <span className="text-gray-400 text-sm">Best Performing</span>
                  <p className="text-white font-medium">BTC-PERP (21.08%)</p>
                </div>
                <div className="mt-2 mr-4">
                  <span className="text-gray-400 text-sm">Worst Performing</span>
                  <p className="text-white font-medium">DOT-PERP (-3.13%)</p>
                </div>
                <div className="mt-2">
                  <span className="text-gray-400 text-sm">Avg. Position Duration</span>
                  <p className="text-white font-medium">1d 12h</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar (Right Side) */}
          <div className="space-y-6">
            {/* Account Summary */}
            <div className="glass-card rounded-xl p-5">
              <h3 className="font-semibold text-white mb-4">Account Summary</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Total Value</span>
                  <span className="text-white">{positionStats.totalValue}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Total PnL</span>
                  <span className="text-crypto-green">{positionStats.totalPnl} ({positionStats.totalPnlPercent})</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Daily PnL</span>
                  <span className="text-crypto-green">{positionStats.dailyPnl} ({positionStats.dailyPnlPercent})</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Available Balance</span>
                  <span className="text-white">{positionStats.availableBalance}</span>
                </div>
                
                <div className="h-px bg-gray-700 my-2"></div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Used Margin</span>
                  <span className="text-white">{positionStats.usedMargin}</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Margin Ratio</span>
                    <span className="text-white">{positionStats.marginRatio}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-crypto-purple rounded-full"
                      style={{ width: positionStats.marginRatio }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-4 py-2 bg-crypto-purple text-white rounded-lg hover:bg-crypto-purple/90">
                Add Margin
              </button>
            </div>
            
            {/* Position Stats */}
            <div className="glass-card rounded-xl p-5">
              <h3 className="font-semibold text-white mb-4">Position Statistics</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="glass-card p-3 rounded-lg text-center">
                  <div className="text-2xl text-white font-medium">{positionStats.totalPositions}</div>
                  <span className="text-xs text-gray-400">Open Positions</span>
                </div>
                <div className="glass-card p-3 rounded-lg text-center">
                  <div className="text-2xl text-white font-medium">₹3.08L</div>
                  <span className="text-xs text-gray-400">Avg. Position Size</span>
                </div>
                <div className="glass-card p-3 rounded-lg text-center">
                  <div className="text-2xl text-white font-medium">6x</div>
                  <span className="text-xs text-gray-400">Avg. Leverage</span>
                </div>
                <div className="glass-card p-3 rounded-lg text-center">
                  <div className="text-2xl text-crypto-green font-medium">67%</div>
                  <span className="text-xs text-gray-400">Win Rate</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-700">
                <h4 className="text-white text-sm font-medium mb-3">Position Allocation</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-crypto-purple mr-2"></div>
                    <span className="text-sm text-gray-400">Bitcoin (46.1%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-crypto-blue mr-2"></div>
                    <span className="text-sm text-gray-400">Ethereum (41.2%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-crypto-green mr-2"></div>
                    <span className="text-sm text-gray-400">Solana (12.7%)</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Risk Management Tips */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white">Risk Management Tips</h3>
                <Info className="h-4 w-4 text-gray-400" />
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-crypto-purple/20 flex items-center justify-center flex-shrink-0 mr-2">
                    <Percent className="h-3 w-3 text-crypto-purple" />
                  </div>
                  <p className="text-gray-400">Don't risk more than 2% of your portfolio on a single position.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-crypto-purple/20 flex items-center justify-center flex-shrink-0 mr-2">
                    <Percent className="h-3 w-3 text-crypto-purple" />
                  </div>
                  <p className="text-gray-400">Use stop-losses to limit potential losses and take-profits to secure gains.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-crypto-purple/20 flex items-center justify-center flex-shrink-0 mr-2">
                    <Percent className="h-3 w-3 text-crypto-purple" />
                  </div>
                  <p className="text-gray-400">Be cautious with high leverage. Higher leverage means higher risk of liquidation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Risk Management Modal */}
      {showRiskModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowRiskModal(false)}></div>
          <div className="glass-card rounded-xl w-full max-w-2xl z-10 relative">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-semibold text-white">Risk Management Guidelines</h2>
                <button 
                  className="text-gray-400 hover:text-white"
                  onClick={() => setShowRiskModal(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="text-crypto-green h-5 w-5 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white mb-1">Position Sizing</h3>
                    <p className="text-gray-400 text-sm">Limit position sizes to 2-5% of your total account balance. This helps prevent catastrophic losses from any single position.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="text-crypto-green h-5 w-5 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white mb-1">Leverage Management</h3>
                    <p className="text-gray-400 text-sm">Use lower leverage (1-5x) for longer-term positions. Higher leverage (>10x) should only be used by experienced traders for short-term positions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="text-crypto-green h-5 w-5 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white mb-1">Stop Loss Orders</h3>
                    <p className="text-gray-400 text-sm">Always set stop-loss orders to limit potential losses. A good practice is to set stop-losses at a level that limits losses to 20-50% of your expected profit.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="text-crypto-green h-5 w-5 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white mb-1">Diversification</h3>
                    <p className="text-gray-400 text-sm">Avoid concentrating all your positions in a single asset or correlated assets. Diversify across different cryptocurrencies and contract types.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="text-crypto-green h-5 w-5 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white mb-1">Liquidation Awareness</h3>
                    <p className="text-gray-400 text-sm">Monitor your liquidation prices and maintain adequate margin. Add more margin if positions approach 80% of the liquidation threshold.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-sm text-amber-500/90">Trading with leverage involves significant risk and can result in the loss of all invested capital. Never trade with funds you cannot afford to lose.</p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button 
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 mr-3"
                  onClick={() => setShowRiskModal(false)}
                >
                  Close
                </button>
                <button 
                  className="px-4 py-2 bg-crypto-purple text-white rounded-lg hover:bg-crypto-purple/90"
                  onClick={() => setShowRiskModal(false)}
                >
                  I Understand
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Positions;
