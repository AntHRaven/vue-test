import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// eslint-disable-next-line no-unused-vars,import/prefer-default-export
export const store = new Vuex.Store({
  // объект в котором хранятся все переменные
  state: {
    // переменная хранилища
    count: 0,
  },

  // список действие вызываемых из веба
  actions: {
    // отдельное действие
    increment(context) {
      // вызов мутации которая будет изменять данные в хранилище
      // eslint-disable-next-line no-plusplus
      context.commit('setCount');
    },
  },

  mutations: {
    // мутация для изменения данных в хранилище
    setCount(state) {
      // eslint-disable-next-line no-plusplus
      state.count++;
    },
  },

  getters: {
    // метод для получения данных из хранилища
    getCount: state => state.count,
  },

});
