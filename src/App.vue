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

@media (max-width: 576px){

}
@media (min-width: 768px){ 

}

@media (min-width: 992px){

}
@media (min-width: 1200px){

}
h1, h2, h3{
  color: #5cb59b;
}
h2{
  margin-bottom: 20px;
}

@import'~bootstrap/dist/css/bootstrap.css'
</style>
