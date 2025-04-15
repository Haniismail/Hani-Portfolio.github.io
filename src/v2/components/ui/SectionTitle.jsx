import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({
  subtitle,
  title,
  description,
  centered = false,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  descriptionClassName = '',
  gradient = false,
}) => {
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div 
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
      variants={titleVariants}
    >
      {subtitle && (
        <motion.p 
          className={`text-sm md:text-base font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 ${subtitleClassName}`}
          variants={titleVariants}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.h2 
        className={`text-3xl md:text-4xl font-bold mb-4 ${gradient ? 'text-gradient' : ''} ${titleClassName}`}
        variants={titleVariants}
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p 
          className={`text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl ${centered ? 'mx-auto' : ''} ${descriptionClassName}`}
          variants={titleVariants}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
