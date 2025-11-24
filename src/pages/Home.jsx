import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [marketData, setMarketData] = useState({
    nifty: { price: 22400, change: 125, percent: 0.56 },
    sensex: { price: 73850, change: 350, percent: 0.48 },
    bankNifty: { price: 48500, change: -80, percent: -0.16 },
    niftyIt: { price: 36200, change: 420, percent: 1.17 }
  });
  const [activeStocks, setActiveStocks] = useState([
    { symbol: "RELIANCE", price: 2850, change: 12.5, percent: 0.44 },
    { symbol: "TCS", price: 3850, change: -25.75, percent: -0.66 },
    { symbol: "HDFC", price: 1650, change: 8.25, percent: 0.50 },
    { symbol: "INFY", price: 1650, change: 32.5, percent: 2.01 },
    { symbol: "HINDUNILVR", price: 2450, change: 15.25, percent: 0.63 },
    { symbol: "SBIN", price: 650, change: -5.75, percent: -0.88 },
    { symbol: "ICICIBANK", price: 1050, change: 18.5, percent: 1.79 },
    { symbol: "BHARTIARTL", price: 1150, change: 22.25, percent: 1.97 }
  ]);
  const [isMarketOpen, setIsMarketOpen] = useState(true);
  const [priceHistory, setPriceHistory] = useState({});
  const [showMarketAnalysis, setShowMarketAnalysis] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const marketSectionRef = useRef(null);
  const marketButtonRef = useRef(null);

  // ----------------- REAL-TIME MARKET DATA -----------------
  useEffect(() => {
    // Initialize price history
    const initialHistory = {};
    Object.keys(marketData).forEach(key => {
      initialHistory[key] = Array.from({ length: 20 }, () => marketData[key].price);
    });
    activeStocks.forEach(stock => {
      initialHistory[stock.symbol] = Array.from({ length: 20 }, () => stock.price);
    });
    setPriceHistory(initialHistory);

    // Enhanced real-time market data simulation
    const marketInterval = setInterval(() => {
      setMarketData(prev => {
        const newData = {};
        Object.keys(prev).forEach(key => {
          const currentPrice = prev[key].price;
          const randomChange = (Math.random() - 0.5) * (key.includes('nifty') ? 15 : 25);
          const newPrice = Math.max(100, currentPrice + randomChange);
          const change = newPrice - (key === 'nifty' ? 22400 : key === 'sensex' ? 73850 : key === 'bankNifty' ? 48500 : 36200);
          const percent = (change / (key === 'nifty' ? 22400 : key === 'sensex' ? 73850 : key === 'bankNifty' ? 48500 : 36200)) * 100;
          
          // Update price history
          setPriceHistory(prevHistory => ({
            ...prevHistory,
            [key]: [...(prevHistory[key] || []).slice(1), newPrice]
          }));

          newData[key] = {
            price: newPrice,
            change: change,
            percent: percent
          };
        });
        return newData;
      });

      setActiveStocks(prev => prev.map(stock => {
        const randomChange = (Math.random() - 0.5) * 8;
        const newPrice = Math.max(10, stock.price + randomChange);
        const basePrice = stock.symbol === "RELIANCE" ? 2850 : 
                         stock.symbol === "TCS" ? 3850 :
                         stock.symbol === "HDFC" ? 1650 :
                         stock.symbol === "INFY" ? 1650 :
                         stock.symbol === "HINDUNILVR" ? 2450 :
                         stock.symbol === "SBIN" ? 650 :
                         stock.symbol === "ICICIBANK" ? 1050 : 1150;
        const change = newPrice - basePrice;
        const percent = (change / basePrice) * 100;

        // Update price history
        setPriceHistory(prevHistory => ({
          ...prevHistory,
          [stock.symbol]: [...(prevHistory[stock.symbol] || []).slice(1), newPrice]
        }));

        return {
          ...stock,
          price: newPrice,
          change: change,
          percent: percent
        };
      }));
    }, 1500);

    // Check market hours
    const checkMarketHours = () => {
      const now = new Date();
      const istHours = now.getUTCHours() + 5.5;
      const istMinutes = now.getUTCMinutes() + 30;
      const totalMinutes = istHours * 60 + istMinutes;
      
      const marketOpen = totalMinutes >= 9*60 + 15 && totalMinutes < 15*60 + 30;
      setIsMarketOpen(marketOpen);
    };

    checkMarketHours();
    const marketHoursInterval = setInterval(checkMarketHours, 60000);

    return () => {
      clearInterval(marketInterval);
      clearInterval(marketHoursInterval);
    };
  }, []);

  // ----------------- HOVER HANDLERS -----------------
  useEffect(() => {
    const handleMouseEnter = () => {
      setIsHovering(true);
      setShowMarketAnalysis(true);
    };

    const handleMouseLeave = (e) => {
      // Check if mouse is leaving to a non-related element
      if (
        marketSectionRef.current &&
        !marketSectionRef.current.contains(e.relatedTarget) &&
        marketButtonRef.current &&
        !marketButtonRef.current.contains(e.relatedTarget)
      ) {
        setIsHovering(false);
        setShowMarketAnalysis(false);
      }
    };

    const marketSection = marketSectionRef.current;
    const marketButton = marketButtonRef.current;

    if (marketSection && marketButton) {
      marketSection.addEventListener('mouseenter', handleMouseEnter);
      marketSection.addEventListener('mouseleave', handleMouseLeave);
      marketButton.addEventListener('mouseenter', handleMouseEnter);
      marketButton.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (marketSection && marketButton) {
        marketSection.removeEventListener('mouseenter', handleMouseEnter);
        marketSection.removeEventListener('mouseleave', handleMouseLeave);
        marketButton.removeEventListener('mouseenter', handleMouseEnter);
        marketButton.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // ----------------- SCROLL PROGRESS -----------------
  useEffect(() => {
    const handleScroll = () => {
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - winHeight;
      const scrollTop = window.pageYOffset;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ----------------- SERVICE ANIMATIONS -----------------
  useEffect(() => {
    const services = document.querySelectorAll('.service-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, index * 150);
        }
      });
    }, { threshold: 0.1 });

    services.forEach(service => observer.observe(service));

    return () => observer.disconnect();
  }, []);

  // ----------------- SMALL COMPONENTS -----------------
  const ScrollProgressBar = () => (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
      <div
        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-[width] duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );

  const MarketIndicator = ({ isPositive }) => (
    <div className={`w-2 h-2 rounded-full ${isPositive ? 'bg-green-500' : 'bg-red-500'} mr-2`} />
  );

  const MiniSparkline = ({ data, isPositive }) => {
    if (!data || data.length === 0) return null;
    
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;
    
    // Generate proper SVG path data
    const pathData = data.map((value, index) => {
      const x = (index / (data.length - 1)) * 60;
      const y = range > 0 ? 20 - ((value - min) / range) * 20 : 10;
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');

    return (
      <svg width="60" height="20" className="ml-2">
        {data.map((value, index) => {
          const x = (index / (data.length - 1)) * 60;
          const y = range > 0 ? 20 - ((value - min) / range) * 20 : 10;
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="1"
              fill={isPositive ? "#10B981" : "#EF4444"}
            />
          );
        })}
        <path
          d={pathData}
          stroke={isPositive ? "#10B981" : "#EF4444"}
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    );
  };

  // ----------------- DATA ARRAYS -----------------
  const services = [
    {
      title: "Equity & Derivative Trading",
      description: "Trade across leading stock exchanges with advanced tools",
      icon: "📈",
      features: ["NSE & BSE Trading", "Futures & Options", "Intraday Trading", "Long-term Investing"]
    },
    {
      title: "Real-time Market Data",
      description: "Live data, research reports and expert insights",
      icon: "📊",
      features: ["Live Market Feeds", "Research Reports", "Expert Analysis", "Market Alerts"]
    },
    {
      title: "User-friendly Trading Tools",
      description: "Smooth and efficient buying and selling experience",
      icon: "🛠️",
      features: ["Easy Order Placement", "Portfolio Tracking", "Mobile Trading", "One-click Orders"]
    },
    {
      title: "Secure & Transparent Execution",
      description: "Complete peace of mind with secure trading",
      icon: "🛡️",
      features: ["Bank-level Security", "Transparent Pricing", "Instant Execution", "Safe Transactions"]
    },
    {
      title: "Portfolio Management",
      description: "Monitor performance and rebalance investments",
      icon: "💼",
      features: ["Performance Tracking", "Rebalancing Tools", "Tax Planning", "Goal Setting"]
    },
    {
      title: "Personalized Assistance",
      description: "Step-by-step guidance for every investor",
      icon: "👨‍💼",
      features: ["Dedicated Relationship Manager", "Investment Guidance", "Market Education", "24/7 Support"]
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Expertise",
      description: "Years of market experience and professional guidance"
    },
    {
      icon: "⚡",
      title: "Technology",
      description: "Advanced trading platforms for seamless experience"
    },
    {
      icon: "🤝",
      title: "Trust",
      description: "Transparent operations and reliable execution"
    }
  ];

  const successStats = [
    {
      number: "50,000+",
      label: "Active Investors",
      description: "Growing community of successful traders"
    },
    {
      number: "₹2,500Cr+",
      label: "Daily Turnover",
      description: "Trusted by investors across India"
    },
    {
      number: "99.95%",
      label: "Platform Uptime",
      description: "Reliable and stable trading experience"
    },
    {
      number: "4.9/5",
      label: "Customer Rating",
      description: "Rated excellent by our clients"
    }
  ];

  // ----------------- MAIN JSX -----------------
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <ScrollProgressBar />

      {/* LIVE MARKET BUTTON - Fixed at Top Right */}
      <div className="fixed top-24 right-4 z-50">
        <button
          ref={marketButtonRef}
          className="  text-cyan-500   hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 group"
          onMouseEnter={() => {
            setIsHovering(true);
            setShowMarketAnalysis(true);
          }}
        >
          <span className="font-semibold text-xs whitespace-nowrap">Live Market</span>
          <div className={`w-2 h-2 rounded-full ${isMarketOpen ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></div>
        </button>
      </div>
      
    {/* LIVE MARKET ANALYSIS SECTION - Now appears below the hero section */}
      {showMarketAnalysis && (
        <section 
          ref={marketSectionRef}
          className="w-full bg-gradient-to-r from-gray-900 to-blue-900 text-white py-3 border-b-4 border-cyan-500 shadow-lg z-40"
          onMouseEnter={() => {
            setIsHovering(true);
            setShowMarketAnalysis(true);
          }}
          onMouseLeave={(e) => {
            if (!marketButtonRef.current?.contains(e.relatedTarget)) {
              setIsHovering(false);
              setShowMarketAnalysis(false);
            }
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Market Status Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between mb-3">
                <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                  <div className={`flex items-center ${isMarketOpen ? 'text-green-400' : 'text-red-400'}`}>
                    <div className={`w-2 h-2 rounded-full ${isMarketOpen ? 'bg-green-400' : 'bg-red-400'} mr-1 animate-pulse`} />
                    <span className="text-xs font-medium">
                      {isMarketOpen ? 'LIVE' : 'CLOSED'}
                    </span>
                  </div>
                  <div className="text-xs text-gray-300">
                    {new Date().toLocaleDateString('en-IN', { 
                      weekday: 'short', 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-xs text-gray-300">
                  <span>NSE</span>
                  <span>•</span>
                  <span>BSE</span>
                  <span>•</span>
                  <span>MCX</span>
                </div>
              </div>

              {/* Main Indices */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mb-3">
                {[
                  { name: "NIFTY 50", data: marketData.nifty, key: "nifty" },
                  { name: "SENSEX", data: marketData.sensex, key: "sensex" },
                  { name: "BANK NIFTY", data: marketData.bankNifty, key: "bankNifty" },
                  { name: "NIFTY IT", data: marketData.niftyIt, key: "niftyIt" }
                ].map((index, idx) => (
                  <div 
                    key={idx} 
                    className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition-all duration-300 hover:scale-105 cursor-pointer group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-xs text-gray-400 font-medium">{index.name}</div>
                      <div className="flex items-center">
                        <MarketIndicator isPositive={index.data.change >= 0} />
                        <MiniSparkline 
                          data={priceHistory[index.key]} 
                          isPositive={index.data.change >= 0} 
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-base font-bold transition-all duration-300">
                        {index.data.price.toFixed(0)}
                      </div>
                      <div className={`text-xs font-semibold transition-all duration-300 ${index.data.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {index.data.change >= 0 ? '+' : ''}{index.data.change.toFixed(2)} 
                        <span className="ml-1">({index.data.percent >= 0 ? '+' : ''}{index.data.percent.toFixed(2)}%)</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Active Stocks Ticker */}
              <div className="relative overflow-hidden bg-gray-800 rounded-lg p-2">
                <div className="flex animate-marquee whitespace-nowrap">
                  {[...activeStocks, ...activeStocks].map((stock, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center space-x-4 px-6 py-2 hover:bg-gray-700 rounded transition-colors duration-200 cursor-pointer group"
                    >
                      <div className="text-xs font-medium min-w-[80px]">{stock.symbol}</div>
                      <div className="text-xs font-mono min-w-[70px] transition-all duration-300">
                        {stock.price.toFixed(2)}
                      </div>
                      <div className="flex items-center">
                        <div className={`text-xs font-semibold transition-all duration-300 ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} 
                          <span className="ml-1">({stock.percent >= 0 ? '+' : ''}{stock.percent.toFixed(2)}%)</span>
                        </div>
                        <MiniSparkline 
                          data={priceHistory[stock.symbol]} 
                          isPositive={stock.change >= 0} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* HERO SECTION - This is your header section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 md:py-16">
              {/* Text Side */}
              <div className="text-gray-800">
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-xs font-medium mb-4 sm:mb-6 animate-pulse">
                  🏆 Trusted Share Broking Partner
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 leading-tight">
                  Invest with Knowledge,
                  <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text animate-gradient">
                    Strategy & Support
                  </span>
                </h1>

                <p className="text-base md:text-lg text-gray-600 mb-5 md:mb-6 leading-relaxed">
                  At Anand Share Broking, we bring expertise, technology, and trust together 
                  to create a seamless trading experience for every investor.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-5 md:mb-6 text-xs">
                  <div className="flex items-center space-x-2 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-lg">
                      ✓
                    </div>
                    <span className="text-gray-700 font-medium">
                      Expert Guidance
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-lg">
                      ✓
                    </div>
                    <span className="text-gray-700 font-medium">
                      Advanced Tools
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-lg">
                      ✓
                    </div>
                    <span className="text-gray-700 font-medium">
                      Secure Trading
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 text-lg">
                      ✓
                    </div>
                    <span className="text-gray-700 font-medium">
                      Personal Support
                    </span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/open-account"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                  >
                    Start Investing
                  </Link>
                  <Link
                    to="/demo"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Real-time Trading Platform Preview */}
              <div className="relative">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden max-w-md ml-auto mr-auto lg:mr-0 transform hover:scale-105 transition-transform duration-500">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="text-white font-semibold text-sm">
                          Live Trading Platform
                        </div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                      <div className="text-white/80 text-xs">
                        {isMarketOpen ? 'Live Markets' : 'Market Closed'}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 space-y-4">
                    {/* Real-time Graph */}
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-sm font-semibold text-gray-800">NIFTY 50</div>
                        <div className={`text-xs font-semibold ${marketData.nifty.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {marketData.nifty.change >= 0 ? '+' : ''}{marketData.nifty.change.toFixed(2)} ({marketData.nifty.percent.toFixed(2)}%)
                        </div>
                      </div>
                      <div className="h-24 bg-white rounded border">
                        <svg viewBox="0 0 300 120" className="w-full h-full">
                          <path
                            d="M0,60 L50,55 L100,65 L150,45 L200,70 L250,50 L300,75"
                            stroke={marketData.nifty.change >= 0 ? "#10B981" : "#EF4444"}
                            strokeWidth="2"
                            fill="none"
                          />
                          <path
                            d="M0,60 L50,55 L100,65 L150,45 L200,70 L250,50 L300,75 L300,120 L0,120 Z"
                            fill={marketData.nifty.change >= 0 ? "url(#greenGradient)" : "url(#redGradient)"}
                            opacity="0.3"
                          />
                          <defs>
                            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                              <stop offset="100%" stopColor="#10B981" stopOpacity="0.1" />
                            </linearGradient>
                            <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8" />
                              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.1" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    {/* Portfolio Summary */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-green-600 text-sm font-bold">
                          +₹8,456
                        </div>
                        <div className="text-gray-600 text-xs">
                          Today's Return
                        </div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-gray-800 text-sm font-bold">
                          ₹1.87L
                        </div>
                        <div className="text-gray-600 text-xs">
                          Portfolio Value
                        </div>
                      </div>
                      <div className="text-center p-3 bg-cyan-50 rounded-lg">
                        <div className="text-green-600 text-sm font-bold">
                          +12.3%
                        </div>
                        <div className="text-gray-600 text-xs">
                          YTD Return
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <button className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold text-xs transition-all duration-300">
                        INVEST
                      </button>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold text-xs transition-all duration-300">
                        RESEARCH
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REST OF THE CONTENT SECTIONS */}
      <div>
        {/* MISSION STATEMENT */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Your Financial Growth is Our Shared Mission
              </h2>
              <div className="text-base md:text-lg text-gray-600 leading-relaxed space-y-4">
                <p>
                  In an ever-evolving financial market, we understand the importance of reliable 
                  guidance, transparent execution, and smart decision-making. That's why we offer 
                  a platform built for both beginners stepping into the market for the first time 
                  and seasoned investors aiming to refine and expand their portfolios.
                </p>
                <p>
                  Our approach is centered around empowering you with clarity and confidence. 
                  We help you understand market trends, identify growth opportunities, and build 
                  strategies that align with your long-term financial goals.
                </p>
                <p className="text-lg md:text-xl font-semibold text-blue-600">
                  With Anand Share Broking, you don't just trade — you invest with knowledge, 
                  strategy, and complete support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OUR VALUES */}
        <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                  Our Core Values
                </h2>
                <p className="text-lg text-gray-600">
                  Building trust through expertise and technology
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 text-center"
                  >
                    <div className="text-4xl mb-4 transform hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE SERVICES */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                  Comprehensive Share Broking Services
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Everything you need to succeed in your investment journey
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="service-card group bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-500 transform opacity-0 translate-y-8"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center text-sm text-gray-700 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-300"
                          style={{transitionDelay: `${i * 100}ms`}}
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 transform group-hover:scale-150 transition-transform duration-300"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SUCCESS STATISTICS */}
        <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {successStats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center transform hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-2xl font-bold text-gray-800 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-blue-600 font-semibold text-sm mb-1">
                      {stat.label}
                    </div>
                    <div className="text-gray-600 text-xs">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Why Choose Anand Share Broking?
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We empower both beginners and experienced investors with the tools, 
                    knowledge, and support needed to navigate financial markets confidently.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: "🎓",
                        title: "Beginner-Friendly",
                        description: "Step-by-step guidance for new investors entering the market"
                      },
                      {
                        icon: "⚡",
                        title: "Advanced Platforms",
                        description: "Professional tools for experienced traders to maximize returns"
                      },
                      {
                        icon: "🛡️",
                        title: "Complete Security",
                        description: "Bank-grade security with transparent operations"
                      },
                      {
                        icon: "📚",
                        title: "Continuous Learning",
                        description: "Regular market insights and educational resources"
                      }
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 transform hover:translate-x-2 transition-transform duration-300"
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-lg transform hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Real-time Market Graph */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl overflow-hidden shadow-lg p-5">
                    <div className="text-white mb-3">
                      <h3 className="text-xl font-bold mb-1">Live Market Performance</h3>
                      <p className="text-blue-100 text-sm">Real-time index tracking</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        {Object.entries(marketData).map(([key, data], index) => (
                          <div key={key} className="text-white text-center p-2 bg-white/5 rounded">
                            <div className="text-xs font-semibold">{key.toUpperCase()}</div>
                            <div className="text-base font-bold">{data.price.toFixed(0)}</div>
                            <div className={`text-xs ${data.change >= 0 ? 'text-green-300' : 'text-red-300'}`}>
                              {data.change >= 0 ? '+' : ''}{data.change.toFixed(2)}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="h-32 bg-white/5 rounded p-2">
                        <svg viewBox="0 0 400 120" className="w-full h-full">
                          <path
                            d="M0,60 C50,50 100,70 150,40 C200,10 250,80 300,20 C350,-40 400,100 400,60"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                            fill="none"
                            className="animate-draw-line"
                          />
                          <path
                            d="M0,60 C50,50 100,70 150,40 C200,10 250,80 300,20 C350,-40 400,100 400,60 L400,120 L0,120 Z"
                            fill="url(#graphGradient)"
                            opacity="0.3"
                          />
                          <defs>
                            <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Start Your Investment Journey Today
              </h2>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                Join thousands of successful investors who trust Anand Share Broking 
                for their financial growth.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="text-xl font-bold mb-1">
                    Zero
                  </div>
                  <div className="text-blue-200">Account Fees</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="text-xl font-bold mb-1">
                    Free
                  </div>
                  <div className="text-blue-200">Research Tools</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="text-xl font-bold mb-1">
                    Expert
                  </div>
                  <div className="text-blue-200">Support</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/open-account"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Open Your Account
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105"
                >
                  Talk to Expert
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-gradient {
          background: linear-gradient(-45deg, #3b82f6, #8b5cf6, #3b82f6);
          background-size: 400% 400%;
          animation: gradient 3s ease infinite;
          -webkit-background-clip: text;
          background-clip: text;
        }
        
        .animate-draw-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawLine 3s ease-in-out forwards;
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        
        .service-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Responsive improvements */
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Home;