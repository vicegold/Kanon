<template>
  <aside class="kan-sidebar">
    <div class="kan-drag"></div>
    <ul class="kan-menu">
      <li class="kan-menu__headline">
        Entdecken
        <ul>
          <li>
            <svgicon name="home" width="18" height="18"></svgicon>
            Home
          </li>
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
    width: 210px;
    background: $color-blue;
    z-index: 100;
    left: 0;
    top: 0;
    border-right: 1px solid $color-blue--light;
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
      display: flex;
      align-items: center;
      position: relative;
      transition: all .3s ease-in-out;

      span {
        color: $color-blue--shade;
      }

      &::before {
        height: 100%;
        position: absolute;
        top: 0;
        left: -28px;
        width: 28px;
        background: darken($color-blue, 1.5%);
        content: '';
        opacity: 0;
        transition: all .3s ease-in-out;
      }

      &:hover {
        background: darken($color-blue, 1.5%);
        color: $color-light;

        svg {
          stroke: $color-light--icon;
        }

        &::before {
          opacity: 1;
        }
      }

    }

    svg {
      stroke: $color-gray;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
      width: 17px;
      stroke-width: 1.7;
      overflow: visible;
      margin-right: 11px;
      transform: translateY(-2px);
      transition: all .3s ease-in-out;
    }
  }

</style>
