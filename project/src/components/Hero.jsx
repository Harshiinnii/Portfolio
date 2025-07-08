import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import myPhoto from '../assets/myphoto.jpg';


const Hero = ({ onNavigate }) => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-[calc(100vh-4rem)] flex items-center"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 animatedGradient" />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-gradient-to-br from-[#C4D9FF]/30 via-transparent to-[#C5BAFF]/30 blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <motion.button
            onClick={() => setShowProfile(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative mx-auto mb-8 group"
          >
            <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src={myPhoto}
                alt="Profile"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </motion.button>
          <motion.h1
            className="text-5xl sm:text-7xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Harshini Anand
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Full-stack developer focused on pixel-perfect design and performance.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-x-4"
          >
            <button 
              onClick={() => onNavigate('projects')}
              className="bg-gradient-to-r from-[#C4D9FF] to-[#C5BAFF] hover:from-[#C5BAFF] hover:to-[#C4D9FF] text-gray-900 px-8 py-3 rounded-full font-medium inline-flex items-center space-x-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span>View Projects</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-white/80 hover:bg-white text-gray-900 px-8 py-3 rounded-full font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
            onClick={() => setShowProfile(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-[#C4D9FF] via-white to-[#C5BAFF] dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl p-6 max-w-lg w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setShowProfile(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#b8adf0] mb-6">
                  <img
                    src={myPhoto}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Harshini A</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Full-stack Developer</p>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                  Passionate about creating beautiful and functional web applications. 
                  Specialized in React, Node.js, and modern web technologies.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="/HarshiniA resume .pdf" // Replace with the actual path to your CV
                    download
                    className="bg-gradient-to-r from-[#C4D9FF] to-[#C5BAFF] text-gray-900 px-6 py-2 rounded-full font-medium hover:shadow-lg transition-shadow border-4 border-[#b8adf0]"
                  >
                    Download Resume
                  </a>
                  {/* <button
                    onClick={() => {
                      setShowProfile(false);
                      onNavigate('about');
                    }}
                    className="bg-[#FBFBFB] text-gray-900 px-6 py-2 rounded-full font-medium hover:shadow-lg transition-shadow"
                  >
                    View Portfolio
                  </button> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => onNavigate('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowRight className="w-6 h-6 text-gray-700 dark:text-white transform rotate-90" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default Hero;