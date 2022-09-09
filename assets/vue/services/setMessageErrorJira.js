export default function setMessageErrorJira(error) {
  if (
    error.response.status === 401 ||
    error.response.status === 403 ||
    error.response.status === 407
  ) {
    localStorage.messageJira = "erreur_jira_auth";
  } else if (error.response.status >= 400 && error.response.status < 500) {
    localStorage.messageJira = "erreur_jira_client";
    if (error.response.data && !error.response.data?.errorMessages) {
      localStorage.jira_contacts_non_ajoutes = error.response.data;
    }
    if (error.response.data && error.response.data?.errorMessages) {
      localStorage.messageErrorJira = error.response.data.errorMessages;
    }
  } else if (error.response.status >= 500 && error.response.status < 599) {
    localStorage.messageJira = "erreur_jira_500";
  }
}
