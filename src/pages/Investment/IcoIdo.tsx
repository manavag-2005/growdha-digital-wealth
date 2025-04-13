
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Info,
  AlertTriangle,
  Calendar,
  Clock,
  TrendingUp,
  Check,
  X,
  ChevronRight,
  Filter,
  Globe,
  Twitter,
  Github,
  FileText,
  Bookmark
} from 'lucide-react';

const upcomingIcos = [
  {
    id: 'meta-finance',
    name: 'MetaFinance',
    logo: '📊',
    description: 'Decentralized finance protocol for metaverse assets',
    category: 'DeFi',
    startDate: '20 Apr, 2025',
    endDate: '5 May, 2025',
    status: 'upcoming',
    tokenPrice: '$0.08',
    raise: '$5M',
    hardCap: '$8M',
    progress: 0,
    minAllocation: '$50',
    maxAllocation: '$5,000',
    acceptedCurrencies: ['USDT', 'ETH', 'BNB'],
    kyc: true,
    platform: 'Ethereum',
    website: 'https://metafinance.io',
    socials: {
      twitter: '@MetaFinance',
      telegram: 't.me/MetaFinance',
      github: 'github.com/MetaFinance'
    },
    whitepaper: '/whitepaper.pdf'
  },
  {
    id: 'gaming-verse',
    name: 'GamingVerse',
    logo: '🎮',
    description: 'Play-to-earn gaming ecosystem with NFT integration',
    category: 'Gaming',
    startDate: '25 Apr, 2025',
    endDate: '10 May, 2025',
    status: 'upcoming',
    tokenPrice: '$0.12',
    raise: '$7M',
    hardCap: '$12M',
    progress: 0,
    minAllocation: '$100',
    maxAllocation: '$10,000',
    acceptedCurrencies: ['USDT', 'BTC', 'ETH'],
    kyc: true,
    platform: 'Binance Smart Chain',
    website: 'https://gamingverse.io',
    socials: {
      twitter: '@GamingVerse',
      telegram: 't.me/GamingVerse',
      github: 'github.com/GamingVerse'
    },
    whitepaper: '/whitepaper.pdf'
  }
];

const liveIcos = [
  {
    id: 'data-network',
    name: 'DataNetwork',
    logo: '🔄',
    description: 'Decentralized data marketplace for AI training',
    category: 'AI',
    startDate: '5 Apr, 2025',
    endDate: '20 Apr, 2025',
    status: 'live',
    tokenPrice: '$0.05',
    raise: '$2.8M',
    hardCap: '$5M',
    progress: 56,
    minAllocation: '$50',
    maxAllocation: '$3,000',
    acceptedCurrencies: ['USDT', 'ETH'],
    kyc: true,
    platform: 'Solana',
    website: 'https://datanetwork.io',
    socials: {
      twitter: '@DataNetwork',
      telegram: 't.me/DataNetwork',
      github: 'github.com/DataNetwork'
    },
    whitepaper: '/whitepaper.pdf'
  },
  {
    id: 'green-energy',
    name: 'GreenEnergy',
    logo: '🌱',
    description: 'Blockchain solution for renewable energy certificates',
    category: 'Sustainability',
    startDate: '10 Apr, 2025',
    endDate: '25 Apr, 2025',
    status: 'live',
    tokenPrice: '$0.10',
    raise: '$3.2M',
    hardCap: '$6M',
    progress: 53,
    minAllocation: '$100',
    maxAllocation: '$5,000',
    acceptedCurrencies: ['USDT', 'ETH', 'SOL'],
    kyc: true,
    platform: 'Polygon',
    website: 'https://greenenergy.io',
    socials: {
      twitter: '@GreenEnergy',
      telegram: 't.me/GreenEnergy',
      github: 'github.com/GreenEnergy'
    },
    whitepaper: '/whitepaper.pdf'
  }
];

