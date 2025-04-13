
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#151923] border-t border-white/10 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold text-gradient">GROWDHA</Link>
            <p className="mt-4 text-gray-400 text-sm">
              Your trusted platform for crypto investments and trading. Secure, transparent, and user-friendly.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Investment</h3>
            <ul className="space-y-2">
              <li><Link to="/investment" className="text-gray-400 hover:text-white transition-colors">Explore</Link></li>
              <li><Link to="/investment/mutual-funds" className="text-gray-400 hover:text-white transition-colors">Mutual Funds</Link></li>
              <li><Link to="/investment/dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link to="/investment/ico-ido" className="text-gray-400 hover:text-white transition-colors">ICO/IDO</Link></li>
              <li><Link to="/investment/news" className="text-gray-400 hover:text-white transition-colors">News & Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Trading</h3>
            <ul className="space-y-2">
              <li><Link to="/trading" className="text-gray-400 hover:text-white transition-colors">Explore</Link></li>
              <li><Link to="/trading/futures" className="text-gray-400 hover:text-white transition-colors">Futures & Options</Link></li>
              <li><Link to="/trading/positions" className="text-gray-400 hover:text-white transition-colors">Positions</Link></li>
              <li><Link to="/trading/orders" className="text-gray-400 hover:text-white transition-colors">Orders</Link></li>
              <li><Link to="/trading/watchlist" className="text-gray-400 hover:text-white transition-colors">Watchlist</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/profile" className="text-gray-400 hover:text-white transition-colors">My Profile</Link></li>
              <li><Link to="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li>
                <div className="flex items-center text-gray-400">
                  <Phone size={16} className="mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </li>
              <li>
                <div className="flex items-center text-gray-400">
                  <Mail size={16} className="mr-2" />
                  <span>support@growdha.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Growdha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
