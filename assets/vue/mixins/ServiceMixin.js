import { MODIFIER_SERVICE_NOM } from "../common/routes";
import { translation } from "../i18n";

const ServiceMixin = {
  data() {
    return {
      etats: {
        A: "actif",
        WA: "en_attente_activation",
        C: "cree_non_active",
        WD: "en_attente_desactivation",
        D: "desactive",
      },
    };
  },
  methods: {
    formatDate(date = null) {
      if (!date) {
        return "-";
      }
      let d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [day, month, year].join("/");
    },
    getEtat(letter) {
      return this.etats[letter]
        ? translation.global.t(this.etats[letter])
        : "-";
    },
  },
  computed: {
    goToModifierService() {
      return {
        name: MODIFIER_SERVICE_NOM,
        params: {
          code: this.service.code,
        },
      };
    },
    getInterlocuteurRUN() {
      let contact =
        this.service.contactInterneServices.find((c) => c.interlocuteurRUN) ||
        null;
      return (
        (contact &&
          contact.contactInterne.nom + " " + contact.contactInterne.prenom) ||
        "-"
      );
    },
  },
};
export default ServiceMixin;
