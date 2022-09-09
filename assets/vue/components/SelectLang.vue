<template>
  <div style="z-index: 10000">
    <multiselect
      v-model="lang"
      placeholder=""
      name="lang"
      @select="select"
      track-by="value"
      :options="options"
      :searchable="false"
      :show-no-results="false"
      :show-no-options="false"
      :option-height="104"
      :show-labels="false"
    >
      <template v-slot:singleLabel="props">
        <img
          class="option__image mr-2"
          :src="props.option.img"
          :alt="props.option.value"
        />
      </template>
      <template v-slot:option="props">
        <img
          class="option__image mr-2"
          :src="props.option.img"
          :alt="props.option.value"
        />
      </template>
    </multiselect>
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      lang: null,
      options: [
        { value: "fr", img: "/images/icons/france.png" },
        { value: "en", img: "/images/icons/royaume-uni.png" },
      ],
    };
  },
  mounted() {
    this.lang = this.getLangObject(this.$store.state.lang);
  },
  methods: {
    getTitle(lang) {
      return lang === "en" ? "en" : "fr";
    },
    getImage(lang) {
      return lang === "en"
        ? "/images/icons/royaume-uni.png"
        : "/images/icons/france.png";
    },
    getLangObject(lang) {
      return {
        value: this.getTitle(lang),
        img: this.getImage(lang),
      };
    },
    select(newLang) {
      this.$store.commit("setAppLanguage", newLang.value);
      this.$router.go(0);
    },
  },
};
</script>
