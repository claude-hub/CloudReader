import React from 'react';
import Footer from '../footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
