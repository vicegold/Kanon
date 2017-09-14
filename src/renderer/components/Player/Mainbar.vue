<template>
  <header class="kan-header">
    <img class="kan-header__logo" src="./assets/logos/raumfeld.svg" alt="Raumfeld">
    <div class="kan-header__title">Kanon</div>
    <versions></versions>
  </header>
</template>

<script>
  import Versions from './Versions'
  export default {
    components: {
      Versions
    }
  }

</script>

<style lang="scss" scoped>
  @import '../../assets/scss/variables.scss';

  .kan-header {
    background: $color-blue--dark;
    height: 49px;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #1C2133;
    justify-content: flex-end;
  }

  .kan-header__title {
    color: rgba(white, 0.5);
    margin-left: 10px;
  }

  .kan-header__logo {
    height: 26px;
    width: 30px;
    margin-left: 5px;
  }
</style>
