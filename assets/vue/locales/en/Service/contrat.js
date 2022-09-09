export const contrat = {
  contrat: {
    debut: {
      value: "Start date",
      not_blank: "Beginning date is required.",
    },
    fin: {
      value: "End date",
      not_blank: "End date is required.",
      error:
        "The end date must be later than the start date and later than the current date.",
    },
    niveau: {
      value: "Service level",
      not_blank: "Service level is required.",
    },
    type: {
      value: "Contract type",
      not_blank: "Contract type is required.",
    },
    offre: {
      value: "Service offer",
      not_blank: "Service offer is required.",
    },
    erp: {
      value: "ERP code",
    },
    activite: {
      value: "Activity code",
      not_blank: "Activity code is required.",
    },
    gtd: {
      value: "GTD",
      number: "GTD must be a number between 0 and 100.",
    },
  },

  contrat_service_engagements: "SLA",
  contrat_service: "Service contract",
  engagements: "SLA",
  pas_engagement_gtd: "No commitment of GTD",
  engagement_error_jour: "GTI and GTR commitments cannot have negative days.",
  heure_minute_zero: "Hours and minutes can't have null values at same time.",
  bloquant: "Blocking",
  critique: "Critical",
  majeur: "Major",
  mineur: "Minor",
  jour: "d",
};
