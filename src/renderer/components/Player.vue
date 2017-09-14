<template>
  <div class="kan-container">
    <mainbar></mainbar>
    <h1>Welcome. {{raumserverRequestController}}</h1>
    <current-page></current-page>
    <versions></versions>
  </div>
</template>

<script>
  import CurrentPage from './Player/CurrentPage'
  import Mainbar from './Player/Mainbar'
  import Versions from './Player/Versions'
  import App from '../App'
  export default {
    components: {
      Mainbar,
      CurrentPage,
      Versions
    },
    name: 'player',
    raumserverRequestData: App.raumserverHost + '/raumserver/data/',
    raumserverRequestController: App.raumserverHost + '/raumserver/controller/'
  }

</script>

<style lang="scss">
  .kan-container {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    padding-bottom: 19px;
  }
</style>
