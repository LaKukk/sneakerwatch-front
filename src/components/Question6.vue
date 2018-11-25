<template lang="pug">
  .container
    .col-md-4.float-left(v-if="!answer.includes('Adidas')"  v-on:click="changeAnswer('Adidas')")
      img(src="https://cdn.runrepeat.com/img/brand-color/adidas.png").sign6
      svg(height="310" width="300" )
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-left(v-if="answer.includes('Adidas')"  v-on:click="changeAnswer('Adidas')")
      img(src="https://cdn.runrepeat.com/img/brand-color/adidas.png").sign6
      svg(height="310" width="300")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-right(v-if="!answer.includes('Nike')" v-on:click="changeAnswer('Nike')")
      img(src="https://cdn.runrepeat.com/img/brand-color/nike.png").sign6
      svg(height="310" width="300" )
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-right(v-if="answer.includes('Nike')" v-on:click="changeAnswer('Nike')")
      img(src="https://cdn.runrepeat.com/img/brand-color/nike.png").sign6
      svg(height="310" width="300" )
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-right(v-if="!answer.includes('Puma')" v-on:click="changeAnswer('Puma')")
      img(src="https://cdn.runrepeat.com/img/brand-color/puma.png").sign6
      svg(height="310" width="300")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-right(v-if="answer.includes('Puma')" v-on:click="changeAnswer('Puma')")
      img(src="https://cdn.runrepeat.com/img/brand-color/puma.png").sign6
      svg(height="310" width="300" )
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-left(v-if="!answer.includes('Reebok')" v-on:click="changeAnswer('Reebok')")
      img(src="https://cdn.runrepeat.com/img/brand-color/reebok.png").sign6
      svg(height="310" width="300" )
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-left(v-if="answer.includes('Reebok')" v-on:click="changeAnswer('Reebok')")
      img(src="https://cdn.runrepeat.com/img/brand-color/reebok.png").sign6
      svg(height="310" width="300" )
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-right(v-if="!answer.includes('Asics')" v-on:click="changeAnswer('Asics')")
      img(src="https://cdn.runrepeat.com/img/brand-color/asics.png").sign6
      svg(height="310" width="300" )
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-right(v-if="answer.includes('Asics')" v-on:click="changeAnswer('Asics')")
      img(src="https://cdn.runrepeat.com/img/brand-color/asics.png").sign6
      svg(height="310" width="300" )
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-right(v-if="!answer.includes('Ecco')" v-on:click="changeAnswer('Ecco')")
      img(src="https://cdn.runrepeat.com/img/brand-color/ecco.png").sign6
      svg(height="310" width="300")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-right(v-if="answer.includes('Ecco')" v-on:click="changeAnswer('Ecco')")
      img(src="https://cdn.runrepeat.com/img/brand-color/ecco.png").sign6
      svg(height="310" width="300" )
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
  .container {
    padding-top: 4%;
    margin-bottom: 8%;
  }

  .col-md-4 {
    margin-top: 20px;
  }

  .sign6 {
    margin-top: 15%;
    margin-left: 50px;
    position: absolute;
  }
</style>
