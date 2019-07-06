<template>
  <div id="app">
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Events></Events>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Events from './components/Events'

export default {
  name: 'App',
  components: {
    Navbar, Home, About, Events
  }
}
</script>

<style>
#app {
  background: #802225;
}

@import'~bootstrap/dist/css/bootstrap.css'
</style>
