<template>
<div>
    <div class="banner-wrap">
        <div class="banner">
            <div class="banner-item" :class='[item.class,{active:item.index===active,pre:item.index===preActive,next:item.index===nextActive}]' v-for="(item,index) in bannerItems" :key='index'></div>
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
          value: 1
        },
        {
          class: "green",
          value: 2
        },
        {
          class: "yellow",
          value: 3
        },
        {
          class: "black",
          value: 4
        }
      ],
      active: 0,
      branch: 1
    };
  },
  computed: {
    bannerItems() {
      let arr = [],
        active = this.active,
        branch = this.branch;
      for (let i = active - branch, l = active + branch; i <= l; i++) {
        let { item, index } = this.getItems(i);
        arr.push(Object.assign(item, { index }));
      }
      return arr;
    },
    preActive() {
      return this.active - 1 > 0
        ? this.active - 1
        : this.items.length - this.active;
    },
    nextActive() {
      return this.active + 1 >= this.items.length ? 0 : this.active + 1;
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
      this.active = this.getItems(this.active + 1).index;
    },
    clickPre() {
      this.active = this.getItems(this.active - 1).index;
    },
    getItems(index) {
      let i = index % this.items.length;
      i = i < 0 ? this.items.length + i : i;
      return { item: this.items[i], index: i };
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
.black {
  background-color: #000;
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
  transition: all 0.3s linear;
  transform: translate3d(0, 0, 0px);
}
</style>
