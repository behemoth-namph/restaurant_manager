<template>
  <div>
    <Slider></Slider>
    <BannerTop></BannerTop>
    <ProductArea></ProductArea>
    <BannerCenter></BannerCenter>
    <BestFood></BestFood>
    <BrandLogo></BrandLogo>
  </div>
</template>

<script>
import Slider from "./Slider";
import BannerTop from "./BannerTop";
import ProductArea from "./ProductArea";
import BannerCenter from "./BannerCenter";
import BestFood from "./BestFood.vue";
import BrandLogo from "./BrandLogo.vue";

export default {
  components: {
    Slider,
    BannerTop,
    ProductArea,
    BannerCenter,
    BestFood,
    BrandLogo,
  },
};
</script>

<style lang="scss"></style>
