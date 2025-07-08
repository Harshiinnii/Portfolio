import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState(""); // For showing success/error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setStatus("sending");

    const res = await fetch("https://formspree.io/f/myzjevbd", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-0 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Let's discuss your next project</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-[#9F8FFF] dark:text-[#A3C7FF] mr-4" />
                <span className="text-gray-600 dark:text-gray-300">harshinia04@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-[#9F8FFF] dark:text-[#A3C7FF] mr-4" />
                <span className="text-gray-600 dark:text-gray-300">+91 6369366654</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-[#9F8FFF] dark:text-[#A3C7FF] mr-4" />
                <span className="text-gray-600 dark:text-gray-300">Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#9F8FFF] dark:bg-gray-800 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#9F8FFF] dark:bg-gray-800 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#9F8FFF] dark:bg-gray-800 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#A3C7FF] to-[#9F8FFF] hover:from-[#9F8FFF] hover:to-[#A3C7FF] text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center space-x-2 transition-all duration-300"
                disabled={status === "sending" || status === "success"}
              >
                <span>
                  {status === "sending"
                    ? "Sending..."
                    : status === "success"
                    ? "Sent"
                    : "Send Message"}
                </span>
                <Send className="w-5 h-5" />
              </button>
              
              {status === "error" && (
                <p className="text-red-600 mt-2">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;