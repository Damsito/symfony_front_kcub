<template>
  <div class="card-home service-alerte">
    <div class="card-header-home">
      <div class="card-header-home-padding">
        {{ $t("alertes") }}
      </div>
    </div>
    <div class="card-number">
      <div class="card-number-padding">3</div>
    </div>
    <div class="card-footer-home">
      <div class="card-footer-home-padding bg-supporting-yellow service-alert">
        <a href="">{{ $t("voir_services") }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceAlerte",
};
</script>
