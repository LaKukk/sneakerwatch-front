<template lang="pug">
  .container
    .col-md-4.float-left(v-if="answer !== 'Running'")
      svg(height="310" width="300" v-on:click="changeAnswer('Running')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-left(v-if="answer === 'Running'")
      svg(height="310" width="300" v-on:click="changeAnswer('Running')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-right(v-if="answer !== 'Tennis'")
      svg(height="310" width="300" v-on:click="changeAnswer('Tennis')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-right(v-if="answer === 'Tennis'")
      svg(height="310" width="300" v-on:click="changeAnswer('Tennis')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-right(v-if="answer !== 'Basketball'")
      svg(height="310" width="300" v-on:click="changeAnswer('Basketball')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-right(v-if="answer === 'Basketball'")
      svg(height="310" width="300" v-on:click="changeAnswer('Basketball')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
</template>

<script>
  export default {
    name: "Question3",
    data() {
      return {
        selected: 'no'
      }
    },
    computed: {
      answer: function () {
        return this.$store.getters.QUESTION3
      }
    },
    methods: {
      changeAnswer: function (answer) {
        this.$store.commit("SET_QUESTION3", answer)
      }
    }
  }
</script>

<style scoped>

</style>
