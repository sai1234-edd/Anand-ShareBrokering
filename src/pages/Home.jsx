import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

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

  // ----------------- SMALL COMPONENTS -----------------
  const ScrollProgressBar = () => (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
      <div
        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-[width] duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );

  // Hero graph as SVG
  const TradingGraph = ({ trend = "up" }) => {
    const isUp = trend === "up";

    const values = Array.from({ length: 28 }).map((_, i) => {
      const base = 0.5 + Math.sin(i * 0.25) * 0.2;
      const noise = (Math.random() - 0.5) * 0.12;
      let v = base + noise;
      if (!isUp) v -= 0.12;
      return Math.min(0.95, Math.max(0.15, v));
    });

    const width = 120;
    const height = 60;
    const xStep = width / (values.length - 1);

    const linePath = values
      .map((v, i) => {
        const x = i * xStep;
        const y = height - v * 45 - 5;
        return `${i === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");

    const areaPath = linePath + ` L ${width} ${height} L 0 ${height} Z`;

    const gradientId = isUp ? "heroGradUp" : "heroGradDown";
    const strokeColor = isUp ? "#16a34a" : "#dc2626";
    const fillColorStart = isUp ? "#bbf7d0" : "#fecaca";
    const fillColorEnd = "#ffffff";

    return (
      <div className="w-full h-32 rounded-xl bg-white border border-gray-200 px-2 py-1">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={fillColorStart} stopOpacity="0.8" />
              <stop offset="100%" stopColor={fillColorEnd} stopOpacity="0" />
            </linearGradient>
          </defs>

          <g stroke="#e5e7eb" strokeWidth="0.6">
            <line x1="0" y1="10" x2={width} y2="10" />
            <line x1="0" y1="25" x2={width} y2="25" />
            <line x1="0" y1="40" x2={width} y2="40" />
          </g>

          <path d={areaPath} fill={`url(#${gradientId})`} />

          <path
            d={linePath}
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {values.length > 0 && (
            <circle
              cx={(values.length - 1) * xStep}
              cy={height - values[values.length - 1] * 45 - 5}
              r="2.3"
              fill={strokeColor}
            />
          )}
        </svg>
      </div>
    );
  };

  // Mini index graph
  const MiniIndexGraph = ({ trend = "up" }) => {
    const isUp = trend === "up";

    const values = Array.from({ length: 20 }).map((_, i) => {
      const base = 0.5 + Math.sin(i * 0.3) * 0.2;
      const noise = (Math.random() - 0.5) * 0.1;
      let v = base + noise;
      if (!isUp) v -= 0.15;
      return Math.min(0.95, Math.max(0.1, v));
    });

    const width = 100;
    const height = 40;
    const xStep = width / (values.length - 1);

    const linePath = values
      .map((v, i) => {
        const x = i * xStep;
        const y = height - v * 30 - 5;
        return `${i === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");

    const areaPath = linePath + ` L ${width} ${height} L 0 ${height} Z`;

    const gradientId = isUp ? "idxGradUp" : "idxGradDown";
    const strokeColor = isUp ? "#16a34a" : "#dc2626";
    const fillColorStart = isUp ? "#bbf7d0" : "#fecaca";
    const fillColorEnd = "#ffffff";

    return (
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-16"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={fillColorStart} stopOpacity="0.7" />
            <stop offset="100%" stopColor={fillColorEnd} stopOpacity="0" />
          </linearGradient>
        </defs>

        <g stroke="#e5e7eb" strokeWidth="0.5">
          <line x1="0" y1="10" x2={width} y2="10" />
          <line x1="0" y1="20" x2={width} y2="20" />
          <line x1="0" y1="30" x2={width} y2="30" />
        </g>

        <path d={areaPath} fill={`url(#${gradientId})`} />

        <path
          d={linePath}
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {values.length > 0 && (
          <circle
            cx={(values.length - 1) * xStep}
            cy={height - values[values.length - 1] * 30 - 5}
            r="2"
            fill={strokeColor}
          />
        )}
      </svg>
    );
  };

  // ----------------- DATA ARRAYS -----------------
  const tradingProducts = [
    {
      category: "Equity Trading",
      icon: "📈",
      description: "Trade in stocks across NSE and BSE segments.",
      features: [
        "Cash & Delivery",
        "Intraday Trading",
        "Basket Orders",
        "IPO Applications",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      category: "Derivatives",
      icon: "📊",
      description: "Advanced futures and options trading.",
      features: [
        "Stock Futures",
        "Index Options",
        "Currency Derivatives",
        "Commodity F&O",
      ],
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      category: "Currency & Commodities",
      icon: "💱",
      description: "Trade in forex and commodity markets.",
      features: [
        "Forex Trading",
        "Gold & Silver",
        "Crude Oil",
        "Agricultural Commodities",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      category: "Mutual Funds",
      icon: "🏦",
      description: "Complete mutual fund investment platform.",
      features: [
        "Direct Plans",
        "SIP Investments",
        "Portfolio Tracking",
        "Expert Recommendations",
      ],
      gradient: "from-teal-500 to-cyan-500",
    },
  ];

  const platformFeatures = [
    {
      title: "Lightning Fast Execution",
      description:
        "Execute trades in milliseconds with our high-speed infrastructure.",
      icon: "⚡",
      stats: "<50ms Execution",
      colorKey: "blue",
    },
    {
      title: "Advanced Charting Tools",
      description:
        "100+ technical indicators and drawing tools for professional analysis.",
      icon: "📊",
      stats: "100+ Indicators",
      colorKey: "purple",
    },
    {
      title: "AI-Powered Insights",
      description:
        "Smart trade recommendations powered by machine learning algorithms.",
      icon: "🤖",
      stats: "24x7 Monitoring",
      colorKey: "green",
    },
    {
      title: "Multi-Platform Access",
      description:
        "Seamless trading across web, mobile, and desktop platforms.",
      icon: "📱",
      stats: "3 Platforms",
      colorKey: "indigo",
    },
  ];

  const colorMap = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-700",
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-700",
    },
    indigo: {
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      text: "text-indigo-700",
    },
  };

  const marketIndices = [
    {
      name: "NIFTY 50",
      value: 22123.45,
      change: 125.67,
      changePercent: 0.57,
      trend: "up",
    },
    {
      name: "SENSEX",
      value: 72845.67,
      change: 345.23,
      changePercent: 0.48,
      trend: "up",
    },
    {
      name: "BANK NIFTY",
      value: 47123.89,
      change: 234.56,
      changePercent: 0.5,
      trend: "up",
    },
    {
      name: "NIFTY IT",
      value: 34567.12,
      change: -123.45,
      changePercent: -0.36,
      trend: "down",
    },
  ];

  const researchTools = [
    {
      title: "Technical Analysis",
      description:
        "Advanced charting with 100+ technical indicators and pattern recognition.",
      icon: "🔍",
      features: [
        "Real-time Charts",
        "Custom Indicators",
        "Backtesting",
        "Screeners",
      ],
    },
    {
      title: "Fundamental Research",
      description:
        "In-depth company analysis with financial statements and valuation models.",
      icon: "📑",
      features: [
        "Financial Reports",
        "Ratio Analysis",
        "Peer Comparison",
        "DCF Valuation",
      ],
    },
    {
      title: "Options Analytics",
      description:
        "Advanced options strategies with Greeks analysis and risk management.",
      icon: "🎯",
      features: [
        "Options Chain",
        "Strategy Builder",
        "Risk Analysis",
        "IV Charts",
      ],
    },
  ];

  const successStats = [
    {
      number: "50,000+",
      label: "Active Traders",
      description: "Growing community of successful investors.",
    },
    {
      number: "₹2,500Cr+",
      label: "Daily Turnover",
      description: "Trusted by traders across India.",
    },
    {
      number: "99.95%",
      label: "Platform Uptime",
      description: "Reliable and stable trading experience.",
    },
    {
      number: "4.9/5",
      label: "Customer Rating",
      description: "Rated excellent by our clients.",
    },
  ];

  // ----------------- MAIN JSX -----------------
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <ScrollProgressBar />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-14 md:py-20">
              {/* Text Side */}
              <div className="text-gray-800">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8">
                  🏆 India&apos;s Most Innovative Trading Platform
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                  Professional Trading
                  <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                    Made Simple
                  </span>
                </h1>

                <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                  Experience institutional-grade trading platforms with advanced
                  tools, real-time data, and expert insights. Join thousands of
                  successful traders who trust Anand Share Broking.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8 text-xs sm:text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-lg">
                      ✓
                    </div>
                    <span className="text-gray-700 font-medium">
                      Zero Brokerage
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-lg">
                      ✓
                    </div>
                    <span className="text-gray-700 font-medium">
                      Advanced Tools
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-lg">
                      ✓
                    </div>
                    <span className="text-gray-700 font-medium">
                      Expert Research
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 text-lg">
                      ✓
                    </div>
                    <span className="text-gray-700 font-medium">
                      24/7 Support
                    </span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link
                    to="/open-account"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                  >
                    Open Free Account
                  </Link>
                  <Link
                    to="/demo"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 text-center"
                  >
                    View Platform Demo
                  </Link>
                </div>
              </div>

              {/* Platform Preview Card with graph */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-w-md ml-auto mr-auto lg:mr-0">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-5 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-white font-semibold text-sm sm:text-base">
                          Anand Trader Pro
                        </div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                      <div className="text-white/80 text-xs sm:text-sm">
                        Live Trading
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-5">
                    {/* Portfolio Summary */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-green-600 text-base sm:text-lg font-bold">
                          +₹12,456
                        </div>
                        <div className="text-gray-600 text-[11px] sm:text-xs">
                          Today&apos;s P&amp;L
                        </div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-gray-800 text-base sm:text-lg font-bold">
                          ₹2.47L
                        </div>
                        <div className="text-gray-600 text-[11px] sm:text-xs">
                          Portfolio Value
                        </div>
                      </div>
                      <div className="text-center p-3 bg-cyan-50 rounded-lg">
                        <div className="text-green-600 text-base sm:text-lg font-bold">
                          +8.7%
                        </div>
                        <div className="text-gray-600 text-[11px] sm:text-xs">
                          Overall Return
                        </div>
                      </div>
                    </div>

                    {/* Trading Graph */}
                    <TradingGraph trend="up" />

                    {/* Quick Actions */}
                    <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                      <button className="bg-green-500 hover:bg-green-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors">
                        BUY
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors">
                        SELL
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {successStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-600 font-semibold mb-1 text-sm md:text-base">
                    {stat.label}
                  </div>
                  <div className="text-gray-600 text-xs md:text-sm">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trading Products */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
                Comprehensive Trading Solutions
              </h2>
              <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
                Access a wide range of investment products across multiple asset
                classes with advanced trading tools.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {tradingProducts.map((product, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${product.gradient} rounded-xl flex items-center justify-center text-white text-lg md:text-xl mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-500`}
                  >
                    {product.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                    {product.category}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-1.5 md:space-y-2">
                    {product.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-xs md:text-sm text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
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

      {/* Platform Features */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
                Advanced Trading Features
              </h2>
              <p className="text-base md:text-xl text-gray-600">
                Professional tools designed for modern traders.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {platformFeatures.map((feature, index) => {
                const c = colorMap[feature.colorKey] || colorMap.blue;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="text-2xl md:text-3xl mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-500">
                      {feature.icon}
                    </div>
                    <h3 className="text-md md:text-lg font-bold text-gray-800 mb-2 md:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1.5 md:py-2 rounded-full border text-xs md:text-sm ${c.bg} ${c.border} ${c.text}`}
                    >
                      <span className="font-semibold">{feature.stats}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Market Indices */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8 md:mb-12">
              Live Market Indices
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketIndices.map((index, i) => {
                const up = index.trend === "up";
                return (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start mb-3 md:mb-4">
                      <h3 className="font-bold text-gray-800 text-sm md:text-base">
                        {index.name}
                      </h3>
                      <div
                        className={`w-3 h-3 rounded-full ${
                          up ? "bg-green-400" : "bg-red-400"
                        }`}
                      ></div>
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-gray-800 mb-1.5 md:mb-2">
                      {index.value.toLocaleString()}
                    </div>
                    <div
                      className={`${
                        up ? "text-green-600" : "text-red-600"
                      } mb-3 text-sm`}
                    >
                      {up ? "↗" : "↘"} {Math.abs(index.change).toFixed(2)} (
                      {index.changePercent}%)
                    </div>

                    <MiniIndexGraph trend={index.trend} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Research & Analytics */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
                Professional Research Tools
              </h2>
              <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
                Advanced analytics and research tools to make informed
                investment decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {researchTools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="text-2xl md:text-3xl mb-3 md:mb-4">
                    {tool.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
                    {tool.description}
                  </p>
                  <ul className="space-y-1.5 md:space-y-2">
                    {tool.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-xs md:text-sm text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
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

      {/* Why Choose – with Trading IMAGE instead of video */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                  Why Choose Anand Share Broking?
                </h2>
                <p className="text-sm md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                  Discover how our cutting-edge technology and expert insights
                  are helping traders achieve their financial goals. Join
                  thousands of successful investors who trust our platform.
                </p>

                <div className="space-y-4 md:space-y-6">
                  {[
                    {
                      icon: "🚀",
                      title: "Advanced Technology",
                      description:
                        "Cutting-edge trading platforms with real-time data.",
                    },
                    {
                      icon: "📊",
                      title: "Expert Research",
                      description:
                        "Daily market analysis and investment recommendations.",
                    },
                    {
                      icon: "🛡️",
                      title: "Secure & Reliable",
                      description:
                        "Bank-grade security with 99.95% platform uptime.",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-lg md:text-xl">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm md:text-lg mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 text-xs md:text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trading image block (no video) */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl overflow-hidden shadow-2xl max-w-xl ml-auto mr-auto lg:mr-0">
                  <div className="relative aspect-video">
                    <img
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80"
                      alt="Traders analyzing financial markets on multiple screens"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-center justify-between">
                      <div>
                        <p className="text-xs sm:text-sm text-blue-100 uppercase tracking-wide">
                          Live Market Monitoring
                        </p>
                        <p className="text-sm sm:text-base font-semibold text-white">
                          Real-time analytics & risk control
                        </p>
                      </div>
                      <div className="hidden sm:flex flex-col items-end text-right">
                        <span className="text-emerald-400 text-xs font-semibold">
                          +8.7% Today
                        </span>
                        <span className="text-[11px] text-blue-100">
                          Active traders online
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End image card */}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Start Your Trading Journey Today
            </h2>
            <p className="text-base md:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed">
              Join India&apos;s fastest growing trading community and experience
              professional trading platforms with advanced tools and expert
              support.
            </p>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 text-sm md:text-base">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold mb-1">
                  Zero
                </div>
                <div className="text-blue-200">Account Opening Fees</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold mb-1">
                  Free
                </div>
                <div className="text-blue-200">Trading Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold mb-1">
                  24/7
                </div>
                <div className="text-blue-200">Customer Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/open-account"
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Open Free Account
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300"
              >
                Contact Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
