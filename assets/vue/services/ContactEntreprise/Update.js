import getAxiosInstance from "@/common/getAxiosInstance";
/**
 * Modification d'un contact entreprise
 */
export async function updateContact(json) {
  let id = json.id;
  delete json.id;
  let instance = await getAxiosInstance();
  return new Promise((resolve, reject) => {
    instance
      .put(process.env.VUE_APP_API_CONTACT_ENTREPRISE + "/" + id, json)
      .then(
        (response) => {
          {
            resolve(response);
          }
        },
        (error) => {
          reject(error);
        }
      );
  });
}

/**
 * Modification d'un contact interne entreprise
 */
export async function updateContactInterneEntreprise(id, fonction) {
  let instance = await getAxiosInstance();
  return new Promise((resolve, reject) => {
    instance
      .put(
        process.env.VUE_APP_API_ENTREPRISE_CONTACT_INTERNE + "/" + id,
        JSON.stringify({
          fonction,
        })
      )
      .then(
        (response) => {
          {
            resolve(response);
          }
        },
        (error) => {
          reject(error);
        }
      );
  });
}
