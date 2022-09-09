import getAxiosInstance from "@/common/getAxiosInstance";

/**
 * Suppression d'un contact entreprise
 */
export async function DeleteContactEntreprise(identifier) {
  let url = process.env.VUE_APP_API_CONTACT_ENTREPRISE + "/" + identifier;
  return (await getAxiosInstance()).delete(url);
}

export async function DeleteContactInterneEntreprise(identifier) {
  let url =
    process.env.VUE_APP_API_ENTREPRISE_CONTACT_INTERNE + "/" + identifier;
  return (await getAxiosInstance()).delete(url);
}
