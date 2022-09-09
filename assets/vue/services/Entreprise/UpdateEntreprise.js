import router from "@/router";
import getAxiosInstance from "@/common/getAxiosInstance";
/**
 * Modification d'une entreprise
 */
export default async function updateEntreprise(json) {
  let instance = await getAxiosInstance();
  return new Promise((resolve, reject) => {
    instance
      .put(
        process.env.VUE_APP_API_ENTREPRISE +
          "/" +
          router.currentRoute.value.params.id,
        json
      )
      .then(
        (response) => {
          {
            resolve(response);
          }
        },
        (error) => {
          reject(error);
        }
      );
  });
}
