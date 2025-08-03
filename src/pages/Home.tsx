
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, LineChart, ExternalLink, ArrowRight, Shield, BarChart4, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with 3D effect */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-crypto-purple/30 via-transparent to-transparent opacity-40"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-crypto-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-crypto-purple/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <div className="transform hover:scale-105 transition-transform duration-500">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient drop-shadow-lg">
              Build Your Digital Wealth
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Invest and trade in cryptocurrencies with confidence. Simple, secure, and designed for everyone.
          </p>
          
          {/* Features stacked vertically */}
          <div className="flex flex-col gap-8 max-w-4xl mx-auto">
            {/* Investment Card with 3D effect */}
            <Link 
              to="/investment" 
              className="group block p-8 rounded-2xl glass-card transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_-15px_rgba(155,135,245,0.5)] transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-crypto-purple to-crypto-blue flex items-center justify-center shadow-xl">
                  <LineChart className="h-10 w-10 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-semibold mb-4 text-white">Investment</h3>
                  <p className="text-gray-400 mb-6 text-lg">
                    Build long-term wealth with our curated crypto indices, mutual funds, and SIPs.
                  </p>
                  <div className="flex items-center justify-center md:justify-start text-crypto-purple group-hover:text-white transition-colors">
                    <span className="mr-2">Get Started</span>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Trading Card with 3D effect */}
            <Link 
              to="/trading" 
              className="group block p-8 rounded-2xl glass-card transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_-15px_rgba(249,115,22,0.5)] transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-crypto-orange to-crypto-red flex items-center justify-center shadow-xl">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-semibold mb-4 text-white">Trading</h3>
                  <p className="text-gray-400 mb-6 text-lg">
                    Trade cryptocurrencies with advanced tools, futures, and real-time market data.
                  </p>
                  <div className="flex items-center justify-center md:justify-start text-crypto-orange group-hover:text-white transition-colors">
                    <span className="mr-2">Start Trading</span>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* New Feature Card with 3D effect */}
            <Link 
              to="/profile" 
              className="group block p-8 rounded-2xl glass-card transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_-15px_rgba(34,197,94,0.5)] transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-xl">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-semibold mb-4 text-white">Profile Management</h3>
                  <p className="text-gray-400 mb-6 text-lg">
                    Manage your profile, track your investments, and customize your experience.
                  </p>
                  <div className="flex items-center justify-center md:justify-start text-green-400 group-hover:text-white transition-colors">
                    <span className="mr-2">Explore Profile</span>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stats Section with 3D effect */}
      <section className="bg-[#151923] py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1F2C]/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 glass-card rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_5px_15px_rgba(155,135,245,0.3)]">
              <p className="text-3xl font-bold text-crypto-purple mb-2">₹500 Cr+</p>
              <p className="text-gray-400">Assets Managed</p>
            </div>
            <div className="p-6 glass-card rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_5px_15px_rgba(59,130,246,0.3)]">
              <p className="text-3xl font-bold text-crypto-blue mb-2">200+</p>
              <p className="text-gray-400">Cryptocurrencies</p>
            </div>
            <div className="p-6 glass-card rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_5px_15px_rgba(249,115,22,0.3)]">
              <p className="text-3xl font-bold text-crypto-orange mb-2">5M+</p>
              <p className="text-gray-400">Users</p>
            </div>
            <div className="p-6 glass-card rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_5px_15px_rgba(34,197,94,0.3)]">
              <p className="text-3xl font-bold text-crypto-green mb-2">24/7</p>
              <p className="text-gray-400">Customer Support</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Highlights with 3D effect */}
      <section className="py-16 bg-[#1A1F2C] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#151923] to-transparent"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-crypto-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-crypto-blue/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose <span className="text-gradient">ValueX</span></h2>
          
          <div className="flex flex-col gap-8">
            <div className="p-6 glass-card rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_10px_30px_-15px_rgba(155,135,245,0.4)]">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="h-16 w-16 rounded-lg bg-crypto-purple/20 flex items-center justify-center mb-4 md:mb-0">
                  <Shield className="h-8 w-8 text-crypto-purple" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2 text-white">Bank-Level Security</h3>
                  <p className="text-gray-400">Your assets are protected with industry-leading security protocols and insurance coverage.</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 glass-card rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_10px_30px_-15px_rgba(59,130,246,0.4)]">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="h-16 w-16 rounded-lg bg-crypto-blue/20 flex items-center justify-center mb-4 md:mb-0">
                  <BarChart4 className="h-8 w-8 text-crypto-blue" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2 text-white">Diverse Portfolio</h3>
                  <p className="text-gray-400">Access to 200+ cryptocurrencies and curated index funds for simplified investing.</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 glass-card rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_10px_30px_-15px_rgba(249,115,22,0.4)]">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="h-16 w-16 rounded-lg bg-crypto-orange/20 flex items-center justify-center mb-4 md:mb-0">
                  <ExternalLink className="h-8 w-8 text-crypto-orange" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2 text-white">Expert Insights</h3>
                  <p className="text-gray-400">Real-time market data and expert analysis to help you make informed decisions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
