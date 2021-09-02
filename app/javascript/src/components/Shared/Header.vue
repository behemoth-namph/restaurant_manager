<template>
  <header class="header-area">
    <div class="header-top black-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-12 col-sm-4">
            <div class="welcome-area">
              <div class="runtext-container">
                <div class="main-runtext">
                  <marquee
                    direction=""
                    onmouseover="this.stop();"
                    onmouseout="this.start();"
                    scrolldelay="50"
                  >
                    <div class="holder">
                      <div class="text-container">
                        Trang web đang trong quá trình phát triển. Nếu bạn muốn
                        góp ý hãy liên hệ với
                        <a
                          href="https://www.facebook.com/hantinhnam"
                          target="_blank"
                          >chúng tôi</a
                        >
                      </div>
                    </div>
                  </marquee>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-8 col-12 col-sm-8">
            <div class="account-curr-lang-wrap f-right">
              <ul>
                <li class="top-hover">
                  <a href="javascript:void(0);">
                    Ngôn ngữ: (VN) <i class="ion-chevron-down"></i
                  ></a>
                  <ul>
                    <li>
                      <a
                        href="javascript:void(0);"
                        @click="showMessageLanguage"
                      >
                        ENG
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        @click="showMessageLanguage"
                      >
                        日本
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        @click="showMessageLanguage"
                      >
                        한국
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        @click="showMessageLanguage"
                      >
                        中国
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="top-hover">
                  <a href="javascript:void(0);">
                    Tiền tệ: (VND) <i class="ion-chevron-down"></i
                  ></a>
                  <ul>
                    <li>
                      <a href="javascript:void(0);" @click="showMessageCurrency"
                        >USD ($)</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0);" @click="showMessageCurrency"
                        >円 (¥)</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0);" @click="showMessageCurrency"
                        >원 (원)</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0);" @click="showMessageCurrency"
                        >RMB (¥)</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="top-hover">
                  <a href="javascript:void(0);">
                    Cài đặt <i class="ion-chevron-down"></i
                  ></a>
                  <ul>
                    <li><a href="/shop/wishlist"> Yêu thích </a></li>
                    <li><a href="/shop/login_register"> Đăng nhập </a></li>
                    <li><a href="/shop/login_register"> Đăng ký </a></li>
                    <li><a href="/my-account"> Tài khoản </a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-middle">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-4 col-12 col-sm-4">
            <div class="logo">
              <a href="/shop">
                <img alt="" src="/img/logo/logo.png" />
              </a>
            </div>
          </div>
          <div class="col-lg-9 col-md-8 col-12 col-sm-8">
            <div class="header-middle-right f-right">
              <div class="header-login">
                <a href="/shop/login_register">
                  <div class="header-icon-style">
                    <i class="icon-user icons"></i>
                  </div>
                  <div class="login-text-content">
                    <p>
                      Đăng ký <br />
                      hoặc <span> Đăng nhập </span>
                    </p>
                  </div>
                </a>
              </div>
              <div class="header-wishlist">
                <a href="/shop/wishlist">
                  <div class="header-icon-style">
                    <i class="icon-heart icons"></i>
                  </div>
                  <div class="wishlist-text">
                    <p>
                      Yêu<br />
                      <span>thích</span>
                    </p>
                  </div>
                </a>
              </div>
              <div class="header-cart">
                <a href="#">
                  <div class="header-icon-style">
                    <i class="icon-handbag icons"></i>
                    <span class="count-style">02</span>
                  </div>
                  <div class="cart-text">
                    <span class="digit"> Giỏ hàng </span>
                    <span class="cart-digit-bold">$209.00</span>
                  </div>
                </a>
                <div class="shopping-cart-content">
                  <ul>
                    <li class="single-shopping-cart">
                      <div class="shopping-cart-img">
                        <a href="#"><img alt="" src="/img/cart/cart-1.jpg"/></a>
                      </div>
                      <div class="shopping-cart-title">
                        <h4><a href="#">Phantom Remote </a></h4>
                        <h6>Qty: 02</h6>
                        <span>$260.00</span>
                      </div>
                      <div class="shopping-cart-delete">
                        <a href="#"><i class="ion ion-close"></i></a>
                      </div>
                    </li>
                    <li class="single-shopping-cart">
                      <div class="shopping-cart-img">
                        <a href="#"><img alt="" src="/img/cart/cart-2.jpg"/></a>
                      </div>
                      <div class="shopping-cart-title">
                        <h4><a href="#">Phantom Remote</a></h4>
                        <h6>Qty: 02</h6>
                        <span>$260.00</span>
                      </div>
                      <div class="shopping-cart-delete">
                        <a href="#"><i class="ion ion-close"></i></a>
                      </div>
                    </li>
                  </ul>
                  <div class="shopping-cart-total">
                    <h4>Shipping : <span>$20.00</span></h4>
                    <h4>Total : <span class="shop-total">$260.00</span></h4>
                  </div>
                  <div class="shopping-cart-btn">
                    <a href="cart-page.html">view cart</a>
                    <a href="checkout.html">checkout</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom transparent-bar black-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-12">
            <div class="main-menu">
              <nav>
                <ul>
                  <li class="top-hover">
                    <a href="/shop"> home </a>
                  </li>
                  <li><a href="/shop/about">about</a></li>
                  <li><a href="/shop/contact">contact us</a></li>
                  <li><a href="/shop/product">burger</a></li>
                  <li><a href="/shop/product">pizza</a></li>
                  <li><a href="/shop/product">cold drink</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile-menu-area-start -->
    <div class="mobile-menu-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="mobile-menu mean-container">
              <div class="mean-bar">
                <a
                  href="javascript:void(0);"
                  class="meanmenu-reveal"
                  style="right: 0px; left: auto; text-align: center; text-indent: 0px; font-size: 18px;"
                  @click="showMenuSP"
                  ><span></span><span></span><span></span
                ></a>
                <nav class="mean-nav">
                  <ul
                    class="menu-overflow"
                    id="nav"
                    style="display: none;"
                    :class="{ 'd-block': isShowMenuSP }"
                  >
                    <li>
                      <a href="/shop">Home</a>
                    </li>
                    <li>
                      <a href="/shop/about">About</a>
                    </li>
                    <li><a href="/shop/contact">Contact us</a></li>
                    <li><a href="/shop">burger</a></li>
                    <li><a href="/shop">pizza</a></li>
                    <li><a href="/shop">cold drink</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isShowMenuSP: false,
    };
  },
  methods: {
    showMessageLanguage() {
      this.$toasted.success(
        "Ngôn ngữ chưa được hỗ trợ. Chúng tôi sẽ cập nhật trong tương lai"
      );
    },
    showMessageCurrency() {
      this.$toasted.success(
        "Tiền tệ chưa được hỗ trợ. Chúng tôi sẽ cập nhật trong tương lai"
      );
    },
    showMenuSP() {
      this.isShowMenuSP = !this.isShowMenuSP;
    },
  },
};
</script>
