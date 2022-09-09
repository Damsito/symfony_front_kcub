<template>
  <div v-if="errorMessage" class="alert alert-danger mt-3" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Danger</span></span>
    <p v-if="needTraduction && params">{{ $t(errorMessage, params) }}</p>
    <p v-else-if="needTraduction">{{ $t(errorMessage) }}</p>
    <p v-else>{{ errorMessage }}</p>
  </div>
</template>
<script>
export default {
  props: {
    errorMessage: {
      required: true,
    },
    needTraduction: {
      required: false,
      default: true,
    },
    params: {
      required: false,
      default: null,
    },
  },
};
</script>
