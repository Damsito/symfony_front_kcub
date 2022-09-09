import getAxiosInstance from "@/common/getAxiosInstance";

/**
 * Récupération d'un contact en fonction de son email
 */
export default async function getContactByMail(email) {
  let id = localStorage.id_contact_update;
  let url = process.env.VUE_APP_API_CONTACT_ENTREPRISE + "?email=" + email;
  let instance = await getAxiosInstance();
  return new Promise((resolve) => {
    let doesEmailExists = false;
    instance
      .get(url)
      .then((response) => {
        doesEmailExists = id
          ? response.data["hydra:member"] &&
            response.data["hydra:member"].length !== 0 &&
            response.data["hydra:member"][0]["id"] != id
          : response.data["hydra:member"] &&
            response.data["hydra:member"].length !== 0;
        resolve(doesEmailExists);
      })
      .catch((e) => resolve(e));
  });
}

export async function getContactInterneByMail(email) {
  let url = process.env.VUE_APP_API_CONTACT_INTERNE + "?email=" + email;
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
