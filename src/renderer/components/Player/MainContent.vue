<template>
  <div class="kan-content">
    <mainbar></mainbar>
    <h1>Welcome. {{raumserverRequestController}}</h1>
    <current-page></current-page>
  </div>

</template>

<script>
  import Mainbar from './Mainbar'
  import CurrentPage from './CurrentPage'
  export default {
    components: {
      CurrentPage,
      Mainbar
    }
  }

</script>

<style lang="scss" scoped>
  @import '../../assets/scss/variables.scss';

  .kan-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background: $color-blue--dark;
    background-image: url(assets/concert-header.png);
    background-attachment: fixed;
    background-position: left top;
    background-size: 100% auto;
    background-repeat: no-repeat;
  }

</style>
