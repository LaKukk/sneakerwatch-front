<template lang="pug">
  .main-container
    nav-bar
    .container(v-if="shoe1 !== undefined")
      .col-md-6.align-content-center.shoe1
        router-link(:to="{ name: 'Sneaker', params: { pointer: shoe1.pointer } }")
          img(:src="shoe1.imageUrl")
          svg(height="710" width="700")
            circle(cx="350" cy="360" r="350" fill="#e0e0e0")
            circle(cx="350" cy="350" r="350" fill="white")
          p.bigText {{shoe1.name}}
    .container(v-if="shoe1 !== undefined")
      .col-4.smallshoe.float-left(v-if="shoe2 !== undefined")
        router-link(:to="{ name: 'Sneaker', params: { pointer: shoe2.pointer } }")
          img(:src="shoe2.imageUrl")
          svg(height="205" width="200")
            circle(cx="100" cy="105" r="100" fill="#e0e0e0")
            circle(cx="100" cy="100" r="100" fill="white")
          p.smalltext2 {{shoe2.name}}
      .col-4.smallshoe.float-left(v-if="shoe3 !== undefined")
        router-link(:to="{ name: 'Sneaker', params: { pointer: shoe3.pointer } }")
          img(:src="shoe3.imageUrl")
          svg(height="205" width="200")
            circle(cx="100" cy="105" r="100" fill="#e0e0e0")
            circle(cx="100" cy="100" r="100" fill="white")
          p.smalltext2 {{shoe3.name}}
      .col-4.smallshoe.float-left(v-if="shoe4 !== undefined")
        router-link(:to="{ name: 'Sneaker', params: { pointer: shoe4.pointer } }")
          img(:src="shoe4.imageUrl")
          svg(height="205" width="200")
            circle(cx="100" cy="105" r="100" fill="#e0e0e0")
            circle(cx="100" cy="100" r="100" fill="white")
          p.smalltext2 {{shoe4.name}}
</template>

<script>
  import NavBar from '../components/Navbar'

  export default {
    name: "Result",
    components: {NavBar},
    mounted: function () {
      this.$http.post('http://localhost:8080/api/public/sneakers/choose', {
        "brands": this.$store.getters.QUESTION6,
        "budget": {
          "end": this.$store.getters.QUESTION5MAX,
          "start": this.$store.getters.QUESTION5MIN
        },
        "inspired": this.$store.getters.QUESTION2,
        "sport": this.$store.getters.QUESTION3,
        "top": this.$store.getters.QUESTION4
      }).then((res) => {
        console.log(res.body[1])
        this.$store.commit("SET_SHOE1", res.body[0])
        this.$store.commit("SET_SHOE2", res.body[1])
        this.$store.commit("SET_SHOE3", res.body[2])
        this.$store.commit("SET_SHOE4", res.body[3])
        this.$store.commit("RESET_QUESTIONS")
      })
      this.$store.commit("SET_QUESTION", 1)
    },
    computed: {
      shoe1: function () {
        return this.$store.getters.SHOE1
      },
      shoe2: function () {
        return this.$store.getters.SHOE2
      },
      shoe3: function () {
        return this.$store.getters.SHOE3
      },
      shoe4: function () {
        return this.$store.getters.SHOE4
      },
    },
  }
</script>

<style scoped>
  .shoe1 img {
    margin-top: 200px;
    max-height: 300px;
    max-width: 500px;
    margin-left: 15%;
  }
  .smallshoe img {
    max-height: 100px;
    max-width: 150px;
    margin-top: 50px;
  }
  .smallshoe {
    padding: 0;

  }
  .shoe1 {
    margin-left: 25%;
    margin-right: 25%;
    padding-left: 0;
    padding-right: 0;
  }

  .container {
    margin-top: 1%;
    margin-right: 10%;
    margin-left: 10%;
    max-width: 80%;
    padding: 0;
  }
  .smalltext2 {
    margin-top: 10px;
    font-size: 24px;
  }
</style>
