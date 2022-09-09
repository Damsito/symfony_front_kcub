<template>
  <vue-csv-import v-model="csv" :fields="fields">
    <vue-csv-input
      class="d-none"
      v-slot="{}"
      ref="file"
      @change="onChange"
      name="fileUploader"
    ></vue-csv-input>
    <div class="d-none">
      <vue-csv-toggle-headers v-slot="{ toggle }">
        <button ref="toggle" @click="toggle">Has Headers</button>
      </vue-csv-toggle-headers>
    </div>
    <div v-show="false">
      <vue-csv-map :auto-match="true" :autoMatchIgnoreCase="true"></vue-csv-map>
    </div>
  </vue-csv-import>
</template>

<script>
export default {
  name: "CsvImport",
  props: {
    fields: {
      required: true,
    },
  },
  emits: ["onChange", "csv"],
  data() {
    return {
      csv: null,
    };
  },
  watch: {
    csv(newValue) {
      this.$emit("csv", newValue);
    },
  },
  methods: {
    clickOnFile() {
      this.$refs.file.csvRef.click();
    },
    onChange() {
      this.$emit("onChange");
    },
  },
};
</script>
