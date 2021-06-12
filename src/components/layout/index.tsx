import React from 'react';
import Footer from '../footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className='size18'>search</div>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
