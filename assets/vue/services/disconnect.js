export default function disconnect() {
  window.location =
    process.env.VUE_APP_KCUB_TEST_URL + process.env.VUE_APP_DISCONNECT_URL;
}
