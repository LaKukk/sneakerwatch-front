<template lang="pug">
  .container
    .col-md-6.float-right
      .input-group.input-group-lg
        .input-group-prepend
          span.input-group-text#inputGroup-sizing-lg Max
        input.form-control(type="number" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" v-model="min")
    .col-md-6.float-left
      .input-group.input-group-lg
        .input-group-prepend
          span.input-group-text#inputGroup-sizing-lg Min
        input.form-control(type="number" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" v-model="max")
</template>

<script>
  export default {
    name: "Question5"
    ,
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
    }
  }
</script>

<style scoped>

</style>
