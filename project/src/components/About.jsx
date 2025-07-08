import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Heart, Coffee, Globe } from 'lucide-react';

const About = () => {
  const bentoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };
  


  return (
    
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen py-9 bg-gradient-to-br from-[#FBFBFB] via-[#E8F9FF] to-[#C4D9FF] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Code2 className="w-8 h-8" />,
              title: "Frontend Development",
              description: "Actively building dynamic websites with React and improving UI/UX design skills",

              color: "from-[#C4D9FF] to-[#E8F9FF]"
            },
            {
              icon: <Briefcase className="w-8 h-8" />,
              title: "Internships",
              description: "Gained corporate experience in modern frontend development during the internship at ZettaStack",

              color: "from-[#C5BAFF] to-[#C4D9FF]"
            },
            {
              icon: <GraduationCap className="w-8 h-8" />,
              title: "Education",
              description: "BE Computer Science and Engineering at Dr. NGP. Institute of Technology, Coimbatore",
              color: "from-[#C4D9FF] to-[#E8F9FF]"
            },
            {
              icon: <Heart className="w-8 h-8" />,
              title: "Passion",
              description: "Committed to delivering impactful, user-centric solutions through strategic thinking, effective collaboration, and creative problem-solving",
              color: "from-[#C4D9FF] to-[#C5BAFF]"
            },
            {
              icon: <Coffee className="w-8 h-8" />,
              title: "Work Style",
              description: "Adaptable and detail-oriented, with a focus on clear communication, innovative thinking, and timely delivery of impactful results",
              color: "from-[#E8F9FF] to-[#C4D9FF]"
            },
            {
              icon: <Globe className="w-8 h-8" />,
              title: "Impact",
              description: "Designing purposeful solutions that drive value, inspire engagement, and create lasting outcomes",
              color:  "from-[#C4D9FF] to-[#C5BAFF]"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={bentoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${item.color} dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="text-gray-900 dark:text-white mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-gradient-to-r from-[#C5BAFF] to-[#C4D9FF]backdrop-blur-sm p-8 rounded-2xl shadow-lg"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a passionate developer with a keen eye for detail and a commitment to creating elegant, efficient solutions.
            My journey in tech has been driven by curiosity and a desire to build meaningful applications that solve real-world problems.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;