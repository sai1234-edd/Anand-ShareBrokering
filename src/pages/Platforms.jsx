import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TradingPlatforms = () => {
  const [activePlatform, setActivePlatform] = useState('web');
  const [selectedFeature, setSelectedFeature] = useState(null);

  const platforms = [
    {
      id: 'web',
      name: 'Web Trading Platform',
      icon: '🌐',
      description: 'Advanced web-based platform with professional tools',
      tagline: 'Trade anywhere, anytime with our feature-rich web platform',
      image: '/images/web-platform.png',
      features: [
        {
          title: 'Advanced Charting',
          description: '100+ technical indicators and drawing tools',
          icon: '📊',
          details: ['Multiple chart types', 'Real-time data', 'Custom indicators', 'Save chart layouts']
        },
        {
          title: 'Order Management',
          description: 'Advanced order types for precise trading',
          icon: '⚡',
          details: ['Bracket Orders', 'Cover Orders', 'GTT Orders', 'One-Click Trading']
        },
        {
          title: 'Portfolio Analytics',
          description: 'Comprehensive portfolio analysis and insights',
          icon: '📈',
          details: ['Real-time P&L', 'Asset Allocation', 'Performance Charts', 'Tax Reports']
        },
        {
          title: 'Market Depth',
          description: 'Real-time market depth and order book',
          icon: '🔍',
          details: ['Level 3 Data', 'Bid-Ask Spread', 'Volume Analysis', 'Market Trends']
        }
      ],
      specs: {
        compatibility: 'All modern browsers',
        updates: 'Real-time',
        security: '256-bit SSL Encryption',
        support: '24/7 Technical Support'
      },
      cta: {
        text: 'Launch Web Platform',
        link: '/platform/web'
      }
    },
    {
      id: 'desktop',
      name: 'Desktop Application',
      icon: '💻',
      description: 'Professional desktop platform for serious traders',
      tagline: 'Institutional-grade tools for professional traders',
      image: '/images/desktop-app.png',
      features: [
        {
          title: 'Multi-Monitor Support',
          description: 'Advanced multi-screen trading setup',
          icon: '🖥️',
          details: ['Unlimited Workspaces', 'Custom Layouts', 'Screen Management', 'Layout Profiles']
        },
        {
          title: 'Algorithmic Trading',
          description: 'Build and deploy automated strategies',
          icon: '🤖',
          details: ['Strategy Builder', 'Backtesting', 'Live Execution', 'Algorithm Marketplace']
        },
        {
          title: 'Advanced Analytics',
          description: 'Professional analytics and reporting',
          icon: '📊',
          details: ['Advanced Charts', 'Market Scanner', 'Option Chain', 'Risk Management']
        },
        {
          title: 'Custom Indicators',
          description: 'Create and use custom technical indicators',
          icon: '🎯',
          details: ['Indicator Builder', 'Custom Scripts', 'Community Indicators', 'Backtesting']
        }
      ],
      specs: {
        compatibility: 'Windows & macOS',
        updates: 'Automatic',
        security: 'Enterprise Security',
        support: 'Dedicated Support'
      },
      cta: {
        text: 'Download Desktop',
        link: '/download/desktop'
      }
    },
    {
      id: 'api',
      name: 'API Trading',
      icon: '🔌',
      description: 'Direct market access for developers and institutions',
      tagline: 'Build your own trading applications with our API',
      image: '/images/api-platform.png',
      features: [
        {
          title: 'Low Latency API',
          description: 'High-speed direct market access',
          icon: '⚡',
          details: ['WebSocket API', 'REST API', 'FIX Protocol', 'Real-time Data']
        },
        {
          title: 'Strategy Deployment',
          description: 'Deploy and manage trading algorithms',
          icon: '🚀',
          details: ['Algorithm Hosting', 'Strategy Management', 'Performance Monitoring', 'Risk Controls']
        },
        {
          title: 'Market Data Feeds',
          description: 'Real-time and historical market data',
          icon: '📡',
          details: ['Tick-by-Tick Data', 'Historical Data', 'Market Depth', 'Corporate Actions']
        },
        {
          title: 'Developer Tools',
          description: 'Comprehensive SDK and documentation',
          icon: '🛠️',
          details: ['Python SDK', 'Java SDK', '.NET SDK', 'Comprehensive Docs']
        }
      ],
      specs: {
        compatibility: 'Multiple Languages',
        updates: 'API Versioning',
        security: 'API Keys + IP Whitelisting',
        support: 'Developer Support'
      },
      cta: {
        text: 'View API Docs',
        link: '/api/docs'
      }
    }
  ];

  const platformStats = [
    { metric: 'Order Speed', value: '<100ms', platform: 'all' },
    { metric: 'Uptime', value: '99.9%', platform: 'all' },
    { metric: 'Security', value: '256-bit SSL', platform: 'all' },
    { metric: 'Charting Tools', value: '100+', platform: 'web' },
    { metric: 'Mobile Rating', value: '4.8/5', platform: 'mobile' },
    { metric: 'API Latency', value: '<50ms', platform: 'api' }
  ];

  const currentPlatform = platforms.find(p => p.id === activePlatform);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Advanced <span className="text-blue-600">Trading Platforms</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect trading platform that matches your style and requirements. 
            From beginner-friendly mobile apps to professional desktop solutions.
          </p>
        </motion.div>

        {/* Platform Selector */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {platforms.map((platform) => (
              <motion.button
                key={platform.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActivePlatform(platform.id)}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  activePlatform === platform.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-2xl'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg'
                }`}
              >
                <div className="text-3xl mb-3">{platform.icon}</div>
                <div className="font-bold text-lg mb-2">{platform.name}</div>
                <div className="text-sm opacity-80 leading-relaxed">
                  {platform.description}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Platform Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePlatform}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            {/* Platform Hero */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Platform Info */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{currentPlatform.icon}</div>
                    <div>
                      <h2 className="text-3xl font-black text-slate-900">
                        {currentPlatform.name}
                      </h2>
                      <p className="text-blue-600 font-semibold text-lg">
                        {currentPlatform.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {currentPlatform.description}
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {platformStats
                      .filter(stat => stat.platform === 'all' || stat.platform === activePlatform)
                      .map((stat, index) => (
                        <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                          <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.metric}</div>
                        </div>
                      ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {currentPlatform.cta.text}
                    </motion.button>
                    <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300">
                      Watch Demo
                    </button>
                  </div>
                </div>

                {/* Platform Image/Visual */}
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center p-8">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-4">{currentPlatform.icon}</div>
                    <div className="text-2xl font-bold mb-2">Platform Preview</div>
                    <div className="text-blue-100">Interactive demo available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mb-16">
              <h3 className="text-3xl font-black text-slate-900 text-center mb-12">
                Key <span className="text-blue-600">Features</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentPlatform.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 cursor-pointer hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-slate-800 mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 mb-4">
                          {feature.description}
                        </p>
                        
                        <AnimatePresence>
                          {selectedFeature === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="grid grid-cols-2 gap-2">
                                {feature.details.map((detail, detailIndex) => (
                                  <div key={detailIndex} className="flex items-center text-sm text-gray-700">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                    {detail}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        
                        <div className="text-blue-500 text-sm font-semibold mt-3">
                          {selectedFeature === index ? 'Click to collapse' : 'Click to expand details'}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12">
              <h3 className="text-3xl font-black text-slate-900 text-center mb-8">
                Technical <span className="text-blue-600">Specifications</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(currentPlatform.specs).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                  >
                    <div className="text-sm text-gray-500 mb-2 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-lg font-bold text-slate-800">
                      {value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Platform Comparison CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-12 text-white">
                <h3 className="text-3xl font-black mb-4">
                  Still Not Sure Which Platform to Choose?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Compare all platforms side by side and find the perfect match for your trading needs.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  Compare All Platforms
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Quick Access Footer */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-black text-slate-900 text-center mb-8">
            Quick <span className="text-blue-600">Access</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {platforms.map((platform) => (
              <motion.a
                key={platform.id}
                href={platform.cta.link}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 hover:bg-blue-50 rounded-xl p-4 text-center transition-all duration-300 group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {platform.icon}
                </div>
                <div className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                  {platform.cta.text}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingPlatforms;