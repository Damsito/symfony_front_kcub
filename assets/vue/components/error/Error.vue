<template>
  <div class="lastPart col">
    <div class="container text-center">
      <h1>
        {{ $t("no_route") }}
      </h1>
      <router-link to="/" class="btn btn-orange text-center">{{
        $t("revenir_accueil")
      }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",
};
</script>
