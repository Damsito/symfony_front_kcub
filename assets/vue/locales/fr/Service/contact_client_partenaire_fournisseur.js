export const contact_client_partenaire_fournisseur = {
  service_cc: {
    contact: {
      not_blank: "Le contact client doit être renseigné.",
    },
  },
  service_cp: {
    contact: {
      not_blank: "Le contact partenaire doit être renseigné.",
    },
    entreprise: {
      not_blank: "L'entreprise doit être renseignée.",
    },
    contact_partenaire: "Contact partenaire",
  },
  service_cf: {
    contact: {
      not_blank: "Le contact fournisseur doit être renseigné.",
    },
    entreprise: {
      not_blank: "L'entreprise doit être renseignée.",
    },
    contact_fournisseur: "Contact fournisseur",
  },
  acces_portail_sdesk: "Habilitation portail",
  contacts_client: "Contacts client",
  contacts_partenaires: "Contacts partenaires",
  contacts_fournisseurs: "Contacts fournisseurs",

  chercher_contact_client: "Renseignez un contact client",
  chercher_contact_partenaire: "Renseignez un contact partenaire",
  chercher_contact_fournisseur: "Renseignez un contact fournisseur",
  chercher_entreprise_partenaire: "Renseignez une entreprise partenaire",
  chercher_entreprise_fournisseur: "Renseignez une entreprise fournisseur",
};
