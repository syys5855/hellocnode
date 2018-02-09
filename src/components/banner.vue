<template>
<div>
    <div class="banner-wrap">
        <div class="banner">
            <div class="banner-item" :class='[item.class,{active:item.index===active,pre:item.index===(active-1)%len,next:item.index===(active+1)%len}]' v-for="(item,index) in items" :key='index'></div>
        </div>
    </div>
    <button @click="clickNext">btnNext</button>
    <button @click="clickPre">btnPre</button>
</div>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      items: [
        {
          class: "red",
          value: 1,
          index: 0
        },
        {
          class: "green",
          value: 2,
          index: 1
        },
        {
          class: "yellow",
          value: 3,
          index: 2
        }
      ],
      active: 0
    };
  },
  computed: {
    len() {
      return this.items.length;
    }
  },
  methods: {
    itemStyle(index) {
      let descript = {
        left: `${index * 20}vw`
      };
      return descript;
    },
    clickNext() {
      this.active = ++this.active % this.items.length;
    },
    clickPre() {
      let active = this.active - 1;
      active = active % this.items.length;
      this.active = active < 0 ? this.items.length + active : active;
    }
  }
};
</script>

<style scoped lang="scss">
.red {
  background-color: red;
  background: url("../asset/777777.png") center no-repeat;
}
.green {
  background-color: green;
  background: url("../asset/888888.png") center no-repeat;
}
.yellow {
  background-color: yellow;
  background: url("../asset/999999.png") center no-repeat;
}
.active {
  transform: translate3d(0, 0, 100px) !important;
  transform-origin: center bottom;
  left: 20vw !important;
}
.pre {
  left: 0vw !important;
}
.next {
  left: 40vw !important;
}

.banner-wrap {
  position: relative;
  height: 80vh;
}
.banner {
  position: relative;
  left: 0;
  top: 50%;
  height: 100px;
  transform-style: preserve-3d;
  perspective-origin: center bottom;
  perspective: 1200px;
}
.banner-item {
  position: absolute;
  left: 0;
  top: 0;
  width: 60vw;
  height: 100px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(0, 0, 0px);
}
</style>
