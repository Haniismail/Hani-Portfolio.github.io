import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hover = true,
  onClick,
  padding = 'default',
}) => {
  // Padding classes
  const paddingClasses = {
    none: '',
    small: 'p-4',
    default: 'p-6',
    large: 'p-8',
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: { 
      y: -5,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: { duration: 0.3 }
    },
    tap: { 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md ${paddingClasses[padding]} ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={hover ? "hover" : undefined}
      whileTap={hover ? "tap" : undefined}
      viewport={{ once: true, amount: 0.1 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;
