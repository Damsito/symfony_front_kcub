import axios from "axios";
import store from "../store";
import getTokenApi from "../common/getTokenApi";
import Cookies from "js-cookie";
import router from "../router";

export default async function getAxiosInstance() {
  let lang = store.getters.getLang
    ? store.getters.getLang
    : process.env.VUE_APP_I18N_FALLBACK_LOCALE;
  const instance = axios.create({
    baseURL: process.env.VUE_APP_KCUB_BACK + lang,
  });
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401) {
        Cookies.remove("token");
        router.go(0);
      }
      return Promise.reject(error);
    }
  );
  instance.defaults.headers.common["Authorization"] =
    "Bearer " + (await getTokenApi());
  instance.defaults.headers.post["Content-Type"] = "application/json";
  instance.defaults.headers.put["Content-Type"] = "application/json";
  return instance;
}
