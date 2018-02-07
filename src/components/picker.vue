<template>
  <div class="picker-wrap">
    <div class="picker" :style="pickerStyle">
        <div class="picker-item" v-for="(item,index) in pickItems" :key="index" :style="item.style">
            {{item.val}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perAngle: 20,
      touch: {},
      direction: 0,
      currotate: 0,
      select: 0,
      pickerStyle: {},
      spin: { start: -9, end: 9, branch: 9 },
      loop: true
    };
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  created() {},
  computed: {
    pickItems() {
      let temp = [];
      for (let k = 0; k < this.items.length; k++) {
        let data = {
          val: this.items[k],
          index: k,
          style: {
            transform: `rotate3d(1, 0, 0, ${(-k * 20) %
              360}deg) translate3d(0px, 0px, 100px)`
          }
        };
        temp.push(data);
      }
      return temp;
    }
  },
  mounted() {
    // this.$el指向的是.picker-wrap
    this.$el.addEventListener("touchstart", this._touchstart);
    this.$el.addEventListener("touchmove", this._touchmove);
    this.$el.addEventListener("touchend", this._touchend);
    this.$el.addEventListener("transitionend", this._getValue);
  },
  methods: {
    _touchstart(e) {
      let touch = e.touches[0];
      this.touch.start = {
        x: touch.pageX,
        y: touch.pageY,
        timestamp: e.timeStamp
      };
    },
    _touchmove(e) {
      e.preventDefault();
      e.stopPropagation();
      let touch = e.touches[0];
      this.touch.move = {
        x: touch.pageX,
        y: touch.pageY,
        timestamp: e.timeStamp
      };
      this._setStyle("move");
    },
    _touchend(e) {
      let touchtime = e.timeStamp - this.touch.start.timestamp;
      // 设置系数实现惯性滚动
      let rate = touchtime > 500 ? 1 : 2;
      this.currotate = this._ceilAngle(this._calcRotate(rate));
      this._setStyle("end");
    },
    _setStyle(type) {
      if (type === "move") {
        let angle = this._calcRotate();
        this.pickerStyle = {
          transform: `rotateX(${angle}deg)`,
          transition: ""
        };
        let rst = this._getValue(this._ceilAngle(angle));
        console.log(rst.index);
      } else if (type === "end") {
        this.pickerStyle = {
          transform: `rotateX(${this.currotate}deg)`,
          transition: "transform 1s cubic-bezier(0, 0.31, 0.06, 0.97)"
        };
      }
    },
    _ceilAngle(angle) {
      return this.perAngle * Math.ceil(angle / this.perAngle);
    },
    _calcRotate(rate = 1.0) {
      let start = this.touch.start;
      let move = this.touch.move;

      if (!move) return;

      let moveDistance = rate * (move.y - start.y); //ratate移动系数
      let px2Angle = 20 / 34;
      // -1 up,1 down
      this.direction = moveDistance < 0 ? -1 : 1;
      return this.currotate - moveDistance / px2Angle;
    },
    _getValue(angle = this.currotate) {
      let index = angle / this.perAngle;
      index =
        (index > 0 ? index : this.items.length + index) % this.items.length;
      console.log("getValue-->", angle);
      return { index, angle, value: this.items[index] };
    }
  }
};
</script>

<style scoped lang="scss">
ul,
li {
  padding: 0px;
  margin: 0px;
  list-style: none;
}
%fill-parent {
  width: 100%;
  height: 100%;
}
.picker-wrap {
  position: absolute;
  top: 100px;
  left: 0;
  height: 30vh;
  width: 200px;
  overflow: hidden;
}
.picker {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%) rotateX(0deg);
  backface-visibility: hidden;
  transform-style: preserve-3d;
  height: 34px;
  overflow: visible;
  .picker-item {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    border: 1px solid #f1f1f1;
    height: 34px;
    line-height: 34px;
    background: #fff;
    text-align: center;
    // overflow: hidden;
  }
}
</style>
