<template lang="pug">
  .container
    .col-md-6.float-left.titleContainer
      p.title Welcome to
      p.title SneakerWatch
      br
      p.info Connecting people with sneakers they never thought they needed. Until now.
      router-link.smallText(to="/profile") What do your shoes say
    .col-md-6.float-right
      img(src="https://cdn.runrepeat.com/i/adidas/25593/adidas-men-s-lacombe-spzl-fitness-shoes-white-blabas-blatiz-versen-7-5-uk-men-s-white-blabas-blatiz-versen-35e3-600.jpg")
      svg(height="710" width="700")
        circle(cx="350" cy="360" r="350" fill="#e0e0e0")
        circle(cx="350" cy="350" r="350" fill="white")
      p.smallText Pick of the day
      p.bigText Adidas Lacombe SPZL
</template>

<script>
  export default {
    name: 'HomePage',
  }
</script>

<style scoped>
  .col-md-6 {
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
    padding-top: 15%;
    color: black;
    text-transform: uppercase;
  }

  .info {
    text-align: justify;
    font-size: 18px;
    text-transform: initial;
    margin-right:45px;
  }
</style>
