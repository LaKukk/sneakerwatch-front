import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    question: 1,
  },
  mutations: {
    SET_QUESTION: (state, data) => {
      this.state.question = data
    }
  },
  actions: {
    ADDONE: (context) => {
      this.state.question += 1
    }
  },
  getters: {
    QUESTION: state => {
      return state.question
    }
  }
});
