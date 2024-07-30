import React from "react";
import classes from "../styles/pages/Avis.module.scss";

const Avis = () => {
  return (
    <div className={classes.avis}>
      <a href="https://www.eldo.com/pro/francilienne_de_miroiterie">
        <iframe
          src="https://www.eldo.com/widget/artisan/80623/light"
          frameborder="0"
          height="120px"
          width="120px"
          style={{
            position: "absolute",
            left: "20px",
            bottom: "50px",
            zIndex: 100,
            opacity: 1,
          }}
          title="Unique Title"
          className="widget-001"
        ></iframe>
      </a>
    </div>
  );
};

export default Avis;
