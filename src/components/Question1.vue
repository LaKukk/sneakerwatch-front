<template lang="pug">
    .container
      .col-md-6.float-left(v-if="answer !== 'woman'" v-on:click="changeAnswer('woman')")
        img(src="../assets/female.svg").sign
        svg(height="410" width="400")
          circle(cx="200" cy="210" r="200" fill="#e0e0e0")
          circle( cx="200" cy="200" r="200" fill="white")
      .col-md-6.float-left(v-if="answer === 'woman'" v-on:click="changeAnswer('woman')")
        img(src="../assets/female.svg").sign
        svg(height="410" width="400" )
          circle(cx="200" cy="210" r="200" fill="#e0e0e0")
          circle(cx="200" cy="200" r="195" fill="white" stroke="blue" stroke-width="3px")
      .col-md-6.float-right(v-if="answer !== 'man'" v-on:click="changeAnswer('man')")
        img(src="../assets/male.svg").sign
        svg(height="410" width="400" )
          circle(cx="200" cy="210" r="200" fill="#e0e0e0")
          circle( cx="200" cy="200" r="200" fill="white")
      .col-md-6.float-right(v-if="answer === 'man'"  v-on:click="changeAnswer('man')")
        img(src="../assets/male.svg").sign
        svg(height="410" width="400")
          circle(cx="200" cy="210" r="200" fill="#e0e0e0")
          circle(cx="200" cy="200" r="195" fill="white" stroke="blue" stroke-width="3px")
</template>

<script>
    export default {
        name: "Question1",
      data() {
          return {
            selected: 'no'
          }
      },
      computed: {
          answer: function () {
            return this.$store.getters.QUESTION1
          }
      },
      methods: {
          changeAnswer: function (answer) {
            this.$store.commit("SET_QUESTION1", answer)
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
    height: 250px;
    position: absolute;
    margin-top: 70px;
    margin-left: 65px;
  }
</style>
