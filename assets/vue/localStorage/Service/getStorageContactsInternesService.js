/**
 * Récupération des contacts internes qui sont dans le storage
 */
export default function getContactInterneFromServiceStorage() {
  let contacts_internes = localStorage.contacts_internes || null;
  return (contacts_internes && JSON.parse(contacts_internes)) || [];
}
