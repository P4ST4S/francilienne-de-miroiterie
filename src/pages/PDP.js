import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";

import classes from "../styles/pages/PDP.module.scss";

const PDP = () => {
  return (
    <div className={classes.pdp}>
      <div className={classes.pdp__content}>
        <Fade left>
          <h1>POLITIQUE DE PROTECTION DES DONNÉES PERSONNELLES</h1>
          <p>
            Dans le cadre de sa relation avec le client, la FRANCILIENNE DE
            MIROITERIE est conduite à recueillir des données à caractère
            personnel et à les utiliser dans différents traitements automatisés.
            Une donnée à caractère personnel (ci-après « données personnelles »)
            désigne toute information susceptible de se rapporter à une personne
            physique identifiée ou identifiable directement ou indirectement.
            <br />
            La présente politique de protection des données personnelles
            concerne toute personne physique en lien avec La FRANCILIENNE DE
            MIROITERIE notamment en qualité de client, prospect, représentant
            légal et/ou représentant habilité du client.
            <br />
            Les personnes concernées par la présente Politique de protection des
            données personnelles sont ci-après dénommées les « Personne(s)
            Physique(s) ».
            <br />
            La mise en œuvre de traitements de données personnelles est régie
            notamment par le Règlement (UE) 2016/679 du Parlement européen et du
            Conseil du 27 avril 2016 relatif à la protection des personnes
            physiques à l’égard du traitement des données à caractère personnel
            et à la libre circulation de ces données, ci-après désigné « RGPD ».
            Le RGPD impose au responsable d’un traitement (La FRANCILIENNE DE
            MIROITERIE) de fournir aux Personnes Physiques un certain nombre
            d’informations. L’ensemble de ces informations figure dans la
            présente Politique.
          </p>
          <summary>
            <h2>Sommaires :</h2>
            <ol>
              <li>
                <AnchorLink href="#li1">
                  RESPONSABLE DU TRAITEMENT DES DONNÉES
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#li2">
                  DONNEES A CARACTERE PERSONNEL QUE NOUS TRAITONS
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#li3">
                  DESTINATAIRES DES DONNÉES À CARACTÈRE PERSONNEL
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#li4">
                  MISE EN ŒUVRE D'UNE POLITIQUE DE PROTECTION DES DONNÉES À
                  CARACTÈRE PERSONNEL
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#li5">
                  PERSONNES CONCERNÉES PAR LA COLLECTE ET LE TRAITEMENT DES
                  DONNÉES
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#li6">
                  FINALITÉ ET BASE JURIDIQUE DU TRAITEMENT
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#li7">
                  CONSERVATION ET SÉCURISATION DE VOS DONNÉES À CARACTÈRE
                  PERSONNEL
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#li8">
                  DROITS DES UTILISATEURS DE NOTRE SITE
                </AnchorLink>
              </li>
            </ol>
          </summary>
          <ol className={classes.pdp__content__mainOl}>
            <li id="li1">
              <h3>RESPONSABLE DU TRAITEMENT DES DONNÉES</h3>
            </li>
            <p>
              Le responsable du traitement est le responsable légal de La
              Francilienne de Miroiterie dont les coordonnées sont précisées
              dans nos mentions légales.
            </p>
            <li id="li2">
              <h3>DONNEES A CARACTERE PERSONNEL QUE NOUS TRAITONS</h3>
            </li>
            <p>
              Concernant les utilisateurs du site FRANCILIENNE DE MIROITERIE
              nous collectons les données suivantes qui sont indispensables au
              fonctionnement du service :
              <h4>Données enregistrées par le formulaire de contact :</h4>
              <p>
                Ce formulaire permet aux internautes de prendre contact avec La
                Francilienne de Miroiterie. Les données envoyées sont ensuite
                stockées dans une base de données aux de suivi de la relation
                avec La Francilienne de Miroiterie Les données enregistrées sont
                :
                <ul>
                  <li>Nom</li>
                  <li>Adresse email</li>
                  <li>Tél fixe ou mobile.</li>
                </ul>
              </p>
              <h4>Données enregistrées lors de la navigation sur le site:</h4>
              <p>
                Ces données permettent au propriétaire du site d'obtenir des
                informations sur la navigation des visiteurs, comme l'affichage
                des fiches détails ou encore les recherches effectuées. Les
                données enregistrées sont :
                <ul>
                  <li>L'adresse IP.</li>
                </ul>
              </p>
              <h4>Cookies</h4>
              <p>
                Une fonctionnalité de notre site s'appuie sur un service proposé
                par un éditeur tiers Google Analytics, qui permet à notre
                Webmaster d'étudier de manière totalement anonyme les visites
                sur ce site. Les cookies sont conservés pour une durée d'un an
                sur l'ordinateur du visiteur. Google Analytics dépose un cookie,
                que vous avez cependant la possibilité d'interdire en cliquant
                sur vos préférences de gestion de cookies Toutes les données
                collectées par le biais de ces cookies sont conservées pour une
                durée de 13 mois. Pour plus d’information vous pouvez consulter
                notre politique Cookies{" "}
                <NavLink exact to="/politique-cookies">
                  ici
                </NavLink>
                .
              </p>
            </p>
            <li id="li3">
              <h3>DESTINATAIRES DES DONNÉES À CARACTÈRE PERSONNEL</h3>
            </li>
            <p>
              Les données à caractère personnel collectées sur le site La
              Francilienne de Miroiterie sont destinées principalement à La
              Francilienne de Miroiterie. Vos données sont susceptibles d'être
              partagées avec nos partenaires. Afin de pouvoir réaliser notamment
              la maintenance du site, certaines de vos données sont susceptibles
              d'être partagées avec nos sous-traitants.
            </p>
            <p>
              Nous nous assurons que tous nos sous-traitants soient soumis à des
              mécanismes de protection des données personnelles adéquates et
              conformes au Règlement RGPD et que les données seront traitées
              uniquement par le personnel habilité et tenu par une clause de
              confidentialité ou tout autre document contractuel équivalent.
            </p>
            <li id="li4">
              <h3>
                MISE EN ŒUVRE D'UNE POLITIQUE DE PROTECTION DES DONNÉES À
                CARACTÈRE PERSONNEL
              </h3>
            </li>
            <p>
              La Francilienne de Miroiterie s'engage à œuvrer à la protection de
              vos données à caractère personnel. Seul le personnel de La
              Francilienne de Miroiterie est habilité et formé au respect des
              règles de confidentialité participe à l'exploitation du site La
              Francilienne de Miroiterie.
            </p>
            <li id="li5">
              <h3>
                PERSONNES CONCERNÉES PAR LA COLLECTE ET LE TRAITEMENT DES
                DONNÉES
              </h3>
            </li>
            <p>
              Toute personne naviguant sur notre site est susceptible d'être
              concernée par une collecte et un traitement de ses données à
              caractère personnel.
            </p>
            <li id="li6">
              <h3>FINALITÉ ET BASE JURIDIQUE DU TRAITEMENT</h3>
            </li>
            <p>
              La collecte et le traitement des données à caractère personnel
              fournies par l’utilisateur sont nécessaires à La Francilienne de
              Miroiterie pour l’exploitation du site.
            </p>
            <li id="li7">
              <h3>
                CONSERVATION ET SÉCURISATION DE VOS DONNÉES À CARACTÈRE
                PERSONNEL
              </h3>
            </li>
            <p>
              Les données à caractère personnel sont conservées par La
              Francilienne de Miroiterie le temps nécessaire à la bonne
              exécution de de ses obligations légales et réglementaires et au
              plus tard 3 ans à compter de la dernière connexion à son compte
              client. Toutes ces informations sont conservées au sein de la base
              de données de nos serveurs informatiques.
            </p>
            <p>
              Toutes les données à caractère personnel transmises à nos
              sous-traitants sont supprimées après l'exécution de leurs
              obligations contractuelles.
            </p>
            <li id="li8">
              <h3>DROITS DES UTILISATEURS DE NOTRE SITE</h3>
            </li>
            <p>
              <span>
                Votre droit d’accès et à la rectification de vos données.{" "}
              </span>
              Vous disposez du droit d’accéder et de faire rectifier vos données
              personnelles.
            </p>
            <p>
              A ce titre, vous avez la confirmation que vos données personnelles
              sont ou ne sont pas traitées et lorsqu’elles le sont, et disposez
              de l’accès à vos données ainsi qu’aux informations concernant :
              <ul>
                <li>les finalités du traitement ;</li>
                <li>les catégories de données personnelles concernées ;</li>
                <li>
                  les destinataires ou catégories de destinataires ainsi que les
                  organisations internationales auxquels les données
                  personnelles ont été ou seront communiquées, en particulier
                  les destinataires qui sont établis dans des pays tiers ;
                </li>
                <li>
                  lorsque cela est possible, la durée de conservation des
                  données personnelles envisagée ou, lorsque ce n’est pas
                  possible, les critères utilisés pour déterminer cette durée ;
                </li>
                <li>
                  l’existence du droit de demander au responsable du traitement
                  la rectification ou l’effacement de vos données personnelles,
                  du droit de demander une limitation du traitement de vos
                  données personnelles, du droit de vous opposer à ce traitement
                  ;
                </li>
                <li>
                  le droit d’introduire une réclamation auprès d’une autorité de
                  contrôle ;
                </li>
                <li>
                  des informations relatives à la source des données quand elles
                  ne sont pas collectées directement auprès des personnes
                  concernées ;
                </li>
                <li>
                  l’existence d’une prise de décision automatisée, y compris de
                  profilage, et dans ce dernier cas, des informations utiles
                  concernant la logique sous-jacente, ainsi que l’importance et
                  les conséquences prévues de ce traitement pour les personnes
                  concernées.
                </li>
              </ul>
            </p>
            <p>
              Vous pouvez nous demander que vos données personnelles soient,
              selon les cas, rectifiées, complétées si elles sont inexactes,
              incomplètes, équivoques, périmées.
            </p>
            <p>
              <span>Votre droit à l’effacement de vos données. </span>Vous
              pouvez nous demander l’effacement de vos données personnelles
              lorsque l’un des motifs suivants s’applique :
              <ul>
                <li>
                  les données personnelles ne sont plus nécessaires au regard
                  des finalités pour lesquelles elles ont été collectées ou
                  traitées d’une autre manière ;
                </li>
                <li>vous retirez le consentement préalablement donné ;</li>
                <li>
                  vous vous opposez au traitement de vos données personnelles
                  lorsqu’il n’existe pas de motif légal audit traitement ;
                </li>
                <li>
                  le traitement de données personnelles n’est pas conforme aux
                  dispositions de la législation et de la réglementation
                  applicable ;
                </li>
                <li>
                  vos données personnelles ont été collectées dans le cadre de
                  l’offre de services de la société de l’information aux enfants
                  âgés de moins de 16 ans.
                </li>
              </ul>
            </p>
            <p>
              <span>
                Votre droit à la limitation des traitements de données.{" "}
              </span>
              Vous pouvez demander la limitation du traitement de vos données
              personnelles dans les cas prévus par la législation et la
              réglementation.
            </p>
            <p>
              <span>
                Votre droit de vous opposer aux traitements de données.{" "}
              </span>
              Vous avez le droit de vous opposer à un traitement de données
              personnelles vous concernant lorsque le traitement est fondé sur
              l’intérêt légitime du responsable du traitement.
            </p>
            <p>
              <span>Votre droit à la portabilité de vos données. </span>Vous
              disposez du droit à la portabilité de vos données personnelles.
              <ul>
                <li>
                  uniquement vos données personnelles, ce qui exclut les données
                  personnelles anonymisées ou les données qui ne vous concernent
                  pas ;
                </li>
                <li>
                  les données personnelles déclaratives ainsi que les données
                  personnelles de fonctionnement évoquées précédemment ;
                </li>
                <li>
                  les données personnelles qui ne portent pas atteinte aux
                  droits et libertés de tiers telles que celles protégées par le
                  secret des affaires.
                </li>
              </ul>
            </p>
            <p>
              Ce droit est limité aux traitements basés sur le consentement ou
              sur un contrat ainsi qu’aux données personnelles que vous avez
              personnellement générées. Ce droit n’inclut ni les données
              dérivées ni les données inférées, qui sont des données
              personnelles créées par la FRANCILIENNE DE MIROITERIE
            </p>
            <p>
              <span>Votre droit de retirer votre consentement</span>Lorsque les
              traitements de données que nous mettons en œuvre sont fondés sur
              votre consentement, vous pouvez le retirer à n’importe quel
              moment. Nous cessons alors de traiter vos données à caractère
              personnel sans les opérations antérieures pour lesquelles vous
              aviez consenti ne soient remises en cause.
            </p>
            <p>
              <span>Votre droit d’introduire un recours. </span>Vous avez le
              droit d’introduire une réclamation auprès de la CNIL sur le
              territoire français et ce sans préjudice de tout autre recours
              administratif ou juridictionnel.
            </p>
            <p>
              <span>Votre droit de définir des directives post-mortem. </span>
              Vous avez la possibilité de définir des directives relatives à la
              conservation, à l’effacement et à la communication de vos données
              personnelles après votre décès et ce auprès d’un tiers de
              confiance, certifié et chargé de faire respecter la volonté du
              défunt conformément aux exigences du cadre juridique applicable.
            </p>
            <p>
              Les modalités d’exercice de vos droits. Tous les droits énumérés
              ci-avant peuvent être exercés à l’adresse email suivante :
              franciliennedemiroiterie@orange.fr ou par courrier accompagné
              d’une copie d’un document d’identité en s’adressant à La
              Francilienne de Miroiterie à l’adresse suivante : 16, rue de
              Berlin - 77144 Montévrain.
            </p>
            <p>
              <span>Mise à jour</span>
            </p>
            <p>
              Nous nous réservons le droit de modifier la présente politique
              afin de tenir compte des changements apportés aux diverses
              réglementations et pratiques en vigueur. Les changements que nous
              apporterons à notre politique seront directement publiés sur cette
              page de notre site. Afin de vous assurer que vous disposez en tout
              temps de la dernière version, nous vous invitons à la consulter en
              ligne.
            </p>
            <p>
              <span>Date de la dernière mise à jour : </span>02/09/2022
            </p>
          </ol>
        </Fade>
      </div>
    </div>
  );
};

export default PDP;
