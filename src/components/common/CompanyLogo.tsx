import React from 'react';

interface CompanyLogoProps {
  companyName: string;
  size?: number;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({ companyName, size = 32 }) => {
  return (
    <img
      src={`https://logo.clearbit.com/${companyName.toLowerCase().replace(/\s+/g, '')}.com`}
      alt={`${companyName} logo`}
      className="rounded-full object-contain bg-white"
      style={{ width: size, height: size }}
      onError={(e) => {
        e.currentTarget.src = `https://via.placeholder.com/${size}`;
      }}
    />
  );
};