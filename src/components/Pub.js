import React from "react";

import classes from "../styles/components/Pub.module.scss";

const Pub = (props) => {
  return props.trigger ? (
    <div className={classes.popup}>
      <div className={classes.popup__content}>
        <button
          className={classes.popup__content__closeBtn}
          onClick={() => props.setTrigger(false)}
        >
          Fermer
        </button>
        <img src="medias/BandeauPUB.jpg" alt="pop-up pub" />
      </div>
    </div>
  ) : (
    ""
  );
};

export default Pub;
