<template lang="pug">
  .container
    .col-md-4.float-left(v-if="selected !== 'running'")
      svg(height="310" width="300" v-on:click="selected = 'running'")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-left(v-if="selected === 'running'")
      svg(height="310" width="300" v-on:click="selected = 'running'")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-right(v-if="selected !== 'tennis'")
      svg(height="310" width="300" v-on:click="selected = 'tennis'")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-right(v-if="selected === 'tennis'")
      svg(height="310" width="300" v-on:click="selected = 'tennis'")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-right(v-if="selected !== 'basketball'")
      svg(height="310" width="300" v-on:click="selected = 'basketball'")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-right(v-if="selected === 'basketball'")
      svg(height="310" width="300" v-on:click="selected = 'basketball'")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
</template>

<script>
  export default {
    name: "Question2",
    data() {
      return {
        selected: 'no'
      }
    }
  }
</script>

<style scoped>

</style>
