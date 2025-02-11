'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import React from 'react';

export default function Home() {
  // Add useEffect for client-side only animations
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering animations until mounted
  if (!isMounted) {
    return null;
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        </div>
        <motion.div 
          className="text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">Full Stack Developer & Designer</p>
          <div className="flex space-x-4 justify-center">
            <motion.a
              href="https://github.com"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 rounded-full backdrop-blur-sm"
            >
              <FiGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 rounded-full backdrop-blur-sm"
            >
              <FiLinkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:your@email.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 rounded-full backdrop-blur-sm"
            >
              <FiMail size={24} />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 bg-black/90">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg">
                  I am a passionate developer with expertise in modern web technologies.
                  My journey in software development started with a curiosity for creating
                  beautiful and functional applications.
                </p>
                <p className="text-lg">
                  I specialize in full-stack development using technologies like React,
                  Next.js, Node.js, and various modern tools and frameworks.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MongoDB'].map((skill) => (
                    <motion.div
                      key={skill}
                      className="bg-white/5 p-3 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 bg-black/80">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <motion.div
                  key={project}
                  className="bg-white/5 rounded-xl overflow-hidden"
                  whileHover={{ y: -10 }}
                >
                  <div className="h-48 bg-gray-700"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                    <p className="text-gray-300 mb-4">
                      A brief description of the project and the technologies used.
                    </p>
                    <div className="flex space-x-4">
                      <a href="#" className="text-blue-400 hover:text-blue-300">Demo</a>
                      <a href="#" className="text-blue-400 hover:text-blue-300">Code</a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 bg-black/90">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
            <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
              <form className="space-y-6">
                <div>
                  <label className="block mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full p-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-blue-500 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
