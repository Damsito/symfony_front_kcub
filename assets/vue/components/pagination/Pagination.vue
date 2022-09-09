<template>
  <nav
    id="pagination"
    style="border-top: none !important"
    v-if="pages.firstPage != pages.lastPage"
  >
    <ul class="pagination">
      <li
        v-if="pages.firstPage && pages.firstPage != pages.currentPage"
        class="page-item"
      >
        <a class="page-link" @click="set(pages.firstPage)">
          {{ $t("debut") }}
        </a>
      </li>
      <li v-else class="page-item disabled">
        <a class="page-link"> {{ $t("debut") }} </a>
      </li>
      <li
        v-if="!pages.previousPage && !pages.firstPage"
        class="page-item disabled"
      >
        <a class="page-link previous"></a>
      </li>
      <li v-if="pages.previousPage" class="page-item">
        <a class="page-link previous" @click="set(pages.previousPage)"></a>
      </li>
      <li v-if="!pages.previousPage" class="page-item disabled">
        <a class="page-link previous"></a>
      </li>
      <li v-if="pages.firstPage != pages.currentPage" class="page-item">
        <a class="page-link" @click="set(pages.firstPage)"
          >{{ pages.firstPage }}
        </a>
      </li>
      <li
        class="page-item disabled"
        v-if="pages.previousPage && pages.previousPage - 2 > pages.firstPage"
      >
        <span class="page-link">...</span>
      </li>
      <li
        class="page-item"
        v-if="pages.previousPage && pages.previousPage - 1 > pages.firstPage"
      >
        <a class="page-link" @click="set(pages.previousPage - 1)"
          >{{ pages.previousPage - 1 }}
        </a>
      </li>
      <li
        class="page-item"
        v-if="pages.previousPage && pages.previousPage > pages.firstPage"
      >
        <a class="page-link" @click="set(pages.previousPage)"
          >{{ pages.previousPage }}
        </a>
      </li>
      <li class="page-item active">
        <a class="page-link" @click="set(pages.currentPage)"
          >{{ pages.currentPage }}
        </a>
      </li>
      <li
        class="page-item"
        v-if="pages.nextPage && pages.nextPage < pages.lastPage"
      >
        <a class="page-link" @click="set(pages.nextPage)"
          >{{ pages.nextPage }}
        </a>
      </li>
      <li
        class="page-item"
        v-if="pages.nextPage && pages.nextPage + 1 < pages.lastPage"
      >
        <a class="page-link" @click="set(pages.nextPage + 1)"
          >{{ pages.nextPage + 1 }}
        </a>
      </li>
      <li
        class="page-item disabled"
        v-if="pages.nextPage && pages.nextPage + 2 < pages.lastPage"
      >
        <span class="page-link">...</span>
      </li>
      <li class="page-item">
        <a
          class="page-link"
          v-if="pages.lastPage != pages.currentPage"
          @click="set(pages.lastPage)"
          >{{ pages.lastPage }}
        </a>
      </li>

      <li v-if="pages.nextPage" class="page-item">
        <a @click="set(pages.nextPage)" class="page-link next"></a>
      </li>
      <li v-if="!pages.nextPage" class="page-item disabled">
        <a class="page-link next"></a>
      </li>
      <li v-if="pages.lastPage != pages.currentPage" class="page-item">
        <a @click="set(pages.lastPage)" class="page-link">{{ $t("fin") }}</a>
      </li>
      <li v-else class="page-item disabled">
        <a class="page-link"> {{ $t("fin") }} </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Pagination",
  props: {
    pagesProps: {
      required: false,
      default: null,
    },
  },
  emits: ["onChange"],
  methods: {
    set(page) {
      this.$emit("onChange", { page: page });
    },
  },
  computed: {
    previousPage() {
      return this.pages.currentPage - 1;
    },
    nextPage() {
      return this.pages.currentPage + 1;
    },
    pages() {
      return this.pagesProps ? this.pagesProps : this.statePages;
    },
    ...mapState({
      statePages: (state) => state.pages,
    }),
  },
};
</script>
