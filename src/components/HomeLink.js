import React from "react";
import { NavLink } from "react-router-dom";

import { MdStorefront } from "react-icons/md";
import { TbWindow } from "react-icons/tb";
// import { BsFillDoorClosedFill } from "react-icons/bs";
import { GiMirrorMirror } from "react-icons/gi";

import classes from "../styles/components/HomeLink.module.scss";

const HomeLink = () => {
  return (
    <div className={classes.homelink}>
      <div className={classes.homelink__content}>
        <div className={classes.homelink__content__icons}>
          <ul>
            <li>
              <NavLink exact to="/miroiterie">
                <GiMirrorMirror />
              </NavLink>
              <h5>MIROITERIE</h5>
              <h5>&nbsp;</h5>
            </li>
            <li>
              <NavLink exact to="/fenetres-portes">
                <TbWindow />
              </NavLink>
              <h5>FENÊTRES</h5>
              <h5>PORTES</h5>
            </li>
            <li>
              <NavLink exact to="/stores-volets">
                <MdStorefront />
              </NavLink>
              <h5>STORES</h5>
              <h5>VOLETS</h5>
            </li>
            {/* <li>
              <NavLink exact to="/">
                <BsFillDoorClosedFill />
              </NavLink>
              <h5>VERANDAS</h5>
              <h5>PERGOLAS</h5>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeLink;
