<template>
  <div id="app">
    <Navbar></Navbar>
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
#app {
  width: 100%;
  /*
  background: #802225;
  */
  background: #c27824;
  font-size: 14pt;
  overflow: hidden;
}
h1, h2, h3, h4{
  /*
  color: #5cb59b;
  */
  
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
  /*
  color: #3ba3c3;
  */
  color: #627c4a;
  text-decoration: none;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}
a:hover{
  /*
  color: #3ba3c3c5;
  */
  color:#627c4ab9;

  text-decoration: none;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}
.btn{
  margin-bottom: 2%;
  background: #627c4a;
  /*
  background: #3ba3c3;
  */
  color: #d7d5d9;
  float: right;
}
.btn:hover, .btn:focus{
  background:#627c4ab9;
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
</style>
