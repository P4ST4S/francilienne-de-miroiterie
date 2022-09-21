import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import classes from "../styles/pages/ContactMentions.module.scss";

const ContactMentions = () => {
  const navigate = useNavigate();

  const contactClickHandler = () => {
    navigate("/contact");
  };
  return (
    <div className={classes.mentions}>
      <div className={classes.mentions__content}>
        <div className={classes.mentions__content__title}>
          <button onClick={contactClickHandler}>Retour</button>
          <h1>Mentions formulaire de contact</h1>
        </div>
        <div className={classes.mentions__content__text}>
          <p>
            Vos données à caractère personnel sont traitées par la société
            Francilienne de Miroiterie en sa qualité de responsable de
            traitement, aux fins d’information des utilisateurs. A défaut de
            renseignement des champs ayant un caractère obligatoire, votre
            demande ne pourrait pas être prise en compte. Vos données sont
            uniquement destinées à la société Francilienne de Miroiterie, ainsi
            qu’aux prestataires intervenant pour notre compte dans le cadre des
            finalités susvisées. Elles seront conservées conformément à la
            législation en vigueur.
          </p>
          <br />
          <p>
            Conformément à la règlementation, vous bénéficiez d’un droit
            d’interrogation, d’accès, de rectification, d’effacement et de
            portabilité de vos données, ainsi que du droit d’obtenir la
            limitation de leur traitement et d’un droit d’opposition au
            traitement de vos données, ainsi qu’à la prospection. Vous disposez
            également du droit de définir des directives relatives à la
            conservation, à l'effacement et à la communication de vos données
            après votre décès. Ces droits s’exercent auprès de le société
            Francilienne de Miroiterie, par un e-mail à
            franciliennedemiroiterie@orange.fr ou postal Francilienne de
            Miroiterie, 16 avenue de Berlin, 77144 Monterain. Vous disposez
            enfin de la possibilité d’introduire une réclamation auprès de la
            Commission Nationale de l’informatique et des Libertés (CNIL).{" "}
          </p>
          <br />
          <p>
            <NavLink exact to="/politique-des-donnees-personnelles">
              Vous pouvez lire notre politique de confidentialité
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMentions;
