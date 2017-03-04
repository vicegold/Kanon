<template>
  <div class="rfp-container">
    <mainbar></mainbar>
    <h1>Welcome.</h1>
    <current-page></current-page>
    <versions></versions>
  </div>
</template>

<script>
  import CurrentPage from './Player/CurrentPage'
  import Mainbar from './Player/Mainbar'
  import Versions from './Player/Versions'
  export default {
    components: {
      Mainbar,
      CurrentPage,
      Versions
    },
    name: 'player'
  }
</script>

<style lang="scss" scoped>
  .rfp-container {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    padding-bottom: 19px;
  }
</style>
