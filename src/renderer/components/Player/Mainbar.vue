<template>
  <header class="kan-header">
    <div class="kan-header__title">Kanon</div>
    <img class="kan-header__logo" src="./assets/logos/raumfeld.svg" alt="Raumfeld">
  </header>
</template>

<style lang="scss" scoped>
  @import '../../assets/scss/variables.scss';

  .kan-header {
    background: $color-blue--dark;
    height: 49px;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #181a1f;
    justify-content: flex-end;
  }

  .kan-header__title {
    color: rgba(white, 0.5);
    margin-top: 6px;
    margin-right: 10px;
  }

  .kan-header__logo {
    height: 26px;
    width: 30px;
    margin-right: 5px;
    margin-top: 10px;
  }
</style>
