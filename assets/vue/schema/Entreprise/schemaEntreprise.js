import * as Yup from "yup";
import { translation } from "@/i18n";
import maxLengthEntreprise from "@/schema/Entreprise/maxLengthEntreprise";
function isValidTelephone(message) {
  return this.test("tel", message, function (value) {
    if (value) {
      const { path, createError } = this;
      const regexFrance = /(0\d{9}|\+33\d{9})/;
      const regexinternational = /\+d*/;
      if (this.parent.pays && this.parent.pays.toLowerCase() === "france") {
        /* eslint-disable */
        if (!value.match(regexFrance)){
          return createError({
            path,
            message: translation.global.t('entreprise_schema.telephone.num_france')
          });
        }
      } else {
        if (!value.match(regexinternational)){
          return createError({
            path,
            message: translation.global.t('entreprise_schema.telephone.num_international')
          });
        }
      }
    }
    return true;
  });
}
Yup.addMethod(Yup.string, "tel", isValidTelephone);
let max = maxLengthEntreprise()
export const schemaEntreprise = Yup.object().shape({
  raisonSociale: Yup.string()
    .required(translation.global.t('entreprise_schema.raison_sociale.not_blank'))
    .max(max.raisonSociale, translation.global.t('entreprise_schema.raison_sociale.max')) .nullable(),
  siret: Yup.string()
    .required(translation.global.t('entreprise_schema.siret.not_blank'))
      .max(max.siret, translation.global.t('entreprise_schema.siret.max'))
    .matches(/\d{14}/, translation.global.t('entreprise_schema.siret.regex')) .nullable(),
  type: Yup.string().required(translation.global.t('entreprise_schema.type.not_blank')) .nullable(),
  adresse: Yup.string().max(
    max.adresse,
      translation.global.t('entreprise_schema.adresse.max')
  ).nullable(),
  complementAdresse: Yup.string().max(
    max.complementAdresse,
      translation.global.t('entreprise_schema.complement_adresse.max')
  ).nullable(),
  codePostal: Yup.string()
    .matches(/\d{5}/,{
      message: translation.global.t('entreprise_schema.code_postal.regex'),
      excludeEmptyString: true,
    })
      .max(max.code_postal, translation.global.t('entreprise_schema.code_postal.max'))
      .nullable(),
  ville: Yup.string().max(
    max.ville,
      translation.global.t('entreprise_schema.ville.max')
  ).nullable(),
  pays: Yup.string().max(
    max.pays,
      translation.global.t('entreprise_schema.pays.max')
  ).nullable(),
  telephone: Yup.string()
    .max(max.tel, translation.global.t('entreprise_schema.telephone.max'))
    .tel().nullable(),
});
