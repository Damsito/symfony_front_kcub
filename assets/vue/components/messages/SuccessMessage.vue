<template>
  <div v-if="successMessage" class="alert alert-success" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Success</span></span>
    <p v-if="!params">{{ $t(successMessage) }}</p>
    <p v-else>{{ $t(successMessage, params) }}</p>
  </div>
</template>
<script>
export default {
  props: ["successMessage", "params"],
};
</script>
