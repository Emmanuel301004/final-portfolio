import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      id: 'frontend',
      title: "Frontend Development",
      icon: "🎨",
      description: "Creating beautiful and interactive user interfaces",
      skills: [
        { name: "React", level: 40, color: "from-blue-400 to-blue-600", experience: "2 months", projects: 2 },
        { name: "JavaScript", level: 85, color: "from-yellow-400 to-yellow-600", experience: "1+ years", projects: 10 },
        { name: "TypeScript", level: 35, color: "from-blue-500 to-blue-700", experience: "2 months", projects: 1},
        { name: "HTML/CSS", level: 95, color: "from-orange-400 to-orange-600", experience: "1+ years", projects: 17 },
        { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-teal-600", experience: "1/2 years", projects: 2 },
        { name: "Bootstrap", level: 80, color: "from-purple-400 to-purple-600", experience: "1+ years", projects: 4 }
      ]
    },
    {
      id: 'backend',
      title: "Backend Development",
      icon: "⚙️",
      description: "Building robust server-side applications and APIs",
      skills: [
        { name: "Node.js", level: 45, color: "from-green-400 to-green-600", experience: "2+ months", projects: 2 },
        { name: "Express.js", level: 48, color: "from-gray-500 to-gray-700", experience: "2+ months", projects: 2 },
        { name: "Python", level: 60, color: "from-blue-400 to-yellow-500", experience: "1/2 years", projects: 8},
        { name: "MongoDB", level: 65, color: "from-green-500 to-green-700", experience: "1/2 year", projects: 4},
        { name: "PostgreSQL", level: 70, color: "from-blue-500 to-indigo-600", experience: "1/2 year", projects: 6},
        { name: "REST APIs", level: 80, color: "from-purple-400 to-purple-600", experience: "1/2 years", projects: 5}
      ]
    },
    {
      id: 'tools',
      title: "Tools & Technologies",
      icon: "🛠️",
      description: "Development tools and workflow optimization",
      skills: [
        { name: "Git", level: 90, color: "from-orange-500 to-red-600", experience: "1+ years", projects: 20 },
        { name: "Docker", level: 10, color: "from-blue-400 to-blue-600", experience: "2 months", projects: 0 }
      ]
    }
  ];

  const filterCategories = [
    { id: 'all', label: 'All Skills', icon: '🚀' },
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'tools', label: 'Tools', icon: '🛠️' }
  ];

  const additionalSkills = [
    'Material-UI', 'Bootstrap', 
    'Linux', 'npm/yarn', 'Postman', 'Socket.io', 'Figma', 
    'VS Code', 'Chrome DevTools',  'ESLint', 'Prettier'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with staggered delays
          skillCategories.forEach((category, categoryIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(() => {
                setAnimatedSkills(prev => new Set([...prev, `${categoryIndex}-${skillIndex}`]));
              }, (categoryIndex * 200) + (skillIndex * 100));
            });
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getFilteredCategories = () => {
    if (activeCategory === 'all') {
      return skillCategories;
    }
    return skillCategories.filter(category => category.id === activeCategory);
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="relative py-20 bg-gray-900 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.02)_1px,transparent_1px)] bg-[size:120px_120px] animate-pulse"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-40 right-32 w-28 h-28 bg-red-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-32 w-36 h-36 bg-red-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-red-600/8 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '6s' }}></div>
      </div>

      <div className="relative skill z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium backdrop-blur-sm">
              💪 My Expertise
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
              Skills &
            </span>
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent ml-4">
              Technologies
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Here's a comprehensive overview of my technical skills and the technologies I work with to create amazing digital experiences.
          </p>
        </div>

        {/* Filter Categories */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {filterCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25'
                  : 'bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:border-red-500/30 hover:text-white'
              }`}
              style={{ animationDelay: `${300 + (index * 100)}ms` }}
            >
              <span className="flex items-center">
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </span>
              {activeCategory !== category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {getFilteredCategories().map((category, categoryIndex) => (
            <div
              key={category.id}
              className={`group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 transform hover:scale-105 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${600 + (categoryIndex * 150)}ms`
              }}
            >
              {/* Category Header */}
              <div className="relative p-6 bg-gradient-to-br from-gray-700/50 to-gray-800/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{category.description}</p>
                  </div>
                </div>

                {/* Category Stats */}
                <div className="grid grid-cols-2 gap-4 p-3 bg-gray-700/30 rounded-lg">
                  <div className="text-center">
                    <div className="text-red-400 font-bold text-lg">{category.skills.length}</div>
                    <div className="text-gray-500 text-xs">Technologies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-red-400 font-bold text-lg">
                      {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                    </div>
                    <div className="text-gray-500 text-xs">Avg. Level</div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              {/* Skills List */}
              <div className="p-6 space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="relative group/skill"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Skill Header */}
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <span className="text-white font-medium text-sm">{skill.name}</span>
                        <div className="flex items-center mt-1 space-x-3">
                          <span className="text-gray-400 text-xs">{skill.experience}</span>
                          <span className="text-gray-500 text-xs">•</span>
                          <span className="text-gray-400 text-xs">{skill.projects} projects</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-red-400 font-bold text-sm">{skill.level}%</span>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left ${
                          animatedSkills.has(`${categoryIndex}-${skillIndex}`)
                            ? 'scale-x-100 opacity-100'
                            : 'scale-x-0 opacity-50'
                        }`}
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${(categoryIndex * 300) + (skillIndex * 150)}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </div>
                      
                      {/* Glow Effect */}
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full blur-sm opacity-0 transition-all duration-1000 ${
                          animatedSkills.has(`${categoryIndex}-${skillIndex}`) ? 'opacity-30' : ''
                        }`}
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${(categoryIndex * 300) + (skillIndex * 150)}ms`
                        }}
                      ></div>
                    </div>

                    {/* Skill Details Tooltip */}
                    {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                      <div className="absolute left-0 top-full mt-2 p-3 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-20 min-w-max">
                        <div className="text-white text-sm font-medium mb-1">{skill.name}</div>
                        <div className="text-gray-400 text-xs">Experience: {skill.experience}</div>
                        <div className="text-gray-400 text-xs">Projects: {skill.projects}</div>
                        <div className="text-gray-400 text-xs">Proficiency: {skill.level}%</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
              
              {/* Border Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className={`transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Additional
              </span>
              <span className="text-white ml-2">Technologies</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Other tools and technologies I work with to enhance development workflow and create better user experiences.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {additionalSkills.map((tech, index) => (
              <span
                key={tech}
                className="group px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-gray-300 hover:border-red-500/50 hover:text-white transition-all duration-300 hover:scale-105 cursor-default relative overflow-hidden"
                style={{ animationDelay: `${1200 + (index * 50)}ms` }}
              >
                <span className="relative z-10">{tech}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </span>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-block p-8 bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm border border-gray-600/30 rounded-2xl hover:border-red-500/30 transition-all duration-500 group">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                Always Learning & Growing
              </h3>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                Technology evolves rapidly, and so do I. I'm constantly learning new skills and staying updated with the latest trends.
              </p>
              <div className="flex gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300"
                >
                  Let's Work Together
                </a>
                <a 
                  href="#projects" 
                  className="px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-red-500/50 hover:text-white transition-all duration-300 hover:bg-gray-700/30"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500/15 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${3 + Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Skills;