import router from "@/router";
import getAxiosInstance from "@/common/getAxiosInstance";

export default async function updateContactInterneEntreprise(id = null, json) {
  if (!id) {
    localStorage.service_error = "service_error";
    await router.push("/");
  }
  let url = process.env.VUE_APP_API_ENTREPRISE_CONTACT_INTERNE + "/" + id;

  (await getAxiosInstance())
    .put(url, json)
    .then((r) => console.log(r))
    .catch(() => {
      localStorage.service_error = "service_error";
      router.push("/");
    });
}
