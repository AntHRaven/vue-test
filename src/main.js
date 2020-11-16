// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import { store } from './store/store';
// eslint-disable-next-line import/first
import ElementUI from 'element-ui';
// eslint-disable-next-line import/first
import locale from 'element-ui/lib/locale/lang/en';
// eslint-disable-next-line import/first
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(ElementUI, { locale });
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
