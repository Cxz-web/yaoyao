<template>
  <div id="app">
    <Demo/>
  </div>
</template>

<script>
import Demo from './components/Demo.vue'

export default {
  name: 'App',
  components: {
    Demo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

html, body {
  width: 100%;
  height: 100%;
}

body {
  overflow-y: scroll;
}


* {
  padding: 0px ;
  margin: 0px ;
}

</style>
