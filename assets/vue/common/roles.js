export function administrateur() {
  return "ADMIN";
}
export function validateur() {
  return "VALIDATEUR";
}
export function support() {
  return "SUPPORT";
}
export function expert() {
  return "EXPERT_TECH_FONC";
}
export function interlocuteurRUN() {
  return "PILOTE_RUN";
}
export function getAdminRoles() {
  return [administrateur(), validateur(), support()];
}

export function getInterlocuteurRUNRoles() {
  return [interlocuteurRUN(), expert()];
}
export function getRoles() {
  return [...getAdminRoles(), ...getInterlocuteurRUNRoles()];
}
