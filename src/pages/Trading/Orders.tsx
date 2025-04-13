
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Filter,
  ChevronDown,
  Calendar,
  Clock,
  Search,
  Check,
  X,
  AlertCircle,
  Info
} from 'lucide-react';

const openOrders = [
  {
    id: 'order-1',
    symbol: 'BTC-PERP',
    name: 'Bitcoin Perpetual',
    type: 'Limit',
    side: 'Buy',
    price: '₹28,25,000',
    size: '0.12 BTC',
    total: '₹3,39,000',
    filled: '0%',
    status: 'Open',
    created: '13 Apr, 2025 18:45',
    updated: '13 Apr, 2025 18:45'
  },
  {
    id: 'order-2',
    symbol: 'ETH-PERP',
    name: 'Ethereum Perpetual',
    type: 'Stop Limit',
    side: 'Sell',
    price: '₹1,60,000',
    size: '1.8 ETH',
    total: '₹2,88,000',
    filled: '0%',
    status: 'Open',
    triggerPrice: '₹1,58,000',
    created: '13 Apr, 2025 16:30',
    updated: '13 Apr, 2025 16:30'
  }
];

const orderHistory = [
  {
    id: 'hist-1',
    symbol: 'BTC-PERP',
    name: 'Bitcoin Perpetual',
    type: 'Market',
    side: 'Buy',
    price: '₹27,85,230',
    size: '0.15 BTC',
    total: '₹4,17,784',
    filled: '100%',
    status: 'Filled',
    created: '12 Apr, 2025 14:32',
    completed: '12 Apr, 2025 14:32',
    fee: '₹1,042'
  },
  {
    id: 'hist-2',
    symbol: 'ETH-PERP',
    name: 'Ethereum Perpetual',
    type: 'Limit',
    side: 'Short',
    price: '₹1,58,480',
    size: '2.5 ETH',
    total: '₹3,96,200',
    filled: '100%',
    status: 'Filled',
    created: '11 Apr, 2025 10:15',
    completed: '11 Apr, 2025 10:18',
    fee: '₹990'
  },
  {
    id: 'hist-3',
    symbol: 'SOL-PERP',
    name: 'Solana Perpetual',
    type: 'Stop Market',
    side: 'Buy',
    price: '₹7,680',
    size: '15 SOL',
    total: '₹1,15,200',
    filled: '100%',
    status: 'Filled',
    triggerPrice: '₹7,700',
    created: '10 Apr, 2025 08:45',
    completed: '10 Apr, 2025 09:12',
    fee: '₹288'
  },
  {
    id: 'hist-4',
    symbol: 'BNB-PERP',
    name: 'BNB Perpetual',
    type: 'Limit',
    side: 'Sell',
    price: '₹24,650',
    size: '1.2 BNB',
    total: '₹29,580',
    filled: '100%',
    status: 'Filled',
    created: '9 Apr, 2025 15:20',
    completed: '9 Apr, 2025 15:25',
    fee: '₹74'
  },
  {
    id: 'hist-5',
    symbol: 'ADA-PERP',
    name: 'Cardano Perpetual',
    type: 'Limit',
    side: 'Sell',
    price: '₹45.32',
    size: '1,000 ADA',
    total: '₹45,320',
    filled: '0%',
    status: 'Canceled',
    created: '8 Apr, 2025 11:05',
    canceled: '8 Apr, 2025 11:45',
    fee: '₹0'
  }
];

const orders = {
  total: 7,
  open: 2,
  completed: 4, 
  canceled: 1
};

