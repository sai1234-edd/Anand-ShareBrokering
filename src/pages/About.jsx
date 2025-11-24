import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, threshold: 0.3 });
  const isInView2 = useInView(ref2, { once: true, threshold: 0.3 });
  const isInView3 = useInView(ref3, { once: true, threshold: 0.3 });

  const tradingFeatures = [
    {
      icon: "⚡",
      title: "Lightning-Fast Execution",
      description: "Trade execution in milliseconds with our advanced infrastructure",
      speed: "99.7% Order Success Rate"
    },
    {
      icon: "📊",
      title: "Advanced Charting",
      description: "Professional trading tools with 100+ technical indicators",
      speed: "Real-time Data"
    },
    {
      icon: "🛡️",
      title: "Secure Platform",
      description: "Bank-level encryption and multi-layer security protocols",
      speed: "256-bit SSL Security"
    },
    {
      icon: "📱",
      title: "Mobile Trading",
      description: "Seamless trading experience across all devices",
      speed: "Zero Lag Experience"
    }
  ];

  const marketStats = [
    { number: "50,000+", label: "Active Traders", suffix: "Trusting Our Platform" },
    { number: "₹500+", label: "Crore Daily", suffix: "Trading Volume" },
    { number: "15+", label: "Years Experience", suffix: "In Financial Markets" },
    { number: "99.9%", label: "Platform Uptime", suffix: "Reliability Guarantee" }
  ];

  const technologyStack = [
    {
      category: "Trading Platforms",
      items: ["Web Trader", "Mobile App", "Desktop Application", "API Trading"],
      icon: "💻",
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Market Analysis",
      items: ["Real-time Charts", "Technical Indicators", "Fundamental Research", "Algorithmic Tools"],
      icon: "📈",
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Security Features",
      items: ["2-Factor Authentication", "Biometric Login", "End-to-End Encryption", "Fraud Detection"],
      icon: "🛡️",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const achievements = [
    {
      year: "2021",
      achievement: "Customer Excellence",
      detail: "98% Client Satisfaction"
    },
    {
      year: "2022",
      achievement: "Technology Innovation",
      detail: "AI-Powered Trading Assistant"
    },
    {
      year: "2023",
      achievement: "Fastest Growing Broker",
      detail: "50% YoY Growth"
    },
    {
      year: "2024",
      achievement: "Best Trading Platform Award",
      detail: "Recognized by Financial Times"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 overflow-x-hidden">
      {/* Advanced Hero Section - Completely Fixed Background */}
      <section className="relative py-20 md:py-28 bg-slate-900 overflow-hidden">
        {/* Clean Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-purple-900">
          {/* Single smooth gradient without hard stops */}
        </div>
        
        {/* Animated Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto text-center text-white"
          >
            {/* Main Title with Gradient */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                  ANAND
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl text-gray-200 mt-2 md:mt-4">
                  SHARE BROKING
                </span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mb-4 md:mb-6"></div>
              
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-200 mb-4">
                Redefining <span className="font-semibold text-cyan-300">Digital Trading</span> Experience
              </p>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-2xl mx-auto"
            >
              {marketStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-300">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.suffix}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-8 md:mt-12"
            >
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                Start Trading Now
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300">
                Open Demat Account
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
              
              {/* Left: Image card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center w-full lg:justify-start"
              >
                <div className="relative group w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                  <div className="w-full h-[350px] md:h-[500px] lg:h-[580px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-100 bg-white transform transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02] group-hover:ring-2 group-hover:ring-blue-200">
                    <img
                      src="./images/image.png"
                      alt="Founder & CEO - Anand Share Broking"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="absolute left-4 md:left-6 bottom-4 md:bottom-6 transform group-hover:scale-110 transition-transform duration-300"
                    >
                      <div className="bg-white/95 backdrop-blur-sm px-3 md:px-4 py-1 md:py-2 rounded-full shadow-lg text-xs md:text-sm font-semibold text-gray-700 border border-gray-100 group-hover:border-blue-200 group-hover:shadow-xl transition-all duration-300">
                        <div className="text-xs text-gray-500 group-hover:text-blue-500 transition-colors">Founder & CEO</div>
                        <div className="uppercase text-xs tracking-wide group-hover:text-green-600 transition-colors">ANAND Share Broking</div>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="mt-4 md:mt-6 group"
                  >
                    <div className="bg-gradient-to-r from-blue-50/50 to-cyan-50/50 rounded-xl p-4 md:p-6 border-l-4 border-blue-500 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-600">
                      <p className="text-gray-700 italic text-base md:text-lg leading-relaxed text-center">
                        "We don't just execute trades; we empower financial dreams. Our platform combines 
                        cutting-edge technology with human expertise to create opportunities that transform 
                        lives and build lasting wealth for generations."
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right: Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                viewport={{ once: true }}
                className="space-y-6 md:space-y-8 w-full"
              >
                <div className="w-full">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center lg:text-left">Anand</h2>
                  <p className="text-lg md:text-xl text-blue-500 font-semibold mt-2 text-center lg:text-left">Founder & CEO</p>

                  <div className="mt-4 md:mt-6 text-gray-700 space-y-3 md:space-y-4 w-full">
                    <p className="text-base md:text-lg leading-relaxed">
                      A visionary in financial technology, Anand founded Anand Share Broking with a mission 
                      to democratize stock market investing. With 15+ years of expertise in capital markets 
                      and technology innovation, he has revolutionized how retail investors access 
                      institutional-grade trading tools.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      His leadership has positioned Anand Share Broking as a pioneer in digital trading 
                      solutions, combining advanced algorithms with personalized advisory services to 
                      create unparalleled value for investors.
                    </p>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 md:p-6 mt-4 md:mt-6 border-l-4 border-cyan-500">
                      <h4 className="font-bold text-slate-800 text-lg md:text-xl mb-2 md:mb-3">Vision for Digital Trading</h4>
                      <p className="text-gray-700 text-sm md:text-base">
                        "To create a seamless ecosystem where technology meets financial expertise, 
                        empowering every investor to make informed decisions and achieve their financial 
                        goals with confidence and security."
                      </p>
                    </div>
                  </div>

                  {/* Stats Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="mt-6 md:mt-8 w-full"
                  >
                    <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-md">
                      <EnhancedStatCard title="50K+" subtitle="Active Clients" delay={0} />
                      <EnhancedStatCard title="₹500Cr+" subtitle="Daily Volume" delay={0.1} />
                      <EnhancedStatCard title="15+" subtitle="Years Experience" delay={0.2} />
                      <EnhancedStatCard title="99.9%" subtitle="Uptime" delay={0.3} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Trading Features */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                Next-Gen Trading Platform
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of trading with our AI-powered, lightning-fast platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {tradingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-slate-800 to-blue-800 rounded-2xl p-4 md:p-6 group hover:from-cyan-900 hover:to-blue-900 transition-all duration-500 border border-slate-700 hover:border-cyan-400 hover:shadow-2xl"
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
                <div className="text-cyan-400 text-xs md:text-sm font-semibold">
                  {feature.speed}
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Technology Stack */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
              Advanced <span className="text-blue-600">Technology</span> Stack
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Powered by cutting-edge technology for seamless trading experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {technologyStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 h-full">
                  
                  {/* Animated Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center text-white text-2xl mb-6 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}
                  >
                    {tech.icon}
                  </motion.div>

                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 md:mb-6 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {tech.category}
                  </h3>
                  
                  <div className="space-y-3 md:space-y-4">
                    {tech.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.2 + itemIndex * 0.1,
                          type: "spring",
                          stiffness: 100
                        }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 group/item"
                      >
                        <motion.div
                          whileHover={{ scale: 1.5, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                          className="w-2 h-2 bg-blue-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"
                        ></motion.div>
                        <motion.span
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                          className="text-gray-700 group-hover/item:text-slate-900 transition-colors text-sm md:text-base"
                        >
                          {item}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating Animation Background */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>

                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500 -z-20`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline - Reversed Order */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
              Our <span className="text-blue-600">Journey</span> of Excellence
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to industry leadership - our growth story
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 md:space-y-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 group"
                >
                  {/* Year Badge - Mobile First */}
                  <div className="flex-shrink-0 w-full md:w-20 h-16 md:h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto md:mx-0" style={{ maxWidth: '80px' }}>
                    {achievement.year}
                  </div>
                  
                  {/* Content Card */}
                  <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-200 flex-1 group-hover:shadow-xl group-hover:border-blue-200 transition-all duration-300 w-full">
                    <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {achievement.achievement}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {achievement.detail}
                    </p>
                    
                    {/* Progress Line for Mobile */}
                    {index < achievements.length - 1 && (
                      <div className="md:hidden mt-4 flex justify-center">
                        <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Timeline Connector for Desktop */}
            
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">Transform</span> Your Trading?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              Join 50,000+ successful traders who trust our platform for their financial journey. 
              Experience the difference of next-generation trading technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                Open Free Demat Account
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300">
                Schedule Expert Call
              </button>
            </div>
            <p className="text-gray-400 mt-4 md:mt-6 text-xs md:text-sm">
              Zero account opening fees • 24/7 Customer Support • Advanced Trading Tools
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

/* Enhanced Stat Card Component */
function EnhancedStatCard({ title, subtitle, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -4, 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="group"
    >
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-5 flex flex-col items-start justify-center ring-1 ring-gray-100 hover:ring-2 hover:ring-blue-200 hover:shadow-xl transition-all duration-300">
        <div className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 transform group-hover:scale-110">
          {title}
        </div>
        <div className="text-xs md:text-sm text-gray-500 mt-1 group-hover:text-gray-700 transition-colors duration-300">
          {subtitle}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      </div>
    </motion.div>
  );
}