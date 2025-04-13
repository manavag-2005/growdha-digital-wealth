
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  User,
  Wallet,
  FileText,
  CreditCard,
  Share2,
  MessageCircle,
  BarChart,
  Settings,
  LogOut
} from 'lucide-react';

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (route: string) => {
    return path === route || path.startsWith(`${route}/`);
  };

  return (
    <div className="min-h-screen pb-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="w-full md:w-1/4">
            <div className="glass-card rounded-xl p-5 sticky top-24">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-crypto-purple to-crypto-blue flex items-center justify-center text-white text-xl font-bold">
                  U
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-medium">User Name</h3>
                  <p className="text-gray-400 text-sm">user@example.com</p>
                </div>
              </div>
              
              <nav className="space-y-1">
                <Link
                  to="/profile"
                  className={`flex items-center px-3 py-2 rounded-lg ${
                    isActive('/profile') && !isActive('/profile/add-money') && !isActive('/profile/orders') && 
                    !isActive('/profile/bank-details') && !isActive('/profile/refer') && 
                    !isActive('/profile/support') && !isActive('/profile/reports') && !isActive('/profile/settings')
                      ? 'bg-crypto-purple/20 text-crypto-purple'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <User className="h-5 w-5 mr-3" />
                  <span>Profile</span>
                </Link>
                
                <Link
                  to="/profile/add-money"
                  className={`flex items-center px-3 py-2 rounded-lg ${
                    isActive('/profile/add-money')
                      ? 'bg-crypto-purple/20 text-crypto-purple'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Wallet className="h-5 w-5 mr-3" />
                  <span>Add Money</span>
                </Link>
                
                <Link
                  to="/profile/orders"
                  className={`flex items-center px-3 py-2 rounded-lg ${
                    isActive('/profile/orders')
                      ? 'bg-crypto-purple/20 text-crypto-purple'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <FileText className="h-5 w-5 mr-3" />
                  <span>Orders</span>
                </Link>
                
                <Link
                  to="/profile/bank-details"
                  className={`flex items-center px-3 py-2 rounded-lg ${
                    isActive('/profile/bank-details')
                      ? 'bg-crypto-purple/20 text-crypto-purple'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <CreditCard className="h-5 w-5 mr-3" />
                  <span>Bank Details</span>
                </Link>
                
                <Link
                  to="/profile/refer"
                  className={`flex items-center px-3 py-2 rounded-lg ${
                    isActive('/profile/refer')
                      ? 'bg-crypto-purple/20 text-crypto-purple'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Share2 className="h-5 w-5 mr-3" />
                  <span>Refer & Earn</span>
                </Link>
                
                <Link
                  to="/profile/support"
                  className={`flex items-center px-3 py-2 rounded-lg ${
                    isActive('/profile/support')
                      ? 'bg-crypto-purple/20 text-crypto-purple'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <MessageCircle className="h-5 w-5 mr-3" />
                  <span>Support</span>
                </Link>
                
                <Link
                  to="/profile/reports"
                  className={`flex items-center px-3 py-2 rounded-lg ${
                    isActive('/profile/reports')
                      ? 'bg-crypto-purple/20 text-crypto-purple'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <BarChart className="h-5 w-5 mr-3" />
                  <span>Reports</span>
                </Link>
                
                <div className="h-px bg-gray-700 my-3"></div>
                
                <Link
                  to="/profile/settings"
                  className={`flex items-center px-3 py-2 rounded-lg ${
                    isActive('/profile/settings')
                      ? 'bg-crypto-purple/20 text-crypto-purple'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Settings className="h-5 w-5 mr-3" />
                  <span>Settings</span>
                </Link>
                
                <Link
                  to="/logout"
                  className="flex items-center px-3 py-2 rounded-lg text-crypto-red hover:bg-red-900/20"
                >
                  <LogOut className="h-5 w-5 mr-3" />
                  <span>Logout</span>
                </Link>
              </nav>
            </div>
          </div>
          
          {/* Content Area */}
          <div className="w-full md:w-3/4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
