import getAxiosInstance from "@/common/getAxiosInstance";
import setMessageErrorJira from "@/services/setMessageErrorJira";
/**
 * Suppression d'une équipe
 */
export async function DeleteEquipe(identifier) {
  let instance = await getAxiosInstance();
  return new Promise((resolve) => {
    instance.delete(process.env.VUE_APP_API_EQUIPE + "/" + identifier).then(
      (response) => {
        {
          resolve(response);
        }
      },
      (error) => {
        setMessageErrorJira(error);
        resolve(error);
      }
    );
  });
}
