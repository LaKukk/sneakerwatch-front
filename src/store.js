import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    question: 1,
  },
  mutations: {
    SET_QUESTION: (state, payload) => {
      state.question = payload
    }
  },
  actions: {
  },
  getters: {
    QUESTION: state => {
      return state.question
    }
  }
});
