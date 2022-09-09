<template>
  <div class="card-home service-to-activate">
    <div class="card-header-home">
      <div class="card-header-home-padding">
        {{ $t("service_en_attente_activation") }}
      </div>
    </div>
    <div class="card-number">
      <div class="card-number-padding">{{ services.length }}</div>
    </div>
    <div class="card-footer-home">
      <div class="card-footer-home-padding bg-supporting-yellow to-activate">
        <router-link id="service_to_activate" :to="goToServicesToActivate">{{
          $t("voir_services")
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {
  SERVICES_A_ACTIVER_ADMIN,
  SERVICES_EN_ATTENTE_ACTIVATION,
} from "../../../common/routes";
import { getAdminRoles } from "../../../common/roles";

export default {
  name: "ServiceWaitingToBeActivated",
  props: {
    services: {
      required: true,
    },
  },
  computed: {
    goToServicesToActivate() {
      if (getAdminRoles().includes(this.$store.state.role)) {
        return SERVICES_A_ACTIVER_ADMIN;
      }
      return SERVICES_EN_ATTENTE_ACTIVATION;
    },
  },
};
</script>
