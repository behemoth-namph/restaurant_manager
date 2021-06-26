<template>
  <div class="home-page">
    <Slider></Slider>
    <BannerTop></BannerTop>
    <ProductArea></ProductArea>
    <BannerCenter></BannerCenter>
    <BestFood></BestFood>
    <BrandLogo></BrandLogo>
  </div>
</template>

<script>
import Slider from "../../components/Home/Slider";
import BannerTop from "../../components/Home/BannerTop";
import ProductArea from "../../components/Home/ProductArea";
import BannerCenter from "../../components/Home/BannerCenter";
import BestFood from "../../components/Home/BestFood";
import BrandLogo from "../../components/Shared/BrandLogo";

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
