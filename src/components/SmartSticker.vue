<template lang="pug">
  .titleContainer
    .row
      .col-md-6.float-left
        p.title Smart sticker movement summary
        p.title (from 25th September)
        br
        p.info Heel pressure data:
          b  +4.7% increase from the previous period
        p.info Average temperature:
          b  34.5°C (+2.1%)
        p.info Your left ankle overextends by
          b +3.4%
        p.info Days used:
          b 45 (accuracy 93%)
        p.info
          b Based on this:
        p.info You might want to invest in wider shoes with extra ventilation. Also you should
          | focus on buying shoes with at least 2% higher heels.
          | Might you experience back pains, the wider and higher shoes will definitely help on it.
          | Softer sole is recommended.
          | Higher top is recommended.
      .col-md-6.float-right
        p.bigText Recommended
        img(v-if="isActive" src="https://cdn.runrepeat.com/i/adidas/29622/adidas-ultra-tech-scarpe-da-fitness-uomo-bianco-balcri-lilrea-negbas-000-46-eu-bianco-balcri-lilrea-negbas-000-9cd0-600.jpg").sneaker
        img(v-else src="https://cdn.runrepeat.com/i/reebok/30072/reebok-aztrek-women-s-white-navy-acid-pink-nylon-running-shoes-4-5-b-m-us-white-navy-acid-pink-22ea-600.jpg").sneaker
        svg(height="420" width="400")
          circle(cx="200" cy="210" r="200" fill="#e0e0e0")
          circle(cx="200" cy="200" r="200" fill="white")
    .row
      .col-md-6
        p.smallText(v-on:click="change") Choose next
      .col-md-6
        p.bigText(v-if="isActive") Adidas Ultra Tech
        p.bigText(v-else) Reebok Aztrek
</template>

<script>
import NavBar from './Navbar.vue';

export default {
  name: 'SmartSticker',
  components: { NavBar },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    change() {
      this.isActive = !this.isActive;
      console.log(this.isActive);
    },
  }
};
</script>

<style scoped>
  .col-md-6 {
    padding: 0;
  }

  .container {
    margin-top: 0 !important;
    margin-right: 10%;
    margin-left: 10%;
    max-width: 80%;
    padding: 0;
  }

  img {
    position: absolute;
  }

  p {
    font-size: 48px;
    font-family: myFirstFont;

  }

  .smallText {
    margin-top: 0;
    cursor: pointer;
    font-size: 18px;
    text-align: justify;
    text-transform: uppercase;
  }

  .bigText {
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    text-transform: uppercase;
  }

  .title {
    font-size: 30px;
    text-align: left;
    margin-bottom: 0.5%;
  }

  .titleContainer {
    padding-bottom: 2%;
    color: black;
    text-transform: uppercase;
  }

  .info {
    text-align: justify;
    font-size: 16px;
    text-transform: initial;
  }

  button {
    margin-bottom: 30px;
  }

  .menu-container {
    padding-top: 2%;
  }

  .icon  {
    height: 60px;
    position: absolute;
    margin-top: 20px;
    margin-left: 20px;
  }
  .sneaker  {
    height: 150px;
    position: absolute;
    margin-top: 140px;
    margin-left: 40px;
  }

</style>
