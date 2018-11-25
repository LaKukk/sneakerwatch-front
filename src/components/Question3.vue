<template lang="pug">
  .container
    .col-md-4.float-left(v-if="answer !== 'Running'"  v-on:click="changeAnswer('Running')")
      img(src="../assets/running.svg").sign
      svg(height="310" width="300" v-on:click="changeAnswer('Running')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-left(v-if="answer === 'Running'"  v-on:click="changeAnswer('Running')")
      img(src="../assets/running.svg").sign
      svg(height="310" width="300")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-right(v-if="answer !== 'Tennis'"  v-on:click="changeAnswer('Tennis')")
      img(src="../assets/tennis.svg").sign
      svg(height="310" width="300")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-right(v-if="answer === 'Tennis'"  v-on:click="changeAnswer('Tennis')")
      img(src="../assets/tennis.svg").sign
      svg(height="310" width="300")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-right(v-if="answer !== 'Basketball'" v-on:click="changeAnswer('Basketball')")
      img(src="../assets/basketball.svg").sign
      svg(height="310" width="300")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-right(v-if="answer === 'Basketball'" v-on:click="changeAnswer('Basketball')")
      img(src="../assets/basketball.svg").sign
      svg(height="310" width="300" )
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-left(v-if="answer !== 'Skate'"  v-on:click="changeAnswer('Skate')")
      img(src="../assets/skateboard.svg").sign
      svg(height="310" width="300" v-on:click="changeAnswer('Running')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-left(v-if="answer === 'Skate'"  v-on:click="changeAnswer('Skate')")
      img(src="../assets/skateboard.svg").sign
      svg(height="310" width="300")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-right(v-if="answer !== 'Training'"  v-on:click="changeAnswer('Training')")
      img(src="../assets/man-lifting-weights.svg").sign
      svg(height="310" width="300")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-right(v-if="answer === 'Training'"  v-on:click="changeAnswer('Training')")
      img(src="../assets/man-lifting-weights.svg").sign
      svg(height="310" width="300")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-right(v-if="answer !== 'Hiking'" v-on:click="changeAnswer('Hiking')")
      img(src="../assets/hiking.svg").sign
      svg(height="310" width="300")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-right(v-if="answer === 'Hiking'" v-on:click="changeAnswer('Hiking')")
      img(src="../assets/hiking.svg").sign
      svg(height="310" width="300" )
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
  .container {
    padding-top: 8%;
    margin-bottom: 8%;
  }
  .sign  {
    height: 170px;
    position: absolute;
    margin-top: 65px;
    margin-left: 65px;
  }
  .col-md-4 {
    margin-top: 20px;
  }
</style>
