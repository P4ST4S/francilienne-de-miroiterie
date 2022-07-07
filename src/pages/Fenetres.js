import React from "react";
import ButtonToTop from "../components/ButtonToTop";
import classes from "./Fenetres.module.scss";
import { Fade } from "react-reveal";

import picOne from "../medias/fenetres-portes/camille-claudel-palaiseau.JPG";
import picTwo from "../medias/fenetres-portes/brassens-torcy.JPG";
import picThree from "../medias/fenetres-portes/chateau-des-charmettes.JPG";
import picFour from "../medias/fenetres-portes/claudel-aplaiseau.jpg";
import picFive from "../medias/fenetres-portes/ecole-des-pointes.jpg";
import picSix from "../medias/fenetres-portes/lemonnier-sas-effage.jpg";
import picSeven from "../medias/fenetres-portes/marquise-thorigny.jpg";
import picEight from "../medias/fenetres-portes/paris-aéroport.JPG";
import picNine from "../medias/fenetres-portes/porte-alu.JPG";

const Fenetres = () => {
  return (
    <div className={classes.fenetres}>
      <div className={classes.fenetres__content}>
        <ButtonToTop />
        <div className={classes.fenetres__content__title}>
          <Fade left>
            <h2>Fenêtres | Portes-Fenêtres | Portes</h2>
          </Fade>
        </div>
        <div className={classes.fenetres__content__description__right}>
          <Fade right>
            <p>
              Nec minus feminae quoque calamitatum participes fuere similium.
              nam ex hoc quoque sexu peremptae sunt originis altae conplures,
              adulteriorum flagitiis obnoxiae vel stuprorum. inter quas notiores
              fuere Claritas et Flaviana, quarum altera cum duceretur ad mortem,
              indumento, quo vestita erat, abrepto, ne velemen quidem secreto
              membrorum sufficiens retinere permissa est. ideoque carnifex nefas
              admisisse convictus inmane, vivus exustus est.
            </p>
            <img
              src={picOne}
              alt="Résultat chantier Camille Claude Palaiseau"
            />
          </Fade>
        </div>
        <div className={classes.fenetres__content__description__left}>
          <Fade left>
            <img src={picTwo} alt="Résultat chantier Brassens Torcy" />
            <p>
              Et olim licet otiosae sint tribus pacataeque centuriae et nulla
              suffragiorum certamina set Pompiliani redierit securitas temporis,
              per omnes tamen quotquot sunt partes terrarum, ut domina
              suscipitur et regina et ubique patrum reverenda cum auctoritate
              canities populique Romani nomen circumspectum et verecundum.
            </p>
          </Fade>
        </div>
        <div className={classes.fenetres__content__description__right}>
          <Fade right>
            <p>
              Apud has gentes, quarum exordiens initium ab Assyriis ad Nili
              cataractas porrigitur et confinia Blemmyarum, omnes pari sorte
              sunt bellatores seminudi coloratis sagulis pube tenus amicti,
              equorum adiumento pernicium graciliumque camelorum per diversa se
              raptantes, in tranquillis vel turbidis rebus: nec eorum quisquam
              aliquando stivam adprehendit vel arborem colit aut arva subigendo
              quaeritat victum, sed errant semper per spatia longe lateque
              distenta sine lare sine sedibus fixis aut legibus: nec idem
              perferunt diutius caelum aut tractus unius soli illis umquam
              placet.
            </p>
            <img
              src={picThree}
              alt="Résultat chantier chateau des Charmettes"
            />
          </Fade>
        </div>
        <div className={classes.fenetres__content__description__left}>
          <Fade left>
            <img src={picFour} alt="Résultat chantier Claudel Palaiseau" />
            <p>
              Altera sententia est, quae definit amicitiam paribus officiis ac
              voluntatibus. Hoc quidem est nimis exigue et exiliter ad calculos
              vocare amicitiam, ut par sit ratio acceptorum et datorum. Divitior
              mihi et affluentior videtur esse vera amicitia nec observare
              restricte, ne plus reddat quam acceperit; neque enim verendum est,
              ne quid excidat, aut ne quid in terram defluat, aut ne plus aequo
              quid in amicitiam congeratur.
            </p>
          </Fade>
        </div>
        <div className={classes.fenetres__content__description__right}>
          <Fade right>
            <p>
              Apud has gentes, quarum exordiens initium ab Assyriis ad Nili
              cataractas porrigitur et confinia Blemmyarum, omnes pari sorte
              sunt bellatores seminudi coloratis sagulis pube tenus amicti,
              equorum adiumento pernicium graciliumque camelorum per diversa se
              raptantes, in tranquillis vel turbidis rebus: nec eorum quisquam
              aliquando stivam adprehendit vel arborem colit aut arva subigendo
              quaeritat victum, sed errant semper per spatia longe lateque
              distenta sine lare sine sedibus fixis aut legibus: nec idem
              perferunt diutius caelum aut tractus unius soli illis umquam
              placet.
            </p>
            <img src={picFive} alt="Résultat chantier Ecole des Pointes" />
          </Fade>
        </div>
        <div className={classes.fenetres__content__description__left}>
          <Fade left>
            <img src={picSix} alt="Résultat chantier Lemonnier SAS Eiffage" />
            <p>
              Ideo urbs venerabilis post superbas efferatarum gentium cervices
              oppressas latasque leges fundamenta libertatis et retinacula
              sempiterna velut frugi parens et prudens et dives Caesaribus
              tamquam liberis suis regenda patrimonii iura permisit.
            </p>
          </Fade>
        </div>
        <div className={classes.fenetres__content__description__right}>
          <Fade right>
            <p>
              Apud has gentes, quarum exordiens initium ab Assyriis ad Nili
              cataractas porrigitur et confinia Blemmyarum, omnes pari sorte
              sunt bellatores seminudi coloratis sagulis pube tenus amicti,
              equorum adiumento pernicium graciliumque camelorum per diversa se
              raptantes, in tranquillis vel turbidis rebus: nec eorum quisquam
              aliquando stivam adprehendit vel arborem colit aut arva subigendo
              quaeritat victum, sed errant semper per spatia longe lateque
              distenta sine lare sine sedibus fixis aut legibus: nec idem
              perferunt diutius caelum aut tractus unius soli illis umquam
              placet.
            </p>
            <img
              src={picSeven}
              alt="Résultat chantier marquise mairie Thorigny"
            />
          </Fade>
        </div>
        <div className={classes.fenetres__content__description__left}>
          <Fade left>
            <img src={picEight} alt="Résultat chantier Paris Aéroport" />
            <p>
              Duplexque isdem diebus acciderat malum, quod et Theophilum
              insontem atrox interceperat casus, et Serenianus dignus
              exsecratione cunctorum, innoxius, modo non reclamante publico
              vigore, discessit.
            </p>
          </Fade>
        </div>
        <div className={classes.fenetres__content__description__right}>
          <Fade right>
            <p>
              In his tractibus navigerum nusquam visitur flumen sed in locis
              plurimis aquae suapte natura calentes emergunt ad usus aptae
              multiplicium medelarum. verum has quoque regiones pari sorte
              Pompeius Iudaeis domitis et Hierosolymis captis in provinciae
              speciem delata iuris dictione formavit.
            </p>
            <img src={picNine} alt="Résultat chantier porte en alu" />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Fenetres;
