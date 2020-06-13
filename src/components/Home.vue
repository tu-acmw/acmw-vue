<template>
  <section id="home">
    <div class="main-jumbotron">
      <div class="container">
        <img src="@/assets/acmw_logo.png" class="img-responsive rounded col-xs-12" alt="ACM-W's Logo, an owl on a laptop">
      </div>
      <div class="container">
        <h4>Unfortunately, ACM-W will not be having any more meetings for the Spring 2020 semester. See you in August 2020!</h4>
      </div>
    </div>
  </section>
</template>
<script>


export default {
  name: 'Home',
  data () {
      return{
      }
  }
}
</script>

<style scoped>
body, html {
  height: 100%;
}
h4 {
  color: #D6C1D7;
  text-align: center;
}
.main-jumbotron{
  background: #2c2c2c;
  position: relative;
  height: 100vh;
  margin: 0;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
img{
  max-width: 50vh;
  margin: auto;
  margin-top: 20vh;
}
@media (max-width: 576px){
  img{
    width: 100%;
    margin-top: 20vh;
  }
}
</style>
