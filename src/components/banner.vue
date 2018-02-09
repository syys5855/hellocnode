<template>
<div>
    <div class="banner-wrap">
        <div class="banner">
            <div class="banner-item" :class='[item.class,{active:item.index===active,pre:item.index===getIndex(active-1),next:item.index===getIndex(active+1)}]' v-for="(item,index) in bannerItems" :key='index'></div>
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
        },
        {
          class: "orange",
          value: 5
        }
      ],
      active: 0,
      branch: 1
    };
  },
  computed: {
    len() {
      return this.items.length;
    },
    bannerItems() {
      return this.items.map((item, index) => {
        return Object.assign(item, { index });
      });

      let arr = [],
        active = this.active,
        branch = this.branch;
      for (let st = active - branch, ed = active + branch; st <= ed; st++) {
        let index = this.getIndex(st);
        arr.push(Object.assign(this.items[index], { index }));
      }
      return arr;
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
      this.active = this.getIndex(this.active + 1);
    },
    clickPre() {
      this.active = this.getIndex(this.active - 1);
    },
    getIndex(index) {
      let i = index % this.items.length;
      return i < 0 ? this.items.length + i : i;
    }
  }
};
</script>

<style scoped lang="scss">
.red {
  background-color: red;
  //   background: url("../asset/777777.png") center no-repeat;
}
.green {
  background-color: green;
  //   background: url("../asset/888888.png") center no-repeat;
}
.yellow {
  background-color: yellow;
  //   background: url("../asset/999999.png") center no-repeat;
}
.black {
  background-color: black;
  //   background: url("../asset/999999.png") center no-repeat;
}
.orange{
    background-color: orange;
}
.active {
  transform: translate3d(0, 0, 100px) !important;
  transform-origin: center bottom;
  left: 20vw !important;
  opacity: 1 !important;
}
.pre {
  left: 0vw !important;
  opacity: 1 !important;
}
.next {
  left: 40vw !important;
  opacity: 1 !important;
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
  left: 20vw;
  top: 0;
  width: 60vw;
  height: 100px;
  transform: translate3d(0, 0, 0px);
  transition: all 0.3s ease-in-out;
  //   opacity: 0;
}
</style>
