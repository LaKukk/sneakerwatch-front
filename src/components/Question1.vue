<template lang="pug">
    .container
      .col-md-6.float-left(v-if="selected !== 'woman'")
        svg(height="410" width="400" v-on:click="selected = 'woman'")
          circle(cx="200" cy="210" r="200" fill="#e0e0e0")
          circle( cx="200" cy="200" r="200" fill="white")
      .col-md-6.float-left(v-if="selected === 'woman'")
        svg(height="410" width="400" v-on:click="selected = 'woman'")
          circle(cx="200" cy="210" r="200" fill="#e0e0e0")
          circle(cx="200" cy="200" r="195" fill="white" stroke="blue" stroke-width="3px")
      .col-md-6.float-right(v-if="selected !== 'man'")
        svg(height="410" width="400" v-on:click="selected = 'man'")
          circle(cx="200" cy="210" r="200" fill="#e0e0e0")
          circle( cx="200" cy="200" r="200" fill="white")
      .col-md-6.float-right(v-if="selected === 'man'")
        svg(height="410" width="400" v-on:click="selected = 'man'")
          circle(cx="200" cy="210" r="200" fill="#e0e0e0")
          circle(cx="200" cy="200" r="195" fill="white" stroke="blue" stroke-width="3px")
</template>

<script>
export default {
  name: 'Question1',
  data() {
    return {
      selected: 'no',
    }
  },
}
</script>

<style scoped>

</style>
