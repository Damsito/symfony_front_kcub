import getAxiosInstance from "@/common/getAxiosInstance";
/**
 * Suppression d'un contact interne
 */
export async function DeleteContactInterne(cuid) {
  let url = process.env.VUE_APP_API_CONTACT_INTERNE + "/" + cuid;
  return (await getAxiosInstance())
    .delete(url)
    .then(function () {
      return {
        success: true,
      };
    })
    .catch((error) => {
      console.log(error);
    });
}
