<template>
  <div class="card-home service-actif">
    <div class="card-header-home">
      <div class="card-header-home-padding">
        {{ $t("service_actif") }}
      </div>
    </div>
    <div class="card-number">
      <div class="card-number-padding">{{ services.length }}</div>
    </div>
    <div class="card-footer-home">
      <div class="card-footer-home-padding bg-supporting-green active-services">
        <router-link id="service_actif" :to="goToServicesActifs">{{
          $t("voir_services")
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { SERVICES_ACTIFS, SERVICES_ACTIFS_ADMIN } from "../../../common/routes";
import { getAdminRoles } from "../../../common/roles";

export default {
  name: "ServiceActif",
  props: {
    services: {
      required: true,
    },
  },
  computed: {
    goToServicesActifs() {
      if (getAdminRoles().includes(this.$store.state.role)) {
        return SERVICES_ACTIFS_ADMIN;
      }
      return SERVICES_ACTIFS;
    },
  },
};
</script>
