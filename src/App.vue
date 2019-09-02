<template>
  <div id="app">
    <Home></Home>
    <About></About>
    <Events></Events>
    <Board></Board>
    <Faq></Faq>
    <Signup></Signup>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Events from './components/Events'
import Faq from './components/Faq'
import Signup from './components/Signup'
import Board from './components/Board'




export default {
  name: 'App',
  components: {
    Navbar, Home, About, Events, Faq, Signup, Board
  }
}
</script>

<style>
html{
  height: 100%;
}
#app {
  background: #802225;
  font-size: 14pt;
}
h1, h2, h3, h4{
  color: #5cb59b;
  font-size: 24pt;
  margin-bottom: 2%;
}
h3, h4{
  font-size: 18pt;
}
.no-show{
  height: 5vh;
}
@media (max-width: 768px){ 
  h1, h2, h3, h4{
    color: #5cb59b;
    font-size: 14pt;
  }
  p{
    font-size: 12pt;
  }
  th,tr,table{
    font-size: 12pt;
  }
  .jumbotron{
    margin: 0%;
    padding: 2%;
  }
}
.magic-text {
  opacity: 0;
  transform: translateY(4em);
  transition: transform 4s .25s cubic-bezier(0,1,0.3,1),
              opacity .3s .25s ease-out;
  will-change: transform, opacity;
}
.magic-text.is-visible {
  opacity: 1;
  transform: rotateZ(0deg);
}
.magic-text-right {
  opacity: 0;
  transform: translateX(-4em);
  transition: transform 4s .25s cubic-bezier(0,1,0.3,1),
              opacity .3s .25s ease-out;
  will-change: transform, opacity;
}
.magic-text-right.is-visible {
  opacity: 1;
  transform: rotateZ(0deg);
}
.magic-text-left {
  opacity: 0;
  transform: translateX(4em);
  transition: transform 4s .25s cubic-bezier(0,1,0.3,1),
              opacity .3s .25s ease-out;
  will-change: transform, opacity;
}
.magic-text-left.is-visible {
  opacity: 1;
  transform: rotateZ(0deg);
}
</style>
