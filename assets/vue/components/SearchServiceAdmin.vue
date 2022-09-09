<template>
  <div class="ms-auto d-flex my-auto">
    <div class="d-flex my-auto">
      <label class="detail_label my-auto me-2"></label>
      <input
        v-on:keyup.enter="searchService"
        v-model="search"
        name="search"
        ref="input"
        class="ms-4 my-auto form-control"
        type="text"
        :placeholder="$t('rechercher')"
      />
      <button id="buttonSearch" @click="searchService">
        <img src="/images/icons/search.png" alt="recherche" />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchServiceAdmin",
  data() {
    return {
      search: this.$route.query.service || "",
    };
  },
  mounted() {
    this.$refs.input.focus();
  },
  methods: {
    searchService() {
      this.$emit("search", this.search);
    },
  },
};
</script>
