import React from 'react';

const About = () => {
  return (
    <div className="exp bg-gray-900 text-white pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Front-End Developer crafting responsive web interfaces with modern frameworks and clean code principles
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-gray-800 rounded-full flex items-center justify-center">
                    <svg className="w-32 h-32 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900"></div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-400">Hello, I'm Emmanuel N</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a dedicated Front-End Developer with expertise in HTML, CSS, and JavaScript. 
                  I specialize in crafting responsive web interfaces using modern frameworks and 
                  libraries, with a demonstrated ability to transform design concepts into 
                  functional, user-friendly applications.
                </p>
                <p>
                  My passion lies in creating clean, maintainable code while delivering 
                  high-performance web solutions that engage users and achieve business objectives. 
                  I'm committed to staying current with the latest technologies and best practices 
                  in front-end development.
                </p>
                <p>
                  Based in Bangalore, Karnataka, I'm always eager to take on new challenges 
                  and collaborate on exciting projects that push the boundaries of web development.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-blue-400">2025</div>
                  <div className="text-gray-400">Recent Graduate</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-purple-400">10+</div>
                  <div className="text-gray-400">Concurrent Users Supported</div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Technologies */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Front-End Skills */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Front-End Development</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex flex-wrap gap-2 mb-3">
                  {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Design'].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Tailwind CSS', 'Bootstrap', 'Angular', 'Figma', 'UI/UX Design'].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Backend & Tools */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Backend & Tools</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex flex-wrap gap-2 mb-3">
                  {['PHP', 'MySQL', 'MongoDB', 'Node.js'].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Git/GitHub', 'Google Workspace', 'Microsoft Office', 'Socket.IO'].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Education</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-gray-200">BSC-CSMM</div>
                  <div className="text-blue-400">Kristu Jayanti College</div>
                  <div className="text-gray-400">2022-2025</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-200">PUC-PCMC</div>
                  <div className="text-blue-400">S.J.R PU College</div>
                  <div className="text-gray-400">2019-2021</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-200">High School</div>
                  <div className="text-blue-400">Premier High School</div>
                  <div className="text-gray-400">2018-2019</div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Get In Touch</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center">
                  <span className="text-purple-400 mr-3" role="img" aria-label="email">📧</span>
                  <a href="mailto:emmanuel30102004@gmail.com" className="hover:text-blue-400 transition-colors">
                    emmanuel30102004@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-400 mr-3" role="img" aria-label="phone">📱</span>
                  <a href="tel:+918431134193" className="hover:text-blue-400 transition-colors">
                    +91 8431134193
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-400 mr-3" role="img" aria-label="location">📍</span>
                  <span>Bangalore, Karnataka</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-400 mr-3" role="img" aria-label="linkedin">💼</span>
                  <a 
                    href="https://linkedin.com/in/emmanuel2305" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-400 mr-3" role="img" aria-label="github">🐙</span>
                  <a 
                    href="https://github.com/Emmanuel301004" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-200">Let's Work Together</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm actively seeking new opportunities in front-end development. 
              Whether you have an exciting project or want to discuss potential collaborations, 
              I'd love to connect with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:emmanuel30102004@gmail.com" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Get In Touch
              </a>
              <a 
                href="https://github.com/Emmanuel301004" 
                className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors border border-gray-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;