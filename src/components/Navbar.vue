<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <header class="header">
      <div role="navigation" class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <a class="navbar-toggle collapsed navbar-btn" data-toggle="collapse" data-target=".navbar-collapse"><i class="fa fa-align-justify"></i></a>
            <a href="home" class="navbar-brand">ACM-W</a>
          </div>
          <div id="navigation" class="collapse navbar-collapse navbar-right">
            <div class="nav navbar-nav">
              <a v-for="nav in navs" v-bind:href="nav.link">{{ nav.text }}</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',
  data () {
    return {
      navs: [
        {text: 'About', link: '#about'},
        {text: 'Events', link: '#events'},
        {text: 'FAQ', link: '#faq'},
        {text: 'Sign Up', link: '#signup'},
        {text: 'Blog', link: 'blog.html'},
        {text: 'Feedback', link: 'https://goo.gl/forms/AeBk6ST8iEqxRUvL2'},
        {text: 'Contact', link: 'mailto:tuacmw@gmail.com'},

      ]
    }
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 0;
}
.navbar {
  text-transform: uppercase;
  background: #232323;
  display: flex;
  justify-content: left; 
  align-content: center;
  min-height: 5vh;
}
.navbar-brand{

}
a, i {
  font-weight: bold;
  letter-spacing: 0.1em;
  color: #d7d5d9; 
  background: transparent;
  text-decoration: none;
  margin-right: 10px;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out; 
  cursor: pointer; 
}
i{
  font-size: 18pt;
}
a:focus, a:hover, i:focus, i:hover {
  color:#5cb59b;
  border-bottom: none; 
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
@media (min-width: 768px) {
  .navbar-collapse {
    width: auto;
    border-top: 0;
    box-shadow: none; }
  .navbar-collapse.collapse {
    display: block !important;
    height: auto !important;
    padding-bottom: 0;
    overflow: visible !important; }
}

/* big screen */
@media (min-width: 768px) {
  .navbar-nav {
    margin: 0;
    display: table;
  }
  i{
    display: none;
  }
}

</style>
