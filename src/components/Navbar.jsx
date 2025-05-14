import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Home, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const envAppName = import.meta.env.VITE_APP_NAME || "NexusAI";
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Check if a route is active
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  // Function to handle smooth scrolling to section
  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState({}, '', `#${sectionId}`);
      }
      return true;
    }
    return false;
  };

  // Component for nav links with conditional functionality
  const NavLink = ({ to, sectionId, children }) => {
    const handleClick = (e) => {
      if (sectionId && scrollToSection(sectionId)) {
        e.preventDefault();
      }
      setMobileMenuOpen(false);
    };

    let finalTo = to;
    if (sectionId && to === '/') {
      finalTo = `${to}#${sectionId}`;
    }
    
    const isActive = isActiveRoute(to);
    
    return (
      <Link
        to={finalTo}
        onClick={handleClick}
        className={`px-4 py-2 text-sm font-medium relative group transition-all duration-300 ease-in-out ${
          isActive
            ? 'text-white'
            : 'text-gray-200 hover:text-white'
        }`}
      >
        {children}
        <span className={`absolute bottom-0 left-0 w-full h-0.5 transform transition-all duration-300 ease-out ${
          isActive 
            ? 'bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-100' 
            : 'bg-gradient-to-r from-cyan-400 to-indigo-500 scale-x-0 group-hover:scale-x-100'
        }`}></span>
      </Link>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-cyan-900/10' 
        : 'bg-slate-900/70 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
  <Link to="/" className="flex items-center group">
    <div className="relative overflow-hidden rounded-full p-2 mr-2 bg-gradient-to-br from-blue-600 to-purple-700 shadow-md shadow-purple-800/20">


      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-cyan-300 group-hover:to-indigo-400">
      {envAppName}
    </span>
  </Link>
</div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" sectionId="home">
              Home
            </NavLink>

           
            
           
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        mobileMenuOpen 
          ? 'max-h-60 opacity-100' 
          : 'max-h-0 opacity-0 pointer-events-none'
      } overflow-hidden`}>
        <div className="px-4 py-2 space-y-1 bg-slate-800/90 backdrop-blur-md border-t border-cyan-900/20">
          <NavLink to="/" sectionId="home">
            Home
          </NavLink>
          
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
