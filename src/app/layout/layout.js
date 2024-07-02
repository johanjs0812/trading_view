import React from 'react';
import Header from '../../components/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      {/* Add other shared UI components here */}
    </div>
  );
};

export default Layout;
