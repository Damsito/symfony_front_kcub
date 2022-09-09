<template>
  <div class="lastPart col pb-1">
    <SuccessMessage :success-message="service_updated" />
    <ErrorMessage :error-message="service_error" />
    <ErrorMessage
      v-if="messageJira && messageJira.includes('erreur')"
      :error-message="messageJira"
    />
    <div class="container-perso">
      <div class="row detail_top">
        <div class="d-flex">
          <h1>{{ $t("tableau_de_bord") }}</h1>
          <div class="d-flex ms-auto">
            <router-link
              class="btn btn-default btn-orange"
              :to="{ name: getCreerServiceName }"
            >
              <span>{{ $t("ajouter_service") }}</span>
            </router-link>
          </div>
        </div>
      </div>
      <div v-if="statusServices === 'loading'">
        <Spinner />
      </div>
      <div v-else-if="statusServices === 'error'">
        <ErrorMessage :error-message="errorService" />
      </div>
      <div v-else-if="statusServices === 'done'">
        <div class="container-perso" v-if="!errorService">
          <BandeauAlerte :errors="services_with_alertes.errors" />
          <div class="row top-row justify-content-evenly">
            <div class="col-4">
              <ServiceCreeInactif
                :services="services.filter((s) => s.etat === 'C')"
              />
            </div>
            <div class="col-4">
              <ServiceWaitingToBeActivated
                :services="services.filter((s) => s.etat === 'WA')"
              />
            </div>
            <div class="col-4">
              <ServiceActif
                :services="services.filter((s) => s.etat === 'A')"
              />
            </div>
            <div class="col-4">
              <ServiceWaitingToBeDeactivated
                :services="services.filter((s) => s.etat === 'WD')"
              />
            </div>
            <div class="col-4">
              <ServiceDesactive
                :services="services.filter((s) => s.etat === 'D')"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceActif from "./cards/ServiceActif";
import { mapState } from "vuex";
import RouteMixin from "../../mixins/RouteMixin";
import ServiceCreeInactif from "./cards/ServiceCreeInactif";
import { getAdminRoles } from "../../common/roles";
import { ACCUEIL_ADMIN } from "../../common/routes";
import store from "../../store";
import ServiceDesactive from "./cards/ServiceDesactive";
import ServiceWaitingToBeActivated from "./cards/ServiceWaitingToBeActivated";
import ServiceWaitingToBeDeactivated from "./cards/ServiceWaitingToBeDeactivated";
import Spinner from "../../components/Spinner";
import SuccessMessage from "../../components/messages/SuccessMessage";
import ErrorMessage from "../../components/messages/ErrorMessage";
import BandeauAlerte from "../../components/BandeauAlerte";
import getCurrentUser from "../../localStorage/getCurrentUser";
import clearLocalStorage from "../../localStorage/clearLocalStorage";
export default {
  name: "Home",
  mixins: [RouteMixin],
  components: {
    BandeauAlerte,
    SuccessMessage,
    Spinner,
    ServiceWaitingToBeDeactivated,
    ServiceWaitingToBeActivated,
    ServiceDesactive,
    ServiceActif,
    ServiceCreeInactif,
    ErrorMessage,
  },
  data() {
    return {
      messageJira: null,
    };
  },
  watch: {
    messageJira() {
      window.setTimeout(() => {
        this.messageJira = null;
      }, 4000);
    },
  },
  methods: {
    async dispatch() {
      await this.$store.dispatch(
        "service/getServicesInterlocuteurRUNWithOnlyEtat",
        {
          cuid: getCurrentUser().cuid,
        }
      );
    },
  },
  computed: {
    ...mapState({
      services: (state) => state.service.services,
      services_with_alertes: (state) => state.service.services_with_alertes,
      errorService: (state) => state.service.errorService,
      statusServices: (state) => state.service.statusServices,
    }),
  },
  async mounted() {
    await this.dispatch();
    this.messageJira = localStorage.getItem("messageJira");
    clearLocalStorage();
  },
  beforeRouteEnter(to, from, next) {
    if (getAdminRoles().includes(store.state.role)) {
      return next({ path: ACCUEIL_ADMIN });
    } else {
      next();
    }
  },
};
</script>
