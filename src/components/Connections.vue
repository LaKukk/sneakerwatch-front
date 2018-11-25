<template lang="pug">
  .card
    .card-body
      .row
        .col-md-12
          h4 Your Connections
          hr
      .row
        .col-md-12
          form
            .form-group.row
              label.col-4.col-form-label Your SmartSticker
              .col-8
                button.btn-success.btn.disabled Connected
            .form-group.row
              label.col-4.col-form-label Google Fit
              .col-8
                button.btn-danger.btn.disabled Not connected
                button.btn-success.btn Connect

</template>

<script>
    export default {
        name: "Connections"
    }
</script>

<style scoped>
  .btn {
    margin-right: 15px;
  }
</style>
