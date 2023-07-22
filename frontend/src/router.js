import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import('@/view/Index.vue'),
            children: [
                { path: '', component: () => import('@/view/Quiz.vue') },
                { path: 'insert', component: () => import('@/view/Insert.vue') }
            ]
        }
    ]
});

export default router;