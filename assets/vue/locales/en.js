import { menu } from "./en/menu";
import { entreprise } from "./en/entreprise";
import { contact_entreprise } from "./en/contact_entreprise";
import { contact_interne } from "./en/contact_interne";
import { equipe } from "./en/equipe";
import { contact_interne_service } from "./en/contact_interne_service";
import { accueil } from "./en/accueil";
import { service } from "./en/Service/service";
import { documentation } from "./en/Service/documentation";
import { informationsGenerales } from "./en/Service/informationsGenerales";
import { contrat } from "./en/Service/contrat";
import { contact_equipe_service } from "./en/Service/contact_equipe_service";
import { contact_client_partenaire_fournisseur } from "./en/Service/contact_client_partenaire_fournisseur";
import { jira } from "./en/jira";
import { alerte } from "./en/alerte";
import { reference } from "./en/Service/reference";

export const en = {
  ...menu,
  ...entreprise,
  ...contact_entreprise,
  ...contact_interne,
  ...equipe,
  ...contact_interne_service,
  ...accueil,
  ...service,
  ...jira,
  ...alerte,
  ...contrat,
  ...contact_equipe_service,
  ...contact_client_partenaire_fournisseur,
  ...documentation,
  ...informationsGenerales,
  ...reference,
  deconnexion: "Log out",
  saisissez: "Enter at least 3 characters for the search",
  tous: "All",
  aucun: "Any",
  rechercher: "Search",
  informations_generales: "General information",
  connexion_en_cours: "Loading...",
  societe: "Company",
  etat: "State",
  debut: "First",
  fin: "Last",
  suivant: "Next",
  annuler: "Cancel",
  voir: "See",
  supprimer_title: "Delete",
  nom: "Lastname",
  prenom: "Firstname",
  valider: "Validate",
  revenir: "Back",
  ajouter: "Add",
  modifier: "Update",
  fermer: "Close",
  retour: "Back",
  precedent: "Previous",
  oui: "Yes",
  non: "No",
  annulation_saisie: "Do you confirm the cancellation of the seizures made ?",
  supprimer: "Do you really want to delete ",
  numero_tel: "Phone number",
  telephone: "Phone",
  importer: "Import",
  exporter: "Export",
  exporter_contacts_externes: "Export extern contacts",
  mail_existe: "This mail already exists.",
  filename_error: "The filename is required.",
  filtrer: "Filter",
  nom_fichier: "Filename",
  nom_fichier_question: "Enter the filename you want.",
  page_indisponible:
    "This page is currently unavailable, please try again later.",
  select: "Select",
  deselect: "Deselect",
  contact_add_one: "This contact has been successfully added.",
  contact_add_multiple: "These contacts have been successfully added.",
  no_route: "This route doesn't exist.",
  revenir_accueil: "Go back home.",
};
