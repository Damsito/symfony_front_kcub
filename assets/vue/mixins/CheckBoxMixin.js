const CheckBoxMixin = {
  data() {
    return {
      checkboxes: new Set([]),
      checkAllCheckboxes: false,
    };
  },
  methods: {
    displayCheckboxes(event) {
      if (!event[1]) {
        this.checkboxes.delete(event[0]);
      } else {
        this.checkboxes.add(event[0]);
      }
    },
    checkAll() {
      this.checkAllCheckboxes = !this.checkAllCheckboxes;
    },
    resetCheckboxes() {
      this.checkboxes = new Set([]);
      this.checkAllCheckboxes = false;
    },
  },
};
export default CheckBoxMixin;
