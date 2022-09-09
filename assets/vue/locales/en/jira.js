export const jira = {
  equipe_jira_created: "The team has been successfully created in JIRA.",
  equipe_jira_deleted: "The team has been successfully deleted in JIRA.",
  contacts_non_ajoutes: (ctx) =>
    `${ctx.named(
      "contacts"
    )} have not habilitation access and/or have never been connected to Jira.`,
  erreur_jira_auth:
    "Erreur lors de l'appel à un service externe . Veuillez contacter le support de l'application (API_001 - problème de droits d'accès au service distant)",
  erreur_jira_client:
    "Erreur lors de l'appel à un service externe. Veuillez contacter le support de l'application (API_002 - problème de données envoyées par le client)",
  erreur_jira_500:
    "Erreur lors de l'appel à un service externe. Veuillez contacter le support de l'application (API_003 : erreur interne sur le service appelé)",
};
