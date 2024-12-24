import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
}) => {
  const variants = {
    primary: 'bg-primary-100 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300',
    secondary: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
    outline: 'border border-primary-600 text-primary-600',
  };

  return (
    <span className={`
      inline-flex items-center px-2 py-1 text-xs font-medium rounded-full
      ${variants[variant]}
      ${className}
    `}>
      {children}
    </span>
  );
};