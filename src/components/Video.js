import React from "react";
import ReactPlayer from "react-player";
import classes from "../styles/components/Video.module.scss";

const Video = (props) => {
  return (
    <div className={classes.video}>
      <div className={classes.video__content}>
        <ReactPlayer
          width={props.width}
          height={props.height}
          url={props.source}
          loop
          playing
          muted
        />
      </div>
    </div>
  );
};

export default Video;
