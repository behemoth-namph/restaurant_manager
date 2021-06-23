<template>
  <div class="loading" v-if="showed">
    <img :src="loadingImg" />
  </div>
</template>

<script>
import loadingImg from "images/loading";

export default {
  props: {
    display: Boolean
  },
  data() {
    return {
      showed: this.display,
      loadingImg: loadingImg
    };
  },
  methods: {
    show() {
      this.showed = true;
    },
    hide() {
      this.showed = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999999;
  background: #000000db;
  align-items: center;
  justify-content: center;
  animation: animate .3s;
}

@keyframes animate {
  from {opacity: 0;}
  to {opacity: 1;}
}
</style>