/**
 * Récupération des contacts partenaire qui sont dans le storage
 */
export default function getStorageDocumentationService() {
  let documentation = localStorage.documentation || null;
  return (documentation && JSON.parse(documentation)) || null;
}
