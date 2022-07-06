import React from "react";
import { NavLink } from "react-router-dom";
// import { AiFillFacebook } from "react-icons/ai";
// import { RiContactsFill } from "react-icons/ri";
// import { SiGooglemaps } from "react-icons/si";

import classes from "./Footer.module.scss";

// import logoFrancilienne from "../medias/logo-francilienne.jpg";
import logoStoriste from "../medias/logo-storiste.jpg";
import logoQualibat from "../medias/logo-qualibat.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__content}>
        <div className={classes.footer__content__row}>
          {/* Column 1 */}
          <div className={classes.footer__content__row__column}>
            <h4>FRANCILIENNE DE MIROITERIE</h4>
            <ul>
              <li>16 rue de Berlin</li>
              <li>Montévrain, 77144</li>
              <li>01 60 36 19 59</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className={classes.footer__content__row__column}>
            <h4>Liens rapides</h4>
            <ul>
              <li>
                <NavLink exact to="/miroiterie">
                  Miroiterie
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/fenetres-portes">
                  Fenêtres et Portes
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/stores-volets">
                  Stores et Volets
                </NavLink>
              </li>
              <li>
                <NavLink exact to="verandas-pergolas">
                  Verandas et Pergolas
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/contact">
                  Nous contacter
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className={classes.footer__content__row__column}>
            <ul>
              <li>
                <img src={logoQualibat} alt="Logo Qualibat" />
              </li>
              <li>
                <img src={logoStoriste} alt="Logo Storiste de France" />
              </li>
              <li></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className={classes.footer__content__row}>
          <p className={classes.footer__content__row__columnSm}>
            &copy;{new Date().getFullYear()} FRANCILIENNE DE MIROITERIE | Tous
            droits réservés |&nbsp;
            <NavLink exact to="/conditions-generales-ventes">
              Conditions Générale de Ventes
            </NavLink>
            &nbsp;|&nbsp;
            <NavLink exact to="/mentions-legales">
              Mentions Légales
            </NavLink>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
