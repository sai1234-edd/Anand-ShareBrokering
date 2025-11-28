import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState(null);

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/platforms", label: "Trading Platforms" },
    { path: "/research", label: "Research & Insights" },
    { path: "/contact", label: "Contact" }
  ];

  const openLegalModal = (type) => {
    setActiveModal(type);
  };

  const closeLegalModal = () => {
    setActiveModal(null);
  };

  // Social Media Icons as SVG
  const SocialIcons = {
    facebook: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    youtube: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  };

  const legalContent = {
    Privacy: {
      title: "Privacy Policy",
      content: `
        <div class="space-y-4">
          <p class="text-gray-700"><strong>Last Updated:</strong> ${currentYear}</p>
          
          <div>
            <h4 class="text-lg font-semibold text-blue-800 mb-2">Information We Collect</h4>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
              <li>Personal identification information (Name, email address, phone number)</li>
              <li>Trading preferences and investment goals</li>
              <li>Financial information for account opening</li>
              <li>Communication history and trading inquiries</li>
              <li>Site usage data and analytics</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-blue-800 mb-2">How We Use Your Information</h4>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
              <li>Process your trading account applications</li>
              <li>Execute trades and provide brokerage services</li>
              <li>Send market updates and investment insights</li>
              <li>Comply with regulatory requirements</li>
              <li>Improve our trading platforms and services</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-blue-800 mb-2">Data Protection</h4>
            <p class="text-gray-600">We implement advanced security measures including encryption and secure servers to protect your financial and personal information. All trading activities are confidential and secure.</p>
          </div>
        </div>
      `
    },
    Terms: {
      title: "Terms & Conditions",
      content: `
        <div class="space-y-4">
          <p class="text-gray-700"><strong>Effective Date:</strong> ${currentYear}</p>
          
          <div>
            <h4 class="text-lg font-semibold text-blue-800 mb-2">Trading & Investment</h4>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
              <li>All investments in securities market are subject to market risks</li>
              <li>Read all related documents carefully before investing</li>
              <li>Past performance doesn't guarantee future returns</li>
              <li>Trading decisions should be based on personal risk assessment</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-blue-800 mb-2">Account & Transactions</h4>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
              <li>Account opening is subject to verification and approval</li>
              <li>All transactions must comply with SEBI regulations</li>
              <li>Brokerage and charges as per disclosed tariff sheet</li>
              <li>Settlement of funds as per exchange guidelines</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-blue-800 mb-2">Legal Compliance</h4>
            <p class="text-gray-600">All trading activities are governed by SEBI regulations and applicable laws. Investors are advised to understand all risks before trading.</p>
          </div>
        </div>
      `
    },
    Disclaimer: {
      title: "Disclaimer",
      content: `
        <div class="space-y-4">
          <div>
            <h4 class="text-lg font-semibold text-blue-800 mb-2">Investment Risks</h4>
            <p class="text-gray-600">Trading in stock markets and derivatives involves substantial risk of loss. Prospective investors should:</p>
            <ul class="list-disc list-inside space-y-1 text-gray-600 mt-2">
              <li>Understand all risks before investing</li>
              <li>Consult financial advisors if needed</li>
              <li>Invest only surplus funds</li>
              <li>Read all scheme related documents carefully</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-blue-800 mb-2">No Guarantee</h4>
            <p class="text-gray-600">We do not guarantee any profits or returns from trading activities. Market analysis and research reports are for informational purposes only and should not be considered as investment advice.</p>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-blue-800 mb-2">Third-Party Content</h4>
            <p class="text-gray-600">Our platform may contain market data and research from third-party sources. We are not responsible for the accuracy of external market data.</p>
          </div>
        </div>
      `
    },
    SEBI: {
      title: "SEBI Compliance",
      content: `
        <div class="space-y-4">
          <div class="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 class="text-lg font-semibold text-green-800 mb-2">Registered with SEBI</h4>
            <p class="text-green-700">Anand Share Broking is a registered stock broker with SEBI, ensuring compliance with all regulatory requirements and investor protection guidelines.</p>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-blue-800 mb-2">SEBI Registration Details</h4>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
              <li><strong>Registration Number:</strong> INZ000123456</li>
              <li><strong>Valid Until:</strong> March 31, 2026</li>
              <li><strong>Exchange Memberships:</strong> NSE, BSE</li>
              <li><strong>SEBI Registration Date:</strong> January 15, 2020</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-blue-800 mb-2">Investor Protection</h4>
            <p class="text-gray-600">As per SEBI guidelines, we ensure:</p>
            <ul class="list-disc list-inside space-y-1 text-gray-600 mt-2">
              <li>Transparent pricing and brokerage structure</li>
              <li>Segregation of client funds and securities</li>
              <li>Robust risk management systems</li>
              <li>Timely execution of client orders</li>
              <li>Fair and transparent dealings</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-blue-800 mb-2">Grievance Redressal</h4>
            <p class="text-gray-600">For any complaints or disputes, investors can contact our grievance officer or approach SEBI directly through SCORES platform.</p>
          </div>
        </div>
      `
    }
  };

  return (
    <>
      <footer className="bg-gradient-to-b from-gray-900 to-[#081526] text-white">
        <div className="container mx-auto px-6">
          
          {/* Main Footer Content */}
          <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              
              {/* Company Info */}
              <div className="text-left">
                <div className="flex items-start space-x-4 mb-4">
                  {/* Logo and Branding */}
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16 rounded-full border-2 border-orange-200 overflow-hidden shadow-lg">
                      <img
                        src="./images/image.png" // Update with your logo path
                        alt="Anand Share Broking"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="w-14 h-14">
                      <img
                        src="./images/Anandhgroup Logo.png" // Update with your logo path
                        alt="Anand Share Brokering"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-left">
                    <h2 className="text-2xl font-bold">
                      <span className="text-orange-400">ANAND</span> 
                      <span className="text-white"> SHARE BROKING</span>
                    </h2>
                    <p className="text-orange-200 text-sm italic">"Dharmo Rakshati Rakshitah"</p>
                  </div>
                </div>

                <div className="text-left">
                  <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                    Expertise, technology, and trust working together to create a seamless trading experience for every investor.
                  </p>
                  <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                    Empowering both beginners and seasoned investors with real-time market data, research insights, and secure trading platforms.
                  </p>
                </div>

                {/* Social Media with SVG Icons */}
                <div className="flex space-x-3">
                  {[
                    { name: "facebook", url: "#", color: "hover:bg-blue-600" },
                    { name: "twitter", url: "#", color: "hover:bg-blue-400" },
                    { name: "instagram", url: "#", color: "hover:bg-pink-600" },
                    { name: "youtube", url: "#", color: "hover:bg-red-600" },
                    { name: "linkedin", url: "#", color: "hover:bg-blue-800" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                      title={social.name.charAt(0).toUpperCase() + social.name.slice(1)}
                    >
                      {SocialIcons[social.name]}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="text-left">
                <h3 className="text-lg font-semibold mb-3 text-orange-400">Quick Links</h3>
                <div className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="block text-gray-300 py-1 text-sm hover:text-orange-400 transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                  {/* Open Account Link */}
                </div>
              </div>

              {/* Contact Info */}
              <div className="text-left">
                <h3 className="text-lg font-semibold mb-3 text-orange-400">Contact</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex flex-col items-start space-y-2">
                    <div className="flex items-start space-x-2">
                      <i className="fas fa-map-marker-alt text-orange-400 mt-1 text-sm" />
                      <span className="text-gray-300 text-left">
                        Hiko, 131/A, 2nd Floor<br />
                        Banjara Hills, Hyderabad<br />
                        Telangana - 500034
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <i className="fas fa-phone text-orange-400 text-sm" />
                      <span className="text-gray-300">+91 1800 123 4857</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <i className="fas fa-envelope text-orange-400 text-sm" />
                      <span className="text-gray-300">info@anandsharebroking.com</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <i className="fas fa-clock text-orange-400 text-sm" />
                      <span className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-4 pb-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
              
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © {currentYear} <span className="text-orange-400 font-semibold">Anand Share Broking</span>. All rights reserved.
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-4">
                {["Privacy", "Terms", "Disclaimer", "SEBI"].map((item) => (
                  <button
                    key={item}
                    onClick={() => openLegalModal(item)}
                    className="text-gray-500 hover:text-orange-400 transition-colors text-sm font-medium hover:underline"
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Developer Credit */}
              <div className="text-center md:text-right">
                <p className="text-gray-500 text-sm">
                  Designed by{" "}
                  <Link to="https://designcareermetrics.com" className="text-orange-400 hover:underline font-medium">
                    Design Career Metrics
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modals */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  {legalContent[activeModal]?.title}
                </h3>
                <button
                  onClick={closeLegalModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: legalContent[activeModal]?.content }}
              />
              
              <div className="flex justify-end mt-6">
                <button
                  onClick={closeLegalModal}
                  className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;