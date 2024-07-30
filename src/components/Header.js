import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "../styles/components/Header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
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
    if (size.width > 1350 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((content) => !content);
  };
  const contactClickHandler = () => {
    navigate("/contact");
    setMenuOpen(false);
  };
  const changeMenuHandler = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className={classes.headerBanner}>
        <img src="medias/logo-grand.JPG" alt="header logo" />
      </div>
      <header className={classes.header}>
        <div className={classes.header__content}>
          <h2 className={classes.header__content__logo}>
            FRANCILIENNE DE MIROITERIE
          </h2>

          <nav
            className={`${classes.header__content__nav} ${
              menuOpen ? classes.isMenu : ""
            }`}
          >
            <ul>
              <li>
                <NavLink exact to="/" onClick={changeMenuHandler}>
                  ACCUEIL
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/miroiterie" onClick={changeMenuHandler}>
                  MIROITERIE
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/fenetres-portes"
                  onClick={changeMenuHandler}
                >
                  FENÊTRES PORTES
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/stores-volets" onClick={changeMenuHandler}>
                  STORES VOLETS
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  exact
                  to="/verandas-pergolas"
                  onClick={changeMenuHandler}
                >
                  VERANDAS PERGOLAS
                </NavLink>
              </li> */}
            </ul>
            <button onClick={contactClickHandler}>Contact</button>
          </nav>
          <div className={classes.header__content__toggle}>
            {!menuOpen ? (
              <BiMenuAltRight onClick={menuToggleHandler} />
            ) : (
              <AiOutlineClose onClick={menuToggleHandler} />
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
