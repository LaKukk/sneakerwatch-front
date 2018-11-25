import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import NavBar from './components/Navbar.vue';
import ChooseAshoe from './views/ChooseAshoe.vue';
import SearchAShoe from './views/SearchAShoe.vue';
import Result from './views/Result.vue';
import SmartSticker from './components/SmartSticker.vue';
import About from './views/About';
import Shoe from './views/Shoe';
import Profile from './views/Profile';

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
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/searchashoe',
      name: 'SearchAshoe',
      component: SearchAShoe,
    },
    {
      path: '/sneaker/:pointer',
      name: 'Sneaker',
      component: Shoe,
    },
    {
      path: '/chooseashoe/result',
      name: 'Result',
      component: Result,
    },
    {
      path: '/technology',
      name: 'SmartSticker',
      component: SmartSticker,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});
