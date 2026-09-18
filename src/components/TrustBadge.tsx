import React from 'react';
import { ScrollText, Users } from 'lucide-react';

type TrustBadgeProps = {
  type: 'license' | 'clients';
  text: string;
};

const TrustBadge: React.FC<TrustBadgeProps> = ({ type, text }) => {
  return (
    <div className="flex items-center text-gray-700 gap-3 group">
      {type === 'license' ? (
        <ScrollText size={20} className="text-primary-500 group-hover:scale-110 transition-transform" />
      ) : (
        <Users size={20} className="text-primary-500 group-hover:scale-110 transition-transform" />
      )}
      <span className="text-sm md:text-base font-medium">{text}</span>
    </div>
  );
};

export default TrustBadge;