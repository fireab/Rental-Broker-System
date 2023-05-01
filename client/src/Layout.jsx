  // import React from 'react';

  import Footer from "./components/common/Footer";
  import Navbar from "./components/common/Navbar";

  
  function Layout({ children }) {
    return (
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  }

  export default Layout;
