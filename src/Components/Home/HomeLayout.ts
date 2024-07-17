import React from 'react';

interface HomeLayoutProps {
  title: string;
  isActive: boolean;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ title}) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default HomeLayout;