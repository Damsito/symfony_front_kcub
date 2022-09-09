export const equipe = {
  equipes: "Equipes",
  equipe: "Equipe",
  selectionner_services_a_associer: "Sélectionnez les services à associer",
  add_equipe: "Ajouter une équipe",
  aucune_equipe: "Aucune équipe ne correspond à votre recherche.",
  identifiant: "Identifiant",
  identifiant_ou_email: "Identifiant / Email",
  libelle: "Libellé",
  question_delete_multiple_equipes:
    "Voulez-vous vraiment supprimer ces équipes ?",
  question_delete_equipe: "Voulez-vous vraiment supprimer cette équipe ?",
  equipe_appartient_service: "Cette équipe possède un ou plusieurs services.",
  une_equipe_appartient_service:
    "Cette équipe possède un ou plusieurs services.",
  equipe_delete_multiple: "Ces équipes ont bien été supprimées.",
  equipe_delete_one: "Cette équipe a bien été supprimée.",
  equipe_create: "L'équipe a bien été créée.",
  equipe_update: "L'équipe a bien été modifiée.",
  equipe_schema: {
    identifiant: {
      not_blank: "L'identifiant de l'équipe doit être renseigné.",
      max: "L'identifiant doit contenir au maximum 255 caractères.",
      already_exists: "Cet identifiant existe déjà.",
    },
    libelle: {
      not_blank: "Le libellé de l'équipe doit être renseigné.",
      max: "Le libellé doit contenir au maximum 255 caractères.",
    },
  },
  membres: "Membres",
  ajouter_membre: "Ajouter un membre",
  hors_eds: "Hors EDS",
  confirm_replace: (ctx) =>
    `Confirmez-vous le remplacement de ${ctx.named("old")} par ${ctx.named(
      "new"
    )} sur tous les services ?`,
  confirm_replace_multiple_services: (ctx) =>
    `Confirmez-vous le remplacement de ${ctx.named("old")} par ${ctx.named(
      "new"
    )} sur les services sélectionnés ?`,
  confirm_replace_one_service: (ctx) =>
    `Confirmez-vous le remplacement de ${ctx.named("old")} par ${ctx.named(
      "new"
    )} sur ce service ?`,
  confirm_create_service:
    "Confirmez-vous l'association de ce(s) code(s) service(s) ?",
  cree_par: "Créé par",
  service_equipe_delete_multiple: "Les services ont bien été dissociés.",
  service_equipe_delete_one: "Le service a bien été dissocié.",
  aucun_service_equipe: "Aucun service n'est lié à cette équipe.",
  service_equipe_ajoute: "Le(s) service(s) ont été associés.",
  confirm_replace_groupe_service: (ctx) =>
    `Confirmez-vous le remplacement du groupe ${ctx.named(
      "old"
    )} par ${ctx.named("new")} ?`,
  replace_equipe_service: (ctx) =>
    `Remplacer l'équipe ${ctx.named("name")} par : `,
  chercher_equipe: "Chercher une équipe",
  remplacer_equipe_message: "L'équipe a bien été remplacé.",
};
