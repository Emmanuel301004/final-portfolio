import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-400' : 'text-gray-300 hover:text-white';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`transition-colors ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/about" className={`transition-colors ${isActive('/about')}`}>
              About
            </Link>
            <Link to="/skills" className={`transition-colors ${isActive('/skills')}`}>
              Skills
            </Link>
            <Link to="/experience" className={`transition-colors ${isActive('/experience')}`}>
              Experience
            </Link>
            <Link to="/projects" className={`transition-colors ${isActive('/projects')}`}>
              Projects
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-2 pt-4">
              <Link 
                to="/" 
                className={`py-2 transition-colors ${isActive('/')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`py-2 transition-colors ${isActive('/about')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/skills" 
                className={`py-2 transition-colors ${isActive('/skills')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link 
                to="/experience" 
                className={`py-2 transition-colors ${isActive('/experience')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </Link>
              <Link 
                to="/projects" 
                className={`py-2 transition-colors ${isActive('/projects')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;