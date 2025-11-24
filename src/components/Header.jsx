import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/platforms", label: "Trading Platforms" },
    { path: "/research", label: "Research & Insights" },
    { path: "/contact", label: "Contact" },
  ];

  const isActiveLink = (path) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 bg-white border-b ${
        isScrolled ? "shadow-md border-gray-200" : "border-gray-100"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-3 group flex-1 min-w-0">
            {/* Logo Image */}
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-orange-200 overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300 flex-shrink-0">
              <img
                src="./images/image.png"
                alt="Anand Share Broking"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center space-x-1 md:space-x-2 min-w-0">
                <img
                  src="/images/Anandhgroup Logo.png"
                  alt="Anand Share Broking Logo"
                  className="w-6 h-7 md:w-8 md:h-10 object-contain flex-shrink-0"
                />
                <div className="flex flex-col min-w-0 flex-1">
                  <h1 className="text-sm md:text-lg lg:text-xl font-bold text-blue-800 whitespace-nowrap overflow-hidden">
                    <span className="text-orange-500">ANAND </span>SHARE BROKING
                  </h1>
                  <p className="text-xs text-gray-600 italic mt-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
                    "Dharmo Rakshati Rakshitah"
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 xl:px-4 py-2 rounded-lg text-sm xl:text-base font-semibold transition-all duration-200 ${
                  isActiveLink(item.path)
                    ? "text-blue-700 bg-blue-100 border border-blue-200"
                    : "text-blue-800 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-blue-800 hover:bg-blue-50 rounded-lg transition-all duration-200 flex-shrink-0 ml-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 pb-4">
            <nav className="space-y-1 pt-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActiveLink(item.path)
                      ? "bg-blue-100 text-blue-700 border border-blue-200"
                      : "text-blue-800 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;