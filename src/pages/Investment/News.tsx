
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  Share2,
  Bookmark,
  MessageSquare,
  ThumbsUp,
  Search,
  Filter,
  ChevronRight,
  User,
  TrendingUp,
  Globe,
  Video
} from 'lucide-react';

const featuredNews = [
  {
    id: 'news-1',
    title: 'Bitcoin ETF Approval: What This Means for Crypto Markets',
    summary: 'The SEC has finally approved Bitcoin ETFs, marking a major milestone for cryptocurrency adoption in traditional finance.',
    category: 'Market News',
    imageUrl: '/placeholder.svg',
    author: 'Sarah Johnson',
    date: '13 Apr, 2025',
    readTime: '5 min read',
    likes: 352,
    comments: 48,
    isHot: true
  },
  {
    id: 'news-2',
    title: 'Ethereum Shanghai Upgrade Successfully Implemented',
    summary: 'The long-awaited Shanghai upgrade has been implemented, enabling staked ETH withdrawals and introducing key improvements.',
    category: 'Technology',
    imageUrl: '/placeholder.svg',
    author: 'Michael Chen',
    date: '12 Apr, 2025',
    readTime: '7 min read',
    likes: 218,
    comments: 32,
    isHot: true
  },
  {
    id: 'news-3',
    title: 'Central Banks Exploring CBDC Integration with DeFi Platforms',
    summary: 'Several central banks are now exploring ways to integrate their CBDCs with existing DeFi protocols to enhance functionality.',
    category: 'Regulation',
    imageUrl: '/placeholder.svg',
    author: 'Robert Garcia',
    date: '11 Apr, 2025',
    readTime: '6 min read',
    likes: 175,
    comments: 28,
    isHot: false
  }
];

const recentNews = [
  {
    id: 'news-4',
    title: 'New NFT Standard Aims to Solve Interoperability Issues',
    summary: 'A new NFT standard has been proposed to address interoperability issues across different blockchain platforms.',
    category: 'NFTs',
    imageUrl: '/placeholder.svg',
    author: 'Emma Wilson',
    date: '10 Apr, 2025',
    readTime: '4 min read',
    likes: 142,
    comments: 19
  },
  {
    id: 'news-5',
    title: 'Major Retailer to Accept Cryptocurrency Payments Globally',
    summary: 'A global retail giant has announced plans to accept various cryptocurrencies as payment across all its stores worldwide.',
    category: 'Adoption',
    imageUrl: '/placeholder.svg',
    author: 'David Kim',
    date: '9 Apr, 2025',
    readTime: '3 min read',
    likes: 201,
    comments: 35
  },
  {
    id: 'news-6',
    title: 'DeFi Protocol Launches $10M Developer Grant Program',
    summary: 'A leading DeFi protocol has launched a $10 million grant program to incentivize developer participation and innovation.',
    category: 'DeFi',
    imageUrl: '/placeholder.svg',
    author: 'Jessica Martinez',
    date: '8 Apr, 2025',
    readTime: '5 min read',
    likes: 89,
    comments: 12
  },
  {
    id: 'news-7',
    title: 'New Layer-2 Solution Promises 100x Ethereum Throughput',
    summary: 'A new Layer-2 scaling solution for Ethereum claims to achieve 100x throughput while maintaining security guarantees.',
    category: 'Technology',
    imageUrl: '/placeholder.svg',
    author: 'Raj Patel',
    date: '7 Apr, 2025',
    readTime: '8 min read',
    likes: 167,
    comments: 23
  },
  {
    id: 'news-8',
    title: 'Institutional Investors Pour $3.8B into Crypto Funds Last Week',
    summary: 'Crypto investment products saw $3.8 billion in inflows last week, marking the highest weekly inflow on record.',
    category: 'Market News',
    imageUrl: '/placeholder.svg',
    author: 'Anna Chen',
    date: '6 Apr, 2025',
    readTime: '4 min read',
    likes: 134,
    comments: 17
  }
];

