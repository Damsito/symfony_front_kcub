import router from "@/router";
import getAxiosInstance from "@/common/getAxiosInstance";

export default async function deleteEquipeInterneService(id = null) {
  if (!id) {
    localStorage.service_error = "service_error";
    await router.push("/");
  }
  let url = process.env.VUE_APP_API_EQUIPE_INTERNE_SERVICE + "/" + id;

  (await getAxiosInstance()).delete(url).catch(() => {
    localStorage.service_error = "service_error";
    router.push("/");
  });
}
