import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResearchAndInsights = () => {
  const [activeCategory, setActiveCategory] = useState('daily');
  const [selectedReport, setSelectedReport] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  const researchCategories = [
    {
      id: 'daily',
      name: 'Daily Research',
      icon: '📅',
      description: 'Daily market updates and trading ideas'
    },
    {
      id: 'technical',
      name: 'Technical Analysis',
      icon: '📊',
      description: 'Chart patterns and technical setups'
    },
    {
      id: 'fundamental',
      name: 'Fundamental Research',
      icon: '🏢',
      description: 'Company analysis and valuations'
    },
    {
      id: 'derivatives',
      name: 'Derivatives',
      icon: '⚡',
      description: 'F&O strategies and market outlook'
    }
  ];

  const dailyReports = [
    {
      id: 1,
      title: "Market Morning Brief",
      description: "Pre-market analysis and key levels for the day",
      author: "Research Team",
      date: "2024-01-15",
      duration: "5 min read",
      tags: ["Nifty", "Bank Nifty", "Levels"],
      content: {
        summary: "Markets likely to open flat with positive bias. Key support at 21,800 for Nifty.",
        keyPoints: [
          "Global cues mixed with US markets closed",
          "FIIs bought ₹1,200 crore in cash market",
          "Bank Nifty support at 48,200 levels",
          "Stocks in focus: RELIANCE, TCS, HDFC"
        ],
        levels: {
          nifty: { support: "21,800", resistance: "22,000" },
          banknifty: { support: "48,200", resistance: "48,800" }
        }
      },
      premium: false
    },
    {
      id: 2,
      title: "Sector Rotation Analysis",
      description: "Identifying sector leadership and rotation patterns",
      author: "Sector Research Desk",
      date: "2024-01-15",
      duration: "8 min read",
      tags: ["Sectors", "Rotation", "Leadership"],
      content: {
        summary: "IT and Pharma sectors showing strength while Metals under pressure.",
        keyPoints: [
          "IT index breaks out of consolidation",
          "Pharma stocks showing accumulation",
          "Metal stocks facing profit booking",
          "Auto sector in sideways consolidation"
        ],
        topPicks: ["INFY", "DRREDDY", "TATAMOTORS"]
      },
      premium: true
    }
  ];

  const technicalAnalysis = [
    {
      id: 1,
      title: "Nifty Technical Outlook",
      description: "Weekly chart analysis and key patterns",
      author: "Technical Analysis Team",
      date: "2024-01-14",
      duration: "10 min read",
      tags: ["Nifty", "Technical", "Patterns"],
      chartPattern: "Bull Flag",
      timeframe: "Weekly",
      targets: ["22,200", "22,500"],
      stoploss: "21,500",
      confidence: "High",
      premium: false
    },
    {
      id: 2,
      title: "Breakout Stocks Scanner",
      description: "Stocks breaking out of key technical levels",
      author: "Technical Scanner",
      date: "2024-01-14",
      duration: "6 min read",
      tags: ["Breakout", "Scanner", "Momentum"],
      stocks: [
        { symbol: "RELIANCE", pattern: "Cup and Handle", breakout: "2,800" },
        { symbol: "TCS", pattern: "Triangle Breakout", breakout: "3,800" },
        { symbol: "HDFCBANK", pattern: "Channel Breakout", breakout: "1,650" }
      ],
      premium: true
    }
  ];

  const fundamentalResearch = [
    {
      id: 1,
      title: "RELIANCE Industries Analysis",
      description: "Comprehensive fundamental analysis and valuation",
      author: "Fundamental Research",
      date: "2024-01-13",
      duration: "15 min read",
      tags: ["Fundamental", "Valuation", "Oil & Gas"],
      metrics: {
        pe: "28.5x",
        pb: "2.3x",
        roe: "12.5%",
        debt: "Low"
      },
      recommendation: "BUY",
      target: "2,900",
      current: "2,750",
      upside: "5.5%",
      premium: false
    },
    {
      id: 2,
      title: "IT Sector Quarterly Preview",
      description: "Q3 FY24 expectations and stock preferences",
      author: "Sector Research",
      date: "2024-01-13",
      duration: "12 min read",
      tags: ["IT", "Quarterly", "Sector"],
      expectations: [
        "Revenue growth of 2-4% QoQ",
        "Margin expansion expected",
        "Deal pipeline remains strong"
      ],
      topPicks: ["TCS", "INFY", "HCLTECH"],
      premium: true
    }
  ];

  const marketIndicators = [
    { name: "Fear & Greed Index", value: 65, status: "Greed", change: "+5" },
    { name: "Put-Call Ratio", value: 1.2, status: "Neutral", change: "-0.1" },
    { name: "VIX", value: 12.5, status: "Low", change: "-0.5" },
    { name: "FII Activity", value: "Buying", status: "Positive", change: "₹1,200Cr" }
  ];

  const watchlistStocks = [
    { symbol: "RELIANCE", price: "2,750", change: "+1.2%", sector: "Energy" },
    { symbol: "TCS", price: "3,820", change: "+0.8%", sector: "IT" },
    { symbol: "HDFCBANK", price: "1,642", change: "-0.3%", sector: "Banking" },
    { symbol: "INFY", price: "1,580", change: "+2.1%", sector: "IT" }
  ];

  const getCurrentResearch = () => {
    switch (activeCategory) {
      case 'daily': return dailyReports;
      case 'technical': return technicalAnalysis;
      case 'fundamental': return fundamentalResearch;
      case 'derivatives': return dailyReports; // Add derivatives data as needed
      default: return dailyReports;
    }
  };

  const addToWatchlist = (stock) => {
    if (!watchlist.find(item => item.symbol === stock.symbol)) {
      setWatchlist([...watchlist, stock]);
    }
  };

  const removeFromWatchlist = (symbol) => {
    setWatchlist(watchlist.filter(item => item.symbol !== symbol));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Research & <span className="text-blue-600">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert analysis, market intelligence, and actionable trading ideas from our research team
          </p>
        </motion.div>

        {/* Market Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8 mb-12"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-2">Market Overview</h2>
              <p className="text-gray-600">Real-time market sentiment and indicators</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">Nifty: 21,850 <span className="text-sm">+0.8%</span></div>
                <div className="text-lg text-gray-600">Sensex: 72,400 <span className="text-sm">+0.7%</span></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {marketIndicators.map((indicator, index) => (
              <motion.div
                key={indicator.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-4 text-center"
              >
                <div className="text-sm text-gray-600 mb-2">{indicator.name}</div>
                <div className="text-xl font-bold text-slate-800 mb-1">{indicator.value}</div>
                <div className={`text-sm font-semibold ${
                  indicator.status === 'Greed' ? 'text-green-600' :
                  indicator.status === 'Fear' ? 'text-red-600' : 'text-yellow-600'
                }`}>
                  {indicator.status} <span className="text-gray-500">{indicator.change}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Research Categories */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-6 mb-6"
            >
              <h3 className="text-lg font-black text-slate-900 mb-4">Research Categories</h3>
              <div className="space-y-2">
                {researchCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{category.icon}</span>
                      <div>
                        <div className="font-semibold">{category.name}</div>
                        <div className="text-sm opacity-80">{category.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Watchlist */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-black text-slate-900">My Watchlist</h3>
                <span className="text-blue-500 text-sm">{watchlist.length} stocks</span>
              </div>
              
              {watchlist.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="text-gray-600 text-sm">Add stocks to your watchlist</p>
                  <div className="mt-4 space-y-2">
                    {watchlistStocks.map((stock) => (
                      <button
                        key={stock.symbol}
                        onClick={() => addToWatchlist(stock)}
                        className="w-full text-left p-2 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">{stock.symbol}</span>
                          <span className={`text-sm ${
                            stock.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {stock.change}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {watchlist.map((stock) => (
                    <div key={stock.symbol} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-semibold">{stock.symbol}</div>
                        <div className="text-sm text-gray-600">{stock.sector}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{stock.price}</div>
                        <div className={`text-sm ${
                          stock.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stock.change}
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromWatchlist(stock.symbol)}
                        className="text-red-500 hover:text-red-700 ml-2"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Research Header */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900">
                      {researchCategories.find(cat => cat.id === activeCategory)?.name}
                    </h2>
                    <p className="text-gray-600">
                      {researchCategories.find(cat => cat.id === activeCategory)?.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>📚 {getCurrentResearch().length} Reports</span>
                    <span>•</span>
                    <span>🕒 Updated today</span>
                  </div>
                </div>

                {/* Research Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {getCurrentResearch().map((report, index) => (
                    <motion.div
                      key={report.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      onClick={() => setSelectedReport(selectedReport?.id === report.id ? null : report)}
                      className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
                    >
                      {/* Report Header */}
                      <div className="p-6 border-b border-gray-100">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-black text-slate-900">{report.title}</h3>
                          {report.premium && (
                            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                              PREMIUM
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-4">{report.description}</p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-4">
                            <span>👤 {report.author}</span>
                            <span>📅 {report.date}</span>
                            <span>⏱️ {report.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Report Content */}
                      <div className="p-6">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {report.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {/* Dynamic Content based on category */}
                        <AnimatePresence>
                          {selectedReport?.id === report.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              {activeCategory === 'daily' && (
                                <div className="space-y-4">
                                  <p className="text-gray-700">{report.content.summary}</p>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <h4 className="font-semibold mb-2">Key Levels</h4>
                                      <div className="space-y-2 text-sm">
                                        <div>Nifty: {report.content.levels.nifty.support} - {report.content.levels.nifty.resistance}</div>
                                        <div>Bank Nifty: {report.content.levels.banknifty.support} - {report.content.levels.banknifty.resistance}</div>
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold mb-2">Key Points</h4>
                                      <ul className="text-sm space-y-1">
                                        {report.content.keyPoints.map((point, pointIndex) => (
                                          <li key={pointIndex}>• {point}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {activeCategory === 'technical' && (
                                <div className="space-y-4">
                                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                                      <div className="text-gray-600">Pattern</div>
                                      <div className="font-semibold">{report.chartPattern}</div>
                                    </div>
                                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                                      <div className="text-gray-600">Timeframe</div>
                                      <div className="font-semibold">{report.timeframe}</div>
                                    </div>
                                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                                      <div className="text-gray-600">Target</div>
                                      <div className="font-semibold text-green-600">{report.targets.join(', ')}</div>
                                    </div>
                                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                                      <div className="text-gray-600">Stop Loss</div>
                                      <div className="font-semibold text-red-600">{report.stoploss}</div>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {activeCategory === 'fundamental' && (
                                <div className="space-y-4">
                                  <div className="flex items-center justify-between">
                                    <div className="text-2xl font-bold text-green-600">{report.recommendation}</div>
                                    <div className="text-right">
                                      <div className="text-lg font-semibold">Target: {report.target}</div>
                                      <div className="text-sm text-gray-600">Upside: {report.upside}</div>
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                    {Object.entries(report.metrics).map(([key, value]) => (
                                      <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                                        <div className="text-gray-600">{key.toUpperCase()}</div>
                                        <div className="font-semibold">{value}</div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* CTA */}
                              <div className="mt-6 flex space-x-3">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                                  Read Full Report
                                </button>
                                <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                                  Download PDF
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Expand/Collapse Button */}
                        <button className="w-full text-center text-blue-500 hover:text-blue-700 font-semibold text-sm mt-4">
                          {selectedReport?.id === report.id ? 'Show Less' : 'Read Analysis'}
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Premium Research CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-black mb-4">Unlock Premium Research</h3>
          <p className="text-lg text-purple-100 mb-6 max-w-2xl mx-auto">
            Get access to exclusive reports, expert recommendations, and advanced analytics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-bold text-lg transition-colors">
              Subscribe Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 rounded-xl font-bold text-lg transition-colors">
              View Plans
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResearchAndInsights;