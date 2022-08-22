import Vue from "vue/dist/vue.esm";
import Vuex from "vuex";
Vue.use(Vuex);

import createPersistedState from "vuex-persistedstate";
const context = require.context("./shop", true, /.js/);

const modules = {};
context.keys().forEach((file) => {
  // create the module name from file
  const moduleName = file.replace(/(\.\/|\.js$)/g, "");
  // register file context under module name
  modules[moduleName] = context(file).default || context(file);

  // override namespaced option
  modules[moduleName].namespaced = true;
});

const store = new Vuex.Store({
  namespace: true,
  plugins: [
    createPersistedState({
      key: "restaurant-shop-data-store",
      paths: ["global.sidebarActive"],
    }),
  ],
  modules,
});

export default store;
