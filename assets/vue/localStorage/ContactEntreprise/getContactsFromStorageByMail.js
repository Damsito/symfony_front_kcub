import { getContactEntrepriseFromStorage } from "@/localStorage/ContactEntreprise/getContact";

/**
 * Vérification qu'un contact entreprise existe ou non dans le storage par son mail
 */
export default function getContactsFromStorageByMail(email) {
  return (
    getContactEntrepriseFromStorage().filter((c) => c.email === email).length >
    0
  );
}
