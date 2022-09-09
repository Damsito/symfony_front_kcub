import getAxiosInstance from "@/common/getAxiosInstance";

/**
 * Modification des services d'un contact interne
 */
export async function updateServiceFromContactInterne(
  id,
  contactInterneServices
) {
  let json = {
    contactInterneServices,
  };
  (await getAxiosInstance())
    .put(
      process.env.VUE_APP_API_CONTACT_INTERNE + "/" + id,
      JSON.stringify(json)
    )
    .catch((e) => console.log(e));
}
