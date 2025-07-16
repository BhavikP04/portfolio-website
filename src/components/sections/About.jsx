import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import { FaReact, FaNodeJs, FaFigma, FaCode, FaLayerGroup, FaServer, FaNetworkWired } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiFramer, SiSupabase, SiN8N, SiAdobexd } from 'react-icons/si';

const About = () => {
  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: '/assets/lottie/about.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  // Skills data
  const skills = [
    { name: 'HTML5', icon: <FaCode className="text-3xl text-orange-500" /> },
    { name: 'CSS3', icon: <FaCode className="text-3xl text-blue-500" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-3xl text-yellow-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-3xl text-blue-400" /> },
    { name: 'React.js', icon: <FaReact className="text-3xl text-cyan-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-3xl text-cyan-400" /> },
    { name: 'Framer Motion', icon: <SiFramer className="text-3xl text-pink-400" /> },
    { name: 'Lottie Animations', icon: <SiAdobexd className="text-3xl text-purple-400" /> },
    { name: 'Supabase', icon: <SiSupabase className="text-3xl text-green-400" /> },
    { name: 'n8n', icon: <SiN8N className="text-3xl text-blue-300" /> },
    { name: 'Micro Frontends', icon: <FaLayerGroup className="text-3xl text-indigo-400" /> }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-20 bg-gray-900 text-white overflow-hidden">
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
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
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

          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
              variants={item}
            >
              Hello! I'm Bhavik, a passionate Frontend Developer with a keen eye for creating engaging digital experiences. With a strong foundation in modern web technologies, I specialize in building responsive, performant, and accessible web applications.
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed"
              variants={item}
            >
              My journey in web development started 4 years ago, and since then, I've had the privilege of working with various startups and established companies, helping them bring their ideas to life through clean, efficient code and thoughtful user experiences.
            </motion.p>

            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/80 transition-all duration-300 group"
                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)' }}
                    variants={item}
                  >
                    {skill.icon}
                    <span className="mt-2 text-sm font-medium text-gray-300 group-hover:text-white">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
