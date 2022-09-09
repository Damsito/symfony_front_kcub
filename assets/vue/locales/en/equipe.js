export const equipe = {
  equipes: "Teams",
  equipe: "Team",
  add_equipe: "Add a team",
  selectionner_services_a_associer: "Select the services to associate",
  equipe_created: "The team has been successfully created.",
  aucune_equipe: "There are no team matching your search.",
  identifiant: "Identifier",
  identifiant_ou_email: "Identifier / Email",
  libelle: "Name",
  question_delete_multiple_equipes:
    "Do you really want to delete these teams ?",
  question_delete_equipe: "Do you really want to delete this team ?",
  equipe_appartient_service: "This team has one or many services.",
  une_equipe_appartient_service: "This team has one or many services.",
  equipe_delete_multiple: "These teams have been successfully deleted.",
  equipe_delete_one: "This team has been successfully deleted.",
  equipe_create: "This team has been successfully created.",
  equipe_update: "This team has been successfully updated.",
  equipe_schema: {
    identifiant: {
      not_blank: "The identifier is required.",
      max: "The identifier must contain a maximum of 255 characters.",
      already_exists: "This identifier is already taken.",
    },
    libelle: {
      not_blank: "The label is required.",
      max: "The label must contain a maximum of 255 characters.",
    },
  },
  membres: "Members",
  ajouter_membre: "Add a member",
  hors_eds: "Outside EDS",
  confirm_replace: (ctx) =>
    `Do you confirm the replacement of ${ctx.named("old")}  by ${ctx.named(
      "new"
    )} on all services ?`,
  confirm_replace_multiple_services: (ctx) =>
    `Do you confirm the replacement of ${ctx.named("old")}  by ${ctx.named(
      "new"
    )} on selected services ?`,
  confirm_replace_one_service: (ctx) =>
    `Do you confirm the replacement of ${ctx.named("old")}  by ${ctx.named(
      "new"
    )} on this service ?`,
  confirm_create_service: "Do you confirm the association of these services ?",
  cree_par: "Created by",
  service_equipe_delete_multiple: "The services have been unbundled.",
  service_equipe_delete_one: "The service has been unbundled.",
  aucun_service_equipe: "No services are associated with this team.",
  service_equipe_ajoute: "Services have been associated.",
  confirm_replace_groupe_service: (ctx) =>
    `Do you confirm the replacement of the group ${ctx.named(
      "old"
    )} by ${ctx.named("new")} ?`,
  replace_equipe_service: (ctx) =>
    `Replace the team ${ctx.named("name")} by : `,
  chercher_equipe: "Search a team",
  remplacer_equipe_message: "The team has been successfully replaced.",
};
