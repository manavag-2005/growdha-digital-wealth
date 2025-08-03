
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Bell, Settings, LogOut, ChevronDown } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1A1F2C]/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-gradient">VALUEX</span>
        </Link>
        
        {/* Search Bar */}
        <div className="relative max-w-md w-full hidden md:block mx-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search coins, funds..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-800/50 focus:ring-crypto-purple focus:border-crypto-purple"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Right Side Nav Items */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-800">
            <Bell className="h-5 w-5 text-gray-300" />
          </button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-2 px-2 py-1 rounded-full hover:bg-gray-800">
                <User className="h-5 w-5 text-gray-300" />
                <ChevronDown className="h-4 w-4 text-gray-300" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mr-4 bg-[#212632] border border-gray-700 text-white">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="focus:bg-gray-700">
                <Link to="/profile" className="flex items-center w-full">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-gray-700">
                <Link to="/profile/add-money" className="flex items-center w-full">Add Money</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-gray-700">
                <Link to="/profile/orders" className="flex items-center w-full">Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-gray-700">
                <Link to="/profile/bank-details" className="flex items-center w-full">Bank Details</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-gray-700">
                <Link to="/profile/refer" className="flex items-center w-full">Refer & Earn</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-gray-700">
                <Link to="/profile/support" className="flex items-center w-full">Support</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="focus:bg-gray-700">
                <Link to="/settings" className="flex items-center w-full">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-gray-700">
                <Link to="/logout" className="flex items-center w-full text-crypto-red">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
