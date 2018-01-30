import Vue from 'vue';
import Vuex from 'vuex';
import actions from './action';
import mutations from './mutations';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        topics: [],
        topic: {}
    },
    mutations,
    actions
});

export default store;