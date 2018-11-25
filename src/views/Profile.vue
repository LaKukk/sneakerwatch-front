<template lang="pug">
  .main-container
    nav-bar
    .container
      .row
        .col-3
          .rect2
            .form2
              p Profile
              p Connections
              p Favorites
              p My SmartSticker
        .col-9


</template>

<script>
  import NavBar from '../components/Navbar'

  export default {
    name: "Profile",
    components: {NavBar},
    data() {
      return {
      }
    },
    mounted: function () {

    },
    methods: {
    }
  }
</script>

<style scoped>
  .container {
    margin-top: 8%;
    margin-right: 10%;
    margin-left: 10%;
    max-width: 80%;
    padding: 0;
  }

  .rect2 {
    background: white;
    width: 100%;
    height: 401px;
    border-radius: 25px;
    box-shadow: 0px 10px #e0e0e0;
    margin-bottom: 50px;
  }
  .smallshoe img {
    max-height: 100px;
    max-width: 150px;
    margin-top: 60px;
  }
  .smallshoe {
    margin-bottom: 10px;
  }
  .smallshoe p {
    margin-top: 10%;
    margin-bottom: auto;
    color: black;
  }
  router-link:hover {
    text-decoration: none;
    color: #0e0e1d;
  }
  .form {
    text-align: left;
    margin-left: 30px;
  }
  .form p {
    text-decoration: underline;
  }
</style>
