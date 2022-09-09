export const contact_equipe_service = {
  service_equipe: {
    equipe: {
      value: "Team",
      not_blank: "The team is required.",
    },
    equipe_par_defaut: "Default team",
    niveau: {
      value: "Level",
      not_blank: "The team level is required.",
    },
    motif: {
      value: "Reason for request ",
      not_blank:
        "The reason for request must be filled in for a team Level L3 or Other.",
    },
    idOne: {
      value: "ID 1",
      not_blank: "Id 1 is required.",
    },
    idTwo: "ID 2",
    idThree: "ID 3",
    idFour: "ID 4",
  },
  chaine_soutien: "Chain of support",
  interlocuteur: "RUN interlocutor",
  service_ci: {
    contact: {
      not_blank: "The intern contact is required.",
    },
    role: {
      not_blank: "The intern contact role is required.",
    },
  },
  liste_contact_interne: "List of the team members of",
  liste_ids_equipes: "List of the IDS of",
  chercher_equipe: "Fill a team",
  chercher_contact_interne: "Fill an intern contact",
  chercher_fonction: "Fill the contact function",
  contact_chaine: "Contacts and teams",
  contact_client: "Company contacts",
};
