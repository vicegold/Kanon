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
  .kan-debug {
    position: fixed;
    bottom: 0;
    left: 0;
    background: #f0f0f0;
    right: 0;
    padding: 10px 0;
  }
</style>
