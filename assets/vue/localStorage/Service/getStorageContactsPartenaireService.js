/**
 * Récupération des contacts partenaire qui sont dans le storage
 */
export default function getStorageContactsPartenaireService() {
  let contacts_partenaire = localStorage.contacts_partenaire || null;
  return (contacts_partenaire && JSON.parse(contacts_partenaire)) || [];
}
