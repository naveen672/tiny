import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/tiny-logo.png"
                alt="Tiny Prism Labs"
                className="h-10 sm:h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg leading-tight text-white">
                  Tiny Prism Labs
                </span>
                <span className="text-xs text-gray-400 leading-tight">
                  Edge Intelligence
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 mb-4">
              Intelligence on the Edge. Innovation at the Core.
            </p>
            <p className="text-xs sm:text-sm text-gray-400">
              Building low-power, fully offline, intelligent systems that run directly on devices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-blue-400 transition-all duration-300 hover:pl-2 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services/embedded-systems" className="text-sm hover:text-blue-400 transition-all duration-300 hover:pl-2 inline-block">
                  Embedded Systems
                </Link>
              </li>
              <li>
                <Link to="/services/ai-machine-learning" className="text-sm hover:text-blue-400 transition-all duration-300 hover:pl-2 inline-block">
                  AI & ML
                </Link>
              </li>
              <li>
                <Link to="/services/edge-computing" className="text-sm hover:text-blue-400 transition-all duration-300 hover:pl-2 inline-block">
                  Edge Computing
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm hover:text-blue-400 transition-all duration-300 hover:pl-2 inline-block">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Core Expertise</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Embedded Systems Design</li>
              <li>TinyML & Edge AI</li>
              <li>Computer Vision</li>
              <li>IoT Connectivity</li>
              <li>Predictive Maintenance</li>
              <li>Industrial AI Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiMail className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@tinyprismlabs.com" className="text-sm hover:text-blue-400 transition-colors">
                    info@tinyprismlabs.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FiPhone className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+911234567890" className="text-sm hover:text-blue-400 transition-colors">
                    +91 123 456 7890
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FiMapPin className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">
                    Bangalore, Karnataka, India
                  </p>
                </div>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Tiny Prism Labs Private Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/contact" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
