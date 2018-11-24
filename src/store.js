import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    question: 1,
    question1: null,
    question2: null,
    question3: null,
    question5_min: 0,
    question5_max: 0,
    question4: null,
    question6: [],
  },
  mutations: {
    SET_QUESTION: (state, payload) => {
      state.question = payload
    },
    SET_QUESTION1: (state, payload) => {
      state.question1 = payload
    },
    SET_QUESTION2: (state, payload) => {
      state.question2 = payload
    },
    SET_QUESTION3: (state, payload) => {
      state.question3 = payload
    },
    SET_QUESTION5MIN: (state, payload_min) => {
      state.question5_min = payload_min
    },
    SET_QUESTION5MAX: (state, payload_min) => {
      state.question5_max = payload_min
    },
    SET_QUESTION4: (state, payload) => {
      state.question4 = payload
    },
    SET_QUESTION6: (state, payload) => {
      if (state.question6.includes(payload)) {
        state.question6 = state.question6.filter(item => item !== payload)
      } else {
        state.question6.push(payload)
      }
    },
    RESET_QUESTIONS: (state) => {
      state.question1 = null
      state.question2 = null
      state.question3 = null
      state.question5_max = 0
      state.question5_min = 0
      state.question4 = null
      state.question6 = []
    }
  },
  actions: {
  },
  getters: {
    QUESTION: state => {
      return state.question
    },
    QUESTION1: state => {
      return state.question1
    },
    QUESTION2: state => {
      return state.question2
    },
    QUESTION3: state => {
      return state.question3
    },
    QUESTION5MIN: state => {
      return state.question5_min
    },
    QUESTION5MAX: state => {
      return state.question5_max
    },
    QUESTION4: state => {
      return state.question4
    },
    QUESTION6: state => {
      return state.question6
    },
  }
});
