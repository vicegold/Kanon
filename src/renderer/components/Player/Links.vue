<template>
  <ul>
    <li><a href="https://simulatedgreg.gitbooks.io/electron-vue/content/index.html">documentation</a></li> |
    <li><a href="http://electron.atom.io/">electron</a></li> |
    <li><a href="http://vuejs.org/">vue.js</a></li> |
    <li><a href="/player">Player</a></li>
  </ul>
</template>

<style lang="scss" scoped>

  $color: lime;
  a {
    color: $color;
    text-decoration: none;
  }

  a:hover {
    color: rgb(40, 56, 76);
  }

  ul {
    list-style-type: none;
    margin-top: 10px;
  }

  li { display: inline-block; }
</style>
