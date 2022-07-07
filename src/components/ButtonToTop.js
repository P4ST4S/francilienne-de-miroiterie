import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import classes from "./ButtonToTop.module.scss";

const ButtonToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const toggleButton = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setShowButton(true);
    } else if (scrolled <= 300) {
      setShowButton(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleButton);
  return (
    <FaArrowCircleUp
      className={classes.goTop}
      style={{ display: showButton ? "inline" : "none" }}
      onClick={scrollToTop}
    />
  );
};

export default ButtonToTop;
