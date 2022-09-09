<template>
  <router-link
    v-if="getRoute"
    id="cancelBtn"
    type="button"
    class="btn btn-sm btn-default detail_feet_button pull-left"
    :to="getRoute"
  >
    {{ $t(label) }}
  </router-link>
</template>

<script>
export default {
  props: {
    route: {
      required: true,
    },
    label: {
      required: false,
      default: "annuler",
    },
  },
  computed: {
    getRoute() {
      return this.route;
    },
  },
};
</script>
