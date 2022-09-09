export const entreprise = {
  entreprise: "Company",
  filiale: "Subsidiary",
  client: "Client",
  partenaire: "Partner",
  fournisseur: "Supplier",
  ajouter_entreprise: "Add a company",
  ajouter_filiale: "Add a subsidiary",
  aucune_filiale: "There are no subsidiary matching your search.",
  raison_sociale: "Company",
  siren: "SIREN",
  type: "Type",
  entreprise_form: {
    raison_sociale: "Company name",
    siret: "Siret",
    type: "Type",
    adresse: "Adress",
    entite_groupe: "Orange Subsidiary",
    complement: "Additional adress",
    code_postal: "Postal code",
    ville: "City",
    tel: "Phone number",
    pays: "Country",
  },
  question_delete_entreprise: "Do you really want to delete this company ?",
  question_delete_multiple_entreprises:
    "Do you really want to delete these companies ?",
  entreprise_delete_multiple: "These companies have been successfully deleted.",
  entreprise_delete_one: "This company has been successfully deleted.",
  entreprise_create: "The company has been successfully created.",
  entreprise_update: "The company has been successfuly updated.",
  entreprise_schema: {
    raison_sociale: {
      not_blank: "The company name is required.",
      max: "The company name must contain a maximum of 100 characters.",
      already_exists: "This company name is already taken.",
    },
    siret: {
      not_blank: "The company siret is required.",
      regex: "The company siret must have 14 digits.",
      already_exists: "This company siret is already taken.",
      max: "The company siret must have 14 digits.",
    },
    type: {
      not_blank: "The company name is required.",
    },
    adresse: {
      max: "The company address must contain a maximum of 100 characters.",
    },
    complement_adresse: {
      max: "The address complement must contain a maximum of 250 characters.",
    },
    code_postal: {
      regex: "The zip code must contain 5 digits.",
      max: "The zip code must contain a maximum of 5 numbers.",
    },
    ville: {
      max: "The city must contain a maximum of 50 characters.",
    },
    pays: {
      max: "The country must contain a maximum of 100 characters.",
    },
    telephone: {
      max: "The phone number must contain a maximum of 15 characters.",
      num_international: "The international phone number starts with a +.",
      num_france:
        "The phone number in France starts with a 0 or +33 with 9 digits.",
    },
  },
};
