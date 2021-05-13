import React, { useEffect } from "react";
import AutoScrollTop from "../AutoScrollTop";
import Navbar from "./Header/Navbar";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
  return (
    <>
      <AutoScrollTop />
      <Navbar />
      {children}
      <ScrollToTop />
    </>
  );
};

export default Layout;
