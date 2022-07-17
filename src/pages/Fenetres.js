import React from "react";
import { Fade } from "react-reveal";
import classes from "./Fenetres.module.scss";

const Fenetres = () => {
  return (
    <div className={classes.fenetres}>
      <div className={classes.fenetres__content}>
        <div className={classes.fenetres__content__title}>
          <Fade left>
            <h2>Fenêtres | Portes-Fenêtres | Portes</h2>
          </Fade>
        </div>
        <div className={classes.fenetres__content__description__right}>
          <Fade right>
            <p>
              <h2>Coulissant aluminium d'angle Elance</h2>
            </p>
            <img
              src="medias/fenetres-portes/coulissant-alu-d-angle-elance-jpg.jpg"
              alt="Résultat chantier Camille Claude Palaiseau"
            />
          </Fade>
        </div>
        <div className={classes.fenetres__content__description__left}>
          <Fade left>
            <img
              src="medias/fenetres-portes/fenetrealu-1-jpg.jpg"
              alt="Résultat chantier Brassens Torcy"
            />
            <p>
              <h2>Fenêtres aluminium rouge</h2>
            </p>
          </Fade>
        </div>
        <div className={classes.fenetres__content__description__right}>
          <Fade right>
            <p>
              <h2>Marquise en verre, chateau des Charmettes</h2>
            </p>
            <img
              src="medias/fenetres-portes/chateau-des-charmettes.JPG"
              alt="Résultat chantier chateau des Charmettes"
            />
          </Fade>
        </div>
        <div className={classes.fenetres__content__description__left}>
          <Fade left>
            <img
              src="medias/fenetres-portes/influence-1-jpg.jpg"
              alt="Fenêtres Influence blanches"
            />
            <p>
              <h2>Fenêtres Influence blanches</h2>
            </p>
          </Fade>
        </div>
        <div className={classes.fenetres__content__description__right}>
          <Fade right>
            <p>
              <h2>Fenêtres chantier Ecole des Pointes</h2>
            </p>
            <img
              src="medias/fenetres-portes/ecole-des-pointes.jpg"
              alt="Résultat chantier Ecole des Pointes"
            />
          </Fade>
        </div>
        <div className={classes.fenetres__content__description__left}>
          <Fade left>
            <img
              src="medias/fenetres-portes/lemonnier-sas-effage.jpg"
              alt="Résultat chantier Lemonnier SAS Eiffage"
            />
            <p>
              <h2>Porte vitré Lemonnier SAS Eiffage</h2>
            </p>
          </Fade>
        </div>
        <div className={classes.fenetres__content__description__right}>
          <Fade right>
            <p>
              <h2>Marquise en verre mairie Thorigny</h2>
            </p>
            <img
              src="medias/fenetres-portes/marquise-thorigny.jpg"
              alt="Résultat chantier marquise mairie Thorigny"
            />
          </Fade>
        </div>

        <div className={classes.fenetres__content__description__left}>
          <Fade right>
            <img
              src="medias/fenetres-portes/porte-alu.JPG"
              alt="Résultat chantier porte en alu"
            />
            <p>
              <h2>Porte aluminium grise</h2>
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Fenetres;
