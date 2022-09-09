const ResetModalMixin = {
  data() {
    return {
      key: 0,
    };
  },
  methods: {
    incrementKey() {
      this.key++;
    },
  },
};
export default ResetModalMixin;
