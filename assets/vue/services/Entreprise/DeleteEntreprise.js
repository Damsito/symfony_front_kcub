import getAxiosInstance from "@/common/getAxiosInstance";
/**
 * Suppression d'une entreprise
 */
export async function DeleteEntreprise(identifier) {
  let url = process.env.VUE_APP_API_ENTREPRISE + "/" + identifier;
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
