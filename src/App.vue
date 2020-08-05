<template>
  <div id="app">
    <HelloWorld msg=kk />
    <Todolist />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Todolist from './components/Todolist.vue'




export default {
  name: 'App',
  components: {
    HelloWorld,
    Todolist
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
  margin-top: 60px;
}
</style>
