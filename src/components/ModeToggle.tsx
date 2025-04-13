
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpDown } from 'lucide-react';

const ModeToggle: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  
  const isInvestment = path.startsWith('/investment');
  const isTrading = path.startsWith('/trading');
  
  // If not in either mode, don't show the toggle
  if (!isInvestment && !isTrading) {
    return null;
  }
  
  const targetPath = isInvestment ? '/trading' : '/investment';
  const targetText = isInvestment ? 'Switch to Trading' : 'Switch to Investment';
  const color = isInvestment ? 'crypto-orange' : 'crypto-purple';
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link 
        to={targetPath}
        className={`flex items-center space-x-2 px-4 py-2.5 rounded-full bg-${color} text-white shadow-lg hover:bg-opacity-90 transition-all`}
      >
        <ArrowUpDown className="h-4 w-4" />
        <span>{targetText}</span>
      </Link>
    </div>
  );
};

export default ModeToggle;
