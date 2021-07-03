<template>
  <div class="product-details pt-100 pb-90">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="product-details-img">
            <img
              class="zoompro"
              src="/img/product-details/product-detalis-l1.jpg"
              data-zoom-image="/img/product-details/product-detalis-bl1.jpg"
              alt="zoom"
            />
            <carousel
              :items="4"
              :autoplay="false"
              :autoplaySpeed="true"
              :dots="false"
              :loop="true"
              :nav="true"
              :infinite="true"
              :autoplayTimeout="5000"
              centerPadding="60px"
              :navText="navText"
              :margin="30"
              :slidesToScroll="1"
              :responsive="responsive"
              class="mt-20 product-dec-slider"
            >
              <a
                data-image="/img/product-details/product-detalis-l1.jpg"
                data-zoom-image="/img/product-details/product-detalis-bl1.jpg"
              >
                <img src="/img/product-details/product-detalis-s1.jpg" alt="" />
              </a>
              <a
                data-image="/img/product-details/product-detalis-l2.jpg"
                data-zoom-image="/img/product-details/product-detalis-bl2.jpg"
              >
                <img src="/img/product-details/product-detalis-s2.jpg" alt="" />
              </a>
              <a
                data-image="/img/product-details/product-detalis-l3.jpg"
                data-zoom-image="/img/product-details/product-detalis-bl3.jpg"
              >
                <img src="/img/product-details/product-detalis-s3.jpg" alt="" />
              </a>
              <a
                data-image="/img/product-details/product-detalis-l4.jpg"
                data-zoom-image="/img/product-details/product-detalis-bl4.jpg"
              >
                <img src="/img/product-details/product-detalis-s4.jpg" alt="" />
              </a>
              <a
                data-image="/img/product-details/product-detalis-l5.jpg"
                data-zoom-image="/img/product-details/product-detalis-bl5.jpg"
              >
                <img src="/img/product-details/product-detalis-s5.jpg" alt="" />
              </a>
              <a
                data-image="/img/product-details/product-detalis-l2.jpg"
                data-zoom-image="/img/product-details/product-detalis-bl2.jpg"
              >
                <img src="/img/product-details/product-detalis-s2.jpg" alt="" />
              </a>
            </carousel>
            <span>-29%</span>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="product-details-content">
            <h4>Glory of the Snow</h4>
            <div class="rating-review">
              <div class="pro-dec-rating">
                <i class="ion-android-star-outline theme-star"></i>
                <i class="ion-android-star-outline theme-star"></i>
                <i class="ion-android-star-outline theme-star"></i>
                <i class="ion-android-star-outline theme-star"></i>
                <i class="ion-android-star-outline"></i>
              </div>
              <div class="pro-dec-review">
                <ul>
                  <li>32 Reviews</li>
                  <li>Add Your Reviews</li>
                </ul>
              </div>
            </div>
            <span>260.000 VND</span>
            <div class="in-stock">
              <p>Có thể phục vụ: <span>mọi lúc</span></p>
            </div>
            <p>
              Là loại nước uống kết hợp giữa nước ép dâu tây và rất nhiều loại
              quả khác. Một ly mát lạnh xua tan mùa hè nóng bức
            </p>
            <div class="pro-dec-feature">
              <ul>
                <li>
                  <input type="checkbox" /> Thêm hoa quả:
                  <span> 5.000 VND</span>
                </li>
                <li>
                  <input type="checkbox" /> Thêm nước ép :
                  <span> 10.000 VND</span>
                </li>
                <li>
                  <input type="checkbox" /> Thêm vị đặc biệt:
                  <span> 15.000 VND</span>
                </li>
                <li>
                  <input type="checkbox" /> Thêm đá:
                  <span> Free </span>
                </li>
              </ul>
            </div>
            <div class="pro-details-cart-wrap">
              <div class="shop-list-cart-wishlist">
                <a title="Add To Cart" href="#">
                  <i class="ion-android-cart"></i>
                </a>
                <a title="Wishlist" href="#">
                  <i class="ion-ios-heart-outline"></i>
                </a>
              </div>
              <div class="product-quantity">
                <div class="cart-plus-minus">
                  <div class="dec qtybutton">-</div>
                  <input
                    class="cart-plus-minus-box"
                    type="text"
                    name="qtybutton"
                    value="2"
                  />
                  <div class="inc qtybutton">+</div>
                </div>
              </div>
            </div>
            <div class="pro-dec-categories">
              <ul>
                <li class="categories-title">Categories:</li>
                <li><a href="#">Đồ ăn nhanh,</a></li>
                <li><a href="#"> Sang choảng, </a></li>
                <li><a href="#"> Đồ uống,</a></li>
                <li><a href="#"> Hoa quả,</a></li>
                <li><a href="#"> Nước trái cây </a></li>
              </ul>
            </div>
            <div class="pro-dec-categories">
              <ul>
                <li class="categories-title">Tags:</li>
                <li><a href="#"> Dâu,</a></li>
                <li><a href="#"> Hoa quả, </a></li>
                <li><a href="#"> Giải nhiệt,</a></li>
                <li><a href="#"> Nước ép hoa quả,</a></li>
                <li><a href="#"> Mát lạnh </a></li>
              </ul>
            </div>
            <div class="pro-dec-social">
              <ul>
                <li>
                  <a class="tweet" href="#"
                    ><i class="ion-social-twitter"></i> Tweet</a
                  >
                </li>
                <li>
                  <a class="share" href="#"
                    ><i class="ion-social-facebook"></i> Share</a
                  >
                </li>
                <li>
                  <a class="google" href="#"
                    ><i class="ion-social-googleplus-outline"></i> Google+</a
                  >
                </li>
                <li>
                  <a class="pinterest" href="#"
                    ><i class="ion-social-pinterest"></i> Pinterest</a
                  >
                </li>
              </ul>
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
      navText: [
        '<i class="ion-ios-arrow-back"></i>',
        '<i class="ion-ios-arrow-forward"></i>',
      ],
      responsive: {
        479: {
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        480: {
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        768: {
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      },
    };
  },
};
</script>
<style lang="scss">
.product-dec-slider {
  .owl-theme {
    .owl-nav {
      display: flex;
      justify-content: space-between;
      margin-top: -90px;

      .owl-prev {
        margin-left: -30px;
        background: white;
        color: #d6d6d6;
        font-size: 25px;
        transform: translateY(-10px);
      }

      .owl-next {
        margin-right: -30px;
        background: white;
        color: #d6d6d6;
        font-size: 25px;
        transform: translateY(-10px);
      }
    }
  }
}

@media (max-width: 767px) {
  .product-dec-slider {
    .owl-theme {
      .owl-nav {
        display: none;
      }
    }
  }
}
</style>
