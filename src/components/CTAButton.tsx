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
  const baseClasses = "px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-white shadow-md hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 active:shadow-md relative overflow-hidden";
  const primaryClasses = "bg-gradient-to-r from-[#29702A] to-[#F7921E] hover:from-[#225621] hover:to-[#E68117] shadow-primary-500/20 hover:shadow-primary-500/30";
  const secondaryClasses = "bg-gradient-to-r from-[#F7921E] to-[#F7A547] hover:from-[#E68117] hover:to-[#F7921E] shadow-secondary-500/20 hover:shadow-secondary-500/30";
  
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className} group`}
    >
      {text}
      <div className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
    </button>
  );
};

export default CTAButton;