<template>
  <div class="scroll-wrapper" ref="wrapper" >
    <div style="position:relative;">
      <slot></slot>
      <!-- <div style="position:absolute;left:0;bottom:-30px">pull up load more</div> -->
    </div>
  </div>
</template>

<script>
import IScroll from "iscroll";
let scroller;
function preventDefault(e) {
  e.preventDefault();
}
export default {
  name: "scroller",
  props: {
    shouldRefresh: Boolean,
    starty: {
      type: Number,
      default: 0
    }
  },
  created() {},
  mounted() {
    this.$nextTick(function() {
      const wrapper = this.$refs.wrapper;
      wrapper.addEventListener("touchmove", preventDefault);
      scroller = new IScroll(wrapper, {
        startY: this.starty
      });
    });
  },
  watch: {
    shouldRefresh(newVal, oldVal) {
      console.log(newVal, oldVal, scroller);
      scroller && (scroller.refresh(), this.$emit("scroller", scroller));
    }
  }
};
</script>

<style scoped>
.scroll-wrapper {
  height: 100vh;
  overflow: hidden;
}
</style>
