/**
 * Récupération de l'entreprise qui est dans le storage
 */
export default function getEntreprise() {
  let entreprise = localStorage.entreprise;
  return (entreprise && JSON.parse(entreprise)) || null;
}
