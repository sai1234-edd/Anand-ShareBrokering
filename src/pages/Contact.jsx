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

  const contactMethods = [
    {
      icon: "📞",
      title: "Phone Support",
      description: "Speak directly with our support team",
      details: ["+91 98765 43210", "+91 98765 43211"],
      timing: "Mon - Sat: 9:00 AM - 6:00 PM",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Instant help through live chat",
      details: ["Available on website & mobile app", "Quick response guaranteed"],
      timing: "24/7 Available",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "📧",
      title: "Email Support",
      description: "Send us your queries via email",
      details: ["support@anandsharebroking.com", "help@anandsharebroking.com"],
      timing: "Response within 2 hours",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "🏢",
      title: "Branch Visit",
      description: "Visit our nearest branch",
      details: ["100+ branches across India", "Meet relationship managers"],
      timing: "Mon - Sat: 9:30 AM - 5:30 PM",
      color: "from-orange-500 to-red-500",
    },
  ];

  const branchLocations = [
    {
      city: "Mumbai",
      address: "Nariman Point, Marine Drive, Mumbai - 400021",
      phone: "+91 22 1234 5678",
      timing: "9:30 AM - 5:30 PM",
      services: ["Demat Account", "Trading", "Advisory"],
    },
    {
      city: "Delhi",
      address: "Connaught Place, New Delhi - 110001",
      phone: "+91 11 1234 5678",
      timing: "9:30 AM - 5:30 PM",
      services: ["Demat Account", "Trading", "Wealth Management"],
    },
    {
      city: "Bangalore",
      address: "MG Road, Bangalore - 560001",
      phone: "+91 80 1234 5678",
      timing: "9:30 AM - 5:30 PM",
      services: ["Demat Account", "Algorithmic Trading", "Research"],
    },
    {
      city: "Chennai",
      address: "Anna Salai, Chennai - 600002",
      phone: "+91 44 1234 5678",
      timing: "9:30 AM - 5:30 PM",
      services: ["Demat Account", "Commodity Trading", "Mutual Funds"],
    },
  ];

  const quickActions = [
    {
      title: "Open Demat Account",
      description: "Start your trading journey in 5 minutes",
      icon: "🚀",
      link: "/open-account",
    },
    {
      title: "Download Trading App",
      description: "Get our mobile trading platform",
      icon: "📱",
      link: "/download",
    },
    {
      title: "Schedule Callback",
      description: "We call you at your convenience",
      icon: "⏰",
      link: "/callback",
    },
    {
      title: "Track Application",
      description: "Check your account opening status",
      icon: "📊",
      link: "/track",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to open a Demat account?",
      answer:
        "Typically 24–48 hours with complete documentation. We offer instant account opening for pre-verified customers.",
    },
    {
      question: "What documents are required for account opening?",
      answer:
        "PAN card, Aadhaar card, address proof, cancelled cheque, and passport-sized photographs are required.",
    },
    {
      question: "Do you provide trading training?",
      answer:
        "Yes, we offer comprehensive training programs, webinars, and one-on-one sessions for all types of traders.",
    },
    {
      question: "What are your brokerage charges?",
      answer:
        "We offer competitive brokerage plans starting from ₹0 brokerage on equity delivery trades. Check our pricing page for details.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Contact{" "}
              <span className="text-cyan-400">Anand Share Broking</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Have questions about accounts, platforms, or brokerage?
              <br className="hidden sm:block" />
              Our support team is ready to help you at every step.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                📞 Call Now: +91 98765 43210
              </motion.a>

              <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-emerald-400 text-emerald-300 hover:bg-emerald-400 hover:text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                💬 Chat on WhatsApp
              </motion.a>
            </div>

            <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-200">
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <div className="font-semibold">Support Hours</div>
                <div>Mon – Sat · 9:00 AM – 6:00 PM</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <div className="font-semibold">Trading Support</div>
                <div>24/7 for live market queries</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <div className="font-semibold">Email</div>
                <div>support@anandsharebroking.com</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
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
              Quick <span className="text-blue-600">Actions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reach the right solution in just one click
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center group hover:shadow-xl transition-all duration-300 border border-blue-100"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {action.icon}
                </div>
                <h3 className="text-xl font-black text-slate-800 mb-2">
                  {action.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {action.description}
                </p>
                <Link
                  to={action.link}
                  className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full"
                >
                  Get Started →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Multiple Ways to <span className="text-blue-600">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the support channel that suits you best
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 text-center group hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {method.icon}
                </div>
                <h3 className="text-xl font-black text-slate-800 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {method.description}
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  {method.details.map((detail, idx) => (
                    <div key={idx}>{detail}</div>
                  ))}
                </div>
                <div className="mt-4 text-xs text-gray-500 bg-gray-50 rounded-lg p-2">
                  ⏰ {method.timing}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Branch Locations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-black mb-2">Send Us a Message</h3>
                <p className="text-blue-200 mb-6">
                  Share your query and our team will call or mail you back
                  within 2 hours during working hours.
                </p>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500 text-white p-4 rounded-xl mb-6"
                  >
                    ✅ Thank you! Your message has been sent successfully. We'll
                    contact you shortly.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="accountType"
                      value={formData.accountType}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="demat">Demat Account Opening</option>
                      <option value="trading">Trading Platform</option>
                      <option value="research">Research & Advisory</option>
                      <option value="ipo">IPO Application</option>
                      <option value="mutualfund">Mutual Funds</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Brief subject of your query"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <div className="flex items-start gap-2 text-xs text-blue-200">
                    <input
                      id="consent"
                      type="checkbox"
                      className="mt-1 accent-cyan-500"
                      defaultChecked
                    />
                    <label htmlFor="consent">
                      I authorize Anand Share Broking and its representatives
                      to contact me via call, SMS, email, or WhatsApp regarding
                      account opening and other services.
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                      isSubmitting
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-2xl hover:shadow-3xl"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>

                  <p className="mt-3 text-[11px] text-blue-200">
                    SEBI Registered Stock Broker · Registration No: INZ000000000
                    (sample) · Please do not share your OTP, passwords, or PIN
                    with anyone.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Branch Locations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black text-slate-900 mb-6">
                Our Branch Locations
              </h3>
              <div className="space-y-6">
                {branchLocations.map((branch, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-black text-slate-800">
                        {branch.city}
                      </h4>
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        📍 Branch
                      </div>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-start text-gray-600">
                        <span className="mr-3">🏢</span>
                        <span>{branch.address}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <span className="mr-3">📞</span>
                        <a
                          href={`tel:${branch.phone.replace(/\s/g, "")}`}
                          className="hover:text-blue-600"
                        >
                          {branch.phone}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <span className="mr-3">⏰</span>
                        <span>{branch.timing}</span>
                      </div>

                      <div className="pt-3 border-t border-gray-200">
                        <div className="text-sm font-semibold text-gray-700 mb-2">
                          Services Available:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {branch.services.map((service, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition-colors mt-4">
                        Get Directions
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-lg font-black text-slate-800 mb-3 flex items-start">
                    <span className="text-blue-500 mr-3">❓</span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Ready to Start Your{" "}
              <span className="text-cyan-400">Trading Journey?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of successful traders who trust Anand Share Broking
              for their investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/open-account">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  Open Free Demat Account
                </motion.button>
              </Link>
              <Link to="/callback">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                >
                  Schedule Free Consultation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
