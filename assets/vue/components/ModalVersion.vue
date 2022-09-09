<template>
  <div id="modalVersion" class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">VERSIONS</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal">
            <span class="visually-hidden">Close</span>
          </button>
        </div>
        <div class="modal-body">
          <p>FRONT : {{ versionFront }}</p>
          <p>BACK : {{ versionBack }}</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            id="non"
          >
            {{ $t("ok") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "ModalVersion",
  async mounted() {
    await this.$store.dispatch("getVersionFront");
    await this.$store.dispatch("getVersionBack");
  },
  computed: {
    ...mapState({
      versionFront: (state) => state.versionFront,
      versionBack: (state) => state.versionBack,
    }),
  },
};
</script>
