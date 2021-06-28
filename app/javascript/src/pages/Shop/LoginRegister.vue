<template>
  <div class="login-register-area pt-95 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-12 ml-auto mr-auto">
          <div class="login-register-wrapper">
            <div class="login-register-tab-list nav">
              <a :class="{active: isLogin}" href="javascript:void(0);" @click="isLogin = true">
                <h4>login</h4>
              </a>
              <a :class="{active: !isLogin}" href="javascript:void(0);" @click="isLogin = false">
                <h4>register</h4>
              </a>
            </div>
            <div class="tab-content">
              <div class="tab-pane" :class="{active: isLogin}">
                <div class="login-form-container">
                  <div class="login-register-form">
                    <form action="#" method="post">
                      <input
                        type="text"
                        name="user-name"
                        placeholder="Username"
                      />
                      <input
                        type="password"
                        name="user-password"
                        placeholder="Password"
                      />
                      <div class="button-box">
                        <div class="login-toggle-btn">
                          <input type="checkbox" />
                          <label>Remember me</label>
                          <a href="#">Forgot Password?</a>
                        </div>
                        <button type="submit"><span>Login</span></button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="tab-pane" :class="{active: !isLogin}">
                <div class="login-form-container">
                  <div class="login-register-form">
                    <form action="#" method="post">
                      <input
                        type="text"
                        name="user-name"
                        placeholder="Username"
                      />
                      <input
                        type="password"
                        name="user-password"
                        placeholder="Password"
                      />
                      <input
                        name="user-email"
                        placeholder="Email"
                        type="email"
                      />
                      <div class="button-box">
                        <button type="submit"><span>Register</span></button>
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
export default {
  components: {},
  data() {
    return {
      isLogin: true,
    }
  },
};
</script>

<style lang="scss"></style>
