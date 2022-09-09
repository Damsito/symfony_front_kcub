import getAxiosInstance from "@/common/getAxiosInstance";
import setMessageErrorJira from "@/services/setMessageErrorJira";
/**
 * Activation d'un service
 */
export async function activateService(code) {
  let url = process.env.VUE_APP_API_SERVICE + "/" + code;
  let instance = await getAxiosInstance();
  return new Promise((resolve) => {
    instance.put(url, JSON.stringify({ etat: "A" })).then(
      async (response) => {
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

export async function cancelActivationService(code) {
  let url = process.env.VUE_APP_API_SERVICE + "/" + code;
  let instance = await getAxiosInstance();
  return new Promise((resolve, reject) => {
    instance.put(url, JSON.stringify({ etat: "C" })).then(
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
 * Mise d'un service en attente d'activation
 */
export async function putServiceInWaitingForActivation(code) {
  let url = process.env.VUE_APP_API_SERVICE + "/" + code;
  let instance = await getAxiosInstance();
  return new Promise((resolve, reject) => {
    instance.put(url, JSON.stringify({ etat: "WA" })).then(
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
 * Mise d'un service en attente de désactivation
 */
export async function putServiceInWaitingForDeactivation(code) {
  let url = process.env.VUE_APP_API_SERVICE + "/" + code;
  let instance = await getAxiosInstance();
  return new Promise((resolve, reject) => {
    instance.put(url, JSON.stringify({ etat: "WD" })).then(
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
 * Désactivation d'un service
 */
export async function deactivateService(code) {
  let url = process.env.VUE_APP_API_SERVICE + "/" + code;
  let instance = await getAxiosInstance();
  return new Promise((resolve) => {
    instance.put(url, JSON.stringify({ etat: "D" })).then(
      async (response) => {
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
/**
 * Annulation de désactivation d'un service
 */
export async function cancelDeactivateService(code) {
  let url = process.env.VUE_APP_API_SERVICE + "/" + code;
  let instance = await getAxiosInstance();
  return new Promise((resolve, reject) => {
    instance.put(url, JSON.stringify({ etat: "A" })).then(
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
 * Suppression d'un service
 */
export async function deleteService(code) {
  let url = process.env.VUE_APP_API_SERVICE + "/" + code;
  let instance = await getAxiosInstance();
  return new Promise((resolve, reject) => {
    instance.delete(url).then(
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
