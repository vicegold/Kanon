<template>
  <header class="rfp-header">
    <div class="rfp-header__title">Raum</div>
    <img class="rfp-header__logo" src="./assets/logos/raumfeld.svg" alt="Raumfeld">
  </header>
</template>

<style lang="scss" scoped>
  .rfp-header {
    background: #282c34;
    height: 49px;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #181a1f;
    justify-content: flex-end;
  }

  .rfp-header__title {
    color: rgba(white, 0.5);
    margin-top: 6px;
    margin-right: 10px;
  }

  .rfp-header__logo {
    height: 26px;
    width: 30px;
    margin-right: 5px;
    margin-top: 10px;
  }
</style>
