import Cookies from "js-cookie";
import axios from "axios";

export default async function getTokenApi() {
  let token = Cookies.get("token");
  if (!token) {
    let response = await axios.post(
      process.env.VUE_APP_KCUB_BACK + "authentication_token",
      {
        username: process.env.VUE_APP_FRONT_USERNAME,
        password: process.env.VUE_APP_FRONT_PASSWORD,
      }
    );
    token = response.data.token;
    token &&
      Cookies.set("token", token, {
        expires: 1 / 24,
        sameSite: "strict",
        secure: true,
      });
  }
  return token;
}
