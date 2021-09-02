<template>
  <div id="app">
    <Navbar></Navbar>
    <Home></Home>
    <!--
    <Events></Events>
    -->
    <Opportunities></Opportunities>
    <About></About>
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
import Opportunities from './components/Opportunities'

export default {
  name: 'App',
  components: {
    Navbar, Home, About, Events, Faq, Signup, Board, Opportunities
  }
}
</script>

<style>
#app {
  width: 100%;
  background: #6A1111;
  font-size: 14pt;
  overflow: hidden;
}
h2 {
  text-transform: capitalize;
}
h1, h2, h3, h4{
  color: #93BBDC;
  font-size: 32pt;
  margin-bottom: 2%;
}
h3, h4{
  font-size: 18pt;
}
p{
  color: #d7d5d9;
}
a {
  color: #659ECD;
  text-decoration: none;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}
a:hover{
  color: #3776A9;
  text-decoration: none;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}
.btn{
  margin-bottom: 2%;
  background: #659ECD;
  color: #d7d5d9;
}
.btn:hover, .btn:focus{
  background:#3776A9;
  color: #d7d5d9;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}
.no-show{
  height: 5vh;
}
@media (max-width: 768px){
  h1, h2, h3, h4{
    font-size: 14pt;
  }
  p{
    font-size: 10pt;
  }
  th,tr,table{
    font-size: 10pt;
  }
  .jumbotron{
    margin: 0%;
    padding: 2%;
  }
}
</style>
