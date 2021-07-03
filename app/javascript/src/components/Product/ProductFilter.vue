<template>
  <div class="shop-topbar-wrapper">
    <div class="shop-topbar-left">
      <ul class="view-mode">
        <li class="active">
          <a href="#product-grid" data-view="product-grid"
            ><i class="fa fa-th"></i
          ></a>
        </li>
        <li>
          <a href="#product-list" data-view="product-list"
            ><i class="fa fa-list-ul"></i
          ></a>
        </li>
      </ul>
      <p>Hiển thị 1 - 20 trong 30 kết quả</p>
    </div>
    <div class="product-sorting-wrapper">
      <div class="product-shorting shorting-style">
        <label>Số lượng:</label>
        <select>
          <option value=""> 10</option>
          <option value=""> 20</option>
          <option value=""> 30</option>
        </select>
      </div>
      <div class="product-show shorting-style">
        <label>Lọc theo:</label>
        <select>
          <option value="">Mặc định</option>
          <option value=""> Tên</option>
          <option value=""> Giá</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
