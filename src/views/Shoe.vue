<template lang="pug">
  .main-container
    nav-bar
    .container
      .row
        .col-md-6.float-left.titleContainer
          p.title {{shoe.name.split(' ')[0]}}
          p.title {{shoe.name.split(/\s(.+)/)[1]}}
          p.titleButSmaller {{shoe.top}} | {{shoe.inspired}} | {{shoe.collection}} | {{shoe.price}} €
          br
          p.info {{shoe.description}}
          br
        .col-md-6.float-right
          img(:src="shoe.imageUrl")
          svg(height="710" width="700")
            circle(cx="350" cy="360" r="350" fill="#e0e0e0")
            circle(cx="350" cy="350" r="350" fill="white")

</template>

<script>
  import NavBar from '../components/Navbar'
  import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'
    export default {
        name: "Shoe",
      components: {NavBar,BadgerAccordion, BadgerAccordionItem},
      data() {
          return {
            shoe: null,
          }
      },
      mounted: function () {
        this.$http.get('http://localhost:8080/api/public/sneakers/getById/' + this.$route.params.pointer).then((res) => {
          this.shoe = res.body
      })
      },
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
    max-width: 500px;
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
    font-size: 65px;
    text-align: left;

  }
  .titleButSmaller{
    font-size: 42px;
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
  }
</style>
