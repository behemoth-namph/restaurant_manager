<template>
  <div class="description-review-area pb-100">
    <div class="container">
      <div class="description-review-wrapper">
        <div class="description-review-topbar nav text-center">
          <a
            :class="{ active: tab == 1 }"
            data-toggle="tab"
            href="javascript:void(0);"
            @click="tab = 1"
          >
            Mô tả
          </a>
          <a
            :class="{ active: tab == 2 }"
            data-toggle="tab"
            href="javascript:void(0);"
            @click="tab = 2"
            >Tags</a
          >
          <a
            :class="{ active: tab == 3 }"
            data-toggle="tab"
            href="javascript:void(0);"
            @click="tab = 3"
            >Review</a
          >
        </div>
        <div class="tab-content description-review-bottom">
          <div id="des-details1" class="tab-pane" :class="{ active: tab == 1 }">
            <div class="product-description-wrapper">
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros et accumsan et iusto odio dignissim qui
                blandit praesent luptatum zzril delenit augue duis dolore te
                feugait nulla facilisi. Nam liber tempor cum soluta nobis
                eleifend option congue nihil imperdiet doming id quod mazim
                placerat facer possim assum. Typi non habent claritatem insitam
                est usus legentis in iis qui facit eorum claritatem.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </p>
              <ul>
                <li>- Typi non habent claritatem insitam</li>
                <li>
                  - Est usus legentis in iis qui facit eorum claritatem.
                </li>
                <li>
                  - Investigationes demonstraverunt lectores legere me lius quod
                  ii legunt saepius.
                </li>
                <li>
                  - Claritas est etiam processus dynamicus, qui sequitur
                  mutationem consuetudium lectorum.
                </li>
              </ul>
            </div>
          </div>
          <div id="des-details2" class="tab-pane" :class="{ active: tab == 2 }">
            <div class="product-anotherinfo-wrapper">
              <ul>
                <li><span>Tags:</span></li>
                <li><a href="#"> All,</a></li>
                <li><a href="#"> Cheesy,</a></li>
                <li><a href="#"> Fast Food,</a></li>
                <li><a href="#"> French Fries,</a></li>
                <li><a href="#"> Hamburger,</a></li>
                <li><a href="#"> Pizza</a></li>
              </ul>
            </div>
          </div>
          <div id="des-details3" class="tab-pane" :class="{ active: tab == 3 }">
            <div class="rattings-wrapper">
              <div class="sin-rattings">
                <div class="star-author-all">
                  <div class="ratting-star f-left">
                    <i class="ion-star theme-color"></i>
                    <i class="ion-star theme-color"></i>
                    <i class="ion-star theme-color"></i>
                    <i class="ion-star theme-color"></i>
                    <i class="ion-star theme-color"></i>
                    <span>(5)</span>
                  </div>
                  <div class="ratting-author f-right">
                    <h3>tayeb rayed</h3>
                    <span>12:24</span>
                    <span>9 March 2018</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Utenim ad minim veniam, quis nost rud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Utenim ad
                  minim veniam, quis nost.
                </p>
              </div>
              <div class="sin-rattings">
                <div class="star-author-all">
                  <div class="ratting-star f-left">
                    <i class="ion-star theme-color"></i>
                    <i class="ion-star theme-color"></i>
                    <i class="ion-star theme-color"></i>
                    <i class="ion-star theme-color"></i>
                    <i class="ion-star theme-color"></i>
                    <span>(5)</span>
                  </div>
                  <div class="ratting-author f-right">
                    <h3>farhana shuvo</h3>
                    <span>12:24</span>
                    <span>9 March 2018</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Utenim ad minim veniam, quis nost rud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Utenim ad
                  minim veniam, quis nost.
                </p>
              </div>
            </div>
            <div class="ratting-form-wrapper">
              <h3>Add your Comments :</h3>
              <div class="ratting-form">
                <form action="#">
                  <div class="star-box">
                    <h2>Rating:</h2>
                    <div class="ratting-star">
                      <i class="ion-star theme-color"></i>
                      <i class="ion-star theme-color"></i>
                      <i class="ion-star theme-color"></i>
                      <i class="ion-star theme-color"></i>
                      <i class="ion-star"></i>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="rating-form-style mb-20">
                        <input placeholder="Name" type="text" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="rating-form-style mb-20">
                        <input placeholder="Email" type="text" />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="rating-form-style form-submit">
                        <textarea
                          name="message"
                          placeholder="Message"
                        ></textarea>
                        <input type="submit" value="add review" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 1,
    };
  },
};
</script>
