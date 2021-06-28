<template>
  <div class="breadcrumb-area gray-bg">
    <div class="container">
      <div class="breadcrumb-content">
        <ul>
          <li v-for="(item, index) in listItem" :key="index">
            <a :href="item.link" :class="{active: item.isCurrent}">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listItem: {
      type: Array,
      default: () => []
    }
  }
};
</script>
