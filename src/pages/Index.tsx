import React from 'react';
import LoginPage from '@/components/LoginPage';

const Index = () => {
  // You can dynamically set the company logo and name here
  // For example: fetch from API, environment variables, etc.
  const companyLogo = undefined; // Example: "public/your-logo.png" - or update with actual logo path
  const companyName = "UDM Enterprises"; // Updated company name
  
  return (
    <LoginPage 
      logoUrl={companyLogo}
      companyName={companyName}
    />
  );
};

export default Index;
