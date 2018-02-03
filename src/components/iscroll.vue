<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroller">
      <slot></slot>
      <div class="scroller-pull up">pull up load more</div>
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
    },
    loadFun: Function
  },
  data() {
    return {
      status: {
        active: false
      },
      offsetHeight: 30
    };
  },
  created() {},
  mounted() {
    this.$nextTick(function() {
      const wrapper = this.$refs.wrapper;
      wrapper.addEventListener("touchmove", preventDefault);
      scroller = new IScroll(wrapper, {
        startY: this.starty,
        probeType: 1
      });
      scroller.on("scroll", () => {
        if (
          !this.status.active &&
          Math.abs(scroller.y - scroller.maxScrollY) > 100
        ) {
          this.status.active = true;
          scroller.maxScrollY -= this.offsetHeight;
        }
      });

      scroller.on("scrollEnd", () => {
        typeof this.loadFun === "function" &&
          this.status.active &&
          this.loadFun();
      });
      this.$emit("scroller", scroller);
    });
  },
  updated() {
    this.status.active = false;
    scroller && scroller.refresh();
    console.log("updated", scroller);
  }
};
</script>

<style lang="scss" scoped>
$pullElHeight: 30px;
.scroll-wrapper {
  height: 100vh;
  overflow: hidden;
}
.scroller {
  position: relative;
  .scroller-pull {
    position: absolute;
    left: 0;
    width: 100%;
    height: $pullElHeight;
    line-height: $pullElHeight;
    text-align: center;
    .up {
      bottom: -30px;
    }
  }
}
</style>
