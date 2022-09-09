export const contact_interne_service = {
  replace_contact_interne_service: (ctx) =>
    `Replace the contact ${ctx.named("name")} by : `,
  remplacer: "Replace",
  remplacer_contact_message: "The contact has been successfully replaced.",
  add_service_contact_interne:
    "The intern contact has been successfully associated.",
  add_multiple_service_contact_interne:
    "The intern contacts have been successfully associated.",
  role: "Role",
  notif_incident: "Notif Incidents",
  notif_incident_add: "Notification Incidents",
};
