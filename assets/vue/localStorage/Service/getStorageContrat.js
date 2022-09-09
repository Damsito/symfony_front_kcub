/**
 * Récupération de l'équipé qui est dans le storage
 */
export default function getStorageContrat() {
  let contrat = localStorage.contrat || null;
  return (contrat && JSON.parse(contrat)) || null;
}
