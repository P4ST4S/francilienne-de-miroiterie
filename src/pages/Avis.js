import React from "react";
import classes from "./Avis.module.scss";

const Avis = () => {
  return (
    <div className={classes.avis}>
      <a href="https://www.eldo.com/pro/francilienne_de_miroiterie">
        <iframe
          title="Review page"
          src="https://www.eldo.com/iframe/artisan/80623"
        ></iframe>
      </a>
    </div>
  );
};

export default Avis;
