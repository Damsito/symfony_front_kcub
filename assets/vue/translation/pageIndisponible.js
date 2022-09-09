import store from "../store";
export default function pageIndisponible() {
  return store.getters.getLang === "en"
    ? "This page is currently unavailable, please try again later."
    : "Cette page est momentanément indisponible, veuillez réessayer plus tard.";
}
