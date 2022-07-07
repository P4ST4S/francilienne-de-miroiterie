import React from "react";
import Fade from "react-reveal/Fade";
import Form from "../components/Form";
import classes from "./Contact.module.scss";

import { SiGooglemaps } from "react-icons/si";
import { GrContactInfo } from "react-icons/gr";

const Contact = () => {
  return (
    <div className={classes.Contact}>
      <div className={classes.contact__content}>
        <h1>Nous contacter</h1>
        <Form />
        <Fade left>
          <div className={classes.contact__content__title}>
            <h3>Nos coordonées</h3>
            <GrContactInfo className={classes.contact__content__title__cont} />
          </div>
          <ul>
            <li>Email: david.rospars@orange.Fr</li>
            <li>Téléphone: 01 60 36 19 59</li>
          </ul>
          <div className={classes.contact__content__title}>
            <h3>Nous trouver</h3>
            <SiGooglemaps className={classes.contact__content__title__img} />
          </div>
          <ul>
            <li>16 rue de Berlin</li>
            <li>Montévrain, 77144</li>
          </ul>
          <iframe
            className={classes.maps}
            title="Emplecement Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.053698313666!2d2.7528227956508875!3d48.857186413245884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e61cc5dfb59337%3A0xe054a4a2c9aef14a!2sFrancilienne%20de%20Miroiterie!5e0!3m2!1sfr!2sfr!4v1656938608978!5m2!1sfr!2sfr"
            allowfullscreen=""
            width="60%"
            height={500}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </Fade>
      </div>
    </div>
  );
};

export default Contact;