const Orders: React.FC = () => {
  const [activeTab, setActiveTab] = useState('open');
  const [searchQuery, setSearchQuery] = useState('');
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedOrderDetails, setSelectedOrderDetails] = useState<any>(null);

  const openOrderDetails = (order: any) => {
    setSelectedOrderDetails(order);
    setShowOrderModal(true);
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
            <Link to="/trading/orders" className="px-4 py-4 border-b-2 border-crypto-purple text-white font-medium whitespace-nowrap">
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
            {/* Tab Selector and Search */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex space-x-2">
                <button 
                  className={`px-4 py-2 rounded-lg ${activeTab === 'open' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
                  onClick={() => setActiveTab('open')}
                >
                  Open Orders ({openOrders.length})
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg ${activeTab === 'history' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
                  onClick={() => setActiveTab('history')}
                >
                  Order History
                </button>
              </div>
              
              <div className="w-full md:w-auto flex items-center">
                <div className="relative mr-2 flex-grow md:flex-grow-0 md:w-64">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search orders..."
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
            
            {/* Open Orders Table */}
            {activeTab === 'open' && (
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="p-4 border-b border-gray-700">
                  <h3 className="font-semibold text-white">Open Orders</h3>
                </div>
                
                {openOrders.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-800/50 text-left">
                        <tr>
                          <th className="px-4 py-3 text-sm font-medium text-gray-400">Symbol</th>
                          <th className="px-4 py-3 text-sm font-medium text-gray-400">Type</th>
                          <th className="px-4 py-3 text-sm font-medium text-gray-400">Side</th>
                          <th className="px-4 py-3 text-sm font-medium text-gray-400">Price</th>
                          <th className="px-4 py-3 text-sm font-medium text-gray-400">Size</th>
                          <th className="px-4 py-3 text-sm font-medium text-gray-400">Total</th>
                          <th className="px-4 py-3 text-sm font-medium text-gray-400">Filled</th>
                          <th className="px-4 py-3 text-sm font-medium text-gray-400">Created</th>
                          <th className="px-4 py-3 text-sm font-medium text-gray-400"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {openOrders.map((order) => (
                          <tr key={order.id} className="hover:bg-gray-800/30">
                            <td className="px-4 py-4">
                              <div>
                                <h4 className="font-medium text-white">{order.symbol}</h4>
                                <p className="text-xs text-gray-400">{order.name}</p>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-white">
                              {order.type}
                              {order.triggerPrice && (
                                <p className="text-xs text-gray-400">Trigger: {order.triggerPrice}</p>
                              )}
                            </td>
                            <td className={`px-4 py-4 ${order.side === 'Buy' || order.side === 'Long' ? 'text-crypto-green' : 'text-crypto-red'}`}>
                              {order.side}
                            </td>
                            <td className="px-4 py-4 text-white">{order.price}</td>
                            <td className="px-4 py-4 text-white">{order.size}</td>
                            <td className="px-4 py-4 text-white">{order.total}</td>
                            <td className="px-4 py-4">
                              <div className="flex items-center">
                                <div className="w-12 h-2 bg-gray-700 rounded-full mr-2">
                                  <div 
                                    className="h-full bg-crypto-green rounded-full"
                                    style={{ width: order.filled }}
                                  ></div>
                                </div>
                                <span className="text-white">{order.filled}</span>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center text-xs text-gray-400">
                                <Calendar className="h-3 w-3 mr-1" />
                                <span>{order.created.split(' ')[0]}</span>
                              </div>
                              <div className="flex items-center text-xs text-gray-400 mt-1">
                                <Clock className="h-3 w-3 mr-1" />
                                <span>{order.created.split(' ')[1]}</span>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex space-x-2">
                                <button 
                                  className="px-3 py-1.5 text-xs bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                                  onClick={() => openOrderDetails(order)}
                                >
                                  Details
                                </button>
                                <button className="px-3 py-1.5 text-xs bg-crypto-red text-white rounded-lg hover:bg-crypto-red/90">
                                  Cancel
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <p className="text-gray-400">You don't have any open orders.</p>
                    <button className="mt-4 px-4 py-2 bg-crypto-purple text-white rounded-lg hover:bg-crypto-purple/90">
                      Place New Order
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {/* Order History Table */}
            {activeTab === 'history' && (
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                  <h3 className="font-semibold text-white">Order History</h3>
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
                    <div className="relative">
                      <select className="pl-3 pr-8 py-1.5 border border-gray-700 rounded-lg bg-gray-800 text-white appearance-none focus:ring-crypto-purple focus:border-crypto-purple">
                        <option value="all">All Status</option>
                        <option value="filled">Filled</option>
                        <option value="canceled">Canceled</option>
                        <option value="rejected">Rejected</option>
                      </select>
                      <ChevronDown className="absolute right-2 top-2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-800/50 text-left">
                      <tr>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Symbol</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Type</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Side</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Price</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Size</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Total</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Status</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400">Date</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-400"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {orderHistory.map((order) => (
                        <tr key={order.id} className="hover:bg-gray-800/30">
                          <td className="px-4 py-4">
                            <div>
                              <h4 className="font-medium text-white">{order.symbol}</h4>
                              <p className="text-xs text-gray-400">{order.name}</p>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-white">
                            {order.type}
                            {order.triggerPrice && (
                              <p className="text-xs text-gray-400">Trigger: {order.triggerPrice}</p>
                            )}
                          </td>
                          <td className={`px-4 py-4 ${order.side === 'Buy' || order.side === 'Long' ? 'text-crypto-green' : 'text-crypto-red'}`}>
                            {order.side}
                          </td>
                          <td className="px-4 py-4 text-white">{order.price}</td>
                          <td className="px-4 py-4 text-white">{order.size}</td>
                          <td className="px-4 py-4 text-white">{order.total}</td>
                          <td className="px-4 py-4">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              order.status === 'Filled' 
                                ? 'bg-green-500/20 text-green-500' 
                                : order.status === 'Canceled' 
                                ? 'bg-gray-500/20 text-gray-400'
                                : 'bg-amber-500/20 text-amber-500'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex items-center text-xs text-gray-400">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>{order.created.split(' ')[0]}</span>
                            </div>
                            <div className="flex items-center text-xs text-gray-400 mt-1">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{order.created.split(' ')[1]}</span>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <button 
                              className="px-3 py-1.5 text-xs bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                              onClick={() => openOrderDetails(order)}
                            >
                              Details
                            </button>
                          </td>
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
                  <span className="text-sm text-gray-400">Showing 1-5 of 5 items</span>
                </div>
              </div>
            )}
            
            {/* Order Placement Form */}
            <div className="glass-card rounded-xl p-5">
              <h3 className="font-semibold text-white mb-4">Place New Order</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Select Market</label>
                    <div className="relative">
                      <select className="w-full pl-3 pr-8 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white appearance-none focus:ring-crypto-purple focus:border-crypto-purple">
                        <option value="btc-perp">BTC-PERP</option>
                        <option value="eth-perp">ETH-PERP</option>
                        <option value="sol-perp">SOL-PERP</option>
                        <option value="bnb-perp">BNB-PERP</option>
                        <option value="ada-perp">ADA-PERP</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Order Type</label>
                    <div className="relative">
                      <select className="w-full pl-3 pr-8 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white appearance-none focus:ring-crypto-purple focus:border-crypto-purple">
                        <option value="limit">Limit</option>
                        <option value="market">Market</option>
                        <option value="stop-limit">Stop Limit</option>
                        <option value="stop-market">Stop Market</option>
                        <option value="take-profit">Take Profit</option>
                        <option value="take-profit-limit">Take Profit Limit</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Price</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="0.00"
                        className="w-full pl-3 pr-16 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:ring-crypto-purple focus:border-crypto-purple"
                      />
                      <span className="absolute right-3 top-2 text-gray-400">INR</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Amount</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="0.00"
                        className="w-full pl-3 pr-16 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:ring-crypto-purple focus:border-crypto-purple"
                      />
                      <span className="absolute right-3 top-2 text-gray-400">BTC</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex">
                    <button className="flex-1 py-2 bg-crypto-green text-white rounded-l-lg font-medium">Buy/Long</button>
                    <button className="flex-1 py-2 bg-gray-800 text-gray-400 rounded-r-lg font-medium">Sell/Short</button>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Total</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="0.00"
                        className="w-full pl-3 pr-16 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:ring-crypto-purple focus:border-crypto-purple"
                        readOnly
                      />
                      <span className="absolute right-3 top-2 text-gray-400">INR</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="flex justify-between">
                      <span className="text-gray-400 text-sm">Leverage</span>
                      <span className="text-white text-sm">5x</span>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      step="1"
                      defaultValue="5"
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>1x</span>
                      <span>25x</span>
                      <span>50x</span>
                      <span>75x</span>
                      <span>100x</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <button className="w-full py-3 bg-crypto-green text-white rounded-lg font-medium hover:bg-crypto-green/90">
                      Buy BTC
                    </button>
                    
                    <p className="text-xs text-gray-400 text-center">
                      Available Balance: <span className="text-white">₹3,58,450</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar (Right Side) */}
          <div className="space-y-6">
            {/* Order Statistics */}
            <div className="glass-card rounded-xl p-5">
              <h3 className="font-semibold text-white mb-4">Order Statistics</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="glass-card p-3 rounded-lg text-center">
                  <div className="text-2xl text-white font-medium">{orders.total}</div>
                  <span className="text-xs text-gray-400">Total Orders</span>
                </div>
                <div className="glass-card p-3 rounded-lg text-center">
                  <div className="text-2xl text-white font-medium">{orders.open}</div>
                  <span className="text-xs text-gray-400">Open Orders</span>
                </div>
                <div className="glass-card p-3 rounded-lg text-center">
                  <div className="text-2xl text-crypto-green font-medium">{orders.completed}</div>
                  <span className="text-xs text-gray-400">Completed</span>
                </div>
                <div className="glass-card p-3 rounded-lg text-center">
                  <div className="text-2xl text-gray-400 font-medium">{orders.canceled}</div>
                  <span className="text-xs text-gray-400">Canceled</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-700">
                <h4 className="text-white text-sm font-medium mb-2">Recent Activity</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-gray-800/30 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-700 mr-2 flex items-center justify-center text-xs">
                        BT
                      </div>
                      <div>
                        <h5 className="text-white text-sm">BTC-PERP</h5>
                        <p className="text-xs text-gray-400">Buy • Market</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-sm">₹4,17,784</p>
                      <p className="text-xs text-gray-400">12 Apr</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-2 bg-gray-800/30 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-700 mr-2 flex items-center justify-center text-xs">
                        ET
                      </div>
                      <div>
                        <h5 className="text-white text-sm">ETH-PERP</h5>
                        <p className="text-xs text-gray-400">Short • Limit</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-sm">₹3,96,200</p>
                      <p className="text-xs text-gray-400">11 Apr</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-2 bg-gray-800/30 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-700 mr-2 flex items-center justify-center text-xs">
                        SO
                      </div>
                      <div>
                        <h5 className="text-white text-sm">SOL-PERP</h5>
                        <p className="text-xs text-gray-400">Buy • Stop Market</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-sm">₹1,15,200</p>
                      <p className="text-xs text-gray-400">10 Apr</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Order Types Guide */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white">Order Types</h3>
                <Info className="h-4 w-4 text-gray-400" />
              </div>
              
              <div className="space-y-3">
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <h4 className="text-white text-sm font-medium mb-1">Limit Order</h4>
                  <p className="text-xs text-gray-400">Buy or sell at your specified price or better.</p>
                </div>
                
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <h4 className="text-white text-sm font-medium mb-1">Market Order</h4>
                  <p className="text-xs text-gray-400">Execute immediately at the current market price.</p>
                </div>
                
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <h4 className="text-white text-sm font-medium mb-1">Stop Limit</h4>
                  <p className="text-xs text-gray-400">Place a limit order when price reaches trigger price.</p>
                </div>
                
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <h4 className="text-white text-sm font-medium mb-1">Stop Market</h4>
                  <p className="text-xs text-gray-400">Place a market order when price reaches trigger price.</p>
                </div>
                
                <button className="w-full py-2 text-sm text-crypto-purple">
                  View All Order Types →
                </button>
              </div>
            </div>
            
            {/* Fee Schedule */}
            <div className="glass-card rounded-xl p-5">
              <h3 className="font-semibold text-white mb-4">Fee Schedule</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Maker Fee</span>
                  <span className="text-white">0.02%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Taker Fee</span>
                  <span className="text-white">0.05%</span>
                </div>
                <div className="h-px bg-gray-700 my-2"></div>
                <div className="text-xs text-gray-400">
                  Higher trading volume qualifies for lower fees. View our tier-based fee structure for more details.
                </div>
                <button className="text-xs text-crypto-purple">
                  View Complete Fee Schedule →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Order Details Modal */}
      {showOrderModal && selectedOrderDetails && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowOrderModal(false)}></div>
          <div className="glass-card rounded-xl w-full max-w-2xl z-10 relative">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-white">Order Details</h2>
                  <p className="text-gray-400 text-sm">Order ID: {selectedOrderDetails.id}</p>
                </div>
                <button 
                  className="text-gray-400 hover:text-white"
                  onClick={() => setShowOrderModal(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="space-y-4">
                    <div>
                      <span className="text-gray-400 text-sm">Symbol</span>
                      <p className="text-white mt-1">{selectedOrderDetails.symbol}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm">Type</span>
                      <p className="text-white mt-1">{selectedOrderDetails.type}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm">Side</span>
                      <p className={`mt-1 ${selectedOrderDetails.side === 'Buy' || selectedOrderDetails.side === 'Long' ? 'text-crypto-green' : 'text-crypto-red'}`}>
                        {selectedOrderDetails.side}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm">Price</span>
                      <p className="text-white mt-1">{selectedOrderDetails.price}</p>
                    </div>
                    {selectedOrderDetails.triggerPrice && (
                      <div>
                        <span className="text-gray-400 text-sm">Trigger Price</span>
                        <p className="text-white mt-1">{selectedOrderDetails.triggerPrice}</p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <div className="space-y-4">
                    <div>
                      <span className="text-gray-400 text-sm">Size</span>
                      <p className="text-white mt-1">{selectedOrderDetails.size}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm">Total</span>
                      <p className="text-white mt-1">{selectedOrderDetails.total}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm">Filled</span>
                      <p className="text-white mt-1">{selectedOrderDetails.filled}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm">Status</span>
                      <p className="mt-1">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          selectedOrderDetails.status === 'Filled' 
                            ? 'bg-green-500/20 text-green-500' 
                            : selectedOrderDetails.status === 'Canceled' 
                            ? 'bg-gray-500/20 text-gray-400'
                            : 'bg-amber-500/20 text-amber-500'
                        }`}>
                          {selectedOrderDetails.status}
                        </span>
                      </p>
                    </div>
                    {selectedOrderDetails.fee && (
                      <div>
                        <span className="text-gray-400 text-sm">Fee</span>
                        <p className="text-white mt-1">{selectedOrderDetails.fee}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-white font-medium mb-3">Timeline</h3>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-8 h-8 rounded-full bg-crypto-purple flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div className="h-full w-0.5 bg-gray-700 my-1"></div>
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-medium">Order Created</h4>
                      <p className="text-gray-400 text-xs mt-1">{selectedOrderDetails.created}</p>
                    </div>
                  </div>
                  
                  {selectedOrderDetails.status === 'Filled' && (
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-8 h-8 rounded-full bg-crypto-green flex items-center justify-center">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-medium">Order Filled</h4>
                        <p className="text-gray-400 text-xs mt-1">{selectedOrderDetails.completed}</p>
                      </div>
                    </div>
                  )}
                  
                  {selectedOrderDetails.status === 'Canceled' && (
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                          <X className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-medium">Order Canceled</h4>
                        <p className="text-gray-400 text-xs mt-1">{selectedOrderDetails.canceled}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {selectedOrderDetails.status === 'Open' && (
                <div className="mt-6 flex justify-between items-center">
                  <div className="flex items-center text-amber-500">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span className="text-sm">This order is still active.</span>
                  </div>
                  <button 
                    className="px-4 py-2 bg-crypto-red text-white rounded-lg hover:bg-crypto-red/90"
                  >
                    Cancel Order
                  </button>
                </div>
              )}
              
              {selectedOrderDetails.status !== 'Open' && (
                <div className="mt-6 text-center">
                  <button 
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                    onClick={() => setShowOrderModal(false)}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
