export const contact_entreprise = {
  contact_externe: "Contacts d'entreprises",
  ajouter_contact: "Ajouter un contact",
  aucun_contact_entreprise: "Aucun contact ne correspond à votre recherche.",
  supprimer_contact: "Voulez-vous vraiment supprimer ce contact ?",
  supprimer_multiple_contacts: "Voulez-vous vraiment supprimer ces contacts ?",
  supprimer_multiple_services:
    "Confirmez-vous la suppression de l'association avec ces codes services ?",
  supprimer_one_service:
    "Confirmez-vous la suppression de l'association avec ce code service ?",
  actif: "Actif",
  inactif: "Inactif",
  compte_acces: "Compte d'accès",
  import_question: "Voulez-vous vraiment importer les contacts suivants ?",
  import_question_error:
    "Une erreur est survenue lors de l'importation, ces contacts n'ont pas été importés :",
  import_contact_succes:
    "L'importation des contacts a été effectuée avec succès.",
  contact_create_multiple: "Les contacts ont bien été créés.",
  contact_create_one: "Le contact a bien été créé.",
  contact_delete_multiple: "Ces contacts ont bien été supprimés.",
  contact_delete_one: "Ce contact a bien été supprimé.",

  contact_update: "Le contact a bien été modifié.",

  import_contact_succes_one: "Un contact a été importé.",
  import_contact_succes_multiple: (ctx) =>
    `${ctx.named("number")} contacts ont été importés.`,
  aucun_contact_import: "Aucun contact n'a été importé.",
  export_contacts_one: "Un contact a été exporté.",
  fonction: "Fonction",
  export_contacts_multiple: (ctx) =>
    `${ctx.named("number")} contacts ont été exportés.`,
  contact_entreprise_schema: {
    nom: {
      not_blank: "Le nom du contact doit être renseigné.",
      max: "Le nom du contact doit contenir au maximum 50 caractères.",
    },
    prenom: {
      not_blank: "Le prénom du contact doit être renseigné.",
      max: "Le prénom du contact doit contenir au maximum 50 caractères.",
    },
    fonction: {
      not_blank: "La fonction du contact doit être renseignée.",
      choice: "Cette fonction est interdite.",
    },
    email: {
      not_blank: "L'email du contact doit être renseigné.",
      max: "L'email du contact doit contenir au maximum 50 caractères.",
      regex: "Ce champs doit être un email.",
      already_exists: "Cet email existe déjà.",
    },
    telephone: {
      regex:
        "Le numéro de téléphone du contact doit être au format national ou E.164. (+16175551212, 0606060606, +33606060606)",
      max: "Le numéro de téléphone du contact doit contenir au maximum 19 caractères.",
    },
  },
  errorContactEquipeUpdate:
    "Une erreur est survenue lors de la modification de l'équipe.",
};
