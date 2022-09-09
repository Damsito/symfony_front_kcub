/**
 * Fusion de deux tableaux
 */
export function fusion(array1 = [], array2 = []) {
  return [...array1, ...array2];
}
/**
 * Récupération d'un tableau d'IDS avec en entrée une suite de chiffre (ex: 1,2,3)
 */
export function getArrayOfIds(array) {
  return array
    .split(",")
    .filter((e) => !isNaN(e))
    .map(Number);
}
