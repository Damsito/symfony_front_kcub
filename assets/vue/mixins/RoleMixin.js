import { mapState } from "vuex";
import {
  administrateur,
  interlocuteurRUN,
  support,
  validateur,
} from "../common/roles";

const RoleMixin = {
  computed: {
    ...mapState({
      role: (state) => state.role,
    }),
    isInterlocuteurRUN() {
      return this.role === interlocuteurRUN();
    },
    isValidateurAdminOrSupport() {
      return [administrateur(), validateur(), support()].includes(this.role);
    },
    isValidateurAdmin() {
      return [administrateur(), validateur()].includes(this.role);
    },
  },
};

export default RoleMixin;
