import React from "react";

import classes from "./EldoReview.module.scss";

const EldoReview = () => {
  return (
    <div className={classes.eldo}>
      <a href="https://www.eldo.com/pro/francilienne_de_miroiterie">
        <iframe
          title="Review right"
          src="https://www.eldo.com/widget/artisan/80623/light"
        ></iframe>
      </a>
    </div>
  );
};

export default EldoReview;
