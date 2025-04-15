import React from 'react';

const Container = ({
  children,
  className = '',
  size = 'default',
  padding = true,
}) => {
  // Size classes
  const sizeClasses = {
    small: 'max-w-4xl',
    default: 'max-w-7xl',
    large: 'max-w-screen-2xl',
    full: 'max-w-full',
  };
  
  // Padding classes
  const paddingClasses = padding ? 'px-4 sm:px-6 lg:px-8' : '';

  return (
    <div className={`mx-auto ${sizeClasses[size]} ${paddingClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
