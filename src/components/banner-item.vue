<template>
  <!-- <div class="banner-item" :class='[{active:itemIndex===active,pre:itemIndex===active,next:itemIndex===active}]'> -->
  <div class="banner-item" :class='[{active:itemIndex===active,pre:itemIndex===$parent.getIndex(active-1),next:itemIndex===$parent.getIndex(active+1)}]'>
      <slot></slot>
  </div>
</template>
<script>
export default {
  name: "bannerItem",
  props: ["itemIndex"],
  computed: {
    active() {
      return this.$parent.active;
    }
  }
};
</script>

<style scoped lang="scss">
.banner-item {
  position: absolute;
  left: 20vw;
  top: 0;
  width: 60vw;
  height: 100px;
  transform: translate3d(0, 0, 0px);
  transition: all 0.3s ease-in-out;
  //   opacity: 0;
}
</style>
