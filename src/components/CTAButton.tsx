import React from 'react';

type ButtonProps = {
  text: string;
  primary?: boolean;
  onClick?: () => void;
  className?: string;
};

const CTAButton: React.FC<ButtonProps> = ({ 
  text, 
  primary = false, 
  onClick,
  className = ''
}) => {
  const baseClasses = "px-8 py-4 rounded-xl font-semibold transition-all duration-200 text-white shadow-sm active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const primaryClasses = "bg-primary-600 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/25 focus-visible:ring-primary-500";
  const secondaryClasses = "bg-secondary-500 hover:bg-secondary-600 hover:shadow-lg hover:shadow-secondary-500/25 focus-visible:ring-secondary-500";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`}
    >
      {text}
    </button>
  );
};

export default CTAButton;