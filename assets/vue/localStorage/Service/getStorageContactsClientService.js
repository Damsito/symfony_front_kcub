/**
 * Récupération des contacts internes qui sont dans le storage
 */
export default function getStorageContactsClientService() {
  let contacts_client = localStorage.contacts_client || null;
  return (contacts_client && JSON.parse(contacts_client)) || [];
}
