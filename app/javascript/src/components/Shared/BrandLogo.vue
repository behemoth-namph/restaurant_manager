<template>
  <div class="brand-logo-area pb-100">
    <div class="container">
      <carousel
        :items="5"
        :autoplay="false"
        :autoplaySpeed="true"
        :dots="false"
        :loop="true"
        :nav="false"
        :autoplayTimeout="5000"
        :responsive="responsive"
        class="brand-logo-active"
      >
        <div class="single-brand-logo">
          <img alt="" src="img/brand-logo/logo-1.png" />
        </div>
        <div class="single-brand-logo">
          <img alt="" src="img/brand-logo/logo-2.png" />
        </div>
        <div class="single-brand-logo">
          <img alt="" src="img/brand-logo/logo-3.png" />
        </div>
        <div class="single-brand-logo">
          <img alt="" src="img/brand-logo/logo-4.png" />
        </div>
        <div class="single-brand-logo">
          <img alt="" src="img/brand-logo/logo-5.png" />
        </div>
        <div class="single-brand-logo">
          <img alt="" src="img/brand-logo/logo-2.png" />
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
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        480: {
          items: 2,
          margin: 30,
        },
        768: {
          items: 4,
          margin: 30,
        },
        992: {
          items: 4,
          margin: 100,
        },
        1200: {
          items: 5,
        },
      },
    };
  },
};
</script>

<style lang="scss"></style>
