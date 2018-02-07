<template>
  <div>
    <!-- <loading v-if="this.id !== topic.id"></loading>
    <scroller :update-at="updateAt" v-else>
      <div  v-html="topic.content"></div>
    </scroller> -->
    <picker :items="items">
    </picker>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import picker from "@/components/picker";
export default {
  data() {
    return {
      id: "",
      updateAt: 0,
      items: new Array(100).fill(1).map((val, index) => index)
    };
  },
  components: {
    picker
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

</style>
