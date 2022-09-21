import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Fade } from "react-reveal";

import classes from "../styles/pages/Cookies.module.scss";

const Cookies = () => {
  return (
    <div className={classes.cookie}>
      <Fade left>
        <div className={classes.cookie__content}>
          <h1>POLITIQUE D’UTILISATION ET DE GESTION DES COOKIES</h1>
          <summary>
            <h2>Sommaires :</h2>
            <ol>
              <li>
                <AnchorLink href="#li1">Qui sommes-nous ?</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#li2">Utilisations de cookies</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#li3">
                  Pourquoi cette politique d’utilisation et de gestion des
                  cookies ?
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#li4">Que sont les cookies ?</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#li5">
                  Pourquoi utilisons-nous des cookies ?
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#li6">
                  Quels cookies utilisons-nous ?
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#li7">
                  Information sur le site internet
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#li8">Pour plus d’information</AnchorLink>
              </li>
            </ol>
          </summary>
          <ol className={classes.cookie__content__mainOl}>
            <li id="li1">
              <h3>Qui sommes-nous ?</h3>
            </li>
            <p>
              Le site{" "}
              <a href="https://francilienne-de-miroiterie.com/">
                https://francilienne-de-miroiterie.com/
              </a>{" "}
              est édité par :
            </p>
            <p>
              <ul className={classes.cookie__content__mainOl__ulPres}>
                <li>Forme juridique : Société A Responsabilité Limitée</li>
                <li>Siège social : 16, rue de Berlin - 77144 Montévrain. </li>
                <li>Téléphone : 01.60.36.19.59</li>
                <li> N° RCS : 347 731 267 Code </li>
                <li>APE : 4334Z </li>
                <li>Capital social : 15 244.90€</li>
              </ul>
            </p>
            <li id="li2">
              <h3>Utilisations de cookies</h3>
            </li>
            <p>
              L’utilisateur est informé que le site utilise des cookies,
              traceurs et/ou témoins de connexion.
            </p>
            <p>
              Ces derniers sont susceptibles d’être installés dans votre
              terminal sous réserve des choix et options que vous avez exprimés
              ou pouvez exprimer à tout moment conformément à la présente
              politique d’utilisation et de gestion des cookies.
            </p>
            <li id="li3">
              <h3>
                Pourquoi cette politique d’utilisation et de gestion des cookies
                ?
              </h3>
            </li>
            <p>
              Dans un souci d’information et de transparence, la présente
              politique de cookies est destinée à permettre à l’utilisateur d’en
              savoir plus sur l’origine et la finalité des informations de
              navigation traitées à l'occasion de sa consultation des sites et
              sur ses droits.
            </p>
            <li id="li4">
              <h3>Que sont les cookies ?</h3>
            </li>
            <p>
              Les cookies sont des données utilisées par un serveur pour envoyer
              des informations d’état au navigateur d’un utilisateur, et par ce
              navigateur pour renvoyer des informations d’état au serveur
              d’origine.
            </p>
            <p>
              Les informations d’état peuvent être par exemple un identifiant de
              session, une langue, une date d’expiration, un domaine de réponse,
              etc.
            </p>
            <p>
              Les cookies permettent de conserver, pendant la durée de validité
              du cookie concerné, des informations d'état lorsqu’un navigateur
              accède aux différentes pages d'un site web ou lorsque ce
              navigateur retourne ultérieurement sur ce site web.
            </p>
            <p>
              Seul l’émetteur d’un cookie peut lire ou modifier les informations
              qui y sont contenues.
            </p>
            <p>
              Il existe différents types de cookies :
              <ul>
                <li>
                  des cookies de session qui disparaissent dès que vous quittez
                  le site concerné ;
                </li>
                <li>
                  des cookies permanents qui demeurent sur votre terminal
                  jusqu’à expiration de leur durée de vie ou jusqu’à ce que vous
                  les supprimiez à l’aide des fonctionnalités de votre
                  navigateur.
                </li>
              </ul>
            </p>
            <li id="li5">
              <h3>Pourquoi utilisons-nous des cookies?</h3>
            </li>
            <p>
              Certains de ces cookies ont pour finalité exclusive de permettre
              ou faciliter la communication par voie électronique.
            </p>
            <p>
              D’autres sont strictement nécessaires à la fourniture d'un service
              de communication en ligne à votre demande expresse.
            </p>
            <p>
              D’autres encore sont utilisés dans le but d’améliorer la
              navigation par une analyse de la navigation des internautes.
            </p>
            <p>
              Les principales finalités des cookies utilisés sont :
              <ul>
                <li>
                  de comptabiliser les visiteurs et identifier la manière dont
                  ils utilisent les sites ;
                </li>
                <li>de comptabiliser et différencier les visites ;</li>
                <li>
                  d’adapter l’affichage selon vos préférences et selon les
                  caractéristiques de votre terminal ;
                </li>
                <li>
                  d’identifier par quel site ou moteur de recherche vous êtes
                  arrivé sur nos sites ;
                </li>
                <li>de gérer et suivre vos choix en matière de cookies ;</li>
                <li>
                  de gérer les sessions utilisateurs et les fonctionnalités de
                  votre navigateur ;
                </li>
                <li>
                  de réaliser des statistiques et analyses de fréquentation et
                  d’utilisation, de navigation, et des mesures d’audience des
                  sites et de leurs différents espaces en vue notamment de leur
                  amélioration.
                </li>
              </ul>
            </p>
            <li id="li6">
              <h3>Quels cookies utilisons-nous ?</h3>
            </li>
            <p>
              Notre site internet utilise le service Google Analytics, fourni
              par Google Inc (« Google »), qui permet d'analyser la navigation
              sur ces sites et de réaliser des statistiques et mesures
              d’audience.
            </p>
            <p>
              Ces cookies sont déposés et lus sur l’équipement terminal de
              l’utilisateur et accédés dès lors que celui-ci accède à un site
              web utilisant le service Google Analytics.
            </p>
            <p>
              Ils contiennent certaines informations telles que :
              <ul>
                <li>- le nom de domaine du site consulté ;</li>
                <li>- un identifiant utilisateur ;</li>
                <li>
                  - l’historique de navigation sur le site web utilisant le
                  service « Google Analytics » ;
                </li>
                <li>
                  - votre adresse IP afin de déterminer la ville de connexion.
                  Cette donnée est immédiatement anonymisée après localisation.
                </li>
              </ul>
            </p>
            <p>
              Ces données sont transmises et stockées par Google sur des
              serveurs situés aux Etats-Unis. Les entités de Google sont
              adhérentes au Safe Harbor et assurent un niveau de protection
              adéquat des données (Décision 2000/520/CE du 26-7-2000).
            </p>
            <p>
              L’utilisateur peut pour avoir plus d’informations se rendre à la
              page{" "}
              <a
                href="http://www.google.com/analytics/learn/privacy.html"
                target="_blank"
                rel="noreferrer"
              >
                http://www.google.com/analytics/learn/privacy.html.
              </a>
            </p>
            <p>
              Pour désactiver ces cookies, vous pouvez vous rendre sur la page
              suivante :{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout?hl=fr"
                target="_blank"
                rel="noreferrer"
              >
                https://tools.google.com/dlpage/gaoptout?hl=fr
              </a>
              .
            </p>
            <li id="li7">
              <h3>Information sur le site internet</h3>
            </li>
            <p>
              L’éditeur, lors de votre visite, vous informe de l’utilisation de
              cookies qui analysent votre navigation pour obtenir des
              statistiques sur le parcours de navigation, la fréquentation de
              ses sites et les configurations type. L’absence de modification
              des paramétrages de votre navigateur internet, suite à la lecture
              de cette mention vaut consentement à l’implémentation desdits
              cookies.
            </p>
            <p>
              Si vous souhaitez les refuser, vous disposer de plusieurs moyens
              définis ci-dessous.
            </p>
            <p>
              L’utilisateur peut paramétrer son navigateur pour accepter ou
              refuser au cas par cas les cookies préalablement à leur
              installation. Par ailleurs, l’utilisateur peut également
              régulièrement supprimer les cookies de son terminal via son
              navigateur.
            </p>
            <p>
              Pour la gestion des cookies et les choix de l’utilisateur, la
              configuration de chaque navigateur est différente. Elle est
              décrite dans le menu d'aide du navigateur utilisé, elle permet de
              savoir de quelle manière modifier ses souhaits en matière de
              cookies. A titre d’exemple :
              <ul>
                <li>
                  pour Internet Explorer™ :{" "}
                  <a
                    href="http://windows.microsoft.com/fr-FR/windows-vista/Block-or-allow-cookies"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://windows.microsoft.com/fr-FR/windows-vista/Block-or-allow-cookies
                  </a>
                  ;
                </li>
                <li>
                  pour Safari™ :{" "}
                  <a
                    href="http://www.apple.com/legal/privacy/fr-ww/cookies"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://www.apple.com/legal/privacy/fr-ww/cookies
                  </a>
                  ;
                </li>
                <li>
                  pour Chrome™:{" "}
                  <a
                    href="http://support.google.com/chrome/bin/answer.py?hl=fr&hlrm=en&answer=95647"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://support.google.com/chrome/bin/answer.py?hl=fr&hlrm=en&answer=95647
                  </a>
                  ;
                </li>
                <li>
                  pour Firefox™ :{" "}
                  <a
                    href="http://support.mozilla.org/fr/kb/Activer%20et%20d%C3%A9sactiver%20les%20cookies"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://support.mozilla.org/fr/kb/Activer%20et%20d%C3%A9sactiver%20les%20cookies
                  </a>
                  ;
                </li>
                <li>
                  pour Opera™ :{" "}
                  <a
                    href="http://help.opera.com/Windows/10.20/fr/cookies.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://help.opera.com/Windows/10.20/fr/cookies.html
                  </a>
                  ;
                </li>
              </ul>
            </p>
            <p>
              En tout état de cause, l’utilisateur peut se rendre dans la
              rubrique d’aide de son navigateur pour savoir de quelle manière
              son navigateur lui permet de choisir les cookies acceptés ou
              refusés.
            </p>
            <p>
              Il résulte de ce qui précède que l’enregistrement d’un cookie dans
              votre terminal est essentiellement subordonné à votre volonté, que
              vous pouvez exprimer et modifier à tout moment et gratuitement à
              travers les choix qui vous sont offerts par votre logiciel de
              navigation.
            </p>
            <p>
              Si votre navigateur est paramétré pour accepter les cookies dans
              votre terminal, les cookies intégrés dans les pages et contenus
              que vous avez consultés pourront être stockés temporairement dans
              un espace dédié de votre terminal. Ils y seront lisibles
              uniquement par leur émetteur.
            </p>
            <p>
              A l’inverse, vous pouvez paramétrer votre navigateur pour refuser
              les cookies. A cet égard, votre attention est attirée sur le fait
              qu’en paramétrant votre navigateur pour refuser les cookies,
              certaines fonctionnalités, pages, espaces des sites pourraient ne
              pas être accessibles, ce dont l’éditeur ne sauraient être
              responsables.
            </p>
            <p>
              Nous attirons également l’attention de l’utilisateur sur le fait
              que, lorsque l’utilisateur s’oppose à l’installation ou à
              l’utilisation d’un cookie, un cookie de refus peut être installé
              sur son équipement terminal. Or, si ce cookie de refus est
              supprimé, il ne sera plus possible d’identifier l’utilisateur
              comme ayant refusé l’utilisation de cookies.
            </p>
            <div className={classes.cookie__content__borderBox}>
              <p>
                N’oubliez pas de paramétrer l’ensemble des navigateurs de vos
                différents terminaux (tablettes, smartphones, ordinateurs..).
              </p>
            </div>
            <li id="li8">
              <h3>Pour plus d’information</h3>
            </li>
            <p>
              Pour plus d'information sur les cookies, vous pouvez vous rendre
              sur le site de la CNIL, à cette adresse :{" "}
              <a
                href="http://www.cnil.fr/vos-droits/vos-traces/les-cookies/"
                target="_blank"
                rel="noreferrer"
              >
                http://www.cnil.fr/vos-droits/vos-traces/les-cookies/
              </a>
            </p>
            <p>Date de dernière mise à jour : 2 septembre 2022</p>
          </ol>
        </div>
      </Fade>
    </div>
  );
};

export default Cookies;
