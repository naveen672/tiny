import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '#',
      submenu: [
        { name: 'Embedded Systems', path: '/services/embedded-systems' },
        { name: 'AI & Machine Learning', path: '/services/ai-machine-learning' },
        { name: 'Edge Computing', path: '/services/edge-computing' },
      ],
    },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-brand-darkBlue to-brand-lightBlue rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
              <span className="text-white font-bold text-lg sm:text-xl">T</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base sm:text-lg leading-tight text-gray-900 group-hover:text-brand-darkBlue transition-colors">
                Tiny Prism Labs
              </span>
              <span className="text-xs text-gray-600 leading-tight font-medium group-hover:text-brand-lightBlue transition-colors hidden sm:block">
                Edge Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.submenu ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-brand-darkBlue font-medium transition-all duration-300 hover:scale-105">
                    <span>{link.name}</span>
                    <FiChevronDown className="text-sm transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-0 pt-2">
                      <div className="w-64 bg-white rounded-lg shadow-xl py-2 border border-gray-100 animate-slideDown">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.path}
                            to={sublink.path}
                            className="block px-4 py-3 text-gray-700 hover:bg-brand-lightGrey/30 hover:text-brand-darkBlue transition-all duration-300 hover:pl-6"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                    location.pathname === link.path
                      ? 'text-brand-darkBlue'
                      : 'text-gray-700 hover:text-brand-darkBlue'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-darkBlue to-brand-lightBlue transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
                </Link>
              )
            )}
            <Link to="/contact" className="btn-primary transform hover:scale-105 transition-all duration-300">
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-brand-darkBlue"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-4 pb-4"
          >
            {navLinks.map((link) =>
              link.submenu ? (
                <div key={link.name}>
                  <div className="px-4 py-2 text-gray-700 font-medium">
                    {link.name}
                  </div>
                  {link.submenu.map((sublink) => (
                    <Link
                      key={sublink.path}
                      to={sublink.path}
                      onClick={() => setIsOpen(false)}
                      className="block pl-8 pr-4 py-2 text-gray-600 hover:text-brand-darkBlue hover:bg-brand-lightGrey/30"
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:text-brand-darkBlue hover:bg-brand-lightGrey/30"
                >
                  {link.name}
                </Link>
              )
            )}
            <div className="px-4 mt-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center btn-primary"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
