import React from "react";
import { Fade } from "react-reveal";
import Video from "../components/Video";
import classes from "./Stores.module.scss";

const Stores = () => {
  return (
    <div className={classes.stores}>
      <div className={classes.stores__content}>
        <div className={classes.stores__content__title}>
          <Fade left>
            <h2>Stores | Volets</h2>
          </Fade>
        </div>

        <div className={classes.stores__content__description__right}>
          <Fade right>
            <p>
              Et eodem impetu Domitianum praecipitem per scalas itidem funibus
              constrinxerunt, eosque coniunctos per ampla spatia civitatis acri
              raptavere discursu. iamque artuum et membrorum divulsa conpage
              superscandentes corpora mortuorum ad ultimam truncata deformitatem
              velut exsaturati mox abiecerunt in flumen.
            </p>
            <img
              src="medias/stores-volets/banne-vogue-3-bras-a-leds-jph-1252-jpg.jpg"
              alt="Store banne vogue 3 bras a leds, Storiste de France"
            />
          </Fade>
        </div>
        <div className={classes.stores__content__description__left}>
          <Fade left>
            <img
              src="medias/stores-volets/CHIUStTibault.JPG"
              alt="Store Saint Thibault"
            />
            <p>
              Batnae municipium in Anthemusia conditum Macedonum manu priscorum
              ab Euphrate flumine brevi spatio disparatur, refertum mercatoribus
              opulentis, ubi annua sollemnitate prope Septembris initium mensis
              ad nundinas magna promiscuae fortunae convenit multitudo ad
              commercanda quae Indi mittunt et Seres aliaque plurima vehi terra
              marique co nsueta.
            </p>
          </Fade>
        </div>
        <div className={classes.stores__content__description__image}>
          <Fade right>
            <img
              src="medias/stores-volets/vogue-2-jpg.jpg"
              alt="Store vogue, Storiste de France"
            />
            <img
              src="medias/stores-volets/vogue-zoom-5-jpg.JPG"
              alt="Store vogue zoom, Storiste de France"
            />
          </Fade>
        </div>
        <div className={classes.stores__content__description__right}>
          <Fade right>
            <p>
              Cuius acerbitati uxor grave accesserat incentivum, germanitate
              Augusti turgida supra modum, quam Hannibaliano regi fratris filio
              antehac Constantinus iunxerat pater, Megaera quaedam mortalis,
              inflammatrix saevientis adsidua, humani cruoris avida nihil mitius
              quam maritus; qui paulatim eruditiores facti processu temporis ad
              nocendum per clandestinos versutosque rumigerulos conpertis
              leviter addere quaedam male suetos falsa et placentia sibi
              discentes, adfectati regni vel artium nefandarum calumnias
              insontibus adfligebant.
            </p>
            <img
              src="medias/stores-volets/bateaux-verticaux-jpg.jpg"
              alt="Store bateaux verticaux, Storiste de France"
            />
          </Fade>
        </div>
        <div className={classes.stores__content__description__left}>
          <Fade left>
            <img
              src="medias/stores-volets/enroulement-clipnroll-1-jpg.jpg"
              alt="Store Saint Thibault"
            />
            <p>
              Dum apud Persas, ut supra narravimus, perfidia regis motus agitat
              insperatos, et in eois tractibus bella rediviva consurgunt, anno
              sexto decimo et eo diutius post Nepotiani exitium, saeviens per
              urbem aeternam urebat cuncta Bellona, ex primordiis minimis ad
              clades excita luctuosas, quas obliterasset utinam iuge silentium!
              ne forte paria quandoque temptentur, plus exemplis generalibus
              nocitura quam delictis.
            </p>
          </Fade>
        </div>
        <Video
          width="50%"
          height="auto"
          source="medias/stores-volets/sdf-stores-dexterieur-v1-mp4.mp4"
        />
      </div>
    </div>
  );
};

export default Stores;
