<template lang="pug">
  .navbar.navbar-default.navbar-fixed-top
    .container-fluid
      .navbar-header
        img.b-navbar-brand(src="../assets/logo.gif")
      .b-navbar-nav
        ul
          li: router-link(to="/chooseashoe") ChooseAShoe
          li: router-link(to="/") SearchAShoe
          li: router-link(to="/") About
          li: router-link(to="/") Login
</template>

<script>
  export default {
    name: 'NavBar',
  }
</script>
<style>

  @font-face {
    font-family: myFirstFont;
    src: url(../assets/fonts/D-DIN.otf) format("opentype");
  }

  .b-navbar-brand {
    height: 70px;
  }
  ul {
    list-style-type: none;
    float: right;
    margin-right: 1%;
    font-size: 36px;
    margin-top: 15px;
    font-family: myFirstFont;
  }

  ul li {
    display: inline;
    margin: 0px 10px;
    color: black;
  }
  ul li :visited {
    color: #080810;
  }

  ul li :hover {
    text-decoration: none;
  }

</style>
