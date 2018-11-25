<template lang="pug">
  .main-container
    nav-bar
    .container
      .row
        .col-3
          .rect
            p.title Type
            .form
              .form-check
                input#exampleRadios1.form-check-input(type='radio', name='exampleRadios', value='option1', checked='')
                label.form-check-label(for='exampleRadios1')
                  | Default radio
              .form-check
                input#exampleRadios2.form-check-input(type='radio', name='exampleRadios', value='option2')
                label.form-check-label(for='exampleRadios2')
                  | Second default radio



      .col-9
</template>

<script>
    import NavBar from '../components/Navbar'
    export default {
        name: "SearchAShoe",
      components: {NavBar},
      data(){
          return {
            shoes: [],
            brands: [],

          }
      }
    }
</script>

<style scoped>
  .container {
    margin-top: 8%;
  }
  .rect {
    background: white;
    width: 100%;
    height: 700px;
    border-radius: 25px;
    box-shadow: 0px 10px #e0e0e0;
  }
  .form-check {
    text-align: left;
    margin-left: 20px;
  }
</style>
