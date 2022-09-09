/**
 * Récupération de l'équipé qui est dans le storage
 */
export default function getStorageService() {
  let service = localStorage.service || null;
  return (service && JSON.parse(service)) || null;
}
