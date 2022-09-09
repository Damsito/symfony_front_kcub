import * as Yup from "yup";
import { translation } from "@/i18n";
import maxLengthContactEntreprise from "@/schema/ContactEntreprise/maxLengthContactEntreprise";

let max = maxLengthContactEntreprise();
export const schemaContactInterne = Yup.object().shape({
  email: Yup.string()
    .email(translation.global.t("contact_entreprise_schema.email.regex"))
    .required(translation.global.t("contact_entreprise_schema.email.not_blank"))
    .max(
      max.email,
      translation.global.t("contact_entreprise_schema.email.max")
    ),
});
