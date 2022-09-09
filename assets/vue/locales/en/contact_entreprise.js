export const contact_entreprise = {
  ajouter_contact: "Add a contact",
  contact_externe: "Companies contacts",
  aucun_contact_entreprise: "There are no contact matching your search.",
  supprimer_contact: "Do you really want to delete this contact ?",
  supprimer_multiple_contacts: "Do you really want to delete these contacts ?",
  supprimer_multiple_services:
    "Do you confirm the removal of the association with these service codes ?",
  supprimer_one_service:
    "Do you confirm the removal of the association with this service code ?",
  actif: "Active",
  inactif: "Unactive",
  compte_acces: "Access account",
  import_question: "Do you really want to import the following contacts ?",
  import_question_error:
    "An error occurred during the import, these contacts were not imported : ",
  ok: "OK",
  import_contact_succes:
    "The import of contacts has been successfully completed.",
  contact_create_multiple: "The contacts have been successfuly created.",
  contact_create_one: "The contact has been successfuly created.",
  contact_delete_multiple: "These contacts have been successfully deleted.",

  contact_delete_one: "This contact has been successfully deleted.",

  contact_update: "The contact has been successfuly updated.",
  import_contact_succes_one: "One contact has been imported.",
  import_contact_succes_multiple: (ctx) =>
    `${ctx.named("number")} contacts have been imported.`,
  aucun_contact_import: "No contacts have been imported.",
  export_contacts_one: "One contact has been exported.",
  fonction: "Function",
  export_contacts_multiple: (ctx) =>
    `${ctx.named("number")} contacts have been exported.`,
  contact_entreprise_schema: {
    nom: {
      not_blank: "Contact name is required.",
      max: "The contact name must contain a maximum of 50 characters.",
    },
    prenom: {
      not_blank: "Contact firstname is required.",
      max: "The contact firstname must contain a maximum of 50 characters.",
    },
    fonction: {
      not_blank: "Contact function is required.",
      choice: "This function is forbidden.",
    },
    email: {
      not_blank: "Contact email is required.",
      max: "The contact email must contain a maximum of 50 characters.",
      regex: "This field must be an email.",
      already_exists: "This contact email is already taken.",
    },
    telephone: {
      regex:
        "The contact phone number must be on national or E.164 format. (+16175551212, 0606060606, +33606060606)",
      max: "The contact phone number must contain a maximum of 19 characters.",
    },
  },
  errorContactEquipeUpdate: "An error occurred while editing the team.",
};
