export const contact_client_partenaire_fournisseur = {
  service_cc: {
    contact: {
      not_blank: "The client contact is required.",
    },
  },
  service_cp: {
    contact: {
      not_blank: "The partner contact is required.",
    },
    entreprise: {
      not_blank: "The partner company is required.",
    },
    contact_partenaire: "Partner contact",
  },
  service_cf: {
    contact: {
      not_blank: "The supplier contact is required.",
    },
    entreprise: {
      not_blank: "The supplier company is required.",
    },
    contact_fournisseur: "Supplier contact",
  },
  acces_portail_sdesk: "Portal Habilitation",
  contacts_client: "Customer contacts",
  contacts_partenaires: "Partner contacts",
  contacts_fournisseurs: "Supplier contacts",

  chercher_contact_client: "Fill a client contact",
  chercher_contact_partenaire: "Fill a partner contact",
  chercher_contact_fournisseur: "Fill a supplier contact",
  chercher_entreprise_partenaire: "Fill a partner company",
  chercher_entreprise_fournisseur: "Fill a supplier company",
};
