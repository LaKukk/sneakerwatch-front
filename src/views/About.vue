<template lang="pug">
.main-container
  nav-bar
  .container
    .row
      .col-ms-4
        svg(height="210" width="200")
          circle(cx="100" cy="110" r="100" fill="#e0e0e0")
          circle( cx="100" cy="100" r="100" fill="white")
      .col-md-8
        p.bigText Best match with no swiping
        label.info It's like Tinder for sneakers: we ask you a couple of questions and by your taste and hobbies Sneakerwatch chooses the four best suiting sneakers for you.
    .row.middle
      .col-md-8
        p.bigText The Fitbit you never have to charge
        label.info Sneakerwatch joins forces with SmartSticker, Sneakerwatch's hobby project turned game-breaking product. All you have to do is stick your SmartSticker onto the bottom of your shoes and SneakerWatch's super smart sensors wil know what your body needs
      .col-ms-4
        svg(height="210" width="200")
          circle(cx="100" cy="110" r="100" fill="#e0e0e0")
          circle(cx="100" cy="100" r="100" fill="white")
    .row
      .col-ms-4
        svg(height="210" width="200")
          circle(cx="100" cy="110" r="100" fill="#e0e0e0")
          circle( cx="100" cy="100" r="100" fill="white")
      .col-md-8
        p.bigText Skyscanner for sneakers
        label.info Just tell us what you'd like to wear and Sneakerwatch knows the shoes for you. This needs more txt to look semi-normal... Kaspaaaar.
</template>
<script>
  import NavBar from '../components/Navbar'
export default {
  name: 'About',
  components: {NavBar}
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
    text-align: justify;
    font-size: 40px;
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
  .row.middle{
    margin-left: 200px;
  }

</style>
