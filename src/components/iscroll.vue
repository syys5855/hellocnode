<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroller">
      <slot></slot>
      <div class="scroller-pull up" v-if="typeof loadFun==='function'">{{status.active?'release to load data':'pull up load'}}</div>
    </div>
  </div>
</template>

<script>
import IScroll from "iscroll";
function preventDefault(e) {
  e.preventDefault();
}
export default {
  name: "scroller",
  props: {
    updateAt: Number,
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
      offsetHeight: 30,
      threshold: 100
    };
  },
  mounted() {
    this.$nextTick(function() {
      const wrapper = this.$refs.wrapper;
      wrapper.addEventListener("touchmove", preventDefault);
      // scroller 不需要监听，不定义在data上
      this.scroller = new IScroll(wrapper, {
        startY: this.starty,
        probeType: 1,
        click: true
      });
      this.scroller.on("scroll", () => {
        if (
          !this.status.active &&
          this.scroller.y < this.scroller.maxScrollY &&
          Math.abs(this.scroller.y - this.scroller.maxScrollY) > this.threshold
        ) {
          this.status.active = true;
          this.scroller.maxScrollY -= this.offsetHeight;
        }
      });

      this.scroller.on("scrollEnd", () => {
        typeof this.loadFun === "function" &&
          this.status.active &&
          this.loadFun();
      });

      this.$emit("scroller", this.scroller);
    });
  },
  destroyed() {
    this.scroller.destroy();
    this.scroller = null;
  },
  watch: {
    updateAt(newVal) {
      console.log(newVal);
      setTimeout(() => {
        this.refresh();
        this.status.active = false;
      }, 10);
    }
  },
  methods: {
    refresh() {
      console.log("refresh immediately...");
      this.scroller.refresh();
      console.log("refresh again if need...");
      this.refreshIfNeed();
    },
    refreshIfNeed() {
      let wrapper = this.$refs.wrapper;
      let allImg = Array.from(wrapper.querySelectorAll("img"))
        .filter(img => !img.complete)
        .map(img => {
          return new Promise((res, rej) => {
            img.onload = function() {
              res();
            };
            img.onerror = function() {
              res();
            };
          });
        });

      console.log("allImg length", allImg.length);
      allImg.length > 0
        ? Promise.all(allImg).then(() => {
            console.log("allimg response then refresh...");
            this.scroller.refresh();
          })
        : console.log("don't need refresh again");
    }
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
