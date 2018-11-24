import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueConfig from 'vue-config'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

const config = {
  API_BASE: process.env.API_BASE
}

Vue.use(VueConfig, config)
Vue.use(VueResource)
Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render(h) { return h(App); },
}).$mount('#app');
