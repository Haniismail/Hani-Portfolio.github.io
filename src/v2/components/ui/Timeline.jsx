import React from 'react';
import { motion } from 'framer-motion';

const Timeline = ({ children }) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
      <div className="space-y-12">
        {children}
      </div>
    </div>
  );
};

const TimelineItem = ({
  date,
  title,
  subtitle,
  description,
  icon,
  position = 'left',
  className = '',
}) => {
  // Determine if item is on left or right side (for desktop)
  const isLeft = position === 'left';
  
  // Animation variants
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: isLeft ? -20 : 20 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      className={`relative ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={itemVariants}
    >
      {/* Desktop layout */}
      <div className="hidden md:flex items-center">
        <div className={`w-1/2 ${isLeft ? 'pr-12 text-right' : 'pl-12'}`}>
          {isLeft ? (
            <>
              <h3 className="text-xl font-bold">{title}</h3>
              {subtitle && <p className="text-gray-600 dark:text-gray-400 font-medium">{subtitle}</p>}
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mt-1">{date}</p>
              {description && <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>}
            </>
          ) : (
            <p className="text-indigo-600 dark:text-indigo-400 font-medium">{date}</p>
          )}
        </div>
        
        {/* Circle in the middle */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center text-white z-10">
          {icon}
        </div>
        
        <div className={`w-1/2 ${isLeft ? 'pl-12' : 'pr-12 text-right'}`}>
          {!isLeft ? (
            <>
              <h3 className="text-xl font-bold">{title}</h3>
              {subtitle && <p className="text-gray-600 dark:text-gray-400 font-medium">{subtitle}</p>}
              {description && <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>}
            </>
          ) : (
            <p className="text-indigo-600 dark:text-indigo-400 font-medium">{date}</p>
          )}
        </div>
      </div>
      
      {/* Mobile layout */}
      <div className="md:hidden flex">
        <div className="absolute left-0 transform -translate-x-1/2 w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center text-white z-10">
          {icon}
        </div>
        <div className="pl-10">
          <h3 className="text-xl font-bold">{title}</h3>
          {subtitle && <p className="text-gray-600 dark:text-gray-400 font-medium">{subtitle}</p>}
          <p className="text-indigo-600 dark:text-indigo-400 font-medium mt-1">{date}</p>
          {description && <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>}
        </div>
      </div>
    </motion.div>
  );
};

Timeline.Item = TimelineItem;

export default Timeline;
