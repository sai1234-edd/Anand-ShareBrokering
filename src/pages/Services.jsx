import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeTab, setActiveTab] = useState('trading');
  const [hoveredService, setHoveredService] = useState(null);

  const serviceCategories = [
    {
      id: 'trading',
      name: 'Trading Platforms',
      icon: '💻',
      description: 'Advanced trading solutions for every investor'
    },
    {
      id: 'investment',
      name: 'Investment Services',
      icon: '📈',
      description: 'Wealth management and portfolio solutions'
    },
    {
      id: 'derivatives',
      name: 'Derivatives & F&O',
      icon: '⚡',
      description: 'Advanced derivative trading tools'
    },
    {
      id: 'advisory',
      name: 'Advisory Services',
      icon: '🎯',
      description: 'Expert guidance and research'
    }
  ];

  const tradingServices = [
    {
      id: 1,
      title: "Web Trading Platform",
      description: "Feature-rich web platform with real-time charts, advanced order types, and comprehensive portfolio analysis.",
      features: ["Real-time Market Data", "Advanced Charting", "Multiple Order Types", "Portfolio Manager"],
      pricing: "Zero Brokerage on Equity Delivery",
      icon: "🌐",
      color: "from-blue-500 to-cyan-500",
      popular: true
    },
    {
      id: 3,
      title: "Algorithmic Trading",
      description: "Automated trading strategies with backtesting, live execution, and performance analytics.",
      features: ["Strategy Builder", "Backtesting Engine", "Live Execution", "Performance Analytics"],
      pricing: "Custom Pricing",
      icon: "🤖",
      color: "from-green-500 to-emerald-500",
      popular: false
    },
    {
      id: 4,
      title: "API Trading",
      description: "Direct market access API for institutional clients and algorithmic traders.",
      features: ["Low Latency API", "FIX Protocol", "Market Data Feeds", "Order Management"],
      pricing: "Enterprise Pricing",
      icon: "🔌",
      color: "from-orange-500 to-red-500",
      popular: false
    }
  ];

  const investmentServices = [
    {
      id: 1,
      title: "Portfolio Management",
      description: "Professional portfolio management with personalized investment strategies and regular rebalancing.",
      features: ["Custom Portfolio", "Risk Assessment", "Regular Rebalancing", "Performance Tracking"],
      pricing: "1% Annual Fee",
      icon: "💰",
      color: "from-teal-500 to-cyan-500",
      popular: true
    },
    {
      id: 2,
      title: "Mutual Fund Investments",
      description: "Comprehensive mutual fund platform with SIP, SWP, and systematic transfer plans.",
      features: ["3000+ Funds", "SIP & SWP", "Goal Planning", "Tax Saving"],
      pricing: "Zero Commission",
      icon: "📊",
      color: "from-indigo-500 to-purple-500",
      popular: false
    },
    {
      id: 3,
      title: "IPO & NFO Services",
      description: "End-to-end IPO application services with ASBA facility and application tracking.",
      features: ["Online Applications", "ASBA Facility", "Allotment Status", "Grey Market Updates"],
      pricing: "Free Applications",
      icon: "🚀",
      color: "from-amber-500 to-orange-500",
      popular: false
    }
  ];

  const derivativesServices = [
    {
      id: 1,
      title: "Futures Trading",
      description: "Advanced futures trading with real-time Greeks, margin calculator, and strategy builder.",
      features: ["Real-time Greeks", "Margin Calculator", "Strategy Builder", "Risk Management"],
      pricing: "₹20 per lot",
      icon: "⏰",
      color: "from-red-500 to-pink-500",
      popular: true
    },
    {
      id: 2,
      title: "Options Trading",
      description: "Comprehensive options trading platform with strategy visualizer and probability calculator.",
      features: ["Options Chain", "Strategy Visualizer", "Probability Calculator", "IV Analysis"],
      pricing: "₹20 per lot",
      icon: "📜",
      color: "from-violet-500 to-purple-500",
      popular: false
    },
  ];

  const advisoryServices = [
    {
      id: 1,
      title: "Research & Analysis",
      description: "Daily research reports, technical analysis, and fundamental research from expert analysts.",
      features: ["Daily Reports", "Technical Analysis", "Fundamental Research", "Sector Updates"],
      pricing: "Free for Clients",
      icon: "🔍",
      color: "from-blue-500 to-indigo-500",
      popular: true
    },
    {
      id: 2,
      title: "Personalized Advisory",
      description: "One-on-one advisory sessions with senior analysts and customized investment plans.",
      features: ["Dedicated Advisor", "Custom Plans", "Regular Reviews", "Risk Management"],
      pricing: "Premium Service",
      icon: "👨‍💼",
      color: "from-rose-500 to-pink-500",
      popular: false
    },
  ];

  const platformStats = [
    { number: "99.9%", label: "Platform Uptime" },
    { number: "<100ms", label: "Order Execution" },
    { number: "256-bit", label: "SSL Encryption" },
    { number: "24/7", label: "Customer Support" }
  ];

  const getCurrentServices = () => {
    switch (activeTab) {
      case 'trading': return tradingServices;
      case 'investment': return investmentServices;
      case 'derivatives': return derivativesServices;
      case 'advisory': return advisoryServices;
      default: return tradingServices;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                Trading Services
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Advanced trading solutions powered by cutting-edge technology and expert insights
            </motion.p>

            {/* Platform Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-12"
            >
              {platformStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-300">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Comprehensive <span className="text-blue-600">Financial Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our wide range of services designed for traders and investors of all levels
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {serviceCategories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(category.id)}
                  className={`p-4 rounded-2xl transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-2xl'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <div className="font-semibold text-sm">{category.name}</div>
                  <div className="text-xs opacity-80 mt-1">{category.description}</div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                {getCurrentServices().map((service, index) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onHoverStart={() => setHoveredService(service.id)}
                    onHoverEnd={() => setHoveredService(null)}
                    className="relative group"
                  >
                    <div className={`bg-gradient-to-br ${service.color} rounded-3xl p-8 h-full transform transition-all duration-500 group-hover:shadow-2xl`}>
                      
                      {/* Popular Badge */}
                      {service.popular && (
                        <div className="absolute -top-3 -right-3 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                          MOST POPULAR
                        </div>
                      )}

                      {/* Service Icon */}
                      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>

                      {/* Service Title */}
                      <h3 className="text-2xl font-black text-white mb-3">
                        {service.title}
                      </h3>

                      {/* Service Description */}
                      <p className="text-blue-100 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-white/90">
                            <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Pricing */}
                      <div className="border-t border-white/20 pt-4">
                        <div className="text-white font-bold text-lg">
                          {service.pricing}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full mt-6 bg-white text-slate-900 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300"
                      >
                        Get Started
                      </motion.button>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Ready to Start Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">Trading Journey?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of successful traders who trust Anand Share Broking for their financial goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                Open Demat Account
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                Download App
              </motion.button>
            </div>
            <p className="text-gray-400 mt-6 text-sm">
              Zero account opening fees • 24/7 Support • Advanced Trading Tools
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;