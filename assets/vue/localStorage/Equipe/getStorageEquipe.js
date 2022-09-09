/**
 * Récupération de l'équipé qui est dans le storage
 */
export default function getStorageEquipe() {
  let equipe = localStorage.equipe;
  return (equipe && JSON.parse(equipe)) || null;
}
