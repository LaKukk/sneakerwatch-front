<template lang="pug">
  .container
    .row
      .col-md-6.float-left
        .input-group.input-group-lg
          .input-group-prepend
            span.input-group-text#inputGroup-sizing-lg Min
          input.form-control(type="number" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" v-model="min")
      .col-md-6.float-right
        .input-group.input-group-lg
          .input-group-prepend
            span.input-group-text#inputGroup-sizing-lg Max
          input.form-control(type="number" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" v-model="max")
    button.btn.btn-primary(v-on:click="calculate") Calculate my budget
</template>

<script>
  export default {
    name: "Question5",
    computed: {
      min: {
        get() {
          return this.$store.getters.QUESTION5MIN
        },
        set(value) {
          this.$store.commit('SET_QUESTION5MIN', value)
        }
      },
      max: {
        get() {
          return this.$store.getters.QUESTION5MAX
        },
        set(value) {
          this.$store.commit('SET_QUESTION5MAX', value)
        }
      }
    },
    methods: {
      calculate: function () {
        this.$http.get('http://localhost:8080/api/public/budget').then((res) => {
          this.$store.commit('SET_QUESTION5MAX', res.body.end)
          this.$store.commit('SET_QUESTION5MIN', res.body.start)
        })
      }
    }
  }
</script>

<style scoped>
  .input-group > .form-control:not(:first-child), .input-group > .custom-select:not(:first-child)  {
    height: 100px;
  }
  .input-group {
    margin-bottom: 50px;
  }
  .input-group > .input-group-prepend > .btn, .input-group > .input-group-prepend > .input-group-text, .input-group > .input-group-append:not(:last-child) > .btn, .input-group > .input-group-append:not(:last-child) > .input-group-text, .input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle), .input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {
    height: 100px;
  }
  .container {
    padding-top: 13%;
    margin-bottom: 8%;
  }
</style>
