import * as Yup from "yup";
import { translation } from "@/i18n";
import maxLengthEquipe from "@/schema/Equipe/maxLengthEquipe";

let max = maxLengthEquipe();
export const schemaEquipe = Yup.object().shape({
  identifiant: Yup.string()
    .required(translation.global.t("equipe_schema.identifiant.not_blank"))
    .max(max.identifiant, translation.global.t("equipe_schema.identifiant.max"))
    .nullable(),
  libelle: Yup.string()
    .required(translation.global.t("equipe_schema.libelle.not_blank"))
    .max(max.libelle, translation.global.t("equipe_schema.libelle.max"))
    .nullable(),
});
