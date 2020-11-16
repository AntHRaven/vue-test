import Vue from 'vue';
import Router from 'vue-router';
import mainPage from '../pages/mainPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      // путь который будет отслеживаться
      path: '/',
      // название рута
      name: 'mainPage',
      // коспонент который будет подгружен при переходе на данный рут
      component: mainPage,
    },
  ],
});
