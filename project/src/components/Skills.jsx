import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    "Programming Languages": [
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
      { name: "JavaScript", level: 60 }
    ],
    "Technical Skills": [
      { name: "UI/UX", level: 90 },
      { name: "Prompt Engineering", level: 80 },
      { name: "TailwindCSS", level: 75 }
    ],
    "MERN Stack": [
      { name: "Mongo DB", level: 90 },
      { name: "Express.js", level: 75 },
      { name: "React.js", level: 85 },
      { name: "Node.js", level: 80 }
    ]
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-8 pb-8 bg-gray-50 dark:bg-gray-800" // Reduced padding
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + categoryIndex * 0.2 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">{category}</h3>
              <div className="space-y-4">
                {categorySkills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-300">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.6 + skillIndex * 0.1 }}
                        className="h-full bg-[#9F8FFF] dark:bg-[#A3C7FF] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;