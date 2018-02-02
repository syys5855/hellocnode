import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// views
import topics from '@views/topics';
import topicDetail from '@views/topic-detail';

let routes = [{
    path: '/',
    name: 'list',
    component: topics,
    // meta: {
    //     keepAlive: true
    // }

}, {
    path: '/topic/:id',
    name: '/topic',
    component: topicDetail
}]

const router = new VueRouter({
    routes
});

export default router;