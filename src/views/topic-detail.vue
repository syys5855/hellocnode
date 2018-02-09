<template>
  <div>
    <!-- <loading v-if="this.id !== topic.id"></loading>
    <scroller :update-at="updateAt" v-else>
      <div  v-html="topic.content"></div>
    </scroller> -->


    <!-- <picker :items="items">
    </picker> -->

      <banner>
        <banner-item :item-index='0'><div class="test-item red"></div></banner-item>
        <banner-item :item-index='1'><div class="test-item yellow"></div></banner-item>
        <banner-item :item-index='2'><div class="test-item black"></div></banner-item>
        <banner-item :item-index='3'><div class="test-item orange"></div></banner-item>
        
      </banner>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import picker from "@/components/picker";
import banner from "@/components/banner.js";
import bannerItem from "@/components/banner-item";
import "@/components/banner.css";
export default {
  data() {
    return {
      id: "",
      updateAt: 0,
      items: new Array(100).fill(1).map((val, index) => index)
    };
  },
  components: {
    picker,
    banner,
    bannerItem
  },
  methods: Object.assign({}, mapActions(["fetchTopicDetail"])),
  computed: Object.assign({}, mapState(["topic"])),
  created() {
    // let id = this.$route.params.id;
    // this.id = id;
    // this.fetchTopicDetail({ id }).then(() => {
    //   this.updateAt = Date.now();
    // });
  }
};
</script>

<style>
.test-item {
  width: 100%;
  height: 100%;
}
.red {
  background-color: red;
}
.green {
  background-color: green;
}
.yellow {
  background-color: yellow;
}
.black {
  background-color: black;
}
.orange {
  background-color: orange;
}
</style>
