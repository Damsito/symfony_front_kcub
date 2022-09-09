const GetItemsPerPageSelectMixin = {
  data() {
    return {
      lengthQueryMin: 3,
    };
  },
  computed: {
    itemsPerPage() {
      return parseInt(process.env.VUE_APP_SELECT_ITEM_PER_PAGE);
    },
  },
  methods: {
    checkQuery(query) {
      return !query || (query && query.length >= this.lengthQueryMin);
    },
  },
};
export default GetItemsPerPageSelectMixin;
