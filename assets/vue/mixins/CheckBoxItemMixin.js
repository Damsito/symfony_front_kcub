const CheckBoxItemMixin = {
  props: ["check"],
  emits: ["changeCheckbox"],
  methods: {
    emitToParent() {
      this.$emit("changeCheckbox", [
        this.$refs.checkbox.value,
        this.$refs.checkbox.checked,
      ]);
    },
  },
  updated() {
    if (this.$refs.checkbox) {
      this.$refs.checkbox.checked = this.check;
      this.emitToParent();
    }
  },
  computed: {
    uppercase() {
      return (v) => {
        return v.toUpperCase();
      };
    },
  },
};

export default CheckBoxItemMixin;
