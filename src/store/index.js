import Vue from 'vue';
import Vuex from 'vuex';
import actions from './action';
import mutations from './mutations';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        topics: [],
        currPage: 1,
        currPageSize: 20,
        topic: {},
        savePosition: {},
    },
    mutations,
    actions
});

export default store;