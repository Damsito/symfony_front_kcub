<template>
  <button
    type="submit"
    :id="label"
    @click="$emit('submitButton', label)"
    class="btn btn-sm btn-primary detail_feet_button pull-right"
  >
    {{ $t(label) }}
  </button>
</template>

<script>
export default {
  props: ["label"],
  emits: ["submitButton"],
};
</script>
