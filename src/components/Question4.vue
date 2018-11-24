<template lang="pug">
  .container
    .col-md-4.float-left(v-if="answer !== 'LOW'")
      svg(height="310" width="300" v-on:click="changeAnswer('LOW')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-left(v-if="answer === 'LOW'")
      svg(height="310" width="300" v-on:click="changeAnswer('LOW')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-right(v-if="answer !== 'HIGH'")
      svg(height="310" width="300" v-on:click="changeAnswer('HIGH')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-right(v-if="answer === 'HIGH'")
      svg(height="310" width="300" v-on:click="changeAnswer('HIGH')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-right(v-if="answer !== 'MID'")
      svg(height="310" width="300" v-on:click="changeAnswer('MID')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-right(v-if="answer === 'MID'")
      svg(height="310" width="300" v-on:click="changeAnswer('MID')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")

</template>

<script>
  export default {
    name: "Question4",
    data() {
      return {
        selected: 'no'
      }
    },
    computed: {
      answer: function () {
        return this.$store.getters.QUESTION4
      }
    },
    methods: {
      changeAnswer: function (answer) {
        this.$store.commit("SET_QUESTION4", answer)
      }
    }
  }
</script>

<style scoped>

</style>
