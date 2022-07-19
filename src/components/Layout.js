import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ButtonToTop from "./ButtonToTop";
import ScrollToTop from "./ScrollToTop";
import EldoReview from "./EldoReview";

import classes from "../styles/components/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <ButtonToTop />
      <EldoReview />
      <div className={classes.container}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
