<template lang="pug">
.main-container
  nav-bar
  .container
    .col-md-4.pull-left
      svg(height="210" width="200")
        circle(cx="100" cy="110" r="100" fill="#e0e0e0")
        circle( cx="100" cy="100" r="100" fill="white")
    .col-md-8.pull-right
      p ta ei kuuletu
    .col-md-4.pull-right
      svg(height="210" width="200")
        circle(cx="100" cy="110" r="100" fill="#e0e0e0")
        circle(cx="100" cy="100" r="100" fill="white" stroke="blue" stroke-width="3px")
    .col-md-8.pull-left
      p ta ei kuuletu
    .col-md-4.pull-left
      svg(height="210" width="200")
        circle(cx="100" cy="110" r="100" fill="#e0e0e0")
        circle( cx="100" cy="100" r="100" fill="white")
    .col-md-8.pull-right
      p ta ei kuuletu
</template>
<script>
export default {
  name: 'About',
}
</script>
<style>
  .col-md-8 {
    padding: 0;
  }
  .container {
    margin-top: 1%;
    margin-right: 10%;
    margin-left: 10%;
    max-width: 80%;
    padding: 0;
  }
  img {
    position: absolute;
    margin-top: 25%;
    margin-left: 7%;
  }
  p {
    font-size: 48px;
    font-family: myFirstFont;

  }
  .smallText {
    font-size: 30px;
    padding-right: 300px;
    margin-bottom: -25px;
    margin-top: 25px;
    text-transform: uppercase;
  }
  .bigText {
    font-weight: bold;
    text-transform: uppercase;
  }
  .title {
    font-size: 72px;
    text-align: left;
    margin-bottom: -25px;
  }
  .titleContainer {
    color: black;
    text-transform: uppercase;
  }
  .info {
    text-align: justify;
    font-size: 18px;
    text-transform: initial;
  }
  col-md-4{
    height: 450px;
    margin: 0px;
    padding: 0px;
  }
  col-md-8{
    height: 450px;
    margin: 0px;
    padding: 0px;
  }

</style>
