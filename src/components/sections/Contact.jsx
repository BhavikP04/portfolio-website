import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'react-lottie';
import toast, { Toaster } from 'react-hot-toast';
import { FiSend, FiGithub, FiLinkedin, FiInstagram, FiMail, FiPhone, FiMapPin, FiCheckCircle, FiXCircle, FiAlertCircle, FiX } from 'react-icons/fi';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  const [formErrors, setFormErrors] = useState({});

  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: '/assets/lottie/contact.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  // Custom toast notification for Instagram
  const showInstagramToast = () => {
    toast.custom((t) => (
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-gradient-to-r from-indigo-600 to-cyan-600 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 pt-0.5">
              <FiInstagram className="h-6 w-6 text-pink-400" />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-white">
                Hey there! 👋
              </p>
              <p className="mt-1 text-sm text-gray-100">
                Sorry, but you can just ask me directly 😅
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-indigo-500">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>
      </motion.div>
    ), {
      duration: 3000,
      position: 'bottom-center',
      style: {
        background: 'transparent',
        boxShadow: 'none',
        padding: 0,
        margin: 0,
      },
    });
  };

  // Social media links
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <FiGithub className="text-2xl" />, 
      url: 'https://github.com/BhavikP04',
      color: 'hover:text-gray-300',
      onClick: null
    },
    { 
      name: 'LinkedIn', 
      icon: <FiLinkedin className="text-2xl" />, 
      url: 'https://www.linkedin.com/in/bhavik-patle-b1a6b124b/',
      color: 'hover:text-blue-400',
      onClick: null
    },
    { 
      name: 'Instagram', 
      icon: <FiInstagram className="text-2xl" />, 
      url: '#',
      color: 'hover:text-pink-500',
      onClick: (e) => {
        e.preventDefault();
        showInstagramToast();
      }
    },
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
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    },
  };

  const notificationVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 25 }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    // Reset previous states
    setSubmitStatus({ success: false, message: '' });
    setFormErrors({});
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mldnqqeb", {
        method: "POST",
        body: formData,
        headers: { 
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest' // Helps Formspree identify AJAX requests
        }
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Success case
        setSubmitStatus({ 
          success: true, 
          message: 'Thank you! Your message has been sent successfully.' 
        });
        form.reset();
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ success: false, message: '' });
        }, 5000);
      } else {
        // Handle form validation errors
        if (data.errors) {
          const errors = data.errors.reduce((acc, error) => ({
            ...acc,
            [error.field || 'form']: error.message
          }), {});
          setFormErrors(errors);
          setSubmitStatus({ 
            success: false, 
            message: 'Please correct the errors in the form.' 
          });
        } else {
          // Handle other API errors
          throw new Error(data.error || 'Failed to send message');
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ 
        success: false, 
        message: error.message || 'An error occurred while sending your message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster
        containerStyle={{
          top: 20,
          left: 20,
          bottom: 20,
          right: 20,
        }}
        toastOptions={{
          style: {
            background: 'transparent',
            boxShadow: 'none',
            padding: 0,
            margin: 0,
          },
        }}
      />
      <section id="contact" className="py-20 bg-gray-900 text-white overflow-hidden">
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
              Get In Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out to me. I'll get back to you as soon as possible!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Contact Form */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <form 
              className="space-y-6 relative"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Status Notification */}
              <AnimatePresence>
                {submitStatus.message && (
                  <motion.div
                    className={`absolute -top-4 left-0 right-0 p-4 rounded-lg ${
                      submitStatus.success ? 'bg-green-900/80' : 'bg-red-900/80'
                    } backdrop-blur-sm`}
                    variants={notificationVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="flex items-center gap-2 text-sm">
                      {submitStatus.success ? (
                        <FiCheckCircle className="flex-shrink-0 text-green-400" />
                      ) : (
                        <FiAlertCircle className="flex-shrink-0 text-red-400" />
                      )}
                      <span>{submitStatus.message}</span>
                      <button
                        type="button"
                        onClick={() => setSubmitStatus({ success: false, message: '' })}
                        className="ml-auto text-gray-300 hover:text-white"
                        aria-label="Dismiss"
                      >
                        <FiXCircle />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div variants={item}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 bg-gray-800 border ${
                    formErrors.name ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500 transition-all disabled:opacity-70`}
                  placeholder="John Doe"
                />
                {formErrors.name && (
                  <p className="mt-1 text-sm text-red-400">
                    {formErrors.name}
                  </p>
                )}
              </motion.div>

              <motion.div variants={item}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 bg-gray-800 border ${
                    formErrors.email ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500 transition-all disabled:opacity-70`}
                  placeholder="john@example.com"
                />
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-400">
                    {formErrors.email}
                  </p>
                )}
              </motion.div>

              <motion.div variants={item}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 bg-gray-800 border ${
                    formErrors.message ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500 resize-none transition-all disabled:opacity-70`}
                  placeholder="Hello! I'd like to talk about..."
                ></textarea>
                {formErrors.message && (
                  <p className="mt-1 text-sm text-red-400">
                    {formErrors.message}
                  </p>
                )}
              </motion.div>

              <motion.div variants={item} className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all transform ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 hover:scale-[1.02] focus:ring-indigo-500'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="text-lg" />
                      Send Message
                    </>
                  )}
                </button>
                {formErrors.form && (
                  <p className="mt-2 text-sm text-red-400">
                    {formErrors.form}
                  </p>
                )}
              </motion.div>
            </form>

            {/* Contact Info */}
            <motion.div 
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div 
                variants={item}
                className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/80 transition-colors"
              >
                <div className="p-2 bg-indigo-900/50 rounded-lg">
                  <FiMail className="text-indigo-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Email</h4>
                  <a href="mailto:bhavikpatle321@gmail.com" className="text-white hover:text-indigo-400 transition-colors">
                    bhavikpatle321@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                variants={item}
                className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/80 transition-colors"
              >
                <div className="p-2 bg-indigo-900/50 rounded-lg">
                  <FiPhone className="text-indigo-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Phone</h4>
                  <a href="tel:9168166103" className="text-white hover:text-indigo-400 transition-colors">
                    9168166103
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="mt-8 flex items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={social.onClick || null}
                  className={`p-3 rounded-full bg-gray-800 text-gray-400 ${social.color} hover:bg-gray-700 transition-all duration-300 hover:scale-110 cursor-pointer`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Lottie Animation */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-2xl blur-3xl -z-10"></div>
              <Lottie
                options={defaultOptions}
                height={600}
                width="100%"
                isClickToPauseDisabled={true}
              />
            </div>
          </motion.div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Contact;
