import router from "@/router";
import getAxiosInstance from "@/common/getAxiosInstance";
import setMessageErrorJira from "@/services/setMessageErrorJira";
/**
 * Modification d'une équipe
 */
export default async function updateEquipe(json) {
  let instance = await getAxiosInstance();
  return new Promise((resolve) => {
    instance
      .put(
        process.env.VUE_APP_API_EQUIPE +
          "/" +
          router.currentRoute.value.params.id,
        json
      )
      .then(
        (response) => {
          {
            if (response.status === 200) {
              localStorage.message = "equipe_update";
            }
            resolve(response);
          }
        },
        (error) => {
          setMessageErrorJira(error);
          resolve(error);
        }
      );
  });
}
