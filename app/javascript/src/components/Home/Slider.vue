<template>
  <div class="slider-area">
    <carousel
      :items="1"
      :autoplay="false"
      :autoplaySpeed="true"
      :dots="false"
      :loop="true"
      :nav="true"
      :autoplayTimeout="5000"
      animateOut="fadeOut"
      animateIn="fadeIn"
      :navText="navText"
      class="home-slider"
    >
      <div
        class="single-slider pt-210 pb-220 bg-img"
        style="background-image:url(shop/img/slider/slider-2.jpg);"
      >
        <div class="container">
          <div class="slider-content slider-animated-1">
            <h1 class="animated">Drink & Heathy Food</h1>
            <h3 class="animated">Fresh Heathy and Organic.</h3>
            <div class="slider-btn mt-90">
              <a class="animated" href="product-details.html">Order Now</a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="single-slider pt-210 pb-220 bg-img"
        style="background-image:url(shop/img/slider/slider-1.jpg);"
      >
        <div class="container">
          <div class="slider-content slider-animated-1">
            <h1 class="animated">Drink & Heathy Food</h1>
            <h3 class="animated">Fresh Heathy and Organic.</h3>
            <div class="slider-btn mt-90">
              <a class="animated" href="product-details.html">Order Now</a>
            </div>
          </div>
        </div>
      </div>
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  components: { carousel },
  data() {
    return {
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
    };
  },
};
</script>

<style lang="scss"></style>
