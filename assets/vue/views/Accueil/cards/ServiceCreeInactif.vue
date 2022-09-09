<template>
  <div class="card-home service-to-activate">
    <div class="card-header-home">
      <div class="card-header-home-padding">
        {{ $t("service_cree_non_active") }}
      </div>
    </div>
    <div class="card-number">
      <div class="card-number-padding">{{ services.length }}</div>
    </div>
    <div class="card-footer-home">
      <div class="card-footer-home-padding bg-supporting-blue to-activate">
        <router-link id="service_cree" :to="goToServicesCrees">{{
          $t("voir_services")
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {
  SERVICES_CREES_NON_ACTIVES,
  SERVICES_CREES_NON_ACTIVES_ADMIN,
} from "../../../common/routes";
import { getAdminRoles } from "../../../common/roles";

export default {
  name: "ServiceCreeInactif",
  computed: {
    goToServicesCrees() {
      if (getAdminRoles().includes(this.$store.state.role)) {
        return SERVICES_CREES_NON_ACTIVES_ADMIN;
      }
      return SERVICES_CREES_NON_ACTIVES;
    },
  },
  props: {
    services: {
      required: true,
    },
  },
};
</script>
