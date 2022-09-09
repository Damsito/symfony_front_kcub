/**
 * Récupération des contacts partenaire qui sont dans le storage
 */
export default function getStorageContactsFournisseurService() {
  let contacts_fournisseur = localStorage.contacts_fournisseur || null;
  return (contacts_fournisseur && JSON.parse(contacts_fournisseur)) || [];
}
