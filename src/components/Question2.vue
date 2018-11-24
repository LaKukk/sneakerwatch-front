<template lang="pug">
  .container
    .col-md-6.float-left(v-if="answer !== 'SPORT'" v-on:click="changeAnswer('SPORT')")
      p.sign SPORT
      svg(height="410" width="400" )
        circle(cx="200" cy="210" r="200" fill="#e0e0e0")
        circle( cx="200" cy="200" r="200" fill="white")
    .col-md-6.float-left(v-if="answer === 'SPORT'" v-on:click="changeAnswer('SPORT')")
      p.sign SPORT
      svg(height="410" width="400" )
        circle(cx="200" cy="210" r="200" fill="#e0e0e0")
        circle(cx="200" cy="200" r="195" fill="white" stroke="blue" stroke-width="3px")
    .col-md-6.float-right(v-if="answer !== 'CASUAL'"  v-on:click="changeAnswer('CASUAL')")
      p.sign CASUAL
      svg(height="410" width="400")
        circle(cx="200" cy="210" r="200" fill="#e0e0e0")
        circle( cx="200" cy="200" r="200" fill="white")
    .col-md-6.float-right(v-if="answer === 'CASUAL'" v-on:click="changeAnswer('CASUAL')")
      p.sign CASUAL
      svg(height="410" width="400" )
        circle(cx="200" cy="210" r="200" fill="#e0e0e0")
        circle(cx="200" cy="200" r="195" fill="white" stroke="blue" stroke-width="3px")
</template>

<script>
  export default {
    name: "Question2",
    data() {
      return {
        selected: 'no'
      }
    },
    computed: {
      answer: function () {
        return this.$store.getters.QUESTION2
      }
    },
    methods: {
      changeAnswer: function (answer) {
        this.$store.commit("SET_QUESTION2", answer)
      }
    }
  }
</script>

<style scoped>
  .container {
    padding-top: 8%;
    margin-bottom: 8%;
  }
  .sign {
    position: absolute;
    margin-top: 160px;
    margin-left: 150px;
    font-size: 60px;
  }
</style>
