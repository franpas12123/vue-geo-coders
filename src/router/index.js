import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from '@/components/Welcome';
import Chat from '@/components/Chat/Chat';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat,
    props: true,
    beforeEnter: (to, from, next) => {
      if (!to.params.name) {
        alert('restricted');
        next({ name: 'welcome' });
      } else {
        next();
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
