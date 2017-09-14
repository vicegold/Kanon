<template>
  <div class="kan-debug">
    Electron v{{ versions['atom-shell'] }} &middot; node v{{ versions.node }} &middot; {{ platform }} os
  </div>
</template>

<script>
  import os from 'os'

  export default {
    data () {
      return {
        platform: os.platform(),
        versions: process.versions
      }
    }
  }
</script>

<style lang="scss">
  @import '../../assets/scss/variables.scss';

  .kan-debug {
    margin: 0px 10px 0 auto;
    color: rgba(white, 0.2);
  }
</style>
