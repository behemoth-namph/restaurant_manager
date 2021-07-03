<template>
  <div class="product-details-area">
    <ProductDetailInfo></ProductDetailInfo>
    <ProductDetailDescription></ProductDetailDescription>
    <ProductDetailRelated></ProductDetailRelated>
  </div>
</template>

<script>
import ProductDetailInfo from "../../../components/Product/ProductDetailInfo";
import ProductDetailDescription from "../../../components/Product/ProductDetailDescription";
import ProductDetailRelated from "../../../components/Product/ProductDetailRelated";
export default {
  components: {
    ProductDetailInfo,
    ProductDetailDescription,
    ProductDetailRelated,
  },
};
</script>

<style lang="scss"></style>
