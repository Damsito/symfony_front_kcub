import { menu } from "./fr/menu";
import { entreprise } from "./fr/entreprise";
import { contact_entreprise } from "./fr/contact_entreprise";
import { contact_interne } from "./fr/contact_interne";
import { equipe } from "./fr/equipe";
import { contact_interne_service } from "./fr/contact_interne_service";
import { accueil } from "./fr/accueil";
import { service } from "./fr/Service/service";
import { documentation } from "./fr/Service/documentation";
import { informationsGenerales } from "./fr/Service/informationsGenerales";
import { contrat } from "./fr/Service/contrat";
import { contact_equipe_service } from "./fr/Service/contact_equipe_service";
import { contact_client_partenaire_fournisseur } from "./fr/Service/contact_client_partenaire_fournisseur";
import { jira } from "./fr/jira";
import { alerte } from "./fr/alerte";
import { reference } from "./fr/Service/reference";

export const fr = {
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
  deconnexion: "Déconnexion",
  saisissez: "Saisissez au moins 3 caractères pour la recherche",
  tous: "Tous",
  aucun: "Aucun",
  rechercher: "Rechercher",
  informations_generales: "Informations générales",
  connexion_en_cours: "Connexion en cours",
  societe: "Société",
  debut: "Début",
  fin: "Fin",
  etat: "Etat",
  suivant: "Suivant",
  annuler: "Annuler",
  nom: "Nom",
  prenom: "Prénom",
  valider: "Valider",
  revenir: "Revenir",
  voir: "Voir",
  ajouter: "Ajouter",
  fermer: "Fermer",
  retour: "Retour",
  precedent: "Précédent",
  modifier: "Modifier",
  oui: "Oui",
  non: "Non",
  annulation_saisie: "Confirmez-vous l'annulation des saisies effectuées ?",
  supprimer: "Voulez-vous vraiment supprimer ",
  supprimer_title: "Supprimer",
  numero_tel: "Numéro de téléphone",
  telephone: "Téléphone",
  importer: "Importer",
  exporter: "Exporter",
  exporter_contacts_externes: "Exporter les contacts externes",
  ok: "OK",
  mail_existe: "Le mail existe déjà.",
  filename_error: "Le nom du fichier est requis.",
  nom_fichier: "Nom du fichier",
  nom_fichier_question: "Veuillez entrer le nom du fichier.",
  page_indisponible:
    "Cette page est momentanément indisponible, veuillez réessayer plus tard.",
  select: "Sélectionnez",
  deselect: "Désélectionnez",
  filtrer: "Filtrer",
  contact_add_one: "Le contact a bien été ajouté.",
  contact_add_multiple: "Les contacts ont bien été ajoutés.",
  no_route: "Cette route n'existe pas.",
  revenir_accueil: "Revenir à l'accueil",
};
