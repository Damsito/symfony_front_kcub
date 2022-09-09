/**
 * Récupération des contacts qui sont dans le storage lors de la création de l'entreprise
 */
export function getContactEntrepriseFromStorage() {
  return (
    (localStorage.contacts_entreprise &&
      JSON.parse(localStorage.contacts_entreprise)) ||
    []
  );
}
