import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  const categories = [
    { id: 'all', label: 'All Projects', icon: '🚀' },
    { id: 'web', label: 'Web Apps', icon: '💻' },
    { id: 'mobile', label: 'Mobile', icon: '📱' },
    { id: 'fullstack', label: 'Full Stack', icon: '⚡' },
    { id: 'ui', label: 'UI/UX', icon: '🎨' }
  ];

  const projects = [
    {
      id: 1,
      title: "Emmanuel Player",
      subtitle: "Music Streaming Website",
      description: "A dynamic music streaming web application featuring a modern dark-themed interface and seamless audio playback experience with a curated collection of 18 songs.",
      image: "🎵",
      category: "web",
      technologies: ["PHP", "HTML5", "CSS3", "JavaScript"],
      features: [
        "Dynamic music library with 18 songs",
        "Real-time search by song title or artist",
        "Full-featured audio player with controls",
        "Fully responsive design",
        "Interactive UI with hover effects"
      ],
      stats: {
        users: "1",
        performance: "88%",
        uptime: "99.5%"
      },
      links: {
        live: "#",
        github: "#",
        demo: "#"
      },
      status: "In Development",
      year: "2025"
    },
    {
      id: 3,
      title: "Weather Forecast App",
      subtitle: "Smart Weather Insights",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and personalized weather alerts.",
      image: "🌤️",
      category: "mobile",
      technologies: ["React Native", "Redux", "OpenWeather API", "Maps API"],
      features: [
        "Location-based forecasts",
        "Interactive weather maps",
        "Customizable alerts",
        "Offline data caching"
      ],
      stats: {
        users: "2",
        performance: "90%",
        uptime: "99.7%"
      },
      links: {
        live: "https://weather-wheat-kappa.vercel.app/",
        github: "https://github.com/Emmanuel301004/weather.git",
        demo: "#"
      },
      status: "Live",
      year: "2023"
    },
    {
      id: 4,
      title: "Portfolio Website",
      subtitle: "Creative Showcase",
      description: "A stunning portfolio website with advanced animations, dark/light themes, and optimized performance for creative professionals.",
      image: "🎨",
      category: "ui",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Three.js"],
      features: [
        "Advanced animations",
        "3D interactive elements",
        "Dark/light themes",
        "SEO optimized"
      ],
      stats: {
        users: "1",
        performance: "94%",
        uptime: "100%"
      },
      links: {
        live: "#",
        github: "#",
        demo: "#"
      },
      status: "In Development",
      year: "2023"
    },
    {
      id: 5,
      title: "Personal-finz",
      subtitle: "Personal Finance Tracker",
      description: "A responsive web application for personal finance tracking built with vanilla HTML, CSS, and JavaScript. Features transaction history with filtering capabilities.",
      image: "💰",
      category: "web",
      technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage API"],
      features: [
        "Cash flow tracking for physical and digital funds",
        "Transaction history with filtering",
        "Responsive design for mobile and desktop",
        "Client-side data storage for privacy"
      ],
      stats: {
        users: "1",
        performance: "86%",
        uptime: "99.1%"
      },
      links: {
        live: "https://personalfinz.netlify.app/",
        github: "#",
        demo: "https://drive.google.com/file/d/1KVF4Gfa0eSuFmh6BtvlsvrY_rkc_N2DI/view?usp=drive_link"
      },
      status: "Live",
      year: "2025"
    },
    {
      id: 6,
      title: "Real-Time Chat Application",
      subtitle: "Universal Communication Platform",
      description: "Built a chat platform using Socket.IO and Node.js that supported real-time messaging and typing indicators. Designed for concurrent use by 100+ users.",
      image: "💬",
      category: "fullstack",
      technologies: ["Socket.IO", "Node.js", "WebSocket", "REST APIs"],
      features: [
        "Real-time messaging",
        "Typing indicators",
        "100+ concurrent users",
        "WebSocket integration"
      ],
      stats: {
        users: "2",
        performance: "87%",
        uptime: "99.2%"
      },
      links: {
        live: "https://universal-chatroom.onrender.com/",
        github: "#",
        demo: "#"
      },
      status: "Live",
      year: "2024"
    },
    {
      id: 7,
      title: "Number Game - Online Multiplayer",
      subtitle: "Interactive Gaming Platform",
      description: "Developed a live multiplayer number-counting game with interactive UI and server functionality using WebSocket and Express.js.",
      image: "🎮",
      category: "web",
      technologies: ["WebSocket", "Express.js", "Node.js"],
      features: [
        "Live multiplayer gameplay",
        "Real-time synchronization",
        "Interactive UI",
        "Server-side game logic"
      ],
      stats: {
        users: "1",
        performance: "85%",
        uptime: "98.8%"
      },
      links: {
        live: "https://number-game-zqj2.onrender.com",
        github: "#",
        demo: "#"
      },
      status: "Live",
      year: "2024"
    },
    {
      id: 8,
      title: "Kind Kart - Book Reselling E-Commerce",
      subtitle: "Sustainable Book Marketplace",
      description: "Built a full-stack PHP e-commerce platform for buying and selling used books. Implemented user authentication, product listings, shopping cart, and order management.",
      image: "📚",
      category: "fullstack",
      technologies: ["PHP", "MySQL", "E-commerce Design"],
      features: [
        "User authentication",
        "Product listings",
        "Shopping cart functionality",
        "Order management system"
      ],
      stats: {
        users: "1",
        performance: "89%",
        uptime: "98.5%"
      },
      links: {
        live: "#",
        github: "#",
        demo: "#"
      },
      status: "In Development",
      year: "2023"
    },
    {
      id: 9,
      title: "Recipe Finder",
      subtitle: "Culinary Discovery App",
      description: "A single-page Angular application that lets you search for your favorite dishes and instantly see their calorie content along with recipe links.",
      image: "🍽️",
      category: "web",
      technologies: ["Angular", "TypeScript", "HTML5", "CSS3", "Recipe API"],
      features: [
        "Recipe search functionality",
        "Calorie content display",
        "Recipe links integration",
        "Single-page application design"
      ],
      stats: {
        users: "1",
        performance: "91%",
        uptime: "98.9%"
      },
      links: {
        live: "https://recipe-in.vercel.app/",
        github: "https://github.com/Emmanuel301004/recipe.in.git",
        demo: "https://drive.google.com/file/d/1lHRAOSWfR-ds6nq9uyFqnNIVUEVHaq8u/view?usp=drive_link"
      },
      status: "Live",
      year: "2024"
    },
    {
      id: 10,
      title: "AniWatch",
      subtitle: "Anime Streaming Platform",
      description: "A comprehensive anime streaming website with extensive library of feature films, documentaries, TV shows, and trending content with sleek user interface.",
      image: "📺",
      category: "web",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Extensive anime library",
        "Trending and popular picks",
        "Search functionality",
        "User-friendly interface",
        "Categorized content sections"
      ],
      stats: {
        users: "2",
        performance: "88%",
        uptime: "99.0%"
      },
      links: {
        live: "https://aniwatch99.netlify.app/",
        github: "https://github.com/Emmanuel301004/anime99.git",
        demo: "#"
      },
      status: "Live",
      year: "2024"
    },
    {
      id: 11,
      title: "Interactive Calculator",
      subtitle: "Advanced Mathematical Tool",
      description: "A feature-rich calculator web application with dark/light themes, advanced mathematical operations including trigonometric functions, and responsive design.",
      image: "🧮",
      category: "web",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Advanced mathematical operations",
        "Dark/light theme switcher",
        "Trigonometric functions",
        "Responsive design",
        "Error handling mechanisms"
      ],
      stats: {
        users: "1",
        performance: "93%",
        uptime: "99.5%"
      },
      links: {
        live: "https://calculation23.netlify.app/",
        github: "https://github.com/Emmanuel301004/calculator.git",
        demo: "#"
      },
      status: "Live",
      year: "2024"
    },
    {
      id: 12,
      title: "StyleShirts",
      subtitle: "Online Fashion Store",
      description: "An e-commerce website dedicated to offering a curated collection of stylish shirts with search, filtering, shopping cart, and user account functionality.",
      image: "👔",
      category: "web",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Curated shirt collection",
        "Search and filtering",
        "Shopping cart and checkout",
        "User accounts and profiles",
        "Responsive design"
      ],
      stats: {
        users: "1",
        performance: "87%",
        uptime: "98.7%"
      },
      links: {
        live: "https://styleshirts-ecommerce.netlify.app/",
        github: "#",
        demo: "#"
      },
      status: "Live",
      year: "2024"
    },
    {
      id: 13,
      title: "Quick Sketch",
      subtitle: "Digital Drawing Canvas",
      description: "An interactive web application for digital sketching with dynamic drawing canvas powered by HTML5 Canvas, offering smooth drawing experience for artists.",
      image: "✏️",
      category: "web",
      technologies: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
      features: [
        "Dynamic drawing canvas",
        "Real-time rendering",
        "Responsive design",
        "User-friendly interface",
        "Cross-device compatibility"
      ],
      stats: {
        users: "1",
        performance: "90%",
        uptime: "99.2%"
      },
      links: {
        live: "https://paint-app0.netlify.app",
        github: "https://github.com/Emmanuel301004/quicksketch.git",
        demo: "https://drive.google.com/file/d/104j4wooT92bxDh4JRs54pCRwObJaSSAW/view?usp=drive_link"
      },
      status: "Live",
      year: "2024"
    },
    {
      id: 14,
      title: "Tic Tac Toe Game",
      subtitle: "Classic Strategy Game",
      description: "A classic Tic Tac Toe game developed with HTML, CSS, and JavaScript, available both as web application and downloadable app.",
      image: "⭕",
      category: "web",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Classic game mechanics",
        "Responsive design",
        "Web and app versions",
        "Interactive gameplay",
        "Clean user interface"
      ],
      stats: {
        users: "2",
        performance: "92%",
        uptime: "99.8%"
      },
      links: {
        live: "https://tik-tak-toe1.netlify.app",
        github: "https://github.com/Emmanuel301004/tic-tak-toe.git",
        demo: "https://drive.google.com/file/d/1x5DkdvsivjD9sUv4XyV3hq-BjGZ69Fm7/view?usp=sharing"
      },
      status: "Live",
      year: "2024"
    },
    {
      id: 15,
      title: "Rock Paper Scissors",
      subtitle: "Interactive Game App",
      description: "A fun and engaging Rock Paper Scissors web app with sleek design, smooth gameplay, and both computer and multiplayer modes.",
      image: "✂️",
      category: "web",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Play against computer or friends",
        "Stylish responsive design",
        "Smooth gameplay mechanics",
        "Instant game results",
        "Addictive user experience"
      ],
      stats: {
        users: "1",
        performance: "89%",
        uptime: "99.4%"
      },
      links: {
        live: "https://rok-paper-siccsor.netlify.app/",
        github: "https://github.com/Emmanuel301004/rock-paper-scissor.git",
        demo: "#"
      },
      status: "Live",
      year: "2024"
    },
    {
      id: 16,
      title: "Links Hub",
      subtitle: "Productivity Tools Collection",
      description: "A curated collection of essential tools and resources designed to streamline workflows and boost productivity for developers, designers, and digital enthusiasts.",
      image: "🔗",
      category: "web",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Curated productivity tools",
        "Resource organization",
        "Developer-friendly interface",
        "Workflow optimization",
        "Digital tool discovery"
      ],
      stats: {
        users: "1",
        performance: "91%",
        uptime: "99.1%"
      },
      links: {
        live: "https://linkonlink.netlify.app",
        github: "#",
        demo: "#"
      },
      status: "Live",
      year: "2024"
    },
    {
      id: 17,
      title: "JS Compiler",
      subtitle: "Mathematical Operations Tool",
      description: "An Angular website that allows users to perform various mathematical operations with a user-friendly interface and dynamic output display.",
      image: "⚙️",
      category: "web",
      technologies: ["Angular", "TypeScript", "CSS3"],
      features: [
        "Mathematical operations interface",
        "Dynamic output display",
        "Clean modular code structure",
        "User input processing",
        "Angular routing implementation"
      ],
      stats: {
        users: "1",
        performance: "89%",
        uptime: "98.8%"
      },
      links: {
        live: "https://js-compiler-beta.vercel.app/",
        github: "https://github.com/Emmanuel301004/js-compiler.git",
        demo: "#"
      },
      status: "Live",
      year: "2024"
    },
    {
      id: 18,
      title: "Fylo Landing Page",
      subtitle: "Digital Marketing Landing Page",
      description: "A professionally designed landing page optimized for user engagement and conversion, featuring compelling content and clear calls-to-action.",
      image: "📄",
      category: "ui",
      technologies: ["HTML5", "CSS3", "Bootstrap"],
      features: [
        "Conversion-optimized design",
        "Compelling content layout",
        "Clear calls-to-action",
        "Bootstrap responsive framework",
        "Professional visual design"
      ],
      stats: {
        users: "1",
        performance: "92%",
        uptime: "99.3%"
      },
      links: {
        live: "https://landingpageinfylo.netlify.app/",
        github: "#",
        demo: "#"
      },
      status: "Live",
      year: "2024"
    },
    {
      id: 19,
      title: "Patti Vidu",
      subtitle: "Culinary Journey E-commerce",
      description: "An interactive and responsive e-commerce website focused on culinary products, featuring modern design and seamless user experience.",
      image: "🍳",
      category: "web",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Interactive responsive design",
        "Culinary product showcase",
        "E-commerce functionality",
        "Modern user interface",
        "Seamless browsing experience"
      ],
      stats: {
        users: "1",
        performance: "86%",
        uptime: "98.6%"
      },
      links: {
        live: "https://pattividu.netlify.app/",
        github: "https://github.com/Emmanuel301004/pattividu.git",
        demo: "#"
      },
      status: "Live",
      year: "2024"
    },
    {
      id: 20,
      title: "Chat App Design",
      subtitle: "Creative Communication Interface",
      description: "A sleek chat app design crafted with HTML and CSS, focusing on user-centric design with immersive experience and seamless interactions.",
      image: "💭",
      category: "ui",
      technologies: ["HTML5", "CSS3"],
      features: [
        "User-centric design approach",
        "Immersive chat experience",
        "Seamless interaction design",
        "Captivating visual elements",
        "Modern interface aesthetics"
      ],
      stats: {
        users: "1",
        performance: "94%",
        uptime: "99.6%"
      },
      links: {
        live: "https://chatapp-illustrative-clone.netlify.app/",
        github: "https://github.com/Emmanuel301004/chat.git",
        demo: "#"
      },
      status: "Live",
      year: "2024"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter, projects]);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
  };

  // Helper function to check if a link is valid (not "#" or empty)
  const isValidLink = (link) => {
    return link && link !== "#" && link.trim() !== "";
  };

  return (
    <section 
      id="projects" 
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

      <div className="relative exp z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium backdrop-blur-sm">
              🎯 My Work
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
              Featured
            </span>
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent ml-4">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Explore my latest projects showcasing modern technologies, innovative solutions, and exceptional user experiences.
          </p>
        </div>

        {/* Filter Categories */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25'
                  : 'bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:border-red-500/30 hover:text-white'
              }`}
              style={{ animationDelay: `${300 + (index * 100)}ms` }}
            >
              <span className="flex items-center">
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </span>
              {activeFilter !== category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 transform hover:scale-105 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${600 + (index * 150)}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-gray-700/50 to-gray-800/50 flex items-center justify-center overflow-hidden">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
                  {project.image}
                </div>
                
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Live' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : project.status === 'In Development'
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                }`}>
                  {project.status}
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-gray-700/80 backdrop-blur-sm text-gray-300 rounded-full text-xs font-medium">
                  {project.year}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title & Subtitle */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-red-400 text-sm font-medium">{project.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                    ✨ Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="text-gray-400 text-xs flex items-start"
                      >
                        <span className="text-red-400 mr-2 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-2 mb-6 p-3 bg-gray-700/30 rounded-lg">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-red-400 font-bold text-sm">{value}</div>
                      <div className="text-gray-500 text-xs capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700/50 border border-gray-600/50 rounded-md text-gray-300 text-xs hover:border-red-500/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-red-500/20 border border-red-500/30 rounded-md text-red-400 text-xs">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>


                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.links.live}
                    className="flex-1 group/btn relative px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 text-center overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      View Live
                      <svg className="ml-1 w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  
                  <a
                    href={project.links.github}
                    className="px-4 py-2 border border-gray-600 text-gray-300 text-sm font-medium rounded-lg hover:border-red-500/50 hover:text-white transition-all duration-300 flex items-center justify-center hover:bg-gray-700/30"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
              
              {/* Border Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-block p-8 bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm border border-gray-600/30 rounded-2xl hover:border-red-500/30 transition-all duration-500 group">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
              More Projects Coming Soon
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              I'm constantly working on new and exciting projects. Check out my GitHub for the latest updates and contributions.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/projects" className="group px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25 relative overflow-hidden">
  <span className="relative z-10 flex items-center">
    View My Work
    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </span>
  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
</Link>
              <a 
                href="https://github.com/Emmanuel301004" 
                className="px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-red-500/50 hover:text-white transition-all duration-300 hover:bg-gray-700/30"
              >
                GitHub Profile
              </a>
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

export default Projects;