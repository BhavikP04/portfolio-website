import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import Typewriter from 'typewriter-effect';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: '/assets/lottie/Developer_Yoga.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  // Typewriter effect configuration
  const typewriterOptions = {
    strings: ['Frontend Developer', 'React Expert', 'Product Crafter'],
    autoStart: true,
    loop: true,
    deleteSpeed: 50,
    delay: 75,
  };

  return (
    <motion.section 
      id="home" 
      className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden px-4 py-20 md:py-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Bhavik Patle
            </motion.h1>
            
            <motion.div 
              className="h-16 md:h-20 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300">
                <Typewriter
                  options={typewriterOptions}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('Frontend Developer')
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString('React Expert')
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString('Product Crafter')
                      .pauseFor(2000)
                      .start();
                  }}
                />
              </h2>
              <motion.p 
                className="text-gray-400 text-lg md:text-xl mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                Crafting delightful digital experiences ✨
              </motion.p>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              I craft exceptional digital experiences with clean, efficient code and beautiful designs.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="#contact"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 25px rgba(99, 102, 241, 0.4)'
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium text-lg flex items-center gap-2 group"
              >
                Hire Me
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="#projects"
                whileHover={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: '#6366f1',
                  color: '#6366f1'
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium text-lg flex items-center gap-2 transition-colors"
              >
                View Projects
                <FiDownload className="group-hover:animate-bounce" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Lottie Animation */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Lottie
              options={defaultOptions}
              height="100%"
              width="100%"
              isClickToPauseDisabled={true}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="w-8 h-14 border-2 border-gray-400 rounded-full flex justify-center p-1 bg-gray-900/50 backdrop-blur-sm">
          <motion.div 
            className="w-1 h-4 bg-white/80 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
