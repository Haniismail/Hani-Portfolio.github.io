import React from 'react';
import { motion } from 'framer-motion';

const Section = ({
  children,
  id,
  className = '',
  fullWidth = false,
  bgColor = 'default',
  paddingY = 'default',
}) => {
  // Background color classes
  const bgClasses = {
    default: 'bg-white dark:bg-gray-900',
    light: 'bg-gray-50 dark:bg-gray-800',
    dark: 'bg-gray-100 dark:bg-gray-950',
    primary: 'bg-indigo-50 dark:bg-indigo-900/20',
    secondary: 'bg-pink-50 dark:bg-pink-900/20',
  };

  // Padding classes
  const paddingClasses = {
    none: '',
    small: 'py-8 md:py-12',
    default: 'py-12 md:py-16 lg:py-20',
    large: 'py-16 md:py-24 lg:py-32',
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.section
      id={id}
      className={`${bgClasses[bgColor]} ${paddingClasses[paddingY]} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      {fullWidth ? (
        children
      ) : (
        <div className="container-custom">{children}</div>
      )}
    </motion.section>
  );
};

export default Section;
