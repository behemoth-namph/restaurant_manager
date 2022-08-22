<template>
  <div class="login-register-area pt-95 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-12 ml-auto mr-auto">
          <div class="login-register-wrapper">
            <div class="login-register-tab-list nav">
              <a
                :class="{ active: isLogin }"
                href="javascript:void(0);"
                @click="isLogin = true"
              >
                <h4>Đăng nhập</h4>
              </a>
              <a
                :class="{ active: !isLogin }"
                href="javascript:void(0);"
                @click="isLogin = false"
              >
                <h4>Đăng ký</h4>
              </a>
            </div>
            <div class="tab-content">
              <div class="tab-pane" :class="{ active: isLogin }">
                <div class="login-form-container">
                  <div class="login-register-form">
                    <form action="#" method="post">
                      <input
                        type="text"
                        name="user-name"
                        placeholder="Tên đăng nhập"
                      />
                      <input
                        type="password"
                        name="user-password"
                        placeholder="Mật khẩu"
                      />
                      <div class="button-box">
                        <div class="login-toggle-btn">
                          <input type="checkbox" />
                          <label>Nhớ mật khẩu</label>
                          <a href="#">Quên mật khẩu?</a>
                        </div>
                        <button type="submit" @click.prevent="logMessage">
                          <span>Đăng nhập</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="tab-pane" :class="{ active: !isLogin }">
                <div class="login-form-container">
                  <div class="login-register-form">
                    <form action="#" method="post">
                      <input
                        type="text"
                        name="user-name"
                        placeholder="Tên đăng nhập"
                      />
                      <input
                        type="password"
                        name="user-password"
                        placeholder="Mật khẩu"
                      />
                      <input
                        name="user-email"
                        placeholder="Email"
                        type="email"
                      />
                      <div class="button-box">
                        <button type="submit" @click.prevent="onRegister">
                          <span>Đăng ký</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("auth");
export default {
  components: {},
  data() {
    return {
      isLogin: true,
    };
  },
  methods: {
    ...mapActions(["register"]),
    onRegister() {
      this.register();
    },
  },
};
</script>

<style lang="scss"></style>
