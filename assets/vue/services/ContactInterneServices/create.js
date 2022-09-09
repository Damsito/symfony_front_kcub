import router from "@/router";
import getAxiosInstance from "@/common/getAxiosInstance";

export default async function createContactInterneService(json) {
  let url = process.env.VUE_APP_API_CONTACT_INTERNE_SERVICE;
  (await getAxiosInstance()).post(url, json).catch(() => {
    localStorage.service_error = "service_error";
    router.push("/");
  });
}
