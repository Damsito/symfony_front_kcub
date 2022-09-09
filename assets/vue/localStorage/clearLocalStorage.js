import getCurrentUser from "../localStorage/getCurrentUser";

export default function clearLocalStorage() {
  let lang = localStorage.lang;
  let role = localStorage.role;
  let versionFront = localStorage.versionFront;
  let versionBack = localStorage.versionBack;
  let query = localStorage.query;
  let currentUser = getCurrentUser();
  localStorage.clear();
  localStorage.lang = lang ? lang : "fr";
  localStorage.role = role;
  if (versionBack !== "undefined") {
    localStorage.versionBack = versionBack;
  }
  if (versionFront !== "undefined") {
    localStorage.versionFront = versionFront;
  }
  localStorage.currentUser = JSON.stringify(currentUser);
  localStorage.query = query;
}
