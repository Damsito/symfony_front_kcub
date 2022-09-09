<template>
  <div class="card-home service-actif">
    <div class="card-header-home">
      <div class="card-header-home-padding">
        {{ $t("service_desactive") }}
      </div>
    </div>
    <div class="card-number">
      <div class="card-number-padding">{{ services.length }}</div>
    </div>
    <div class="card-footer-home">
      <div class="card-footer-home-padding bg-black active-services">
        <router-link id="service_desactive" :to="goToServicesDeactivated">{{
          $t("voir_services")
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {
  SERVICES_DESACTIVES,
  SERVICES_DESACTIVES_ADMIN,
} from "../../../common/routes";
import { getAdminRoles } from "../../../common/roles";

export default {
  name: "ServiceDesactive",
  props: {
    services: {
      required: true,
    },
  },
  computed: {
    goToServicesDeactivated() {
      if (getAdminRoles().includes(this.$store.state.role)) {
        return SERVICES_DESACTIVES_ADMIN;
      }
      return SERVICES_DESACTIVES;
    },
  },
};
</script>
