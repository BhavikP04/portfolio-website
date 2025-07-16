import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';

const Projects = () => {
  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: '/assets/lottie/projects.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  // Project data
  const projects = [
    {
      title: 'Feedback-Automation',
      description: 'A SaaS application built to automate customer feedback collection for businesses. It can be integrated into any business to streamline feedback management.',
      tags: ['React', 'TypeScript', 'Supabase', 'n8n'],
      demo: 'https://lead-review-automation-toec.vercel.app/',
      code: 'https://github.com/BhavikP04/lead-review-automation',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      isActive: true
    },
    {
      title: 'Coming Soon',
      description: 'New project coming soon! Stay tuned for updates.',
      tags: ['Coming', 'Soon'],
      demo: '#',
      code: '#',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      isActive: false
    },
    {
      title: 'Coming Soon',
      description: 'New project coming soon! Stay tuned for updates.',
      tags: ['Coming', 'Soon'],
      demo: '#',
      code: '#',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      isActive: false
    },
    {
      title: 'Coming Soon',
      description: 'New project coming soon! Stay tuned for updates.',
      tags: ['Coming', 'Soon'],
      demo: '#',
      code: '#',
      image: 'https://images.unsplash.com/photo-1601134467661-3d775b99c7b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      isActive: false
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full mb-2"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">Here are some of my recent projects. Each project was built to solve real-world problems.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          {/* Lottie Animation */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-2xl blur-3xl -z-10"></div>
              <Lottie
                options={defaultOptions}
                height={400}
                width="100%"
                isClickToPauseDisabled={true}
              />
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className={`group relative bg-gray-800/50 rounded-xl overflow-hidden border ${project.isActive ? 'border-gray-700/50 hover:border-indigo-500/50' : 'border-gray-700/30 opacity-70'} transition-all duration-300`}
                  whileHover={{ 
                    y: project.isActive ? -5 : 0,
                    boxShadow: project.isActive ? '0 10px 25px -5px rgba(99, 102, 241, 0.3)' : 'none'
                  }}
                >
                  {!project.isActive && (
                    <div className="absolute inset-0 bg-gray-900/70 z-10 flex items-center justify-center">
                      <span className="text-xl font-semibold text-gray-300">Coming Soon</span>
                    </div>
                  )}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className={`w-full h-full object-cover transform ${project.isActive ? 'group-hover:scale-105' : ''} transition-transform duration-500`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent ${project.isActive ? 'opacity-0 group-hover:opacity-100' : 'opacity-60'} transition-opacity duration-300 flex items-end p-4`}>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className={`text-xs ${project.isActive ? 'bg-indigo-900/70 text-indigo-200' : 'bg-gray-800/80 text-gray-300'} px-2 py-1 rounded`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-semibold mb-2 ${project.isActive ? 'group-hover:text-indigo-400' : 'text-gray-400'} transition-colors`}>
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                      {project.isActive ? (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                          <FiExternalLink className="text-sm" />
                          Live Demo
                        </a>
                      ) : (
                        <span className="flex items-center gap-1 text-sm text-gray-500 cursor-not-allowed">
                          <FiExternalLink className="text-sm" />
                          Live Demo
                        </span>
                      )}
                      {project.isActive ? (
                        <a 
                          href={project.code} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          <FaCode className="text-sm" />
                          View Code
                        </a>
                      ) : (
                        <span className="flex items-center gap-1 text-sm text-gray-500 cursor-not-allowed">
                          <FaCode className="text-sm" />
                          View Code
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a 
            href="https://github.com/BhavikP04" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-indigo-500 text-indigo-400 hover:bg-indigo-900/30 hover:border-indigo-400 hover:text-white transition-all"
          >
            <FiGithub className="text-lg" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
