<template>
  <div class="shop-page-area pt-100 pb-100">
    <div class="container">
      <div class="row flex-row-reverse">
        <div class="col-lg-9">
          <ProductFilter></ProductFilter>
          <ProductBanner></ProductBanner>
          <ProductList></ProductList>
        </div>
        <div class="col-lg-3">
          <ProductCategories></ProductCategories>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCategories from "../../../components/Product/ProductCategories";
import ProductBanner from "../../../components/Product/ProductBanner";
import ProductFilter from "../../../components/Product/ProductFilter";
import ProductList from "../../../components/Product/ProductList";

export default {
  components: {
    ProductCategories,
    ProductBanner,
    ProductFilter,
    ProductList,
  },
};
</script>

<style lang="scss"></style>
