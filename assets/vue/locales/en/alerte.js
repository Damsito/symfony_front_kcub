export const alerte = {
  aucun_contact_interne: "No internal contacts associated to the service",
  aucun_interlocuteur_run_service: "No RUN interlocutor identified",
  aucune_chaine_de_soutien: "Any chain of support defined",
  aucun_contact_interne_service: "Any internal contact defined",
  date_fin_depassee: "Active service with an end date exceeded",
  au_moins_un_contact_interne_inactif:
    "At least one inactive internal contact associated to the service",
  incoherences_interlocuteur_aucune:
    "Any inconsistencies were found on your services",
  incoherences_interlocuteur_one: (ctx) =>
    `${ctx.named("errors")} inconsistent information was found on this service`,
  incoherences_interlocuteur_multiple: (ctx) =>
    `${ctx.named("errors")} inconsistent information found on services`,
  incoherences_validateur_aucune:
    "Any inconsistent information found on services",
  incoherences_validateur_one: (ctx) =>
    `${ctx.named("errors")} inconsistent information found on this services`,
  incoherences_validateur_multiple: (ctx) =>
    `${ctx.named("errors")} inconsistent information found on services`,
};
