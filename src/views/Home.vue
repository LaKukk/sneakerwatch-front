<template lang="pug">
  .main-container
    nav-bar
    .content
      home-page
</template>

<script>
  import NavBar from '../components/Navbar'
  import HomePage from '../components/HomePage'

export default {
  name: 'home',
  components: {NavBar, HomePage}
};
</script>
