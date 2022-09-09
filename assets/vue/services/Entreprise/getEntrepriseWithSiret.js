import getAxiosInstance from "@/common/getAxiosInstance";
import router from "@/router";

/**
 * Récupération d'une entreprise en fonction de son siret
 */
export default async function getEntrepriseWithSiret(siret) {
  let id = router.currentRoute.value.params.id;
  let url = process.env.VUE_APP_API_ENTREPRISE + "?siret=" + siret;
  let instance = await getAxiosInstance();
  return new Promise((resolve, reject) => {
    let doesSiretExists = false;
    instance
      .get(url, {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      })
      .then((response) => {
        doesSiretExists = id
          ? response.data["hydra:member"] &&
            response.data["hydra:member"].length !== 0 &&
            response.data["hydra:member"][0]["id"] != id
          : response.data["hydra:member"] &&
            response.data["hydra:member"].length !== 0;
        resolve(doesSiretExists);
      })
      .catch((e) => {
        reject(e);
      });
  });
}
