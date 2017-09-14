<template>
  <aside class="kan-sidebar">
    <div class="kan-drag"></div>
    <ul class="kan-menu">
      <li class="kan-menu__headline">
        Entdecken
        <ul>
          <li>Home</li>
          <li>Warteschlange</li>
          <li>HYMN Mix</li>
          <li>Radio </li>
          <li>Freunde</li>
        </ul>
      </li>
      <li class="kan-menu__headline">
        Deine Musik
        <ul>
          <li>Favoriten</li>
          <li>Bibliothek</li>
          <li>HYMN Cloud</li>
          <li>Neues</li>
          <li>Zuletzt gehört</li>
          <li>CD Importieren</li>
        </ul>
      </li>
      <li class="kan-menu__headline">
        Deine Playlists
        <ul>
          <li>Lotterleben <span>&middot; Dominic R.</span></li>
          <li>Garage Punk <span>&middot; Laurids D.</span></li>
          <li>Glitterkink Fusions</li>
          <li>Silvester 2015</li>
          <li>Küchenfavs <span>&middot; Klara D.</span></li>
          <li>PUMP IT UP!! <span>&middot; Boris M.</span></li>

        </ul>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
  @import '../../assets/scss/variables.scss';

  .kan-drag {
    -webkit-app-region:drag;
    height: 50px;
    position: fixed;
    width: 211px;
    background: $color-blue;
    z-index: 100;
    left: 0;
    top: 0;
  }

  .kan-sidebar {
    background: $color-blue;
    height: 100vh;
    width: 210px;
    border-right: 1px solid $color-blue--light;
    position: relative;
    overflow: scroll;
  }

  .kan-menu {
    text-align: left;
    margin-left: 28px;
    list-style: none;
    padding: 0;
    margin-top: 27px;
    position: relative;
    z-index: 1;
  }

  .kan-menu__headline {
    margin-top: 60px;

    &:first-child {
      margin-top: 87px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin-top: 18px;
    }

    li {
      color: $color-blue--feather;
      text-transform: none;
      line-height: 3.5;
      font-size: 0.8125rem;
      font-weight: normal;

      span {
        color: $color-blue--shade;
      }
    }
  }

</style>
