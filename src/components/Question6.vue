<template lang="pug">
  .container
    .col-md-4.float-left(v-if="!answer.includes('Adidas')")
      svg(height="310" width="300" v-on:click="changeAnswer('Adidas')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-left(v-if="answer.includes('Adidas')")
      svg(height="310" width="300" v-on:click="changeAnswer('Adidas')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-right(v-if="!answer.includes('Nike')")
      svg(height="310" width="300" v-on:click="changeAnswer('Nike')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-right(v-if="answer.includes('Nike')")
      svg(height="310" width="300" v-on:click="changeAnswer('Nike')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-right(v-if="!answer.includes('Puma')")
      svg(height="310" width="300" v-on:click="changeAnswer('Puma')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-right(v-if="answer.includes('Puma')")
      svg(height="310" width="300" v-on:click="changeAnswer('Puma')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-left(v-if="!answer.includes('Reebok')")
      svg(height="310" width="300" v-on:click="changeAnswer('Reebok')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-left(v-if="answer.includes('Reebok')")
      svg(height="310" width="300" v-on:click="changeAnswer('Reebok')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-right(v-if="!answer.includes('Asics')")
      svg(height="310" width="300" v-on:click="changeAnswer('Asics')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-right(v-if="answer.includes('Asics')")
      svg(height="310" width="300" v-on:click="changeAnswer('Asics')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-right(v-if="!answer.includes('Ecco')")
      svg(height="310" width="300" v-on:click="changeAnswer('Ecco')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-right(v-if="answer.includes('Ecco')")
      svg(height="310" width="300" v-on:click="changeAnswer('Ecco')")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
</template>

<script>
  export default {
    name: "Question1",
    computed: {
      answer: function () {
        return this.$store.getters.QUESTION6
      }
    },
    methods: {
      changeAnswer: function (answer) {
        this.$store.commit("SET_QUESTION6", answer)
      }
    }
  }
</script>

<style scoped>
  .col-md-4 {
    margin-top: 20px;
  }
</style>
