import React from "react";
import { Fade } from "react-reveal";
import classes from "../styles/pages/Miroiterie.module.scss";

const Miroiterie = () => {
  return (
    <div className={classes.miroiterie}>
      <div className={classes.miroiterie__content}>
        <div className={classes.miroiterie__content__title}>
          <Fade right>
            <p>
              <h2>Miroiterie</h2>
            </p>
          </Fade>
        </div>
        <div className={classes.miroiterie__content__description__left}>
          <Fade left>
            <img
              src="medias/miroiterie/vitre-et-store-carlot-meudon.jpeg"
              alt="Vitre et store Carlot Meudon"
            />
            <p>
              <h2>Vitrages et stores</h2>
            </p>
          </Fade>
        </div>
        <div className={classes.miroiterie__content__description__right}>
          <Fade right>
            <p>
              <h2>Verrière avec multiples fenêtres</h2>
            </p>
            <img
              src="medias/miroiterie/brassens-torcy.JPG"
              alt="Chantier Brassens Torcy"
            />
          </Fade>
        </div>
        <div className={classes.miroiterie__content__description__left}>
          <Fade left>
            <img
              src="medias/miroiterie/miroir-ar-bois-dynamo-dupin.JPG"
              alt="Miroir AR Dynamo"
            />
            <p>
              <h2>Miroir AR dynamo</h2>
            </p>
          </Fade>
        </div>
        <div className={classes.miroiterie__content__description__right}>
          <Fade right>
            <p>
              <h2>Verrière chantier Hermès</h2>
            </p>
            <img
              src="medias/miroiterie/verriere-gecina.jpeg"
              alt="Verrière chantier Hermes"
            />
          </Fade>
        </div>
        <div className={classes.miroiterie__content__description__left}>
          <Fade left>
            <img
              src="medias/miroiterie/paris-aéroport.JPG"
              alt="Résultat chantier Paris Aéroport"
            />
            <p>
              <h2>Chantier Aéroport de Paris</h2>
            </p>
          </Fade>
        </div>
        <div className={classes.miroiterie__content__description__right}>
          <Fade right>
            <p>
              <h2>Chantier Orly BUS</h2>
            </p>
            <img
              src="medias/miroiterie/orly-degats-bus.jpg"
              alt="Chantier Orly BUS"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Miroiterie;
