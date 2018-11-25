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
    budget: null,
    brands: null,
    inspirations: null,
    shoe1: null,
    shoe2: null,
    shoe3: null,
    shoe4: null
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
    SET_QUESTION5MAX: (state, payload_max) => {
      state.question5_max = payload_max
    },
    SET_QUESTION4: (state, payload) => {
      state.question4 = payload
    },
    SET_SHOE1: (state, payload) => {
      state.shoe1 = payload
    },
    SET_SHOE2: (state, payload) => {
      state.shoe2 = payload
    },
    SET_SHOE3: (state, payload) => {
      state.shoe3 = payload
    },
    SET_SHOE4: (state, payload) => {
      state.shoe4 = payload
    },
    SET_QUESTION6: (state, payload) => {
      if (state.question6.includes(payload)) {
        state.question6 = state.question6.filter(item => item !== payload)
      } else {
        state.question6.push(payload)
      }
    },
    RESET_QUESTIONS: (state) => {
      state.question1 = null;
      state.question2 = null;
      state.question3 = null;
      state.question5_max = 0;
      state.question5_min = 0;
      state.question4 = null;
      state.question6 = [];
    },
    CLEARSHOE: (state) => {
      state.shoe1 = undefined;
      state.shoe2 = undefined;
      state.shoe3 = undefined;
      state.shoe4 = undefined;
    },
    getBudget(state, budget) {
      state.budget = budget
    },
    getBrands(state, brands) {
      state.brands = brands
    },
    getInspirations(state, inspirations) {
      state.inspirations = inspirations
    }
  },
  actions: {
    // budget controller
    getBudget: function(context) {
      this.$http.get(this.$config.API_BASE + 'budget').then((res) => {
        context.commit('budget', res.result)
      })
    },
    // sneaker
    chooseSneakers: function(context) {

    },
    // filter
    getBrands: function (context) {
      this.$http.get(this.$config.API_BASE + 'filter/brands').then((res) => {
        context.commit('brands', res.result)
      })
    },
    getInspirations: function (context) {
      this.$http.get(this.$config.API_BASE + 'filter/inspirations').then((res) => {
        context.commit('inspirations', res.result)
      })
    },
    // sneaker search query
  },
  getters: {
    QUESTION: state => state.question,
    QUESTION1: state => state.question1,
    QUESTION2: state => state.question2,
    QUESTION3: state => state.question3,
    QUESTION5MIN: state => state.question5_min,
    QUESTION5MAX: state => state.question5_max,
    QUESTION4: state => state.question4,
    QUESTION6: state => state.question6,
    BUDGET: state => state.budget,
    BRANDS: state => state.brands,
    INSPIRATIONS: state => state.inspirations,
    SHOE1: state => state.shoe1,
    SHOE2: state => state.shoe2,
    SHOE3: state => state.shoe3,
    SHOE4: state => state.shoe4,
  },
});
