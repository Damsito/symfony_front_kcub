/**
 * Récupération des contacts internes qui sont dans le storage
 */
export default function getContactInterneEquipeStorage() {
  let contacts_internes_equipe = localStorage.contacts_internes_equipe;
  return (
    (contacts_internes_equipe && JSON.parse(contacts_internes_equipe)) || []
  );
}

/**
 * Récupération des equipes d'un service dans le localstorage
 */
export function getServiceFromEquipeStorage() {
  let services_equipes = localStorage.services_equipes;
  return (services_equipes && JSON.parse(services_equipes)) || [];
}
