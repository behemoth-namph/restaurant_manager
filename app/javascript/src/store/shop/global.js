const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
const SHOW_SIDEBAR = "SHOW_SIDEBAR";
const SET_VALIDATION_ERRORS = "SET_VALIDATION_ERRORS";

export default {
  namespaced: true,
  state: {
    sidebarActive: true,
    validationErrors: {},
  },
  actions: {
    toggleSidebar({ commit }, payload) {
      commit(TOGGLE_SIDEBAR, payload);
    },
    showSidebar({ commit }, payload) {
      commit(SHOW_SIDEBAR, payload);
    },
    setValidationErrors({ commit }, payload) {
      commit(SET_VALIDATION_ERRORS, payload);
    },
  },
  mutations: {
    TOGGLE_SIDEBAR(state) {
      state.sidebarActive = !state.sidebarActive;
    },
    SHOW_SIDEBAR(state) {
      state.sidebarActive = false;
    },
    SET_VALIDATION_ERRORS(state, payload) {
      state.validationErrors = _.cloneDeep(payload);
    },
  },
  getters: {
    getErrors: (state) => (name) => {
      return _.get(state.validationErrors, name, []);
    },
    getShopErrors: (state) => (name) => {
      return _.get(state.validationErrors, name, []);
    },
  },
};
