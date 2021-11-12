import React from 'react';
import Navbar from '../components/common/Menu';

const Layout = ({ children }) => {
  return(
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout;