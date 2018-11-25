<template lang="pug">
.main-container
  nav-bar
  .container2
    .row
      .col-ms-3
        svg(height="210" width="200")
          circle(cx="100" cy="110" r="100" fill="#e0e0e0")
          circle( cx="100" cy="100" r="100" fill="white")
      .col-md-6.move.down1
        p.bigText2 Best match with no swiping
        label.info It's like Tinder for sneakers: we ask you a couple of questions and by your taste and hobbies Sneakerwatch chooses the four best suiting sneakers for you.
    .row.middle
      .col-md-2

      .col-md-6.down2
        p.bigText2 The Fitbit you never have to charge
        label.info Sneakerwatch joins forces with SmartSticker, Sneakerwatch's hobby project turned game-breaking product. All you have to do is stick your SmartSticker onto the bottom of your shoes and SneakerWatch's super smart sensors wil know what your body needs
      .col-ms-3
        svg(height="210" width="200")
          circle(cx="100" cy="110" r="100" fill="#e0e0e0")
          circle(cx="100" cy="100" r="100" fill="white")
    .row
      .col-ms-3
        svg(height="210" width="200")
          circle(cx="100" cy="110" r="100" fill="#e0e0e0")
          circle( cx="100" cy="100" r="100" fill="white")
      .col-md-6.move.down3
        p.bigText2 Skyscanner for sneakers
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
  .bigText2 {
    text-align: justify;
    font-size: 32px;
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
  .container2 {
    margin-top: 1%;
    margin-right: auto !important;
    margin-left: 20% !important;
    max-width: 70% !important;
    padding: 0;
  }
  .move {
    margin-left: 25px;
  }
  .down1 {
    margin-top: 40px;
  }
  .down2 {
    margin-top: 15px;
  }
  .down3 {
    margin-top: 45px;
  }
</style>
