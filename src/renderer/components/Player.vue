<template>
  <div class="kan-container">
    <sidebar></sidebar>
    <main-content></main-content>
    <player-controller></player-controller>
  </div>
</template>

<script>
  import Sidebar from './Player/Sidebar'
  import MainContent from './Player/MainContent'
  import PlayerController from './Player/PlayerController'
  import App from '../App'
  export default {
    components: {
      Sidebar,
      MainContent,
      PlayerController
    },
    name: 'player',
    raumserverRequestData: App.raumserverHost + '/raumserver/data/',
    raumserverRequestController: App.raumserverHost + '/raumserver/controller/'
  }

</script>

<style lang="scss">
  .kan-container {
    display: flex;
    align-content: stretch;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
  }
</style>
