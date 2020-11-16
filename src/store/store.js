import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// eslint-disable-next-line no-unused-vars,import/prefer-default-export
export const store = new Vuex.Store({
  state: {
    count: 0,
  },
  actions: {
    increment(context) {
      // eslint-disable-next-line no-plusplus
      context.commit('setCount');
    },
  },

  mutations: {
    setCount(state) {
      // eslint-disable-next-line no-plusplus
      state.count++;
    },
  },

  getters: {
    getCount: state => state.count,
  },

});
