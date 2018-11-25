<template lang="pug">
  .container
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
  export default {
    name: "Favorites",
    data() {
      return {
        shoes: [],
      }
    },
    mounted: function () {
      this.$http.get('http://localhost:8080/api/public/sneakers').then((res) => {
        this.shoes = res.body.content.slice(2,6)
      })
    }
  }
</script>

<style scoped>
  .container {
    margin-top: 1% !important;
    margin-right: 10%;
    margin-left: 10%;
    max-width: 80%;
    padding: 0;
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
</style>
