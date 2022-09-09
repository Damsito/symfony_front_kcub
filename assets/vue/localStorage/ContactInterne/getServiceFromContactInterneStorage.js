/**
 * Récupération des contacts internes d'un service dans le localstorage
 */
export function getServiceFromContactInterneStorage() {
  let contacts_internes_service = localStorage.contacts_internes_service;
  return (
    (contacts_internes_service && JSON.parse(contacts_internes_service)) || []
  );
}