const completedIcos = [
  {
    id: 'defi-yield',
    name: 'DeFiYield',
    logo: '💰',
    description: 'Automated yield farming aggregator',
    category: 'DeFi',
    startDate: '10 Mar, 2025',
    endDate: '25 Mar, 2025',
    status: 'completed',
    tokenPrice: '$0.15',
    raise: '$8M',
    hardCap: '$8M',
    progress: 100,
    minAllocation: '$100',
    maxAllocation: '$7,500',
    acceptedCurrencies: ['USDT', 'ETH'],
    kyc: true,
    platform: 'Ethereum',
    website: 'https://defiyield.io',
    socials: {
      twitter: '@DeFiYield',
      telegram: 't.me/DeFiYield',
      github: 'github.com/DeFiYield'
    },
    whitepaper: '/whitepaper.pdf',
    roi: '+125%',
    listingDate: '5 Apr, 2025',
    exchanges: ['Binance', 'Kucoin', 'Gate.io']
  },
  {
    id: 'nft-marketplace',
    name: 'ArtBlock',
    logo: '🎨',
    description: 'Curated NFT marketplace for digital artists',
    category: 'NFT',
    startDate: '15 Feb, 2025',
    endDate: '5 Mar, 2025',
    status: 'completed',
    tokenPrice: '$0.20',
    raise: '$12M',
    hardCap: '$15M',
    progress: 80,
    minAllocation: '$200',
    maxAllocation: '$15,000',
    acceptedCurrencies: ['USDT', 'ETH', 'BNB'],
    kyc: true,
    platform: 'Multi-chain',
    website: 'https://artblock.io',
    socials: {
      twitter: '@ArtBlock',
      telegram: 't.me/ArtBlock',
      github: 'github.com/ArtBlock'
    },
    whitepaper: '/whitepaper.pdf',
    roi: '+87%',
    listingDate: '20 Mar, 2025',
    exchanges: ['Uniswap', 'Pancakeswap', 'Huobi']
  }
];

