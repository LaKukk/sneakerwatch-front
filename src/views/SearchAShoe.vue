<template lang="pug">
  .main-container
    nav-bar
    .container
      .row
        .col-3
          .rect
            .form
              p Type
              input#one(type='radio', value='SPORT', v-model='type')
              label(for='one') Sport
              br
              input#two(type='radio', value='CASUAL', v-model='type')
              label(for='two') Casual
            .form(v-if="type === 'Sport'")
              p Sport
              input#one(type='radio', value='Running', v-model='sport')
              label(for='one') Running
              br
              input#two(type='radio', value='BasketBall', v-model='sport')
              label(for='two') Basketball
              br
              input#two(type='radio', value='Tennis', v-model='sport')
              label(for='two') Tennis
            .form
              p Top
              input#one(type='radio', value='HIGH', v-model='top')
              label(for='one') High
              br
              input#two(type='radio', value='MID', v-model='top')
              label(for='two') Mid
              br
              input#two(type='radio', value='LOW', v-model='top')
              label(for='two') Low
            .form(v-if="brands !== []")
              p Brands
              .brand(v-for="brand in brands")
                input(type="checkbox" :value="brand" v-model="checkedBrands")
                label {{brand}}
            button.btn.btn-primary(v-on:click="updateShoes") Filter
        .col-9
          .row(v-for="shoe in shoes")
            .col-3.smallshoe
              router-link(:to="{ name: 'Sneaker', params: { pointer: shoe.pointer } }")
                img(:src="shoe.imageUrl")
                svg(height="205" width="200")
                  circle(cx="100" cy="105" r="100" fill="#e0e0e0")
                  circle(cx="100" cy="100" r="100" fill="white")
            .col-6.smallshoe
              router-link(:to="{ name: 'Sneaker', params: { pointer: shoe.pointer } }")
                p {{shoe.name}}

</template>

<script>
  import NavBar from '../components/Navbar'

  export default {
    name: "SearchAShoe",
    components: {NavBar},
    data() {
      return {
        shoes: [],
        brands: [],
        sport: null,
        type: null,
        checkedBrands: [],
        top: null,
        budget: {
          start: 0,
          end: 999999999
        }

      }
    },
    mounted: function () {
      this.$http.get('http://localhost:8080/api/public/filter/brands').then((res) => {
        this.brands = res.body.filter(item => item !== null)
      })
      this.$http.get('http://localhost:8080/api/public/sneakers').then((res) => {
        this.shoes = res.body.content
      })
    },
    methods: {
      updateShoes: function () {
        this.$http.post('http://localhost:8080/api/public/sneakers/select', {
          "brands": this.checkedBrands,
          "budget": this.budget,
          "inspired": this.type,
          "sport": this.sport,
          "top": this.top
        }).then((res) => {
          this.shoes = res.body
        })
      }
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

  .rect {
    background: white;
    width: 100%;
    height: 1500px;
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
