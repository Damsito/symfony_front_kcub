export const alerte = {
  aucun_interlocuteur_run_service: "Aucun Interlocuteur RUN identifié",
  aucune_chaine_de_soutien: "Aucune chaine de soutien définie",
  aucun_contact_interne_service: "Aucun contact interne défini",
  date_fin_depassee:
    "Service actif avec une date de fin renseignée et dépassée",
  au_moins_un_contact_interne_inactif:
    "Au moins un contact interne inactif associé au service",
  incoherences_interlocuteur_aucune:
    "Aucune incohérence n'a été trouvée sur vos services",
  incoherences_interlocuteur_one: (ctx) =>
    `${ctx.named("errors")} incohérence a été trouvée sur vos services`,
  incoherences_interlocuteur_multiple: (ctx) =>
    `${ctx.named("errors")} incohérences ont été trouvées sur vos services`,
  incoherences_validateur_aucune:
    "Aucune incohérence n'a été trouvée sur l'ensemble des services",
  incoherences_validateur_one: (ctx) =>
    `${ctx.named(
      "errors"
    )} incohérence a été trouvée sur l'ensemble des services`,
  incoherences_validateur_multiple: (ctx) =>
    `${ctx.named(
      "errors"
    )} incohérences ont été trouvées sur l'ensemble des services`,
};
