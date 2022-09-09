export const entreprise = {
  entreprise: "Entreprise",
  filiale: "Filiale",
  client: "Client",
  partenaire: "Partenaire",
  fournisseur: "Fournisseur",
  ajouter_entreprise: "Ajouter une entreprise",
  ajouter_filiale: "Ajouter une filiale",
  aucune_entreprise: "Aucune entreprise ne correspond à votre recherche.",
  aucune_filiale: "Aucune filiale ne correspond à votre recherche.",
  raison_sociale: "Raison sociale",
  siren: "SIREN",
  type: "Type",
  entreprise_form: {
    raison_sociale: "Raison sociale",
    entite_groupe: "Entité du groupe Orange",
    siret: "Siret",
    type: "Type",
    adresse: "Adresse",
    complement: "Complément d'adresse",
    code_postal: "Code postal",
    ville: "Ville",
    tel: "Téléphone",
    pays: "Pays",
  },
  question_delete_entreprise:
    "Voulez-vous vraiment supprimer cette entreprise ?",
  question_delete_multiple_entreprises:
    "Voulez-vous vraiment supprimer ces entreprises ?",
  entreprise_create: "L'entreprise a bien été créée.",
  entreprise_delete_multiple: "Ces entreprises ont bien été supprimées.",
  entreprise_delete_one: "Cette entreprise a bien été supprimée.",
  entreprise_update: "L'entreprise a bien été modifiée.",
  entreprise_schema: {
    raison_sociale: {
      not_blank: "La raison sociale de l'entreprise doit être renseignée.",
      max: "La raison sociale doit contenir au maximum 100 caractères.",
      already_exists: "Cette raison sociale existe déjà.",
    },
    siret: {
      not_blank: "Le siret de l'entreprise doit être renseigné.",
      regex: "Le siret doit contenir 14 chiffres.",
      already_exists: "Ce siret existe déjà.",
      max: "Le siret doit contenir 14 chiffres.",
    },
    type: {
      not_blank: "Le type de l'entreprise doit être renseigné.",
    },
    adresse: {
      max: "L'adresse doit contenir au maximum 100 caractères.",
    },
    complement_adresse: {
      max: "Le complément d'adresse doit contenir au maximum 250 caractères.",
    },
    code_postal: {
      regex: "Le code postal doit contenir 5 chiffres.",
      max: "Le code postal doit contenir au maximum 5 chiffres.",
    },
    ville: {
      max: "La ville doit contenir au maximum 50 caractères.",
    },
    pays: {
      max: "Le pays doit contenir au maximum 100 caractères.",
    },
    telephone: {
      max: "Le numéro de téléphone doit contenir au maximum 15 caractères.",
      num_international:
        "Le numéro de téléphone à l'international commence par un +.",
      num_france:
        "Le numéro de téléphone en France commence par un 0 ou +33 avec 9 chiffres.",
    },
  },
};
