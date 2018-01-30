<template>
  <div class="scroll-wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import IScroll from "iscroll";
let scroller;
function preventDefault(e) {
  e.preventDefault();
}
export default {
  props: {
    shouldRefresh: Boolean
  },
  created() {},
  mounted() {
    this.$nextTick(function() {
      const wrapper = this.$refs.wrapper;
      wrapper.addEventListener("touchmove", preventDefault);
      scroller = new IScroll(wrapper);
    });
  },
  watch: {
    shouldRefresh(newVal, oldVal) {
      console.log(newVal, oldVal);
      scroller && scroller.refresh();
    }
  }
};
</script>

<style scoped>
.scroll-wrapper {
  height: 100vh;
}
</style>
