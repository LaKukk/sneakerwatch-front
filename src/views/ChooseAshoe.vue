<template lang="pug">
  .main-container
    nav-bar
    .container
      question1(v-if="question === 1")
      question2(v-if="question === 2")
      question3(v-if="question === 3")
      question4(v-if="question === 4")
      question5(v-if="question === 5")
      question6(v-if="question === 6")
      .col-md-2.float-right
        img(src="../assets/arrow.svg").arrow
        svg(height="105" width="100" v-on:click="nextQuestion()")
          circle(cx="50" cy="55" r="50" fill="#e0e0e0")
          circle( cx="50" cy="50" r="50" fill="white")

</template>

<script>
  import NavBar from '../components/Navbar'
  import Question1 from '../components/Question1'
  import Question2 from '../components/Question2'
  import Question3 from '../components/Question3'
  import Question4 from '../components/Question4'
  import Question5 from '../components/Question5'
  import Question6 from '../components/Question6'
    export default {
        name: "ChooseAshoe",
      components: {NavBar, Question1, Question2, Question3, Question4, Question5, Question6},
      data () {
          return {
            question: 0,
          }
      },
      mounted: function () {
        let self = this
        this.question = this.$store.getters.QUESTION
      },
      methods: {
          nextQuestion: function () {
            console.log("1")
            this.$store.dispatch('ADDONE')
          }
      }

    }
</script>

<style scoped>
  .arrow {
    position: absolute;
    height: 50px;
    margin-left: 30px;
    margin-top: 25px;
  }
</style>
