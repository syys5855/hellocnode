<template>
  <div>
        <div class="picker">
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
      items: new Array(18).fill(1).map((val, index) => index),
      pickItems: [],
      perAngle: 20
    };
  },
  created() {
    let len = this.items.length;
    this.pickItems = this.items.map((val, index) => {
      return {
        val,
        index,
        style: {
          transform: `rotateX(${-index * this.perAngle}deg) translateZ(100px)`,
          zIndex: len - index
        }
      };
    });
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
.picker {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%) rotateX(0deg);
  backface-visibility: hidden;
  transform-style: preserve-3d;
  height: 34px;

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
