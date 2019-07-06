<template>
  <div class="main-jumbotron">
      <div class="container">
        <img src="@/assets/acmw_logo.png" class="img-responsive rounded col-xs-12" alt="ACM-W's Logo, an owl on a laptop">
      </div>
      <div class="container">
        <a data-animate-hover="pulse" v-for="media in socialmedias" :href="media.link"><i class='fab' :class="media.icon"></i></a>
        <a data-animate-hover="pulse" href="mailto:tuacmw@gmail.com"><i class="fas fa-at"></i></a>
      </div>
    </div>
</template>
<script>


export default {
  name: 'Home',
  data () {
      return{
        socialmedias: [
          { icon: 'fa-instagram', link: 'https://www.instagram.com/tuacm_w/' },
          { icon: 'fa-facebook-square', link: 'https://www.facebook.com/templeuniversityacmw9/' },
        ]
      }
  }
}
</script>

<style scoped>
.main-jumbotron{
  background: #2c2c2c;
  height: 100%;
  margin: 0;
  position: relative;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 80px;
}
img{
  padding-top: 200px;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
}
i{
  margin: 10px;
  font-size: 24pt;
  color: #d7d5d9;
}
a:focus, a:hover, i:focus, i:hover {
  color:#5cb59b;
  border-bottom: none; 
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  border-bottom: none;
}
</style>
