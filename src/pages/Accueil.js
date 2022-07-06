import React from "react";
import Fade from "react-reveal/Fade";
import classes from "./Accueil.module.scss";
import banner from "../medias/home-banner.JPG";
import descriptionOne from "../medias/facade.jpg";
import descriptionTwo from "../medias/hermes.JPG";
import descriptionThree from "../medias/orly.jpg";
import descriptionFour from "../medias/robot-crop.JPEG";

const Accueil = () => {
  return (
    <div className={classes.home}>
      <div className={classes.home__content}>
        <Fade left ssrFadeout>
          <div className={classes.home__content__title}>
            <h2>
              Miroterie - Stores - Fenêtres - Volets - Vérandas - Pergolas
            </h2>
          </div>
          <div className={classes.home__content__banner}>
            <img src={banner} alt="Bannière de la page d'accueil du site" />
          </div>
        </Fade>
        <div className={classes.home__content__description__right}>
          <Fade right>
            <div>
              Proinde die funestis interrogationibus praestituto imaginarius
              iudex equitum resedit magister adhibitis aliis iam quae essent
              agenda praedoctis, et adsistebant hinc inde notarii, quid
              quaesitum esset, quidve responsum, cursim ad Caesarem perferentes,
              cuius imperio truci, stimulis reginae exsertantis aurem subinde
              per aulaeum, nec diluere obiecta permissi nec defensi periere
              conplures.
            </div>
            <img src={descriptionOne} alt="Façade du showroom" />
          </Fade>
        </div>
        <div className={classes.home__content__description__left}>
          <Fade left>
            <img src={descriptionTwo} alt="Chantier Hermes" />
            <div>
              Haec subinde Constantius audiens et quaedam referente Thalassio
              doctus, quem eum odisse iam conpererat lege communi, scribens ad
              Caesarem blandius adiumenta paulatim illi subtraxit, sollicitari
              se simulans ne, uti est militare otium fere tumultuosum, in eius
              perniciem conspiraret, solisque scholis iussit esse contentum
              palatinis et protectorum cum Scutariis et Gentilibus, et mandabat
              Domitiano, ex comite largitionum, praefecto ut cum in Syriam
              venerit, Gallum, quem crebro acciverat, ad Italiam properare
              blande hortaretur et verecunde.
            </div>
          </Fade>
        </div>
        <div className={classes.home__content__description__right}>
          <Fade right>
            <div>
              Quam quidem partem accusationis admiratus sum et moleste tuli
              potissimum esse Atratino datam. Neque enim decebat neque aetas
              illa postulabat neque, id quod animadvertere poteratis, pudor
              patiebatur optimi adulescentis in tali illum oratione versari.
              Vellem aliquis ex vobis robustioribus hunc male dicendi locum
              suscepisset; aliquanto liberius et fortius et magis more nostro
              refutaremus istam male dicendi licentiam. Tecum, Atratine, agam
              lenius, quod et pudor tuus moderatur orationi meae et meum erga te
              parentemque tuum beneficium tueri debeo.
            </div>
            <img src={descriptionThree} alt="Chantier Orly" />
          </Fade>
        </div>
        <div className={classes.home__content__description__left}>
          <Fade left>
            <img src={descriptionFour} alt="Robot de pose de la société" />
            <div>
              Haec subinde Constantius audiens et quaedam referente Thalassio
              doctus, quem eum odisse iam conpererat lege communi, scribens ad
              Caesarem blandius adiumenta paulatim illi subtraxit, sollicitari
              se simulans ne, uti est militare otium fere tumultuosum, in eius
              perniciem conspiraret, solisque scholis iussit esse contentum
              palatinis et protectorum cum Scutariis et Gentilibus, et mandabat
              Domitiano, ex comite largitionum, praefecto ut cum in Syriam
              venerit, Gallum, quem crebro acciverat, ad Italiam properare
              blande hortaretur et verecunde.
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
