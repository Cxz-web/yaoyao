<template>
  <div id="app">
    <components :is="name" @next="next"/>
  </div>
</template>

<script>
import Demo from './components/Demo.vue';
import Home from './components/Home.vue';
import Demo2 from './components/Demo2.vue';
import Demo3 from './components/Demo3.vue';
import Demo4 from './components/Demo4.vue';
import Demo5 from './components/Demo5.vue';



const nameList = [
  'Home',
  'Demo',
  'Demo2',
  'Demo3',
  'Demo4',
  'Demo5',
]

/* eslint-disable */
export default {
  name: 'App',
  data() {
    return {
      index: 0
    }
  },

  components: {
    Demo,
    Home,
    Demo2,
    Demo3,
    Demo4,
    Demo5
  },


  computed: {
    name() {
      return nameList[this.index]
    }
  },


  methods: {
    next() {
      this.index += 1;
    }
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
  background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);
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
