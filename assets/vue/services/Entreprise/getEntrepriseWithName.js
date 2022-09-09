import router from "@/router";
import getAxiosInstance from "@/common/getAxiosInstance";

/**
 * Récupération d'une entreprise en fonction de sa raison sociale
 */
export default async function getEntrepriseWithName(name) {
  let id = router.currentRoute.value.params.id;
  let url = process.env.VUE_APP_API_ENTREPRISE + "?exact_raisonSociale=" + name;
  let instance = await getAxiosInstance();
  return new Promise((resolve, reject) => {
    let doesNameExists = false;
    instance
      .get(url, {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      })
      .then((response) => {
        doesNameExists = id
          ? response.data["hydra:member"] &&
            response.data["hydra:member"].length !== 0 &&
            response.data["hydra:member"][0]["id"] != id
          : response.data["hydra:member"] &&
            response.data["hydra:member"].length !== 0;
        resolve(doesNameExists);
      })
      .catch((e) => {
        reject(e);
      });
  });
}
