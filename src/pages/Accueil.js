import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import HomeLink from "../components/HomeLink";
import classes from "../styles/pages/Accueil.module.scss";
import Video from "../components/Video";
import Pub from "../components/Pub";

const Accueil = () => {
  const [onMobile, setOnMobile] = useState(false);
  const [buttonPub, setButtonPub] = useState(true);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (size.width > 650) {
      setOnMobile(false);
    } else {
      setOnMobile(true);
    }
  }, [size.width, onMobile]);
  return (
    <div className={classes.home}>
      <Pub trigger={buttonPub} setTrigger={setButtonPub} />
      <div className={classes.home__content}>
        <Fade left>
          <div className={classes.home__content__title}>
            <p>
              {!onMobile ? (
                <h2>
                  MIROITERIE | STORES | FENÊTRES | VOLETS | VÉRANDAS | PERGOLAS
                </h2>
              ) : (
                <h2>MIROITERIE STORES FENÊTRES VOLETS VÉRANDAS PERGOLAS</h2>
              )}
              POSE SUR TOUTE LA RÉGION ÎLE DE FRANCE
            </p>
          </div>
          <div className={classes.home__content__banner}>
            <img
              src="medias/banner.jpg"
              alt="Bannière de la page d'accueil du site"
            />
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
              et c’est en mai 1998 que David ROSPARS en devient le gérant.
              Installée depuis sa création jusqu’en 2007 au Perreux dans le Val
              de Marne, la Société s’installe à Marne La Vallée dans des locaux
              plus vastes et mieux adaptés à son activité.
            </p>
            <img src="medias/facade.jpg" alt="Façade du showroom" />
          </Fade>
        </div>
        <div className={classes.home__content__description__left}>
          <Fade left>
            <img src="medias/hermes.JPG" alt="Chantier Hermes" />
            <p>
              <h4>Clientèle :</h4>
              Notre clientèle est constituée à 70% d’activité tertiaire et
              grands comptes. Nous travaillons depuis de très nombreuses années
              avec les Aéroports de Paris et plus précisément sur les
              plateformes d’Orly. Nos techniciens maîtrisent parfaitement les
              contraintes liées à l’activité en milieu aéroportuaires tels que
              la sécurité, le passage en zones réservées ou sur pistes. D’autre
              part, nous sommes aussi référencés chez les mainteneurs Sodexo et
              Engie et donc présents sur une grande variété de sites.
              <br /> Autres référencements de ces trois dernières années : le
              gestionnaire de patrimoine Gecina et l’enseigne de luxe Hermès.
              <br />
              Nous opérons aussi pour la Région ile de France sur les unités
              s’occupant des travaux de maintenance des Lycées pour lesquels
              nous avons su développer des process adaptés comme par exemple les
              portes d’accès à usage intensif. Depuis 2009, une nouvelle branche
              axée sur l’activité auprès de particuliers dans le domaine de la
              fermeture (fenêtres, stores, volets), a permis d’affirmer notre
              notoriété vers le grand public.
            </p>
          </Fade>
        </div>
        <div className={classes.home__content__description__right}>
          <Fade right>
            <p>
              <h4>Où opérons-nous ?</h4>
              Nous opérons sur un large périmètre couvrant toute l’île de
              France, et sommes ponctuellement amenés à répondre pour des
              opérations à un niveau national.
              <br />A 5kms de Disney Land Paris Proximité immédiate Autoroute A4
              / Francilienne A104 / A1
            </p>
            <img src="medias/maps.jpg" alt="Carte Ile de France" />
          </Fade>
        </div>
        <div className={classes.home__content__description__left}>
          <Fade left>
            <img
              src="medias/robot-crop.JPEG"
              alt="Robot de pose de la société"
            />
            <p>
              <h4>Appareils de levage</h4>
              SL 608: appareil de levage électrique avec une capacité de 600
              kilogrammes, jusqu’à 4,20 mètres de hauteur, destiné à des usages
              intérieurs et extérieurs, sans trace de pollution.
            </p>
          </Fade>
        </div>
        <Video
          width="100%"
          height="auto"
          source="medias/toutes-gammes-mp4.mp4"
        />
        <Fade right>
          <div className={classes.home__content__title}>
            <h3>Nos certifications et habilitations</h3>
          </div>
          <div className={classes.home__content__qual}>
            <a
              href="/medias/certif-qualibat-rge.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/medias/logo-qualibat-rge.png"
                alt="logo certification qualibat rge"
              />
            </a>
            <a
              href="/medias/habilitation-amiante.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/medias/logo-amiante.png"
                alt="logo habilitation amiante"
              />
            </a>
            <a
              href="/medias/attestation-ECHAFAUDAGE.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/medias/logo-echafaudage.jpg"
                alt="logo attestation echafaudage"
              />
            </a>
            <a
              href="/medias/Habilitation-Electrique.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/medias/logo-habilitation-electrique-300x300.png"
                alt="logo habilitation electrique"
              />
            </a>
          </div>
        </Fade>
        <Fade bottom>
          <div className={classes.home__content__title}>
            <h3>Nos produits</h3>
          </div>
          <HomeLink />
        </Fade>
      </div>
    </div>
  );
};

export default Accueil;
