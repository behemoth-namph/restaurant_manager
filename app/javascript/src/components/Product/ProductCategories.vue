<template>
  <div class="shop-sidebar-wrapper gray-bg-7 shop-sidebar-mrg">
    <div class="shop-widget">
      <h4 class="shop-sidebar-title">Tìm kiếm món ăn</h4>
      <div class="shop-catigory">
        <ul id="faq">
          <li>
            <a
              data-toggle="collapse"
              data-parent="#faq"
              href="#shop-catigory-1"
            >
              Đồ ăn nhanh <i class="ion-ios-arrow-down"></i
            ></a>
            <ul id="shop-catigory-1" class="panel-collapse collapse show">
              <li><a href="#">Pizza </a></li>
              <li><a href="#">Hamburgers</a></li>
              <li><a href="#">Sandwiches</a></li>
              <li><a href="#">French fries</a></li>
              <li><a href="#">Fried chicken</a></li>
            </ul>
          </li>
          <li>
            <a data-toggle="collapse" data-parent="#faq" href="#shop-catigory-2"
              > Nguyên liệu <i class="ion-ios-arrow-down"></i
            ></a>
            <ul id="shop-catigory-2" class="panel-collapse collapse">
              <li><a href="#">Trứng</a></li>
              <li><a href="#">Sữa</a></li>
              <li><a href="#">Hải sản</a></li>
              <li><a href="#">Phô mai</a></li>
              <li><a href="#">Thịt bò</a></li>
            </ul>
          </li>
          <li>
            <a data-toggle="collapse" data-parent="#faq" href="#shop-catigory-3"
              > Đồ uống <i class="ion-ios-arrow-down"></i
            ></a>
            <ul id="shop-catigory-3" class="panel-collapse collapse">
              <li><a href="#"> Nước ngọt </a></li>
              <li><a href="#"> Nước ép trái cây</a></li>
              <li><a href="#"> Bia </a></li>
              <li><a href="#"> Rượi </a></li>
              <li><a href="#"> Trà </a></li>
            </ul>
          </li>
          <li><a href="#">Rau củ</a></li>
          <li><a href="#">Hoa quả</a></li>
          <li><a href="#">Đồ tươi sống</a></li>
        </ul>
      </div>
    </div>
    <div class="shop-price-filter mt-40 shop-sidebar-border pt-35">
      <h4 class="shop-sidebar-title">Price Filter</h4>
      <div class="price_filter mt-25">
        <span>Mức giá: 100.000 - 500.000 </span>
        <div id="slider-range"></div>
        <div class="price_slider_amount">
          <div class="label-input">
            <input
              type="text"
              id="amount"
              name="price"
              placeholder="Nhập giá"
            />
          </div>
          <button type="button">Lọc</button>
        </div>
      </div>
    </div>
    <div class="shop-widget mt-40 shop-sidebar-border pt-35">
      <h4 class="shop-sidebar-title">Lọc theo nhóm</h4>
      <div class="sidebar-list-style mt-20">
        <ul>
          <li><input type="checkbox" /><a href="#"> Đồ ăn tây </a></li>
          <li><input type="checkbox" /><a href="#"> Đồ ăn nhanh </a></li>
          <li><input type="checkbox" /><a href="#"> Món nhậu </a></li>
          <li><input type="checkbox" /><a href="#"> Món khai vị </a></li>
          <li><input type="checkbox" /><a href="#"> Món tráng miệng </a></li>
          <li><input type="checkbox" /><a href="#"> Đồ uống kết hợp </a></li>
          <li><input type="checkbox" /><a href="#"> Thực đơn đặc biệt </a></li>
          <li><input type="checkbox" /><a href="#"> Thực đơn tuỳ chọn </a></li>
        </ul>
      </div>
    </div>
    <div class="shop-widget mt-40 shop-sidebar-border pt-35">
      <h4 class="shop-sidebar-title">Lọc theo cách chế biến</h4>
      <div class="sidebar-list-style mt-20">
        <ul>
          <li><input type="checkbox" /><a href="#"> Món nướng </a></li>
          <li><input type="checkbox" /><a href="#"> Món chiên rán </a></li>
          <li><input type="checkbox" /><a href="#"> Món Hấp</a></li>
          <li><input type="checkbox" /><a href="#"> Salad </a></li>
          <li><input type="checkbox" /><a href="#"> Hải sản </a></li>
          <li><input type="checkbox" /><a href="#"> Gỏi </a></li>
          <li><input type="checkbox" /><a href="#"> Hun khói </a></li>
        </ul>
      </div>
    </div>
    <div class="shop-widget mt-40 shop-sidebar-border pt-35">
      <h4 class="shop-sidebar-title">So sánh sản phẩm</h4>
      <div class="compare-product">
        <p>Bạn chưa chọn sản phẩm để so sánh.</p>
        <div class="compare-product-btn">
          <span>Xoá</span>
          <a href="#">So sánh <i class="fa fa-check"></i></a>
        </div>
      </div>
    </div>
    <div class="shop-widget mt-40 shop-sidebar-border pt-35">
      <h4 class="shop-sidebar-title">Tags phổ biến</h4>
      <div class="shop-tags mt-25">
        <ul>
          <li><a href="#">Tất cả</a></li>
          <li><a href="#">Cheesy</a></li>
          <li><a href="#">Fast Food</a></li>
          <li><a href="#">French Fries</a></li>
          <li><a href="#">Hamburger </a></li>
          <li><a href="#">Pizza</a></li>
          <li><a href="#">Red Meat</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
