import React from "react";
import { Fade } from "react-reveal";
import classes from "../styles/pages/Verandas.module.scss";

const Verandas = () => {
  return (
    <div className={classes.verandas}>
      <div className={classes.verandas__content}>
        <div className={classes.verandas__content__title}>
          <Fade left>
            <p>
              <h2>Vérandas | Pergolas</h2>
            </p>
          </Fade>
        </div>
        <div className={classes.verandas__content__description__right}>
          <p>
            <h2>Poolhouse Layla</h2>
          </p>
          <img
            src="/medias/verandas-pergolas/Layla_ (1).jpg"
            alt="Poolhouse Layla Veranco"
          />
        </div>
        <div className={classes.verandas__content__description__left}>
          <Fade left>
            <img
              src="/medias/verandas-pergolas/A_VERANCO_AMBRE_ (4).jpg"
              alt="Pergolas Ambre Veranco"
            />
            <p>
              <h2>Pergola Ambre</h2>
            </p>
          </Fade>
        </div>
        <div className={classes.verandas__content__description__right}>
          <Fade right>
            <p>
              <h2>Véranda Borneo</h2>
            </p>
            <img
              src="/medias/verandas-pergolas/A_VERANCO_BORNEO_ (9).jpg"
              alt="Véranda Borneo Veranco"
            />
          </Fade>
        </div>
        <div className={classes.verandas__content__description__left}>
          <Fade left>
            <img
              src="/medias/verandas-pergolas/A_VERANCO_CARPORT_ (6).jpg"
              alt="Carport Veranco"
            />
            <p>
              <h2>Carport</h2>
            </p>
          </Fade>
        </div>
        <div className={classes.verandas__content__description__right}>
          <Fade right>
            <p>
              <h2>Pergola Creation Veranco</h2>
            </p>
            <img
              src="/medias/verandas-pergolas/A_VERANCO_CREATIONS PERGOLAS  (2).jpg"
              alt="Pergola Creation Veranco"
            />
          </Fade>
        </div>
        <div className={classes.verandas__content__description__left}>
          <Fade left>
            <img
              src="/medias/verandas-pergolas/E_VERANCO_CREATIONS_VERANDA_ (43).jpg"
              alt="Véranda Creation Veranco"
            />
            <p>
              <h2>Véranda Creation Veranco</h2>
            </p>
          </Fade>
        </div>
        <div className={classes.verandas__content__description__right}>
          <Fade right>
            <p>
              <h2>Pergola Creation Veranco 2</h2>
            </p>
            <img
              src="/medias/verandas-pergolas/B_VERANCO_CREATIONS PERGOLAS (15).jpg"
              alt="Pergola Creation Veranco"
            />
          </Fade>
        </div>
        <div className={classes.verandas__content__description__left}>
          <Fade left>
            <img
              src="/medias/verandas-pergolas/C_VERANCO_VERANDA-PERGOLA_ (28).jpg"
              alt="Véranda-Pergola Veranco"
            />
            <p>
              <h2>Véranda-Pergola</h2>
            </p>
          </Fade>
        </div>
        <div className={classes.verandas__content__description__right}>
          <Fade right>
            <p>
              <h2>Pergola Evolutive</h2>
            </p>
            <img
              src="/medias/verandas-pergolas/B_VERANCO_EVOLUTIVE_ (22).jpg"
              alt="Pergola Evolutive"
            />
          </Fade>
        </div>
        <div className={classes.verandas__content__description__left}>
          <Fade left>
            <img
              src="/medias/verandas-pergolas/B_VERANCO_JADE_ (13).jpg"
              alt="Pergola Jade Veranco"
            />
            <p>
              <h2>Pergola Jade</h2>
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Verandas;
