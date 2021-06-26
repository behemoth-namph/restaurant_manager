// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()
import Vue from "vue/dist/vue.esm";
import store from "../src/store/shop";

import Toasted from "vue-toasted";

import BootstrapVue from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";

document.addEventListener("DOMContentLoaded", () => {
  window.vm = new Vue({
    el: "#app",
    store: store,
    components: {
      BootstrapVue,
      Loading: () => import("/app/javascript/src/components/Shared/Loading"),
      Sidebar: () => import("/app/javascript/src/components/Shared/Sidebar"),
      HeaderMenu: () => import("/app/javascript/src/components/Shared/Header"),
      FooterIndex: () => import("/app/javascript/src/components/Shared/Footer"),
      HomeIndex: () => import("/app/javascript/src/components/Home/Index.vue"),
    },
  });

  Vue.use(Toasted, { theme: "bubble", duration: 2000 });
});
