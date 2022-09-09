import getAxiosInstance from "@/common/getAxiosInstance";

/**
 * Modification des services d'une équipe
 */
export async function updateServiceFromEquipe(id, equipeInterneServices) {
  let json = {
    equipeInterneServices,
  };
  (await getAxiosInstance())
    .put(process.env.VUE_APP_API_EQUIPE + "/" + id, JSON.stringify(json))
    .then((r) => {
      if (r.status === 200) {
        localStorage.equipe_updated = "equipe_update";
      }
    })
    .catch((e) => console.log(e));
}
