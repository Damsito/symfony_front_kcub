import * as Yup from "yup";
import { translation } from "@/i18n";
import maxLengthContactEntreprise from "@/schema/ContactEntreprise/maxLengthContactEntreprise";

let max = maxLengthContactEntreprise();
export const schemaContact = Yup.object().shape({
  nom: Yup.string()
    .required(translation.global.t("contact_entreprise_schema.nom.not_blank"))
    .max(max.nom, translation.global.t("contact_entreprise_schema.nom.max")),
  prenom: Yup.string()
    .required(
      translation.global.t("contact_entreprise_schema.prenom.not_blank")
    )
    .max(
      max.prenom,
      translation.global.t("contact_entreprise_schema.prenom.max")
    ),
  email: Yup.string()
    .email(translation.global.t("contact_entreprise_schema.email.regex"))
    .required(translation.global.t("contact_entreprise_schema.email.not_blank"))
    .max(
      max.email,
      translation.global.t("contact_entreprise_schema.email.max")
    ),
  telephone: Yup.string()
    .nullable()
    .matches(/^(\+?[1-9]\d{1,14}|0\d{9}|\+33\d{9})$/, {
      message: translation.global.t(
        "contact_entreprise_schema.telephone.regex"
      ),
      excludeEmptyString: true,
    })
    .max(
      max.tel,
      translation.global.t("contact_entreprise_schema.telephone.max")
    ),
});
