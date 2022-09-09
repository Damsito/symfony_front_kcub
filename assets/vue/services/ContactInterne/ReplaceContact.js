import getAxiosInstance from "@/common/getAxiosInstance";

/**
 * Remplacement des services d'un contact interne par un autre
 */
export default async function ReplaceContact(
  id,
  uri,
  fonction = null,
  interlocuteurRUN = null
) {
  let json = {
    contactInterne: uri,
  };
  if (fonction) {
    json["fonction"] = fonction;
  }
  if (interlocuteurRUN === false || interlocuteurRUN === true) {
    json["interlocuteurRUN"] = !!interlocuteurRUN;
  }
  let instance = await getAxiosInstance();
  return new Promise((resolve, reject) => {
    instance
      .put(process.env.VUE_APP_API_CONTACT_INTERNE_SERVICE + "/" + id, json)
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
 * Remplacement des services d'une equipe par un autre
 */
export async function ReplaceServiceEquipe(
  id,
  equipe_identifier,
  equipes_info
) {
  let json = {
    equipeInterne: equipe_identifier,
    ...equipes_info,
  };
  let instance = await getAxiosInstance();
  return instance
    .put(process.env.VUE_APP_API_EQUIPE_INTERNE_SERVICE + "/" + id, json)
    .then((response) => {
      return response;
    })
    .catch((e) => {
      return e;
    });
}
