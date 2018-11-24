import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import NavBar from './components/Navbar.vue';
import ChooseAshoe from './views/ChooseAshoe.vue';
import Result from './views/Result.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/navBar',
          name: 'NavBar',
          component: NavBar,
        },
      ],

    },
    {
      path: '/chooseashoe',
      name: 'Chooseashoe',
      component: ChooseAshoe,
    },
    {
      path: '/chooseashoe/result',
      name: 'Result',
      component: Result,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component() {
        return import(/* webpackChunkName: "about" */ './views/About.vue');
      },
    },
  ],
});
