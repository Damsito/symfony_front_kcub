export const contrat = {
  contrat: {
    debut: {
      value: "Début",
      not_blank: "La date de début doit être renseignée.",
    },
    fin: {
      value: "Fin",
      not_blank: "La date de fin doit être renseignée.",
      error:
        "La date de fin doit être postérieure à la date de début et postérieure à la date du jour.",
    },
    niveau: {
      value: "Niveau de service",
      not_blank: "Le niveau de service doit être renseigné.",
    },
    type: {
      value: "Type de contrat",
      not_blank: "Le type de contrat doit être renseigné.",
    },
    offre: {
      value: "Offre de service",
      not_blank: "L'offre de service doit être renseignée.",
    },
    erp: {
      value: "Code ERP",
    },
    activite: {
      value: "Code Activité",
      not_blank: "Le code activité doit être renseigné.",
    },
    gtd: {
      value: "GTD",
      number: "Le gtd doit être un nombe compris entre 0 et 100.",
    },
  },
  contrat_service_engagements: "Contrat de services & Engagements",
  contrat_service: "Contrat de services",
  engagements: "Engagements contractuels",
  pas_engagement_gtd: "Pas d'engagement de GTD",
  engagement_error_jour:
    "Les engagements de GTI et GTR ne peuvent pas avoir des jours négatifs.",
  heure_minute_zero:
    "Les heures et minutes ne peuvent pas avoir la valeur nulle simultanément.",
  bloquant: "Bloquant",
  critique: "Critique",
  majeur: "Majeur",
  mineur: "Mineur",
  jour: "j",
};
