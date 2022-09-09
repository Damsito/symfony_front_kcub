<template>
  <select name="role" class="form-select" v-model="role">
    <option v-for="(role, i) in roles" :key="`role${i}`" :value="role">
      {{ role }}
    </option>
  </select>
</template>
<script>
import { getRoles } from "../common/roles";

export default {
  name: "SelectRole",
  data() {
    return {
      roles: [],
      role: this.$store.state.role,
    };
  },
  mounted() {
    this.roles = getRoles();
    this.$store.commit("setRole", this.role);
  },
  watch: {
    role: function (role) {
      this.$store.commit("setRole", role);
      this.$router.go(0);
    },
  },
};
</script>