const upcomingEvents = [
  {
    id: 'event-1',
    title: 'Blockchain Innovation Summit 2025',
    date: '25-27 Apr, 2025',
    location: 'Singapore',
    category: 'Conference',
    imageUrl: '/placeholder.svg',
    isVirtual: true,
    registrationOpen: true
  },
  {
    id: 'event-2',
    title: 'DeFi Development Workshop',
    date: '18 Apr, 2025',
    location: 'Online',
    category: 'Workshop',
    imageUrl: '/placeholder.svg',
    isVirtual: true,
    registrationOpen: true
  },
  {
    id: 'event-3',
    title: 'Crypto Regulation Forum',
    date: '22 Apr, 2025',
    location: 'New York',
    category: 'Forum',
    imageUrl: '/placeholder.svg',
    isVirtual: false,
    registrationOpen: true
  }
];

const marketInsights = [
  {
    title: 'ETH Staking APY Rises to 7.2%',
    trend: 'up',
    change: '+0.6%'
  },
  {
    title: 'DeFi TVL Reaches $45 Billion',
    trend: 'up',
    change: '+5.2%'
  },
  {
    title: 'NFT Sales Volume Down by 12%',
    trend: 'down',
    change: '-12.4%'
  }
];

const News: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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
            <Link to="/investment/ico-ido" className="px-4 py-4 border-b-2 border-transparent text-gray-400 hover:text-white font-medium whitespace-nowrap">
              ICO/IDO
            </Link>
            <Link to="/investment/news" className="px-4 py-4 border-b-2 border-crypto-purple text-white font-medium whitespace-nowrap">
              News & Events
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-white">News & Events</h1>
            <p className="text-gray-400">Stay updated with the latest crypto news and upcoming events</p>
          </div>
          
          <div className="w-full md:w-auto flex items-center">
            <div className="relative mr-2 flex-grow md:flex-grow-0 md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search news..."
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
        
        <div className="flex overflow-x-auto space-x-2 mb-6">
          <button 
            className={`px-4 py-2 rounded-lg ${activeTab === 'all' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${activeTab === 'market' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
            onClick={() => setActiveTab('market')}
          >
            Market News
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${activeTab === 'tech' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
            onClick={() => setActiveTab('tech')}
          >
            Technology
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${activeTab === 'regulation' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
            onClick={() => setActiveTab('regulation')}
          >
            Regulation
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${activeTab === 'defi' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
            onClick={() => setActiveTab('defi')}
          >
            DeFi
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${activeTab === 'nft' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
            onClick={() => setActiveTab('nft')}
          >
            NFTs
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content (Left and Middle) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Articles */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">Featured Articles</h2>
              </div>
              
              <div className="space-y-6">
                {featuredNews.map((article) => (
                  <div key={article.id} className="glass-card rounded-xl overflow-hidden hover:border-crypto-purple/50 transition-all duration-200">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="h-48 md:h-full bg-gray-800">
                        <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="p-5 md:col-span-2">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <span className="text-xs px-2 py-1 rounded-full bg-crypto-purple/20 text-crypto-purple">
                              {article.category}
                            </span>
                            {article.isHot && (
                              <span className="ml-2 text-xs px-2 py-1 rounded-full bg-red-500/20 text-red-500">
                                Hot
                              </span>
                            )}
                          </div>
                          <button className="text-gray-400 hover:text-crypto-purple">
                            <Bookmark className="h-5 w-5" />
                          </button>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-white mb-2">{article.title}</h3>
                        
                        <p className="text-gray-400 mb-4">{article.summary}</p>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-700 mr-2 flex items-center justify-center text-xs">
                              {article.author.charAt(0)}
                            </div>
                            <div>
                              <span className="text-white text-sm">{article.author}</span>
                              <div className="flex items-center text-xs text-gray-400">
                                <Calendar className="h-3 w-3 mr-1" />
                                <span>{article.date}</span>
                                <Clock className="h-3 w-3 ml-2 mr-1" />
                                <span>{article.readTime}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <button className="flex items-center text-gray-400 hover:text-white">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              <span className="text-xs">{article.likes}</span>
                            </button>
                            <button className="flex items-center text-gray-400 hover:text-white">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              <span className="text-xs">{article.comments}</span>
                            </button>
                            <button className="text-gray-400 hover:text-white">
                              <Share2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Recent News */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">Recent News</h2>
                <Link to="#" className="text-sm text-crypto-purple flex items-center">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentNews.slice(0, 4).map((article) => (
                  <div key={article.id} className="glass-card rounded-xl overflow-hidden hover:border-crypto-purple/50 transition-all duration-200">
                    <div className="h-40 bg-gray-800">
                      <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                          {article.category}
                        </span>
                        <button className="text-gray-400 hover:text-crypto-purple">
                          <Bookmark className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <h3 className="font-semibold text-white mb-2 line-clamp-2">{article.title}</h3>
                      
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{article.summary}</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-gray-700 mr-2 flex items-center justify-center text-xs">
                            {article.author.charAt(0)}
                          </div>
                          <div>
                            <span className="text-white text-xs">{article.author}</span>
                            <div className="flex items-center text-xs text-gray-400">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>{article.date}</span>
                            </div>
                          </div>
                        </div>
                        
                        <button className="text-crypto-purple text-xs">Read more</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Video Content */}
            <section className="glass-card rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">Featured Videos</h2>
                <Link to="#" className="text-sm text-crypto-purple flex items-center">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: 'Crypto Market Analysis April 2025', duration: '15:24', views: '12K' },
                  { title: 'How to Start DeFi Investing in 2025', duration: '22:17', views: '8.5K' },
                  { title: 'NFT Market Trends and Opportunities', duration: '18:32', views: '5.2K' }
                ].map((video, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg overflow-hidden">
                    <div className="relative h-36 bg-gray-800">
                      <img src="/placeholder.svg" alt={video.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-crypto-purple/80 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 text-xs bg-black/70 rounded text-white">
                        {video.duration}
                      </div>
                    </div>
                    
                    <div className="p-3">
                      <h3 className="font-medium text-white text-sm">{video.title}</h3>
                      <div className="flex items-center justify-between text-xs text-gray-400 mt-1">
                        <span>ValueX Crypto</span>
                        <span>{video.views} views</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
          
          {/* Sidebar (Right Side) */}
          <div className="space-y-6">
            {/* Market Insights */}
            <div className="glass-card rounded-xl p-5">
              <h3 className="font-semibold text-white mb-4">Market Insights</h3>
              
              <div className="space-y-3">
                {marketInsights.map((insight, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-white text-sm">{insight.title}</span>
                    <span className={`flex items-center ${insight.trend === 'up' ? 'text-crypto-green' : 'text-crypto-red'}`}>
                      {insight.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4 mr-1" />
                      ) : (
                        <TrendingUp className="h-4 w-4 mr-1 transform rotate-180" />
                      )}
                      {insight.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Upcoming Events */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white">Upcoming Events</h3>
                <Link to="#" className="text-xs text-crypto-purple">View All</Link>
              </div>
              
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="bg-gray-800/50 rounded-lg overflow-hidden">
                    <div className="h-32 bg-gray-800">
                      <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="p-3">
                      <div className="flex justify-between items-start">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-crypto-purple/20 text-crypto-purple">
                          {event.category}
                        </span>
                        {event.isVirtual && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400">
                            Virtual
                          </span>
                        )}
                      </div>
                      
                      <h4 className="font-medium text-white mt-2">{event.title}</h4>
                      
                      <div className="flex items-center mt-2 text-xs text-gray-400">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{event.date}</span>
                      </div>
                      
                      <div className="flex items-center mt-1 text-xs text-gray-400">
                        <Globe className="h-3 w-3 mr-1" />
                        <span>{event.location}</span>
                      </div>
                      
                      {event.registrationOpen && (
                        <button className="w-full mt-3 py-1.5 text-xs bg-crypto-purple text-white rounded-lg hover:bg-crypto-purple/90">
                          Register Now
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="glass-card rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">Subscribe to Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">Get daily crypto updates directly to your inbox</p>
              
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800/50 focus:ring-crypto-purple focus:border-crypto-purple"
                />
                <button className="w-full py-2 bg-crypto-purple text-white rounded-lg hover:bg-crypto-purple/90">
                  Subscribe
                </button>
              </div>
            </div>
            
            {/* Popular Tags */}
            <div className="glass-card rounded-xl p-5">
              <h3 className="font-semibold text-white mb-4">Popular Tags</h3>
              
              <div className="flex flex-wrap gap-2">
                {['Bitcoin', 'Ethereum', 'DeFi', 'NFT', 'Regulation', 'Altcoins', 'Trading', 'Mining', 'Web3', 'Metaverse', 'Staking', 'GameFi'].map((tag, index) => (
                  <button key={index} className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white">
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
