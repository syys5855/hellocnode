import Vue from 'vue';
import router from './routes';
import '@/filter';
import store from '@/store';
// template
import App from '@/views/app'
// muse ui
import scroller from '@/components/iscroll';
import loading from '@/components/loading'
import MuseUi from 'muse-ui';
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUi);

Vue.component('scroller', scroller);
Vue.component('loading', loading);
new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>',
    router,
    store
})