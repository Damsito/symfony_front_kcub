/**
 * Récupération des contacts entreprises qui n'ont pas été importés
 */
export default function getContactsMessageImport() {
  return localStorage.getItem("bad_contacts_import")
    ? JSON.parse(localStorage.getItem("bad_contacts_import"))
    : null;
}
/**
 * Récupération des contacts entreprises qui ont été importés
 */
export function getContactGoodImport() {
  return localStorage.getItem("good_contacts_import")
    ? JSON.parse(localStorage.getItem("good_contacts_import"))
    : null;
}
