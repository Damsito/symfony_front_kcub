<template>
  <div class="card-home service-to-activate">
    <div class="card-header-home">
      <div class="card-header-home-padding">
        {{ $t("service_en_attente_desactivation") }}
      </div>
    </div>
    <div class="card-number">
      <div class="card-number-padding">{{ services.length }}</div>
    </div>
    <div class="card-footer-home">
      <div class="card-footer-home-padding bg-primary waiting-to-activate">
        <router-link
          id="service_to_deactivate"
          :to="goToServicesToDeactivate"
          >{{ $t("voir_services") }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import {
  SERVICES_EN_ATTENTE_DE_DESACTIVATION,
  SERVICES_EN_ATTENTE_DE_DESACTIVATION_ADMIN,
} from "../../../common/routes";
import { getAdminRoles } from "../../../common/roles";

export default {
  name: "ServiceWaitingToBeDeactivated",
  props: {
    services: {
      required: true,
    },
  },
  computed: {
    goToServicesToDeactivate() {
      if (getAdminRoles().includes(this.$store.state.role)) {
        return SERVICES_EN_ATTENTE_DE_DESACTIVATION_ADMIN;
      }
      return SERVICES_EN_ATTENTE_DE_DESACTIVATION;
    },
  },
};
</script>
