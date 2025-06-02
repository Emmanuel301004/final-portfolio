import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    "Aspiring Full Stack Developer",
    "Junior Front End Developer", 
    "UI/UX Enthusiast",
    "Problem Solver"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const roleInterval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, []);

  return (
    <section id="home" className="fixed inset-0 flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-32 w-24 h-24 bg-red-400/30 rounded-full blur-lg animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-red-600/25 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 via-transparent to-gray-900/20"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          
          {/* Greeting */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium backdrop-blur-sm">
              👋 Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
              Emmanuel
            </span>
            <div className="relative inline-block ml-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Here
              </div>
            </div>
          </h1>

          {/* Dynamic Role */}
          <div className="mb-8 h-16 flex items-center justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300">
              I'm a{' '}
              <span className={`relative inline-block transition-all duration-500 ${
                isTyping ? 'opacity-100' : 'opacity-0'
              }`}>
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  {roles[currentRole]}
                </span>
                <span className="absolute -right-1 top-0 w-0.5 h-full bg-red-500 animate-pulse"></span>
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className={`text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Passionate about creating amazing digital experiences with modern technologies. 
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            
            {/* Primary CTA */}
          <Link to="/about" className="group px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-red-500 hover:text-white transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
  <span className="relative z-10 flex items-center">
    About Me
    <svg className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  </span>
  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</Link>
            {/* Secondary CTA */}
           <Link to="/projects" className="group px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25 relative overflow-hidden">
  <span className="relative z-10 flex items-center">
    View My Work
    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </span>
  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
</Link></div>
 {/* Social Links - Updated to use normal anchor tags */}
          <div className={`mt-16 flex justify-center space-x-6 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <a
              href="https://github.com/Emmanuel301004"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-gray-800/50 border border-gray-700/50 rounded-xl flex items-center justify-center hover:bg-gray-700/50 hover:border-red-500/30 transition-all duration-300 hover:scale-110"
              title="GitHub"
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">🔗</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="https://linkedin.com/in/emmanuel2305"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-gray-800/50 border border-gray-700/50 rounded-xl flex items-center justify-center hover:bg-gray-700/50 hover:border-red-500/30 transition-all duration-300 hover:scale-110"
              title="LinkedIn"
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">💼</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="#"
              className="group w-12 h-12 bg-gray-800/50 border border-gray-700/50 rounded-xl flex items-center justify-center hover:bg-gray-700/50 hover:border-red-500/30 transition-all duration-300 hover:scale-110"
              title="Twitter"
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">🐦</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="mailto:emmanuel30102004@gmail.com"
              className="group w-12 h-12 bg-gray-800/50 border border-gray-700/50 rounded-xl flex items-center justify-center hover:bg-gray-700/50 hover:border-red-500/30 transition-all duration-300 hover:scale-110"
              title="Email"
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">📧</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
        {/* Particle Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;