import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import your components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
// import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
// import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App min-h-screen overflow-hidden bg-gray-900">
        <Header />
        <main>
          <div className="pt-16">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/home" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              {/* {/* <Route path="/education" element={<Education />} /> */}
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              {/* <Route path="/resume" element={<Resume />} /> */}
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;