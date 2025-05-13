import React from 'react';

interface CompanyLogoProps {
  logoUrl?: string;
  companyName?: string;
  className?: string;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ 
  logoUrl, 
  companyName = "Your Company", 
  className = ""
}) => {
  return logoUrl ? (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src={logoUrl} 
        alt={`${companyName} logo`} 
        className="max-h-16 object-contain"
      />
    </div>
  ) : (
    <div className={`font-bold text-white text-3xl py-4 flex items-center justify-center ${className}`}>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
        {companyName}
      </span>
    </div>
  );
};

export default CompanyLogo;
