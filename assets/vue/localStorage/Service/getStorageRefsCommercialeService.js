/**
 * Récupération de la ref commerciale qui est dans le storage
 */
export default function getStorageRefsFromService() {
  let refs = localStorage.refs || null;
  return (refs && JSON.parse(refs)) || [];
}
