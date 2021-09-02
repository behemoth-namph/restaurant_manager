<template>
  <div class="best-food-area pt-100 pb-95">
    <div class="custom-container">
      <div class="row">
        <div class="best-food-width-1">
          <div class="single-banner">
            <div class="hover-style">
              <a href="/shop/product/1"
                ><img src="/img/banner/banner-5.jpg" alt=""
              /></a>
            </div>
          </div>
        </div>
        <div class="best-food-width-2">
          <div class="product-top-bar section-border mb-25">
            <div class="section-title-wrap">
              <h3 class="section-title section-bg-white">
                Best Food In Our Shop
              </h3>
            </div>
            <div class="product-tab-list-2 nav section-bg-white">
              <a href="javascript:void(0);" @click="tab = 1" data-toggle="tab">
                <h4>All</h4>
              </a>
              <a href="javascript:void(0);" @click="tab = 2" data-toggle="tab">
                <h4>Food</h4>
              </a>
              <a href="javascript:void(0);" @click="tab = 3" data-toggle="tab">
                <h4>Drink</h4>
              </a>
            </div>
          </div>
          <div class="tab-content jump">
            <div id="tab4" class="tab-pane" :class="{ active: tab == 1 }">
              <carousel
                :items="3"
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
                        <a title="Add Tto Cart" href="#"
                          ><i class="ion-android-cart"></i> Add Tto Cart</a
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
                        <a title="Add Tto Cart" href="#"
                          ><i class="ion-android-cart"></i> Add Tto Cart</a
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
                        <a title="Add Tto Cart" href="#"
                          ><i class="ion-android-cart"></i> Add Tto Cart</a
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
                        <a title="Add Tto Cart" href="#"
                          ><i class="ion-android-cart"></i> Add Tto Cart</a
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
              </carousel>
            </div>
            <div id="tab5" class="tab-pane" :class="{ active: tab == 2 }">
              <carousel
                :items="3"
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
                      <img src="/img/product/product-5.jpg" alt="" />
                    </a>
                    <div class="product-action">
                      <div class="pro-action-left">
                        <a title="Add Tto Cart" href="#"
                          ><i class="ion-android-cart"></i> Add Tto Cart</a
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
                      <img src="/img/product/product-6.jpg" alt="" />
                    </a>
                    <div class="product-action">
                      <div class="pro-action-left">
                        <a title="Add Tto Cart" href="#"
                          ><i class="ion-android-cart"></i> Add Tto Cart</a
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
                      <img src="/img/product/product-7.jpg" alt="" />
                    </a>
                    <div class="product-action">
                      <div class="pro-action-left">
                        <a title="Add Tto Cart" href="#"
                          ><i class="ion-android-cart"></i> Add Tto Cart</a
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
                      <img src="/img/product/product-8.jpg" alt="" />
                    </a>
                    <div class="product-action">
                      <div class="pro-action-left">
                        <a title="Add Tto Cart" href="#"
                          ><i class="ion-android-cart"></i> Add Tto Cart</a
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
              </carousel>
            </div>
            <div id="tab6" class="tab-pane" :class="{ active: tab == 3 }">
              <carousel
                :items="3"
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
                      <img src="/img/product/product-9.jpg" alt="" />
                    </a>
                    <div class="product-action">
                      <div class="pro-action-left">
                        <a title="Add Tto Cart" href="#"
                          ><i class="ion-android-cart"></i> Add Tto Cart</a
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
                      <img src="/img/product/product-10.jpg" alt="" />
                    </a>
                    <div class="product-action">
                      <div class="pro-action-left">
                        <a title="Add Tto Cart" href="#"
                          ><i class="ion-android-cart"></i> Add Tto Cart</a
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
                      <img src="/img/product/product-1.jpg" alt="" />
                    </a>
                    <div class="product-action">
                      <div class="pro-action-left">
                        <a title="Add Tto Cart" href="#"
                          ><i class="ion-android-cart"></i> Add Tto Cart</a
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
                      <img src="/img/product/product-2.jpg" alt="" />
                    </a>
                    <div class="product-action">
                      <div class="pro-action-left">
                        <a title="Add Tto Cart" href="#"
                          ><i class="ion-android-cart"></i> Add Tto Cart</a
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
              </carousel>
            </div>
          </div>
        </div>
        <div class="best-food-width-1 mrg-small-35">
          <div class="single-banner">
            <div class="hover-style">
              <a href="/shop/product/1"
                ><img src="/img/banner/banner-6.jpg" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  components: { carousel },
  data() {
    return {
      tab: 1,
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
          items: 3,
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
