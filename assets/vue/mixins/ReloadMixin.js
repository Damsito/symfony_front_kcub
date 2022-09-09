const ReloadMixin = {
  data() {
    return {
      render: false,
    };
  },
  methods: {
    reload() {
      this.$nextTick(() => {
        this.render = true;
      }).then();
    },
  },
};

export default ReloadMixin;
