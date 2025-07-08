import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const mainRef = useRef(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const navItems = ['home', 'about', 'projects', 'skills', 'contact'];

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      const navbarHeight = document.querySelector('nav').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden ${darkMode ? 'dark bg-gray-900' : 'bg-[#FBFBFB]'}`}>
      <motion.nav
        initial={false}
        className="fixed left-0 top-0 w-screen h-14 z-50 bg-[#fdfeff] border-b border-[#C4D9FF] rounded-xl shadow-md"
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex justify-between h-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-[#C4D9FF] to-[#C5BAFF] bg-clip-text text-transparent flex items-center"
            >
              <img
                src="/icon.png"
                alt="Logo"
                className="w-8 h-8 mr-2"
                style={{ display: 'inline-block' }}
              />
              Portfolio
            </motion.div>
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((section) => (
                <motion.button
                  key={section}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize relative group ${
                    activeSection === section
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {section}
                  <motion.div
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C4D9FF] to-[#C5BAFF] transform origin-left
                      ${activeSection === section ? 'scale-x-100' : 'scale-x-0'}`}
                    initial={false}
                    animate={{ scaleX: activeSection === section ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gradient-to-r from-[#C4D9FF] to-[#C5BAFF] bg-opacity-20"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-900" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <main ref={mainRef} className="relative">
        <section
          id="home"
          className="min-h-screen pt-14" // Changed from pt-16 to pt-14 to match navbar height
        >
          <Hero onNavigate={scrollToSection} />
        </section>
        <section id="about" className="pt-0 pb-10">
          <About />
        </section>
        <section id="projects" className="min-h-screen pb-8">
          <Projects />
        </section>
        <section id="skills" className="pt-8 pb-8">
          <Skills />
        </section>
        <section id="contact" className="pt-8 pb-16">
          <Contact />
        </section>
      </main>

      <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-gray-200/50 dark:border-gray-800/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-gray-600 dark:text-gray-300">
              © 2024 Portfolio. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Github className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-[#C5BAFF]" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-[#C4D9FF]" />
              </motion.a>
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Mail className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-[#C5BAFF]" />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;