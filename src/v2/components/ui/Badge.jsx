import React from 'react';
import { motion } from 'framer-motion';

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon,
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-1',
    lg: 'text-base px-3 py-1.5',
  };
  
  // Variant classes
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    primary: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300',
    secondary: 'bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-300',
    success: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
    danger: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300',
  };
  
  // Animation variants
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
  };

  return (
    <motion.span
      className={`inline-flex items-center font-medium rounded-full ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      variants={badgeVariants}
      initial="hidden"
      animate="visible"
    >
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </motion.span>
  );
};

export default Badge;
