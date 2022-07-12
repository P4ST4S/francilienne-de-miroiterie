import React from "react";
import { Fade } from "react-reveal";
import classes from "./Miroiterie.module.scss";

const Miroiterie = () => {
  return (
    <div className={classes.miroiterie}>
      <div className={classes.miroiterie__content}>
        <div className={classes.miroiterie__content__title}>
          <Fade right>
            <h2>Miroiteries</h2>
          </Fade>
        </div>
        <div className={classes.miroiterie__content__description__left}>
          <img
            src="medias/miroiterie/camille-claudel-palaiseau.JPG"
            alt="Avant chaniter Camille Claudel"
          />
          <p>
            Circa hos dies Lollianus primae lanuginis adulescens, Lampadi filius
            ex praefecto, exploratius causam Maximino spectante, convictus
            codicem noxiarum artium nondum per aetatem firmato consilio
            descripsisse, exulque mittendus, ut sperabatur, patris inpulsu
            provocavit ad principem, et iussus ad eius comitatum duci, de fumo,
            ut aiunt, in flammam traditus Phalangio Baeticae consulari cecidit
            funesti carnificis manu.
          </p>
        </div>
        <div className={classes.miroiterie__content__description__right}>
          <p>
            Quapropter a natura mihi videtur potius quam ab indigentia orta
            amicitia, applicatione magis animi cum quodam sensu amandi quam
            cogitatione quantum illa res utilitatis esset habitura. Quod quidem
            quale sit, etiam in bestiis quibusdam animadverti potest, quae ex se
            natos ita amant ad quoddam tempus et ab eis ita amantur ut facile
            earum sensus appareat. Quod in homine multo est evidentius, primum
            ex ea caritate quae est inter natos et parentes, quae dirimi nisi
            detestabili scelere non potest; deinde cum similis sensus exstitit
            amoris, si aliquem nacti sumus cuius cum moribus et natura
            congruamus, quod in eo quasi lumen aliquod probitatis et virtutis
            perspicere videamur.
          </p>
          <img
            src="medias/miroiterie/brassens-torcy.JPG"
            alt="Chantier Brassens Torcy"
          />
        </div>
        <div className={classes.miroiterie__content__description__left}>
          <Fade left>
            <img
              src="medias/fenetres-portes/paris-aéroport.JPG"
              alt="Résultat chantier Paris Aéroport"
            />
            <p>
              Duplexque isdem diebus acciderat malum, quod et Theophilum
              insontem atrox interceperat casus, et Serenianus dignus
              exsecratione cunctorum, innoxius, modo non reclamante publico
              vigore, discessit.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Miroiterie;
