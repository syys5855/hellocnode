import Vue from 'vue';
import router from './routes';
import '@/filter';
import store from '@/store';
// muse ui
import scroller from '@/components/iscroll';
import MuseUi from 'muse-ui';
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUi);

Vue.component('scroller', scroller);
new Vue({
    el: '#app',
    template: '<router-view></router-view>',
    router,
    store
})