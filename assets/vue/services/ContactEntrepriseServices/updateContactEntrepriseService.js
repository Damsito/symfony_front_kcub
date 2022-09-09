import router from "@/router";
import getAxiosInstance from "@/common/getAxiosInstance";

export default async function updateContactEntrepriseService(id = null, acces) {
  if (!id) {
    localStorage.service_error = "service_error";
    await router.push("/");
  }
  let url = process.env.VUE_APP_API_CONTACT_ENTREPRISE_SERVICE + "/" + id;

  (await getAxiosInstance())
    .put(
      url,
      JSON.stringify({
        habilitationPortail: acces,
      })
    )
    .then((r) => console.log(r))
    .catch(() => {
      localStorage.service_error = "service_error";
      router.push("/");
    });
}
