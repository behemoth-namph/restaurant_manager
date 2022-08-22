import { RepositoryFactory } from "../../repositories/shop/repositoryFactory";
const authRepository = RepositoryFactory.get("auth");

const SET_TOKEN = "SET_TOKEN";

export default {
  namespaced: true,
  state: {
    token: null,
  },
  actions: {
    login({ commit }, payload) {
      commit(SET_TOKEN, payload);
    },
    async register({ commit, state }) {
      const response = await authRepository.register({
        user: state.user,
      });
      commit(SET_STATE, { user: response });
    },
  },
  mutations: {
    SET_TOKEN(payload) {
      state.token = payload;
    },
  },
};
