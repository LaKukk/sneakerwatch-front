<template lang="pug">
  .container
    .col-md-4.float-left(v-if="selected !== 'low'")
      svg(height="310" width="300" v-on:click="selected = 'low'")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-left(v-if="selected === 'low'")
      svg(height="310" width="300" v-on:click="selected = 'low'")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-right(v-if="selected !== 'mid'")
      svg(height="310" width="300" v-on:click="selected = 'mid'")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-right(v-if="selected === 'mid'")
      svg(height="310" width="300" v-on:click="selected = 'mid'")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle(cx="150" cy="150" r="145" fill="white" stroke="blue" stroke-width="3px")
    .col-md-4.float-right(v-if="selected !== 'high'")
      svg(height="310" width="300" v-on:click="selected = 'high'")
        circle(cx="150" cy="160" r="150" fill="#e0e0e0")
        circle( cx="150" cy="150" r="150" fill="white")
    .col-md-4.float-right(v-if="selected === 'high'")
      svg(height="310" width="300" v-on:click="selected = 'high'")
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
    }
  }
</script>

<style scoped>

</style>
