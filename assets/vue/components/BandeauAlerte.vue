<template>
  <Spinner v-if="statusErrorsAlertes === 'loading'" />
  <div
    v-else-if="statusErrorsAlertes === 'done'"
    class="w-100 mx-auto position-relative border-bandeau"
    :class="{
      'border-danger': isInterlocuteurRUN,
      'border-validateur': isValidateurAdminOrSupport,
    }"
    style="height: 4rem"
  >
    <div class="text-center interlocuteur" v-if="isInterlocuteurRUN">
      <p v-if="errors === 0">{{ $t("incoherences_interlocuteur_aucune") }}</p>
      <p v-else-if="errors === 1">
        {{ $t("incoherences_interlocuteur_one", { errors: errors }) }}
      </p>
      <p v-else>
        {{ $t("incoherences_interlocuteur_multiple", { errors: errors }) }}
      </p>
    </div>
    <div class="text-center validateur" v-else-if="isValidateurAdminOrSupport">
      <p v-if="errors === 0">{{ $t("incoherences_validateur_aucune") }}</p>
      <p v-else-if="errors === 1">
        {{ $t("incoherences_validateur_one", { errors: errors }) }}
      </p>
      <p v-else>
        {{ $t("incoherences_validateur_multiple", { errors: errors }) }}
      </p>
    </div>
  </div>
</template>

<script>
import RoleMixin from "../mixins/RoleMixin";
import { mapState } from "vuex";
import Spinner from "./Spinner";
import getCurrentUser from "../localStorage/getCurrentUser";

export default {
  name: "BandeauAlerte",
  components: { Spinner },
  mixins: [RoleMixin],
  async mounted() {
    await this.dispatch();
  },
  methods: {
    async dispatch() {
      if (this.isInterlocuteurRUN) {
        await this.$store.dispatch("service/getErrorsAlertesInterlocuteurRUN", {
          cuid: getCurrentUser().cuid,
        });
      } else if (this.isValidateurAdminOrSupport) {
        await this.$store.dispatch("service/getErrorsAlertesValidateur");
      }
    },
  },
  computed: {
    ...mapState({
      errors: (state) => state.service.errors_alertes,
      statusErrorsAlertes: (state) => state.service.statusErrorsAlertes,
    }),
  },
};
</script>

<style lang="scss">
p {
  margin: 0 !important;
  padding: 20px;
}
.interlocuteur p {
  color: red;
}
.validateur p {
  color: orange;
}
.border-bandeau {
  border: 0.3rem solid #000 !important;
}
.border-validateur {
  border: 0.3rem solid orange !important;
}
</style>
