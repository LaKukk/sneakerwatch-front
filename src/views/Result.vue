<template lang="pug">
  nav-bar
</template>

<script>
  import NavBar from '../components/Navbar'

  export default {
        name: "Result",
    components: {NavBar},
    mounted: function () {
      this.$store.commit("SET_QUESTION", 1)
    }
    }
</script>

<style scoped>

</style>
