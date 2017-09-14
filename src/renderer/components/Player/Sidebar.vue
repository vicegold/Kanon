<template>
  <aside class="kan-sidebar">
    <ul class="kan-menu">
      <li class="kan-menu__headline">Entdecken</li>
      <li class="kan-menu__headline">Deine Musik</li>
      <li class="kan-menu__headline">Deine Playlists</li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
  @import '../../assets/scss/variables.scss';

  .kan-sidebar {
    background: $color-blue;
    height: 100vh;
    width: 210px;
    border-right: 1px solid $color-blue--light;
  }

  .kan-menu {
    text-align: left;
    margin-left: 28px;
    list-style: none;
    padding: 0;
    margin-top: 27px;
  }

  .kan-menu__headline {
    margin-top: 60px;
    &:first-child {
      margin-top: 87px;
    }
  }

</style>
