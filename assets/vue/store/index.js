import { createStore } from "vuex";

import axios from "axios";
const debug = process.env.NODE_ENV !== "production";
export default createStore({
  state: {
    pages: {
      firstPage: 1,
      previousPage: null,
      currentPage: 1,
      nextPage: null,
      lastPage: 1,
    },
    lang: localStorage.getItem("lang") ? localStorage.getItem("lang") : "fr",
    role: localStorage.getItem("role") || process.env.VUE_APP_ROLE,
    currentUser: {},
    versionFront: localStorage.getItem("versionFront"),
    versionBack: localStorage.getItem("versionBack"),
  },
  getters: {
    getLang: (state) => state.lang,
  },
  mutations: {
    setPages(state, pages) {
      state.pages.firstPage = pages.firstPage;
      state.pages.previousPage = pages.previousPage;
      state.pages.currentPage = pages.currentPage;
      state.pages.nextPage = pages.nextPage;
      state.pages.lastPage = pages.lastPage;
    },
    setAppLanguage(state, language) {
      state.lang = language;
      localStorage.setItem("lang", language); // Whenever we change the appLanguage we save it to the localStorage
    },
    setCurrentUser(state, currentUser) {
      localStorage.currentUser = currentUser;
      state.currentUser = currentUser;
    },
    setRole(state, role) {
      state.role = role;
      localStorage.setItem("role", role); // Whenever we change the appLanguage we save it to the localStorage
    },
    setVersionFront(state, versionFront) {
      state.versionFront = versionFront;
      localStorage.setItem("versionFront", versionFront);
    },
    setVersionBack(state, versionBack) {
      state.versionBack = versionBack;
      localStorage.setItem("versionBack", versionBack);
    },
  },
  actions: {
    getVersionFront({ commit }) {
      if (localStorage.versionFront) {
        commit("setVersionFront", localStorage.versionFront);
        return;
      }
      axios
        .get(process.env.VUE_APP_KCUB_FRONT + "/version.properties.txt")
        .then((r) => {
          commit("setVersionFront", r.data);
        });
    },
    getVersionBack({ commit }) {
      if (localStorage.versionBack) {
        commit("setVersionBack", localStorage.versionBack);
        return;
      }
      axios.get(process.env.VUE_APP_KCUB_BACK + "versions").then((r) => {
        commit("setVersionBack", r.data);
      });
    },
  },
  strict: debug,
});
