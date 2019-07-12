<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <header class="header">
      <div role="navigation" class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <a href="home" class="navbar-brand">ACM-W</a>
            <a class="navbar-toggle collapsed navbar-btn" data-toggle="collapse" data-target=".navbar-collapse"><i class="fa fa-align-justify"></i></a>
          </div>
          <div id="navigation" class="collapse navbar-collapse navbar-right">
            <div class="nav navbar-nav navbar-right">
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
  display:flex;
  justify-content: flex-end;
  align-content: center;
  margin: 0px;
}
.navbar {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: #232323;
  display: flex;
  justify-content: flex-end; 
  text-align: right;
}
.navbar-brand{

}
a, i {
  font-weight: bold;
  letter-spacing: 0.2em;
  color: #d7d5d9; 
  background: transparent;
  text-decoration: none;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out; 
  cursor: pointer; 
}
i{
  font-size: 24pt;
}
a:focus, a:hover, i:focus, i:hover {
  color:#5cb59b;
  border-bottom: none; 
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  border-bottom: none;
}
a {
  font-weight: bold;
}
/*navbar li padding*/
@media (min-width: 768px) {
  a {
    border-top: solid 2px transparent;
    padding-top: 12px;
    padding-bottom: 12px; }
  a:hover, a:focus {
    border-bottom: none; }
}
.navbar-toggle {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #000000; 
}
.navbar-fixed-top .navbar-collapse,
.navbar-fixed-bottom .navbar-collapse {
  max-height: 340px;
}
@media (max-device-width: 480px) and (orientation: landscape) {
  .navbar-fixed-top .navbar-collapse,
  .navbar-fixed-bottom .navbar-collapse {
    max-height: 200px;
  }
}
.container > .navbar-header,
.container-fluid > .navbar-header,
.container > .navbar-collapse,
.container-fluid > .navbar-collapse {
  margin-right: -15px;
  margin-left: -15px;
}
@media (min-width: 768px) {
  .container > .navbar-header,
  .container-fluid > .navbar-header,
  .container > .navbar-collapse,
  .container-fluid > .navbar-collapse {
    margin-right: 0;
    margin-left: 0;
  }
}
.navbar-static-top {
  z-index: 1000;
  border-width: 0 0 1px;
}
@media (min-width: 768px) {
  .navbar-static-top {
    border-radius: 0;
  }
}
.navbar-fixed-top,
.navbar-fixed-bottom {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
}
@media (min-width: 768px) {
  .navbar-fixed-top,
  .navbar-fixed-bottom {
    border-radius: 0;
  }
}
.navbar-fixed-top {
  top: 0;
  border-width: 0 0 1px;
}
</style>
