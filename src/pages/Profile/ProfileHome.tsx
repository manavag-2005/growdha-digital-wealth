
import React from 'react';
import { Link } from 'react-router-dom';

const ProfileHome: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="glass-card rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Account Summary</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-xl p-4 text-center">
            <h3 className="text-gray-400 text-sm">Total Balance</h3>
            <p className="text-2xl font-bold text-white mt-2">₹1,42,850</p>
            <Link 
              to="/profile/add-money" 
              className="inline-block mt-3 px-4 py-1.5 text-sm bg-crypto-purple text-white rounded-lg hover:bg-crypto-purple/90"
            >
              Add Money
            </Link>
          </div>
          
          <div className="glass-card rounded-xl p-4 text-center">
            <h3 className="text-gray-400 text-sm">Investments</h3>
            <p className="text-2xl font-bold text-white mt-2">₹38,500</p>
            <Link 
              to="/investment/dashboard" 
              className="inline-block mt-3 px-4 py-1.5 text-sm bg-gray-700 text-white rounded-lg hover:bg-gray-600/90"
            >
              View Details
            </Link>
          </div>
          
          <div className="glass-card rounded-xl p-4 text-center">
            <h3 className="text-gray-400 text-sm">Trading P&L</h3>
            <p className="text-2xl font-bold text-crypto-green mt-2">+₹8,450</p>
            <Link 
              to="/trading/positions" 
              className="inline-block mt-3 px-4 py-1.5 text-sm bg-gray-700 text-white rounded-lg hover:bg-gray-600/90"
            >
              View Positions
            </Link>
          </div>
        </div>
      </div>
      
      <div className="glass-card rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Profile Information</h2>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Full Name</label>
              <div className="bg-gray-800 rounded-lg px-4 py-3 text-white">User Name</div>
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-1">Email Address</label>
              <div className="bg-gray-800 rounded-lg px-4 py-3 text-white">user@example.com</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Phone Number</label>
              <div className="bg-gray-800 rounded-lg px-4 py-3 text-white">+91 98765 43210</div>
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-1">Country</label>
              <div className="bg-gray-800 rounded-lg px-4 py-3 text-white">India</div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm text-gray-400 mb-1">KYC Status</label>
            <div className="bg-crypto-green/20 text-crypto-green rounded-lg px-4 py-3 font-medium">
              Verified
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <Link 
            to="/profile/settings" 
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
          >
            Edit Profile
          </Link>
        </div>
      </div>
      
      <div className="glass-card rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
        
        <div className="space-y-3">
          {[
            { 
              type: 'Purchase', 
              asset: 'Bitcoin (BTC)', 
              amount: '0.0025 BTC', 
              value: '₹4,200', 
              date: '12 Apr 2025', 
              status: 'Completed',
              statusColor: 'green'
            },
            { 
              type: 'SIP', 
              asset: 'Ethereum (ETH)', 
              amount: '0.015 ETH', 
              value: '₹1,500', 
              date: '10 Apr 2025', 
              status: 'Completed',
              statusColor: 'green'
            },
            { 
              type: 'Deposit', 
              asset: 'Indian Rupee', 
              amount: '₹10,000', 
              value: '₹10,000', 
              date: '08 Apr 2025', 
              status: 'Completed',
              statusColor: 'green'
            },
            { 
              type: 'Sell', 
              asset: 'Solana (SOL)', 
              amount: '0.5 SOL', 
              value: '₹3,920', 
              date: '05 Apr 2025', 
              status: 'Completed',
              statusColor: 'green'
            },
          ].map((activity, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex flex-wrap justify-between items-center">
                <div>
                  <h4 className="text-white font-medium">{activity.type}: {activity.asset}</h4>
                  <div className="flex items-center text-sm text-gray-400 mt-1">
                    <span>{activity.amount}</span>
                    <span className="mx-2">•</span>
                    <span>{activity.value}</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-gray-400 text-sm">{activity.date}</div>
                  <div className={`text-crypto-${activity.statusColor} text-sm mt-1`}>{activity.status}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <Link to="/profile/orders" className="text-crypto-purple hover:underline">
            View All Transactions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileHome;
