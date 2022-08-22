import axios from "axios";
import { csrfToken } from "@rails/ujs";
// import store from "@/store/shop";

const baseURL = "/shop";

const request = axios.create({
  baseURL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "X-CSRF-TOKEN": csrfToken(),
  },
});

// request.interceptors.request.use(
//   (config) => {
//     window.vm.$root.$refs.loading.start();
//     store.dispatch("global/setValidationErrors", {});
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

request.interceptors.response.use(
  function(response) {
    if (response.config.toast) {
      window.vm.$toasted.show("Thành công!", {
        type: "success",
      });
    }

    window.vm.$root.$refs.loading.finish();
    return response.data;
  },

  // function(error) {
  //   if (error.config.toast) {
  //     let message = "Đã có lỗi xảy ra!";
  //     if (_.has(error, "response.data.message")) {
  //       message = error.response.data.message;
  //     }
  //     window.vm.$toasted.show(message, {
  //       type: "error",
  //     });

  //     if (_.get(error, "response.status") === 422) {
  //       const errors = _.get(error, "response.data");
  //       if (errors) {
  //         store.dispatch("global/setValidationErrors", errors);
  //       }
  //     }
  //   }

  //   window.vm.$root.$refs.loading.finish();
  //   return Promise.reject(error);
  // }
);

export default request;
