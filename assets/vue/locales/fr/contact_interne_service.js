export const contact_interne_service = {
  replace_contact_interne_service: (ctx) =>
    `Remplacez le contact ${ctx.named("name")} par :`,
  remplacer: "Remplacer",
  remplacer_contact_message: "Le contact a bien été remplacé.",
  add_service_contact_interne:
    "Le service a bien été associé au contact interne.",
  add_multiple_service_contact_interne:
    "Les services ont bien été associés au contact interne.",
  role: "Rôle",
  notif_incident: "Notif Incidents",
  notif_incident_add: "Notification Incidents",
};