const IcoIdo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('live');
  const [detailsModal, setDetailsModal] = useState<string | null>(null);

  const getIcoById = (id: string) => {
    return [...upcomingIcos, ...liveIcos, ...completedIcos].find(ico => ico.id === id);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">Upcoming</span>;
      case 'live':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">Live</span>;
      case 'completed':
        return <span className="px-2 py-1 text-xs rounded-full bg-gray-500/20 text-gray-400">Completed</span>;
      default:
        return null;
    }
  };

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
            <Link to="/investment/dashboard" className="px-4 py-4 border-b-2 border-transparent text-gray-400 hover:text-white font-medium whitespace-nowrap">
              Dashboard
            </Link>
            <Link to="/investment/ico-ido" className="px-4 py-4 border-b-2 border-crypto-purple text-white font-medium whitespace-nowrap">
              ICO/IDO
            </Link>
            <Link to="/investment/news" className="px-4 py-4 border-b-2 border-transparent text-gray-400 hover:text-white font-medium whitespace-nowrap">
              News & Events
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-white mb-2">ICO/IDO Launchpad</h1>
          <p className="text-gray-400">Discover and participate in the latest token sales and launches</p>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <div className="flex overflow-x-auto space-x-2">
            <button 
              className={`px-4 py-2 rounded-lg ${activeTab === 'live' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
              onClick={() => setActiveTab('live')}
            >
              Live
            </button>
            <button 
              className={`px-4 py-2 rounded-lg ${activeTab === 'upcoming' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming
            </button>
            <button 
              className={`px-4 py-2 rounded-lg ${activeTab === 'completed' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
              onClick={() => setActiveTab('completed')}
            >
              Completed
            </button>
          </div>
          
          <div className="flex items-center">
            <button className="p-2 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white">
              <Filter className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white">
              <Info className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Live ICOs */}
          {activeTab === 'live' && liveIcos.map(ico => (
            <div key={ico.id} className="glass-card rounded-xl overflow-hidden hover:border-crypto-purple/50 transition-all duration-200">
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-gray-800 mr-3 flex items-center justify-center text-2xl">
                      {ico.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{ico.name}</h3>
                      <div className="flex items-center mt-1">
                        {getStatusBadge(ico.status)}
                        <span className="ml-2 text-xs text-gray-400">{ico.category}</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-crypto-purple">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>
                
                <p className="text-sm text-gray-400 mb-4">{ico.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Token Price</span>
                    <span className="text-white">{ico.tokenPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Raised</span>
                    <span className="text-white">{ico.raise} of {ico.hardCap}</span>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-white">{ico.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-crypto-purple rounded-full"
                        style={{ width: `${ico.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between text-sm mb-4">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Ends: {ico.endDate}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>5 days left</span>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button 
                    className="w-full py-2 bg-crypto-purple text-white rounded-lg hover:bg-crypto-purple/90"
                    onClick={() => setDetailsModal(ico.id)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Upcoming ICOs */}
          {activeTab === 'upcoming' && upcomingIcos.map(ico => (
            <div key={ico.id} className="glass-card rounded-xl overflow-hidden hover:border-crypto-purple/50 transition-all duration-200">
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-gray-800 mr-3 flex items-center justify-center text-2xl">
                      {ico.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{ico.name}</h3>
                      <div className="flex items-center mt-1">
                        {getStatusBadge(ico.status)}
                        <span className="ml-2 text-xs text-gray-400">{ico.category}</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-crypto-purple">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>
                
                <p className="text-sm text-gray-400 mb-4">{ico.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Token Price</span>
                    <span className="text-white">{ico.tokenPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Fundraising Goal</span>
                    <span className="text-white">{ico.hardCap}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Min/Max Allocation</span>
                    <span className="text-white">{ico.minAllocation} - {ico.maxAllocation}</span>
                  </div>
                </div>
                
                <div className="flex justify-between text-sm mb-4">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Starts: {ico.startDate}</span>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="w-full py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
                    Set Reminder
                  </button>
                  <button 
                    className="w-full py-2 bg-crypto-purple text-white rounded-lg hover:bg-crypto-purple/90"
                    onClick={() => setDetailsModal(ico.id)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Completed ICOs */}
          {activeTab === 'completed' && completedIcos.map(ico => (
            <div key={ico.id} className="glass-card rounded-xl overflow-hidden hover:border-crypto-purple/50 transition-all duration-200">
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-gray-800 mr-3 flex items-center justify-center text-2xl">
                      {ico.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{ico.name}</h3>
                      <div className="flex items-center mt-1">
                        {getStatusBadge(ico.status)}
                        <span className="ml-2 text-xs text-gray-400">{ico.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-crypto-green">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>{ico.roi}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-400 mb-4">{ico.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Token Price</span>
                    <span className="text-white">{ico.tokenPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Raised</span>
                    <span className="text-white">{ico.raise} of {ico.hardCap}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Listed On</span>
                    <span className="text-white">{ico.exchanges.join(', ')}</span>
                  </div>
                </div>
                
                <div className="flex justify-between text-sm mb-4">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Listed: {ico.listingDate}</span>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button 
                    className="w-full py-2 bg-crypto-purple text-white rounded-lg hover:bg-crypto-purple/90"
                    onClick={() => setDetailsModal(ico.id)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* ICO Details Modal */}
        {detailsModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
            <div className="absolute inset-0 bg-black/60" onClick={() => setDetailsModal(null)}></div>
            <div className="glass-card rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10 relative">
              {(() => {
                const ico = getIcoById(detailsModal);
                if (!ico) return null;
                
                return (
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-lg bg-gray-800 mr-4 flex items-center justify-center text-3xl">
                          {ico.logo}
                        </div>
                        <div>
                          <h2 className="text-2xl font-semibold text-white">{ico.name}</h2>
                          <div className="flex items-center mt-1">
                            {getStatusBadge(ico.status)}
                            <span className="ml-2 text-sm text-gray-400">{ico.category}</span>
                          </div>
                        </div>
                      </div>
                      <button 
                        className="text-gray-400 hover:text-white"
                        onClick={() => setDetailsModal(null)}
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-white mb-2">About Project</h3>
                      <p className="text-gray-400">{ico.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-white">Token Sale Details</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Token Price</span>
                            <span className="text-white">{ico.tokenPrice}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Fundraising Goal</span>
                            <span className="text-white">{ico.hardCap}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Platform</span>
                            <span className="text-white">{ico.platform}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">KYC Required</span>
                            <span className="text-white">
                              {ico.kyc ? (
                                <Check className="h-5 w-5 text-green-500" />
                              ) : (
                                <X className="h-5 w-5 text-red-500" />
                              )}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Min Allocation</span>
                            <span className="text-white">{ico.minAllocation}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Max Allocation</span>
                            <span className="text-white">{ico.maxAllocation}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Accepted Currencies</span>
                            <span className="text-white">{ico.acceptedCurrencies.join(', ')}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-white">Important Dates</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Start Date</span>
                            <span className="text-white">{ico.startDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">End Date</span>
                            <span className="text-white">{ico.endDate}</span>
                          </div>
                          {ico.status === 'completed' && (
                            <div className="flex justify-between">
                              <span className="text-gray-400">Listing Date</span>
                              <span className="text-white">{(ico as any).listingDate}</span>
                            </div>
                          )}
                        </div>
                        
                        <h3 className="text-lg font-medium text-white pt-4">Resources</h3>
                        <div className="space-y-2">
                          <a href={ico.website} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white">
                            <Globe className="h-4 w-4 mr-2" />
                            Website
                          </a>
                          <a href={`https://twitter.com/${ico.socials.twitter}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white">
                            <Twitter className="h-4 w-4 mr-2" />
                            Twitter
                          </a>
                          <a href={`https://${ico.socials.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white">
                            <Github className="h-4 w-4 mr-2" />
                            Github
                          </a>
                          <a href={ico.whitepaper} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white">
                            <FileText className="h-4 w-4 mr-2" />
                            Whitepaper
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {ico.status === 'live' && (
                      <div className="mb-6">
                        <h3 className="text-lg font-medium text-white mb-3">Sale Progress</h3>
                        <div className="flex flex-col space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Progress</span>
                            <span className="text-white">{ico.progress}%</span>
                          </div>
                          <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-crypto-purple rounded-full"
                              style={{ width: `${ico.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-center">
                            <span className="text-gray-400 text-sm">Raised</span>
                            <p className="text-white font-medium">{ico.raise}</p>
                          </div>
                          <div className="text-center">
                            <span className="text-gray-400 text-sm">Hard Cap</span>
                            <p className="text-white font-medium">{ico.hardCap}</p>
                          </div>
                          <div className="text-center">
                            <span className="text-gray-400 text-sm">Time Left</span>
                            <p className="text-white font-medium">5 days</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {ico.status === 'completed' && (
                      <div className="mb-6">
                        <h3 className="text-lg font-medium text-white mb-3">Performance</h3>
                        <div className="flex justify-between mb-4">
                          <div className="text-center">
                            <span className="text-gray-400 text-sm">ROI Since ICO</span>
                            <p className="text-crypto-green font-medium">{(ico as any).roi}</p>
                          </div>
                          <div className="text-center">
                            <span className="text-gray-400 text-sm">Listed On</span>
                            <p className="text-white font-medium">{(ico as any).exchanges.join(', ')}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex space-x-4">
                      {ico.status === 'upcoming' && (
                        <>
                          <button className="flex-1 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
                            Set Reminder
                          </button>
                          <button className="flex-1 py-3 bg-crypto-purple text-white rounded-lg hover:bg-crypto-purple/90">
                            Join Whitelist
                          </button>
                        </>
                      )}
                      
                      {ico.status === 'live' && (
                        <>
                          <button className="flex-1 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
                            View Details
                          </button>
                          <button className="flex-1 py-3 bg-crypto-purple text-white rounded-lg hover:bg-crypto-purple/90">
                            Participate Now
                          </button>
                        </>
                      )}
                      
                      {ico.status === 'completed' && (
                        <>
                          <button className="flex-1 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
                            View Project
                          </button>
                          <button className="flex-1 py-3 bg-crypto-purple text-white rounded-lg hover:bg-crypto-purple/90">
                            Trade Token
                          </button>
                        </>
                      )}
                    </div>
                    
                    {ico.status !== 'completed' && (
                      <div className="mt-4 p-3 bg-amber-500/10 rounded-lg border border-amber-500/30">
                        <div className="flex items-start">
                          <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                          <p className="text-sm text-amber-500/90">Cryptocurrency investments involve high market risk. Please DYOR (Do Your Own Research) before participating in any ICO or IDO.</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IcoIdo;
