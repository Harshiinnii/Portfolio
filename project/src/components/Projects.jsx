import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "DigiSign",
      description: "An advanced digital signage sytem for efficient display management in academic institutions",
      image: "https://firstouchkiosk.com/wp-content/uploads/2021/01/digital-notice-board-1.jpg",
      tags: ["React", "Express.js", "MongoDB", "TailwindCSS"],
      github: "https://github.com",
      
      ppt: "/digidisplay.pptx" // Added line
    },
    {
      title: "ExploreSecure",
      description: "A secure mobile application for exploring and providing real-time alerts on natural harazards at different tourist destinations",
      image: "https://live-production.wcms.abc-cdn.net.au/cc3fc4fde47be17e98a0fb532d6aa90f?impolicy=wcms_crop_resize&cropH=3280&cropW=3280&xPos=1648&yPos=0&width=862&height=862",
      tags: ["Reactnative", "MongoDB", "Express.js"],
      github: "https://github.com",
      ppt: "/exploresecure.pptx"
    },
    {
      title: "Plant Disease Prediction",
      description: "A mobile application that employs image recognition technology to accurately predict plant diseases . It invloves the use of machine learning and provides fully organic solutions to farmers",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7PwbJh4dHLpIk_DxJjoeZDD84_Dsedjw-Lw&s",
      tags: ["Reactnative", "MongoDB", "Express.js"],
      github: "https://github.com",
      ppt: "/plantdisease prediction.pptx"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Some of my recent work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  {/* Removed Code and View PPT links */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;