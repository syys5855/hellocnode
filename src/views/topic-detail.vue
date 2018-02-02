<template>
  <div>
    <loading v-if="this.id !== topic.id"></loading>
    <scroller v-else :shouldRefresh="!loading">
      <div  v-html="topic.content"></div>
    </scroller>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return { id: "", loading: true };
  },
  methods: Object.assign({}, mapActions(["fetchTopicDetail"])),
  computed: Object.assign({}, mapState(["topic"])),
  created() {
    let id = this.$route.params.id;
    this.id = id;
    this.fetchTopicDetail({ id }).then(() => {
      this.loading = false;
    });
  }
};
</script>

<style>

</style>
