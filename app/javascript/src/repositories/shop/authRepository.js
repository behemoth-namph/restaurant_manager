import Repository from "../shopRepository";

export default {
  register(params) {
    return Repository.post(`/login_register`, params, {
      toast: true,
    });
  },
};
