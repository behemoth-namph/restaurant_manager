<template>
  <div class="product-area pb-95">
    <div class="container">
      <div class="product-top-bar section-border mb-25">
        <div class="section-title-wrap">
          <h3 class="section-title section-bg-white">Sản phẩm liên quan</h3>
        </div>
      </div>
      <carousel
        :items="4"
        :autoplay="false"
        :autoplaySpeed="true"
        :dots="false"
        :loop="true"
        :nav="true"
        :autoplayTimeout="5000"
        :navText="navText"
        :margin="30"
        :responsive="responsive"
        class="product-slider-active product-nav"
      >
        <div class="product-wrapper">
          <div class="product-img">
            <a href="/shop/product/1">
              <img src="/img/product/product-1.jpg" alt="" />
            </a>
            <div class="product-action">
              <div class="pro-action-left">
                <a title="Thêm vào giỏ hàng" href="#"
                  ><i class="ion-android-cart"></i> Thêm vào giỏ hàng</a
                >
              </div>
              <div class="pro-action-right">
                <a title="Wishlist" href="wishlist.html"
                  ><i class="ion-ios-heart-outline"></i
                ></a>
                <a
                  title="Quick View"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  href="#"
                  ><i class="ion-android-open"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="product-content">
            <h4>
              <a href="/shop/product/1">PRODUCTS NAME HERE </a>
            </h4>
            <div class="product-price-wrapper">
              <span>$100.00</span>
              <span class="product-price-old">$120.00 </span>
            </div>
          </div>
        </div>
        <div class="product-wrapper">
          <div class="product-img">
            <a href="/shop/product/1">
              <img src="/img/product/product-2.jpg" alt="" />
            </a>
            <div class="product-action">
              <div class="pro-action-left">
                <a title="Thêm vào giỏ hàng" href="#"
                  ><i class="ion-android-cart"></i> Thêm vào giỏ hàng</a
                >
              </div>
              <div class="pro-action-right">
                <a title="Wishlist" href="wishlist.html"
                  ><i class="ion-ios-heart-outline"></i
                ></a>
                <a
                  title="Quick View"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  href="#"
                  ><i class="ion-android-open"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="product-content">
            <h4>
              <a href="/shop/product/1">PRODUCTS NAME HERE </a>
            </h4>
            <div class="product-price-wrapper">
              <span>$200.00</span>
            </div>
          </div>
        </div>
        <div class="product-wrapper">
          <div class="product-img">
            <a href="/shop/product/1">
              <img src="/img/product/product-3.jpg" alt="" />
            </a>
            <div class="product-action">
              <div class="pro-action-left">
                <a title="Thêm vào giỏ hàng" href="#"
                  ><i class="ion-android-cart"></i> Thêm vào giỏ hàng</a
                >
              </div>
              <div class="pro-action-right">
                <a title="Wishlist" href="wishlist.html"
                  ><i class="ion-ios-heart-outline"></i
                ></a>
                <a
                  title="Quick View"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  href="#"
                  ><i class="ion-android-open"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="product-content">
            <h4>
              <a href="/shop/product/1">PRODUCTS NAME HERE </a>
            </h4>
            <div class="product-price-wrapper">
              <span>$90.00</span>
              <span class="product-price-old">$100.00 </span>
            </div>
          </div>
        </div>
        <div class="product-wrapper">
          <div class="product-img">
            <a href="/shop/product/1">
              <img src="/img/product/product-4.jpg" alt="" />
            </a>
            <div class="product-action">
              <div class="pro-action-left">
                <a title="Thêm vào giỏ hàng" href="#"
                  ><i class="ion-android-cart"></i> Thêm vào giỏ hàng</a
                >
              </div>
              <div class="pro-action-right">
                <a title="Wishlist" href="wishlist.html"
                  ><i class="ion-ios-heart-outline"></i
                ></a>
                <a
                  title="Quick View"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  href="#"
                  ><i class="ion-android-open"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="product-content">
            <h4>
              <a href="/shop/product/1">PRODUCTS NAME HERE </a>
            </h4>
            <div class="product-price-wrapper">
              <span>$50.00</span>
            </div>
          </div>
        </div>
        <div class="product-wrapper">
          <div class="product-img">
            <a href="/shop/product/1">
              <img src="/img/product/product-7.jpg" alt="" />
            </a>
            <div class="product-action">
              <div class="pro-action-left">
                <a title="Thêm vào giỏ hàng" href="#"
                  ><i class="ion-android-cart"></i> Thêm vào giỏ hàng</a
                >
              </div>
              <div class="pro-action-right">
                <a title="Wishlist" href="wishlist.html"
                  ><i class="ion-ios-heart-outline"></i
                ></a>
                <a
                  title="Quick View"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  href="#"
                  ><i class="ion-android-open"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="product-content">
            <h4>
              <a href="/shop/product/1">PRODUCTS NAME HERE </a>
            </h4>
            <div class="product-price-wrapper">
              <span>$100.00</span>
              <span class="product-price-old">$120.00 </span>
            </div>
          </div>
        </div>
      </carousel>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  components: { carousel },
  data() {
    return {
      navText: [
        '<i class="ion-ios-arrow-back"></i>',
        '<i class="ion-ios-arrow-forward"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        768: {
          items: 2,
        },
        992: {
          items: 2,
        },
        1200: {
          items: 4,
        },
      },
    };
  },
};
</script>
<style lang="scss">
.product-nav {
  .owl-theme {
    .owl-nav {
      margin-top: unset;
      text-align: unset;

      [class*="owl-"] {
        color: #2f333a !important;
        display: inline-block !important;
        font-size: 16px !important;
        transition: all 0.3s ease 0s;
        margin: unset;
        background: unset;
        cursor: pointer;
        border-radius: unset;

        &:hover {
          background: white;
        }
      }
    }
  }
}
</style>

