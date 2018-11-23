<template lang="pug">
  .navbar
    .asd
      img.logo(src="../assets/logo.gif")
    .psd
      ul
        li ChooseAShoe
        li SearchAShoe
        li About
        li Login
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

  .logo {
    height: 70px;
    float: left;
    margin-left: 1%;
  }

  ul {
    list-style-type: none;
    float: right;
    margin-right: 1%;
    font-size: 36px;
    margin-top: 15px;
    font-family: myFirstFont;
    color: black;
  }

  ul li {
    display: inline;
    margin: 0px 10px;
  }

</style>
