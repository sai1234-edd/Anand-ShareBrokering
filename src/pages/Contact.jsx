import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    accountType: "demat",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        accountType: "demat",
      });
    }, 2000);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const contactMethods = [
    {
      icon: "📞",
      title: "Phone Support",
      description: "Speak directly with our trading experts",
      details: ["+91 98765 43210", "+91 98765 43211"],
      timing: "Market Hours: 9:00 AM - 6:00 PM",
      color: "from-green-500 to-emerald-500",
      action: "tel:+919876543210"
    },
    {
      icon: "💬",
      title: "Live Trading Chat",
      description: "Instant help for trading queries",
      details: ["Real-time market support", "Technical analysis help"],
      timing: "24/7 During Market Hours",
      color: "from-blue-500 to-cyan-500",
      action: "https://wa.me/919876543210"
    },
    {
      icon: "📧",
      title: "Email Support",
      description: "Comprehensive trading support via email",
      details: ["support@anandsharebroking.com", "trading@anandsharebroking.com"],
      timing: "Response within 1 hour",
      color: "from-purple-500 to-pink-500",
      action: "mailto:support@anandsharebroking.com"
    },
    {
      icon: "🎯",
      title: "Trading Assistance",
      description: "Expert guidance for your trades",
      details: ["Portfolio review", "Trade setup analysis"],
      timing: "Mon - Sat: 9:15 AM - 3:30 PM",
      color: "from-orange-500 to-red-500",
      action: "/expert-call"
    },
  ];

  const quickActions = [
    {
      title: "Open Demat Account",
      description: "Start trading in just 5 minutes",
      icon: "🚀",
      link: "/open-account",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Market Research",
      description: "Access expert trading research",
      icon: "📊",
      link: "/research",
      color: "from-green-500 to-emerald-500"
    },
  ];

  const faqs = [
    {
      question: "How quickly can I start trading after opening an account?",
      answer: "You can start trading within 24 hours of completing your account opening process. For instant trading, we offer e-KYC verification that gets your account ready in just 2 hours during working days."
    },
    {
      question: "What trading platforms do you offer?",
      answer: "We offer multiple trading platforms: Web-based trading terminal, Mobile app with advanced charts, Desktop application for professional traders, and API integration for algorithmic trading. All platforms provide real-time data and advanced order types."
    },
    {
      question: "Do you provide margin trading facilities?",
      answer: "Yes, we offer margin trading across equity, futures & options. Margin requirements start from 2.5x for intraday trading. We provide real-time margin calculator and exposure limits based on your risk profile and trading experience."
    },
    {
      question: "What are your brokerage charges for equity trading?",
      answer: "We offer competitive brokerage plans: ₹0 brokerage on equity delivery trades, ₹20 per executed order for intraday and F&O trades, or 0.03% whichever is lower. No hidden charges - transparent pricing with real-time P&L calculation."
    },
    {
      question: "Do you offer IPO application services?",
      answer: "Yes, we provide seamless IPO applications through both ASBA and UPI methods. You can apply for IPOs directly from our trading platform with auto-filled forms and application tracking features."
    },
    {
      question: "What research and analysis tools do you provide?",
      answer: "We offer comprehensive research tools including: Advanced charting with 100+ indicators, Technical analysis reports, Fundamental stock screeners, Options chain analysis, Market depth visualization, and AI-powered trade recommendations."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white py-16 md:py-20"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Trading Experts</span>
            </h1>
            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
              Get expert trading support, platform guidance, and market insights
              <br className="hidden sm:block" />
              from our dedicated team of financial professionals
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span className="text-xl">📞</span>
                Call Trading Desk: +91 98765 43210
              </motion.a>
            </div>

            <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 text-sm">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-3 md:px-4 py-2 md:py-3 transform hover:scale-105 transition-transform duration-300">
                <div className="font-semibold text-cyan-300 text-sm">Trading Support</div>
                <div className="text-gray-200 text-xs">Market Hours 24/7</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-3 md:px-4 py-2 md:py-3 transform hover:scale-105 transition-transform duration-300">
                <div className="font-semibold text-cyan-300 text-sm">Account Help</div>
                <div className="text-gray-200 text-xs">Mon - Sat · 9 AM - 6 PM</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-3 md:px-4 py-2 md:py-3 transform hover:scale-105 transition-transform duration-300">
                <div className="font-semibold text-cyan-300 text-sm">Email</div>
                <div className="text-gray-200 text-xs">support@anandsharebroking.com</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4">
              Quick <span className="text-blue-600">Trading Actions</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              Get started with these essential trading features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-gradient-to-br ${action.color} rounded-2xl p-5 md:p-6 text-center group hover:shadow-2xl transition-all duration-300 text-white`}
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {action.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  {action.title}
                </h3>
                <p className="text-white/80 text-xs md:text-sm mb-3 md:mb-4">
                  {action.description}
                </p>
                <Link
                  to={action.link}
                  className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-colors w-full backdrop-blur-sm"
                >
                  Get Started →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods & Form */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4">
                Connect with <span className="text-blue-600">Trading Experts</span>
              </h2>
              <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
                Multiple channels for trading support and assistance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl p-4 md:p-6 text-center group hover:shadow-2xl transition-all duration-300 border border-gray-200"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r ${method.color} text-white text-xl md:text-2xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {method.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 md:mb-3">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
                    {method.description}
                  </p>
                  <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-700 mb-3 md:mb-4">
                    {method.details.map((detail, idx) => (
                      <div key={idx} className="font-medium">{detail}</div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 bg-gray-50 rounded-lg p-2 mb-3 md:mb-4">
                    ⏰ {method.timing}
                  </div>
                  <a
                    href={method.action}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold text-xs md:text-sm transition-colors inline-block"
                  >
                    Connect Now
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Contact Form & FAQ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:sticky lg:top-8"
              >
                <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-2xl">
                  <h3 className="text-xl md:text-3xl font-bold mb-2">Get Trading Support</h3>
                  <p className="text-blue-200 mb-4 md:mb-6 text-base md:text-lg">
                    Share your trading requirements and our experts will guide you
                  </p>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-500 text-white p-3 md:p-4 rounded-xl mb-4 md:mb-6 text-sm"
                    >
                      ✅ Thank you! Our trading expert will contact you within 30 minutes.
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <div>
                        <label className="block text-xs md:text-sm font-semibold mb-1 md:mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs md:text-sm font-semibold mb-1 md:mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs md:text-sm font-semibold mb-1 md:mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs md:text-sm font-semibold mb-1 md:mb-2">
                        Trading Interest
                      </label>
                      <select
                        name="accountType"
                        value={formData.accountType}
                        onChange={handleChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 md:px-4 py-2 md:py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                      >
                        <option value="demat">Demat Account Opening</option>
                        <option value="intraday">Intraday Trading</option>
                        <option value="fno">Futures & Options</option>
                        <option value="commodity">Commodity Trading</option>
                        <option value="currency">Currency Trading</option>
                        <option value="research">Trading Research</option>
                        <option value="other">Other Trading Services</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs md:text-sm font-semibold mb-1 md:mb-2">
                        Trading Experience
                      </label>
                      <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 md:px-4 py-2 md:py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-sm md:text-base">
                        <option value="beginner">Beginner (Just Starting)</option>
                        <option value="intermediate">Intermediate (1-3 years)</option>
                        <option value="advanced">Advanced (3+ years)</option>
                        <option value="professional">Professional Trader</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs md:text-sm font-semibold mb-1 md:mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="3"
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-sm md:text-base resize-none"
                        placeholder="Tell us about your trading goals, preferred markets, and any specific requirements..."
                      />
                    </div>

                    <div className="flex items-start gap-2 text-xs text-blue-200">
                      <input
                        id="consent"
                        type="checkbox"
                        className="mt-1 accent-cyan-500"
                        defaultChecked
                      />
                      <label htmlFor="consent" className="text-left">
                        I authorize Anand Share Broking to contact me for trading account opening, 
                        platform guidance, and market updates. I understand trading involves risks.
                      </label>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`w-full py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 ${
                        isSubmitting
                          ? "bg-gray-600 cursor-not-allowed"
                          : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-2xl hover:shadow-3xl"
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center text-sm md:text-base">
                          <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Connecting to Expert...
                        </div>
                      ) : (
                        "Connect with Trading Expert"
                      )}
                    </motion.button>

                    <p className="text-center text-[10px] md:text-[11px] text-blue-200 mt-3 md:mt-4">
                      SEBI Registered Stock Broker · Your trading success is our priority
                    </p>
                  </form>
                </div>
              </motion.div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
                  Trading <span className="text-blue-600">FAQs</span>
                </h3>
                <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
                  Quick answers to common trading questions
                </p>

                <div className="space-y-3 md:space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                      >
                        <h4 className="text-base md:text-lg font-bold text-slate-800 pr-3 md:pr-4 text-left">
                          {faq.question}
                        </h4>
                        <motion.span
                          animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-blue-500 text-lg md:text-xl flex-shrink-0"
                        >
                          ▼
                        </motion.span>
                      </button>
                      
                      <motion.div
                        initial={false}
                        animate={{ 
                          height: openFaqIndex === index ? 'auto' : 0,
                          opacity: openFaqIndex === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 md:px-6 pb-3 md:pb-4">
                          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Support Info */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-6 md:mt-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 md:p-6 text-white text-center"
                >
                  <h4 className="text-lg md:text-xl font-bold mb-2">Need Immediate Trading Help?</h4>
                  <p className="text-blue-100 mb-3 md:mb-4 text-sm md:text-base">
                    Our trading desk is available during market hours for real-time assistance
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center">
                    <a
                      href="tel:+919876543210"
                      className="bg-white text-blue-600 hover:bg-blue-50 px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold text-xs md:text-sm transition-colors"
                    >
                      📞 Call Trading Desk
                    </a>
                    <a
                      href="https://wa.me/919876543210"
                      className="bg-green-500 hover:bg-green-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold text-xs md:text-sm transition-colors"
                    >
                      💬 WhatsApp Support
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Ready to <span className="text-cyan-400">Start Trading</span> Like a Pro?
            </h2>
            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              Join thousands of successful traders who trust Anand Share Broking for advanced trading platforms and expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link to="/open-account">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 w-full sm:w-auto"
                >
                  Open Free Trading Account
                </motion.button>
              </Link>
              <a href="tel:+919876543210">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-slate-900 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 w-full sm:w-auto"
                >
                  Speak to Trading Expert
                </motion.button>
              </a>
            </div>
            <p className="mt-4 md:mt-6 text-gray-400 text-xs md:text-sm">
              Zero account opening fees • Advanced trading platforms • Expert support • 24/7 market updates
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global Styles */}
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
        
        @keyframes bounceOnce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
        
        .animate-bounce-once {
          animation: bounceOnce 2s ease-in-out;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Loading states */
        .loading {
          opacity: 0.7;
          pointer-events: none;
        }

        /* Container padding fix for mobile */
        .container {
          padding-left: 1rem;
          padding-right: 1rem;
        }

        @media (min-width: 640px) {
          .container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .container {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;