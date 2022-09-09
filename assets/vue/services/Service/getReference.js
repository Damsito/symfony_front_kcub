import getAxiosInstance from "@/common/getAxiosInstance";

export default async function getReference(reference) {
  let url =
    process.env.VUE_APP_API_REFERENCE_COMMERCIALE + "?reference=" + reference;
  let instance = await getAxiosInstance();
  return new Promise((resolve) => {
    instance
      .get(url)
      .then((response) => {
        resolve(response.data["hydra:member"]);
      })
      .catch((e) => resolve(e));
  });
}
