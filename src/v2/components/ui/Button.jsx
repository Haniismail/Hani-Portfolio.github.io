import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  disabled = false,
  className = '',
  icon,
  iconPosition = 'right',
  ...props
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500 disabled:bg-indigo-300 dark:disabled:bg-indigo-800',
    secondary: 'bg-pink-600 hover:bg-pink-700 text-white focus:ring-pink-500 disabled:bg-pink-300 dark:disabled:bg-pink-800',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-indigo-500 disabled:border-indigo-300 disabled:text-indigo-300 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-gray-900 dark:disabled:border-indigo-800 dark:disabled:text-indigo-800',
    ghost: 'text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500 disabled:text-indigo-300 dark:text-indigo-400 dark:hover:bg-gray-800 dark:disabled:text-indigo-800',
  };
  
  // Combine classes
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  // Button content with icon
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );
  
  // Render as motion component with hover animation
  const MotionComponent = motion.button;
  
  // Render as link if href or to is provided
  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </motion.a>
    );
  }
  
  if (to) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to={to}
          className={classes}
          {...props}
        >
          {content}
        </Link>
      </motion.div>
    );
  }
  
  // Otherwise render as button
  return (
    <MotionComponent
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      {...props}
    >
      {content}
    </MotionComponent>
  );
};

export default Button;
