
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, LineChart, ExternalLink, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-crypto-purple/20 via-transparent to-transparent opacity-30"></div>
        
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Build Your Digital Wealth
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Invest and trade in cryptocurrencies with confidence. Simple, secure, and designed for everyone.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Investment Card */}
            <Link 
              to="/investment" 
              className="group block p-8 rounded-2xl glass-card transition-all duration-300 hover:scale-105"
            >
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-crypto-purple to-crypto-blue flex items-center justify-center mx-auto mb-6">
                <LineChart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Investment</h3>
              <p className="text-gray-400 mb-6">
                Build long-term wealth with our curated crypto indices, mutual funds, and SIPs.
              </p>
              <div className="flex items-center justify-center text-crypto-purple group-hover:text-white transition-colors">
                <span className="mr-2">Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </div>
            </Link>
            
            {/* Trading Card */}
            <Link 
              to="/trading" 
              className="group block p-8 rounded-2xl glass-card transition-all duration-300 hover:scale-105"
            >
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-crypto-orange to-crypto-red flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Trading</h3>
              <p className="text-gray-400 mb-6">
                Trade cryptocurrencies with advanced tools, futures, and real-time market data.
              </p>
              <div className="flex items-center justify-center text-crypto-orange group-hover:text-white transition-colors">
                <span className="mr-2">Start Trading</span>
                <ArrowRight className="h-5 w-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="bg-[#151923] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <p className="text-3xl font-bold text-crypto-purple mb-2">₹500 Cr+</p>
              <p className="text-gray-400">Assets Managed</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-crypto-blue mb-2">200+</p>
              <p className="text-gray-400">Cryptocurrencies</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-crypto-orange mb-2">5M+</p>
              <p className="text-gray-400">Users</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-crypto-green mb-2">24/7</p>
              <p className="text-gray-400">Customer Support</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Highlights */}
      <section className="py-16 bg-[#1A1F2C]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose <span className="text-gradient">Growdha</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 glass-card rounded-xl">
              <div className="h-12 w-12 rounded-lg bg-crypto-purple/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-crypto-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Bank-Level Security</h3>
              <p className="text-gray-400">Your assets are protected with industry-leading security protocols and insurance coverage.</p>
            </div>
            
            <div className="p-6 glass-card rounded-xl">
              <div className="h-12 w-12 rounded-lg bg-crypto-blue/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-crypto-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Diverse Portfolio</h3>
              <p className="text-gray-400">Access to 200+ cryptocurrencies and curated index funds for simplified investing.</p>
            </div>
            
            <div className="p-6 glass-card rounded-xl">
              <div className="h-12 w-12 rounded-lg bg-crypto-orange/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-crypto-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Expert Insights</h3>
              <p className="text-gray-400">Real-time market data and expert analysis to help you make informed decisions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
