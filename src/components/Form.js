import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Zoom from "react-reveal/Zoom";
import { send } from "emailjs-com";
import classes from "../styles/components/Form.module.scss";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const [successSubmit, setSuccessSubmit] = useState(false);
  const [verified, setVerified] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    send("service_0pi9xdn", "template_106qych", data, "FKBJlDv3YVp5XMpL1");
    setSuccessSubmit(true);
  };
  const handleVerify = () => {
    setVerified((content) => !content);
  };

  return (
    <div className={classes.form}>
      <div className={classes.form__content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Zoom cascade>
            <div className={classes.form__content_reason}>
              <select
                className={classes.select_box}
                defaultValue="devis"
                {...register("reason")}
                disabled={successSubmit}
              >
                <option value="devis">Demande de devis</option>
                <option value="rendez-vous">Rendez-vous</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div className={classes.form__content__name}>
              <input
                type="text"
                placeholder="Nom*"
                autoComplete="none"
                {...register("name", { required: true })}
                disabled={successSubmit}
              />
              {errors.name ? (
                <div className={classes.form__content__error}>
                  Entrez un nom
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className={classes.form__content__mail}>
              <input
                type="email"
                placeholder="Email*"
                autoComplete="none"
                {...register("email", { required: true })}
                disabled={successSubmit}
              />
              {errors.email ? (
                <div className={classes.form__content__error}>
                  Entrez un Email valide
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className={classes.form__content__tel}>
              <input
                type="tel"
                placeholder="Téléphone"
                autoComplete="none"
                {...register("tel", { minLength: 6, maxLength: 12 })}
                disabled={successSubmit}
              />
              {errors.tel ? (
                <div className={classes.form__content__error}>
                  Entrez un numéro de téléphone valide
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className={classes.form__content__message}>
              <input
                type="text"
                placeholder="Objet*"
                autoComplete="none"
                {...register("message", { required: true })}
                disabled={successSubmit}
              />
              {errors.message ? (
                <div className={classes.form__content__error}>
                  Entrez l'objet de votre demande
                </div>
              ) : (
                <></>
              )}
            </div>
            <p>
              <br />
              {successSubmit ? "" : "* : champs obligatoire"}
            </p>
            <Zoom>
              <div className={classes.form__content__submited}>
                {successSubmit ? "Formulaire envoyé avec succès !" : ""}
              </div>
            </Zoom>
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={handleVerify}
              className={classes.form__content__captcha}
            />
            <button type="submit" disabled={!verified || successSubmit}>
              Envoyer
            </button>
          </Zoom>
        </form>
      </div>
    </div>
  );
};

export default Form;
