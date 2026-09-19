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
  const baseClasses = "relative overflow-hidden group px-6 py-3.5 rounded-lg font-semibold text-white transition-all duration-500 shadow-md active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-[length:200%_100%] bg-left hover:bg-right";
  const primaryClasses = "bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-500/30 focus-visible:ring-primary-500";
  const secondaryClasses = "bg-gradient-to-r from-secondary-500 via-secondary-400 to-primary-500 shadow-secondary-500/25 hover:shadow-xl hover:shadow-secondary-500/30 focus-visible:ring-secondary-500";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`}
    >
      <span className="relative z-10">{text}</span>
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none" />
    </button>
  );
};

export default CTAButton;