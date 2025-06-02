import React, { useState, useEffect, useRef } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);
  const sectionRef = useRef(null);

  const experiences = [
    {
      id: 1,
      company: "Kristu Jayanti Software Development Centre",
      position: " Web Developer-intern (Front-end)",
      duration: "June 2024 – July 2024",
      location: " Bangalore, India ",
      type: "Full-time",
      logo: "🚀",
      achievements: [
        "Developed web applications using various programming languages, contributing to software solutions.",
        "Collaborated with a cross-functional team to create the KJC Well-Being Center portal, enabling students to schedule counseling appointments online",
        "Implemented user-friendly interfaces that increased appointment booking efficiency by 30%",
        "Integrated external APIs for seamless data exchange between client and server components",
        "Optimized web layouts for cross-browser compatibility, achieving consistent rendering across Chrome, Firefox, and Safari"
      ],
      technologies: ["Angular", "Flowbite", "Typescript", "Tailwind", "Figma", "Git"],
      highlights: {
        impact: "40% Performance Boost",
        team: "Worked on team of 3",
        users: "30+ Users"
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 right-20 w-24 h-24 bg-red-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 bg-red-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-red-600/10 rounded-full blur-xl animate-bounce" style={{ animationDuration: '5s' }}></div>
      </div>

      <div className="relative exp z-10  mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium backdrop-blur-sm">
              💼 My Journey
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
              Work
            </span>
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent ml-4">
              Experience
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A timeline of my professional journey, showcasing the impact I've made and the technologies I've mastered along the way.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-red-400 to-red-600"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-start md:items-center group ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full border-4 border-gray-900 shadow-lg z-10 group-hover:scale-125 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-500 rounded-full animate-pulse"></div>
                </div>

                {/* Experience Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  } transform transition-all duration-1000 ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : `translate-y-12 opacity-0`
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-500 group-hover:shadow-2xl hover:shadow-red-500/10">
                    {/* Company Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-2xl">{exp.logo}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                            {exp.position}
                          </h3>
                          <p className="text-red-400 font-semibold">{exp.company}</p>
                          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-400">
                            <span className="flex items-center">
                              📅 {exp.duration}
                            </span>
                            <span className="flex items-center">
                              📍 {exp.location}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              exp.type === 'Full-time' 
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                                : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            }`}>
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-700/30 rounded-xl">
                      {Object.entries(exp.highlights).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-red-400 font-bold text-lg">{value}</div>
                          <div className="text-gray-400 text-xs capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        🎯 Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li 
                            key={achIndex}
                            className="flex items-start text-gray-300 hover:text-white transition-colors duration-300"
                          >
                            <span className="text-red-400 mr-3 mt-1">▸</span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        🛠️ Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 rounded-full text-gray-300 text-sm hover:border-red-500/50 hover:text-white transition-all duration-300 hover:scale-105"
                            style={{ animationDelay: `${(index * 200) + (techIndex * 50)}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
                    
                    {/* Border Glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl blur opacity-0 group-hover:opacity-10 transition-all duration-500 -z-10"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-block p-8 bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm border border-gray-600/30 rounded-2xl hover:border-red-500/30 transition-all duration-500 group">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
              Let's Work Together
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Ready to bring your next project to life? I'm always excited to tackle new challenges and create amazing digital experiences.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Experience;