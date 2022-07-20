import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../styles/pages/NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={classes.nf}>
      <div className={classes.nf__content}>
        <NavLink to="/">
          <h1>
            Page introuvable
            <br /> Retourner à l'accueil
          </h1>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
