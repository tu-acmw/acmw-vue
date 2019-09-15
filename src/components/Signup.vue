<template>
  <section id="signup" class="jumbotron">
    <div class="row text-center"><h2>{{ header }}</h2></div>
    <div class="row text-center"><p>{{ description }}</p></div>
    <div class="sign-up-grid">
      <form action="https://github.us12.list-manage.com/subscribe/post?u=8bbe6958c201ba15d37df8174&amp;id=6f7f97b746"
        method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
        novalidate>
        <div class="input-name container">
          <div class="row">
            <input id="firstName" name="FNAME" type="text" placeholder="First name" class="form-control">
          </div>
          <div class="row">
            <input id="lastName" name="LNAME" type="text" placeholder="Last name" class="form-control">
          </div>
          <div class="row">
            <input id="emailText" name="EMAIL" type="text" placeholder="Email address" class="form-control">
          </div>
          <div class="row">
            <button id="signUpSubmit" type="submit" class="btn">Submit <i class="fa fa-power-off"></i></button>
          </div>
        </div>
      </form>
      <div class="instagram">

      </div>
    </div>
    <footer v-html="footer"></footer>
    

  </section>
</template>
<script>


export default {
  name: 'Signup',
  data () {
    return{
      header: 'Subscribe',
      description: 'Get news & updates from us!',
      footer: 'Made with <i class="fa fa-heart"></i> by <a href="https://github.com/chiuannica">Annica</a> and formerly <a href="https://github.com/hanaxu">Hana</a>'

    }  
  },
  methods (){
  }
}
</script>

<style scoped>
.jumbotron{
  width: 100%;
  background: #2c2c2c;
  margin: 0;
  padding-top: 3%;
  position: relative;
}
.row{
  display: flex;
  justify-content: center;
  align-content: center;
}
.sign-up-gird{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
p{
  color: #d7d5d9;
}
footer{
  font-size: 0.5em;
  color: #d7d5d9;
  text-align: center;
  margin: 3%;
}
.form-control {
  color: #2c2c2c;
  background: #d7d5d9;
  border: 1px solid #5cb59b;
  margin-bottom: 1%;
  border-radius: 5px;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.form-control::-moz-placeholder {
  color: #3ba3c3c5;
  opacity: 1; }

.form-control:-ms-input-placeholder {
  color: #3ba3c3c5; }

.form-control::-webkit-input-placeholder {
  color: #3ba3c3c5;
  /* placeholder text color */ }
@media (max-width: 576px){
  .form-control{
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
