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
        {/*Insert pub content here*/}
        <h2>PUB</h2>
        <p>Pub content here</p>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Pub;
