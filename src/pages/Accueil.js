import React from "react";
import Fade from "react-reveal/Fade";
import classes from "./Accueil.module.scss";
import banner from "../medias/home-banner.JPG";
import descriptionOne from "../medias/facade.jpg";
import descriptionTwo from "../medias/hermes.JPG";
import descriptionThree from "../medias/maps.png";
import descriptionFour from "../medias/robot-crop.JPEG";
import HomeLink from "../components/HomeLink";
import ButtonToTop from "../components/ButtonToTop";

const Accueil = () => {
  return (
    <div className={classes.home}>
      <div className={classes.home__content}>
        <ButtonToTop />
        <Fade left>
          <div className={classes.home__content__title}>
            <h2>
              Miroterie | Stores | Fenêtres | Volets | Vérandas | Pergolas
            </h2>
          </div>
          <div className={classes.home__content__banner}>
            <img src={banner} alt="Bannière de la page d'accueil du site" />
          </div>
          <div className={classes.home__content__title}>
            <h3>Qui sommes-nous ?</h3>
          </div>
        </Fade>
        <div className={classes.home__content__description__right}>
          <Fade right>
            <p>
              <h4>Historique :</h4>
              La Société FRANCILIENNE de MIROITERIE a été créée en juillet 1988,
              et c’est en mai 1998 que Monsieur David ROSPARS en devient le
              gérant. Installée depuis sa création jusqu’à 2007 au Perreux dans
              le Val de Marne, la Société s’installe à Marne La Vallée dans des
              locaux plus vastes et mieux adaptés à notre activité.
            </p>
            <img src={descriptionOne} alt="Façade du showroom" />
          </Fade>
        </div>
        <div className={classes.home__content__description__left}>
          <Fade left>
            <img src={descriptionTwo} alt="Chantier Hermes" />
            <p>
              <h4>Clientèle :</h4>
              Notre clientèle est constituée à 70% d’activité tertiaire et
              grands comptes. Nous travaillons depuis de très nombreuses années
              avec Aéroports de Paris et plus précisément sur les plates formes
              d’Orly. Nos techniciens maîtrisent parfaitement les contraintes
              liées à l’activité en milieux aéroportuaires tels la sécurité, le
              passage en zones réservées ou sur pistes. D’autre part, nous
              sommes aussi référencés chez les mainteneurs Sodexo et Engie qui
              nous font travailler sur une grande variété de sites.
              <br /> Autres référencements de ces trois dernières années, le
              gestionnaire de patrimoine Gécina et l’enseigne de luxe Hermes.
              <br />
              Nous opérons aussi pour la Région ile de France sur les unités
              s’occupant des travaux de maintenance des Lycées, et nous avons pu
              développer des process adaptés concernant les portes d’accès
              notamment à usage intensif. Développée depuis 2009, une branche
              orientée sur l’activité auprès de particulier dans le registre de
              la fermeture (fenêtres, stores, volets) a permis de développer
              notre notoriété vers le grand public.
            </p>
          </Fade>
        </div>
        <div className={classes.home__content__description__right}>
          <Fade right>
            <p>
              <h4>Où opérons nous ?</h4>
              Nous opérons sur un rayon couvrant toute l’île de France, et
              sommes amenés à répondre ponctuellement à des opérations au niveau
              national.
              <br /> A 5kms de Disney Land Paris Proximité immédiate Autoroute
              A4 / Francilienne A104 / A1 Chantiers ponctuels au niveau national
            </p>
            <img src={descriptionThree} alt="Carte Ile de France" />
          </Fade>
        </div>
        <div className={classes.home__content__description__left}>
          <Fade left>
            <img src={descriptionFour} alt="Robot de pose de la société" />
            <p>
              <h4>Appareils de levage</h4>
              SL 608: appareil de levage électrique avec une capacité de 600
              kilogrammes, jusqu’à 4,20 mètres de hauteur. Pour des usages
              intérieurs et extérieurs. Utilisation sans aucune pollution.
            </p>
          </Fade>
        </div>
        <Fade bottom>
          <HomeLink />
        </Fade>
      </div>
    </div>
  );
};

export default Accueil;
