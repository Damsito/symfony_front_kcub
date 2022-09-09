/**
 * Récupération de l'équipé qui est dans le storage
 */
export default function getStorageEquipeFromService() {
  let equipes = localStorage.equipes || null;
  return (equipes && JSON.parse(equipes)) || null;
}
