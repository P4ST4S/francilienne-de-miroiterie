import React from "react";
import { Fade } from "react-reveal";
import Video from "../components/Video";
import classes from "../styles/pages/Stores.module.scss";

const Stores = () => {
  return (
    <div className={classes.stores}>
      <div className={classes.stores__content}>
        <div className={classes.stores__content__title}>
          <Fade left>
            <h2>Stores | Volets</h2>
          </Fade>
        </div>

        <div className={classes.stores__content__description__right}>
          <Fade right>
            <p>
              <h2>Store banne Vogue 3 bras à leds</h2>
            </p>
            <img
              src="medias/stores-volets/banne-vogue-3-bras-a-leds-jph-1252-jpg.jpg"
              alt="Store banne vogue 3 bras a leds, Storiste de France"
            />
          </Fade>
        </div>
        <div className={classes.stores__content__description__left}>
          <Fade left>
            <img
              src="medias/stores-volets/CHIUStTibault.JPG"
              alt="Store Saint Thibault"
            />
            <p>
              <h2>Store vertical et horizontal sur vérandas</h2>
            </p>
          </Fade>
        </div>
        <div className={classes.stores__content__description__image}>
          <Fade right>
            <img
              src="medias/stores-volets/volet-gplan2.jpg"
              alt="Store Avantage gros plan 1"
            />
            <img
              src="medias/stores-volets/volet-gplan1.JPG"
              alt="Store Avantage gros plan 2"
            />
          </Fade>
        </div>
        <div className={classes.stores__content__description__right}>
          <Fade right>
            <p>
              <h2>Stores Avantage</h2>
            </p>
            <img
              src="medias/stores-volets/volet.jpg"
              alt="Store bateaux verticaux, Storiste de France"
            />
          </Fade>
        </div>
        <div className={classes.stores__content__description__left}>
          <Fade left>
            <img
              src="medias/stores-volets/enroulement-clipnroll-1-jpg.jpg"
              alt="Store Saint Thibault"
            />
            <p>
              <h2>Stores à enroulement clip'n'roll</h2>
            </p>
          </Fade>
        </div>
        <Video
          width="50%"
          height="auto"
          source="medias/stores-volets/sdf-stores-dexterieur-v1-mp4.mp4"
        />
      </div>
    </div>
  );
};

export default Stores;
