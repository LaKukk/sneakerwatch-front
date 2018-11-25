<template lang="pug">
  .container
    .col-md-4.float-left(v-if="answer !== 'LOW'" v-on:click="changeAnswer('LOW')")
      p.sign4
        | LOW
        | HEIGHT
      svg(height="310" width="300" )
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-left(v-if="answer === 'LOW'" v-on:click="changeAnswer('LOW')")
      p.sign4 LOW HEIGHT
      svg(height="310" width="300")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-right(v-if="answer !== 'HIGH'"  v-on:click="changeAnswer('HIGH')")
      p.sign4 HIGH HEIGHT
      svg(height="310" width="300")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-right(v-if="answer === 'HIGH'"  v-on:click="changeAnswer('HIGH')")
      p.sign4 HIGH HEIGHT
      svg(height="310" width="300")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-right(v-if="answer !== 'MID'" v-on:click="changeAnswer('MID')")
      p.sign4 MID HEIGHT
      svg(height="310" width="300" )
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-right(v-if="answer === 'MID'" v-on:click="changeAnswer('MID')")
      p.sign4 MID HEIGHT
      svg(height="310" width="300")
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
  .container {
    padding-top: 8%;
    margin-bottom: 8%;
  }
  .sign4 {
    position: absolute;
    margin-top: 110px;
    margin-left: 30px;
    font-size: 50px;
  }
</style>
