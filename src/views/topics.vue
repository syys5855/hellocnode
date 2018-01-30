<template>
    <div>
      <mu-appbar title="cnode" class="appbar">
        <mu-icon-button slot="left">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </mu-icon-button>
      </mu-appbar>
      <scroller :shouldRefresh="updated" style="height:calc(100vh - 56px);">
        <mu-list>
          <div v-for="topic in topics" :key="topic.id">
            <div class="topic-title-wrap">
              <div class="topic-type" v-text="topic.tab"></div>
              <div class="topic-title" v-text="topic.title"></div>
            </div>
            <mu-list-item :title="topic.author.loginname" :describeText="createAt(topic.create_at)" :to="{name:'/topic',params:{id:topic.id}}">
              <mu-avatar  slot="leftAvatar">
                <img :src="topic.author.avatar_url" />
              </mu-avatar>
              <div slot="right" style="text-align:right;padding-right:12px">
                <span v-text="topic.reply_count"></span><br/>
                <span v-text="createAt(topic.last_reply_at)"></span>
              </div>
            </mu-list-item>
            <mu-divider/>
          </div>
        </mu-list>
    </scroller>
  </div>
</template>
<script>
import Vue from "vue";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      updated: false
    };
  },
  computed: Object.assign({}, mapState(["topics"])),
  methods: Object.assign({}, mapActions(["fetchTopics"]), {
    createAt(dateStr) {
      const filter = Vue.filter("filterDateStr");
      return filter(dateStr, "yy/MM/dd");
    }
  }),
  created() {
    this.fetchTopics().then(topics => {
      this.updated = true;
    });
  }
};
</script>

<style scoped lang="scss">
.appbar{
  position: relative;
  z-index: 111111;
}
.topic-title-wrap {
  display: flex;
  align-items: center;
  padding: 12px;
  margin-bottom: -16px;
  .topic-type {
    flex-shrink: 0;
    position: relative;
    width: 46px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    color: #fff;
    &:before {
      display: block;
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      background: #e74c3c;
      width: 100%;
      height: 100%;
      z-index: -1;
      border-radius: 5px;
    }
  }
  .topic-title {
    margin-left: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>
