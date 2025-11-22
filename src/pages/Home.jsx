import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [marketStatus, setMarketStatus] = useState("Open");
  const [livePrices, setLivePrices] = useState([]);
  const [activeTab, setActiveTab] = useState("equity");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  // ----------------- MOCK LIVE DATA -----------------
  useEffect(() => {
    const stocks = [
      {
        symbol: "RELIANCE",
        price: 2856.75,
        change: 0.44,
        volume: "2.5M",
        segment: "equity",
      },
      {
        symbol: "TCS",
        price: 3850.2,
        change: -0.65,
        volume: "1.8M",
        segment: "equity",
      },
      {
        symbol: "INFY",
        price: 1650.8,
        change: 0.53,
        volume: "3.2M",
        segment: "equity",
      },
      {
        symbol: "HDFCBANK",
        price: 1658.9,
        change: 0.92,
        volume: "4.1M",
        segment: "equity",
      },
      {
        symbol: "ICICIBANK",
        price: 1050.3,
        change: 0.65,
        volume: "5.2M",
        segment: "equity",
      },
      {
        symbol: "NIFTY 50",
        price: 22123.45,
        change: 0.57,
        volume: "—",
        segment: "indices",
      },
      {
        symbol: "BANKNIFTY",
        price: 47123.89,
        change: 0.5,
        volume: "—",
        segment: "indices",
      },
    ];
    setLivePrices(stocks);

    const interval = setInterval(() => {
      setLivePrices((prev) =>
        prev.map((s) => ({
          ...s,
          price: Number(
            (s.price + (Math.random() - 0.5) * (s.price * 0.003)).toFixed(2)
          ),
          change: Number((s.change + (Math.random() - 0.5) * 0.2).toFixed(2)),
          volume:
            s.volume === "—"
              ? "—"
              : `${(Math.random() * 3 + 1).toFixed(1)}M`,
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Approx market timing (simple check)
  useEffect(() => {
    const now = new Date();
    const h = now.getHours();
    if (h >= 9 && h < 16) {
      setMarketStatus("Open");
    } else {
      setMarketStatus("Closed");
    }
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

  // ----------------- VIDEO HANDLERS -----------------
  const handleVideoPlayToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => setIsVideoPlaying(true))
        .catch((err) => console.error("Video play error:", err));
    } else {
      video.pause();
      setIsVideoPlaying(false);
    }
  };

  const handleVideoPlayEvent = () => setIsVideoPlaying(true);
  const handleVideoPauseEvent = () => setIsVideoPlaying(false);

  // ----------------- SMALL COMPONENTS -----------------
  const ScrollProgressBar = () => (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
      <div
        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-[width] duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );

  const LiveMarketTicker = () => {
    const filtered =
      activeTab === "all"
        ? livePrices
        : livePrices.filter((s) => s.segment === activeTab);

    return (
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold">Live Market</span>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    marketStatus === "Open" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {marketStatus === "Open" ? "Market Open" : "Market Closed"}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                {["equity", "indices", "all"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 rounded-full border ${
                      activeTab === tab
                        ? "bg-white text-blue-900 border-white"
                        : "border-white/30 text-white/80 hover:bg-white/10"
                    }`}
                  >
                    {tab === "all"
                      ? "All Segments"
                      : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex overflow-x-auto gap-6 pb-1 text-xs sm:text-sm">
              {filtered.map((s, i) => {
                const isUp = s.change >= 0;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 min-w-[140px]"
                  >
                    <span className="font-semibold">{s.symbol}</span>
                    <span>₹{Number(s.price).toFixed(2)}</span>
                    <span
                      className={`font-medium ${
                        isUp ? "text-green-300" : "text-red-300"
                      }`}
                    >
                      {isUp ? "↗" : "↘"} {Math.abs(s.change).toFixed(2)}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ⬇️ NEW: Hero graph as proper SVG line + area chart
  const TradingGraph = ({ trend = "up" }) => {
    const isUp = trend === "up";

    const values = Array.from({ length: 28 }).map((_, i) => {
      const base = 0.5 + Math.sin(i * 0.25) * 0.2; // 0.3–0.7
      const noise = (Math.random() - 0.5) * 0.12;  // +/- 0.06
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
        const y = height - v * 45 - 5; // padding
        return `${i === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");

    const areaPath =
      linePath +
      ` L ${width} ${height} L 0 ${height} Z`;

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

          {/* grid lines */}
          <g stroke="#e5e7eb" strokeWidth="0.6">
            <line x1="0" y1="10" x2={width} y2="10" />
            <line x1="0" y1="25" x2={width} y2="25" />
            <line x1="0" y1="40" x2={width} y2="40" />
          </g>

          {/* area */}
          <path d={areaPath} fill={`url(#${gradientId})`} />

          {/* line */}
          <path
            d={linePath}
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* last point */}
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

  // Mini line/area graph just for Live Market Indices
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

    const areaPath =
      linePath +
      ` L ${width} ${height} L 0 ${height} Z`;

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

        {/* grid lines */}
        <g stroke="#e5e7eb" strokeWidth="0.5">
          <line x1="0" y1="10" x2={width} y2="10" />
          <line x1="0" y1="20" x2={width} y2="20" />
          <line x1="0" y1="30" x2={width} y2="30" />
        </g>

        {/* area */}
        <path d={areaPath} fill={`url(#${gradientId})`} />

        {/* line */}
        <path
          d={linePath}
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* last point dot */}
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
    <div className="min-h-screen bg-white">
      <ScrollProgressBar />
      <LiveMarketTicker />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
              {/* Text Side */}
              <div className="text-gray-800">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-8">
                  🏆 India&apos;s Most Innovative Trading Platform
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Professional Trading
                  <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                    Made Simple
                  </span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Experience institutional-grade trading platforms with advanced
                  tools, real-time data, and expert insights. Join thousands of
                  successful traders who trust Anand Share Broking.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 gap-6 mb-8 text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      ✓
                    </div>
                    <span className="text-gray-700 font-medium">
                      Zero Brokerage
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      ✓
                    </div>
                    <span className="text-gray-700 font-medium">
                      Advanced Tools
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                      ✓
                    </div>
                    <span className="text-gray-700 font-medium">
                      Expert Research
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600">
                      ✓
                    </div>
                    <span className="text-gray-700 font-medium">
                      24/7 Support
                    </span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/open-account"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                  >
                    Open Free Account
                  </Link>
                  <Link
                    to="/demo"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center"
                  >
                    View Platform Demo
                  </Link>
                </div>
              </div>

              {/* Platform Preview Card with new SVG graph */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-white font-semibold">
                          Anand Trader Pro
                        </div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                      <div className="text-white/80 text-sm">Live Trading</div>
                    </div>
                  </div>

                  <div className="p-6 space-y-5">
                    {/* Portfolio Summary */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-green-600 text-lg font-bold">
                          +₹12,456
                        </div>
                        <div className="text-gray-600 text-xs">
                          Today&apos;s P&amp;L
                        </div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-gray-800 text-lg font-bold">
                          ₹2.47L
                        </div>
                        <div className="text-gray-600 text-xs">
                          Portfolio Value
                        </div>
                      </div>
                      <div className="text-center p-3 bg-cyan-50 rounded-lg">
                        <div className="text-green-600 text-lg font-bold">
                          +8.7%
                        </div>
                        <div className="text-gray-600 text-xs">
                          Overall Return
                        </div>
                      </div>
                    </div>

                    {/* NEW Trading Graph (clearly visible) */}
                    <TradingGraph trend="up" />

                    {/* Quick Actions */}
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <button className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors">
                        BUY
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-colors">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {successStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-600 font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trading Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Comprehensive Trading Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Access a wide range of investment products across multiple asset
                classes with advanced trading tools.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tradingProducts.map((product, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${product.gradient} rounded-xl flex items-center justify-center text-white text-xl mb-4 transform group-hover:scale-110 transition-transform duration-500`}
                  >
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {product.category}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-700"
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Advanced Trading Features
              </h2>
              <p className="text-xl text-gray-600">
                Professional tools designed for modern traders.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {platformFeatures.map((feature, index) => {
                const c = colorMap[feature.colorKey] || colorMap.blue;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-2 rounded-full border text-sm ${c.bg} ${c.border} ${c.text}`}
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Live Market Indices
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketIndices.map((index, i) => {
                const up = index.trend === "up";
                return (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-gray-800">
                        {index.name}
                      </h3>
                      <div
                        className={`w-3 h-3 rounded-full ${
                          up ? "bg-green-400" : "bg-red-400"
                        }`}
                      ></div>
                    </div>
                    <div className="text-2xl font-bold text-gray-800 mb-2">
                      {index.value.toLocaleString()}
                    </div>
                    <div
                      className={`${
                        up ? "text-green-600" : "text-red-600"
                      } mb-3`}
                    >
                      {up ? "↗" : "↘"} {Math.abs(index.change).toFixed(2)} (
                      {index.changePercent}%)
                    </div>

                    {/* Mini line/area chart */}
                    <MiniIndexGraph trend={index.trend} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Research & Analytics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Professional Research Tools
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Advanced analytics and research tools to make informed
                investment decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {researchTools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="text-3xl mb-4">{tool.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {tool.description}
                  </p>
                  <ul className="space-y-2">
                    {tool.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-700"
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

      {/* Video Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Why Choose Anand Share Broking?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Discover how our cutting-edge technology and expert insights
                  are helping traders achieve their financial goals. Join
                  thousands of successful investors who trust our platform.
                </p>

                <div className="space-y-6">
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
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-video bg-gray-900 relative">
                    <video
                      ref={videoRef}
                      className="absolute inset-0 w-full h-full object-cover"
                      poster="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80"
                      onPlay={handleVideoPlayEvent}
                      onPause={handleVideoPauseEvent}
                    >
                      {/* Make sure this file exists in public/videos/ */}
                      <source
                        src="/videos/trading-platform.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>

                    {/* dark overlay + play button */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <button
                        type="button"
                        onClick={handleVideoPlayToggle}
                        className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110 border border-white/40"
                      >
                        {isVideoPlaying ? (
                          <div className="flex space-x-1">
                            <div className="w-2 h-6 bg-white rounded-sm"></div>
                            <div className="w-2 h-6 bg-white rounded-sm"></div>
                          </div>
                        ) : (
                          <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[10px] border-y-transparent ml-1"></div>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Start Your Trading Journey Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join India&apos;s fastest growing trading community and experience
              professional trading platforms with advanced tools and expert
              support.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Zero</div>
                <div className="text-blue-200">Account Opening Fees</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Free</div>
                <div className="text-blue-200">Trading Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Customer Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/open-account"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Open Free Account
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
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
