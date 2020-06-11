
<template>
  <section>
    <nav class="navbar navbar-expand-sm  navbar-dark fixed-top">
      <!-- Logo and menu button for small screen -->
      <a class="navbar-brand" href="#">ACM-W</a>
      <a class="navbar-toggle collapsed navbar-btn" data-toggle="collapse" data-target=".navbar-collapse"><i class="fa fa-align-justify"></i></a>
      <!-- Links -->
      <ul class="navbar-nav collapse navbar-collapse">
        <li v-for="nav in navs" class="nav-item">
          <a class="nav-link" v-bind:href="nav.link">{{ nav.text }}</a>
        </li>
      </ul>
    </nav>
  </section>
</template>
<script>
export default {
  name: 'Navbar',
  data () {
    return {
      navs: [
        {text: 'About', link: '#about'},
        {text: 'Events', link: '#events'},
        {text: 'Opportunities', link: '#opportunities'},
        {text: 'Board', link: '#board'},
        {text: 'FAQ', link: '#faq'},
        {text: 'Connect', link: '#signup'},
        //{text: 'Blog', link: 'blog'},
        {text: 'Feedback', link: 'https://goo.gl/forms/AeBk6ST8iEqxRUvL2'},
      ]
    }
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  margin: 0; 
}
nav{
  text-transform: uppercase;
  min-height: 10vh;
  background: #232323;
}
a, i, .navbar-brand{
  font-weight: none;
  letter-spacing: 0em;
  color: #d7d5d9; 
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out; 
  cursor: pointer;
}
i{
  font-size: 18pt;
}
a:focus, a:hover, i:focus, i:hover, .navbar-brand:hover {

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
@media (min-width: 576px) {
  .navbar-nav {
    margin: 0;
    display: table;
  }
  i{
    display: none;
  }
}
.nav {
  margin-bottom: 0;
  padding-left: 0;
  list-style: none; }

.nav > li > a {
  padding: 10px 15px; }

.nav > li > a:hover,
.nav > li > a:focus {
  background-color: #eeeeee; }

.nav .open > a,
.nav .open > a:hover,
.nav .open > a:focus {
  background-color: #eeeeee; }

/* navbar */
.navbar {
  min-height: 44px;
  margin-bottom: 0;
  border-top: none;
  border-bottom: none; }

@media (min-width: 768px) {
  .navbar {
    border-radius: 0; } }

.navbar-collapse {
  max-height: 340px;
  overflow-x: visible;
  padding-right: 20px;
  padding-left: 20px;
  text-align: center; }

.navbar-collapse.in {
  overflow-y: auto; }

@media (min-width: 768px) and (max-width: 991px) {
  .navbar-collapse {
    font-size: 14px; } }

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
  .navbar-collapse.in {
    overflow-y: visible; }
  .navbar-fixed-top .navbar-collapse,
  .navbar-static-top .navbar-collapse,
  .navbar-fixed-bottom .navbar-collapse {
    padding-left: 0;
    padding-right: 0; } }

.container > .navbar-header,
.container-fluid > .navbar-header,
.container > .navbar-collapse,
.container-fluid > .navbar-collapse {
  margin-right: -15px;
  margin-left: -15px; }

@media (min-width: 768px) {
  .container > .navbar-header,
  .container-fluid > .navbar-header,
  .container > .navbar-collapse,
  .container-fluid > .navbar-collapse {
    margin-right: 0;
    margin-left: 0; } }

.navbar-brand {
  padding: 12px;
  font-size: 17px;
  line-height: 21px;
  height: 44px; }

.navbar-brand:hover,
.navbar-brand:focus {
  text-decoration: none; }

@media (max-width: 768px) {
  .navbar-brand {
    padding-top: 15px; } }

@media (min-width: 768px) {
  .navbar > .container .navbar-brand,
  .navbar > .container-fluid .navbar-brand {
    margin-left: -15px; } }

.navbar-toggle {
  padding: 9px 10px !important;
  margin-right: 15px;
  border-radius: 0; }

.navbar-nav {
  margin: 9.75px -15px; }

.navbar-nav > li > a {
  line-height: 18px;
  border-bottom: none; }

.navbar-nav > li > a:hover,
.navbar-nav > li > a:focus {
  border-bottom: none; }

@media (max-width: 767px) {
  .navbar-nav .open .dropdown-menu > li > a,
  .navbar-nav .open .dropdown-menu .dropdown-header {
    padding: 7px 15px 7px 25px; }
  /* mobile menu dropdown center */
  .navbar-nav .open .dropdown-menu > li > a {
    font-size: 13px;
    line-height: 24px;
    display: flex;
    justify-content: center; }
}
@media (min-width: 768px) {
  .navbar-nav {
    margin: 0 auto;
    display: table;
    table-layout: fixed;
    float: left; }
  .navbar-nav > li {
    float: left; }
  .navbar-nav > li > a {
    padding-top: 19.5px;
    padding-bottom: 19.5px; }
  .navbar-nav.navbar-right:last-child {
    margin-right: -15px; } }

.navbar-form {
  margin-left: -15px;
  margin-right: -15px;
  padding: 10px 15px;
  border: none;
  margin-top: 12.5px;
  margin-bottom: 12.5px; }

@media (max-width: 767px) {
  .navbar-form .form-group {
    margin-bottom: 5px; } }

</style>
