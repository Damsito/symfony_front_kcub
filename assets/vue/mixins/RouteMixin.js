import {
  ACCUEIL,
  ACCUEIL_NOM,
  ALERTES,
  CREER_ENTREPRISE,
  CREER_ENTREPRISE_NOM,
  CREER_EQUIPE,
  CREER_SERVICE_CONTACT_ENTREPRISE_NOM,
  CREER_SERVICE_CONTACT_EQUIPE_NOM,
  CREER_SERVICE_CONTRAT_NOM,
  CREER_SERVICE_DOCUMENTATION_NOM,
  CREER_SERVICE_NOM,
  LISTE_CONTACT_ENTREPRISE,
  LISTE_CONTACT_ENTREPRISE_NOM,
  LISTE_CONTACT_INTERNE,
  LISTE_CONTACT_INTERNE_ENTREPRISE,
  LISTE_CONTACT_INTERNE_ENTREPRISE_NOM,
  LISTE_CONTACT_INTERNE_NOM,
  LISTE_ENTREPRISES,
  LISTE_ENTREPRISES_NOM,
  LISTE_EQUIPES,
  LISTE_EQUIPES_NOM,
  LISTE_FILIALES,
  LISTE_FILIALES_NOM,
  LISTE_SERVICE_FILS_NOM,
  MODIFIER_CONTACT_ENTREPRISE_NOM,
  MODIFIER_ENTREPRISE_NOM,
  MODIFIER_EQUIPE_NOM,
  MODIFIER_SERVICE_CONTACT_ENTREPRISE_NOM,
  MODIFIER_SERVICE_CONTACT_EQUIPE_NOM,
  MODIFIER_SERVICE_CONTRAT_NOM,
  MODIFIER_SERVICE_DOCUMENTATION_NOM,
  MODIFIER_SERVICE_NOM,
} from "../common/routes";

const RouteMixin = {
  data() {
    return {
      lang: this.$store.getters.getLang,
    };
  },
  methods: {
    getRouteToComeBack(routeName) {
      let name = localStorage.routeName || routeName;
      let query = {};
      if (name) {
        query =
          localStorage.query && localStorage.query !== "undefined"
            ? JSON.parse(localStorage.query || [])
            : {};
      }
      return { name, query };
    },
  },
  computed: {
    getCreerEntreprisePath: function () {
      return CREER_ENTREPRISE;
    },
    getCreerEntrepriseName: function () {
      return CREER_ENTREPRISE_NOM;
    },
    getAccueilPath() {
      return ACCUEIL;
    },
    getAlertesPath() {
      return ALERTES;
    },
    getAccueilName() {
      return ACCUEIL_NOM;
    },
    getListeEntrepriseName() {
      return LISTE_ENTREPRISES_NOM;
    },
    getListeEntreprisePath() {
      return LISTE_ENTREPRISES;
    },
    getListeFilialePath() {
      return LISTE_FILIALES;
    },
    getListeFilialeName() {
      return LISTE_FILIALES_NOM;
    },
    getListeContactInterneEntreprisePath() {
      return LISTE_CONTACT_INTERNE_ENTREPRISE;
    },
    getListeContactInterneEntrepriseName() {
      return LISTE_CONTACT_INTERNE_ENTREPRISE_NOM;
    },
    getListeContactEntrepriseName() {
      return LISTE_CONTACT_ENTREPRISE_NOM;
    },
    getListeContactEntreprisePath() {
      return LISTE_CONTACT_ENTREPRISE;
    },
    getModifierEntrepriseName() {
      return MODIFIER_ENTREPRISE_NOM;
    },
    getModifierContactEntrepriseName() {
      return MODIFIER_CONTACT_ENTREPRISE_NOM;
    },
    getListeContactInterneName() {
      return LISTE_CONTACT_INTERNE_NOM;
    },
    getListeContactInternePath() {
      return LISTE_CONTACT_INTERNE;
    },
    getListeEquipePath() {
      return LISTE_EQUIPES;
    },
    getListeEquipeName() {
      return LISTE_EQUIPES_NOM;
    },
    getCreerEquipePath() {
      return CREER_EQUIPE;
    },
    getModifierEquipeName() {
      return MODIFIER_EQUIPE_NOM;
    },
    getCreerServiceName() {
      return CREER_SERVICE_NOM;
    },
    getCreerServiceContratName() {
      return CREER_SERVICE_CONTRAT_NOM;
    },
    getCreerServiceContactEquipeName() {
      return CREER_SERVICE_CONTACT_EQUIPE_NOM;
    },
    getCreerServiceContactEntrepriseName() {
      return CREER_SERVICE_CONTACT_ENTREPRISE_NOM;
    },
    getCreerServiceDocumentationName() {
      return CREER_SERVICE_DOCUMENTATION_NOM;
    },

    getModifierServiceName() {
      return MODIFIER_SERVICE_NOM;
    },
    getModifierServiceContratName() {
      return MODIFIER_SERVICE_CONTRAT_NOM;
    },
    getModifierServiceContactEquipeName() {
      return MODIFIER_SERVICE_CONTACT_EQUIPE_NOM;
    },
    getModifierServiceContactEntrepriseName() {
      return MODIFIER_SERVICE_CONTACT_ENTREPRISE_NOM;
    },
    getModifierServiceDocumentationName() {
      return MODIFIER_SERVICE_DOCUMENTATION_NOM;
    },
    getListeServiceFilsName() {
      return LISTE_SERVICE_FILS_NOM;
    },
  },
};

export default RouteMixin;
