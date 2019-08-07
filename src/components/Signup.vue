<template>
  <section id="signup" class="jumbotron">
    <div class="row text-center"><h2>{{ header }}</h2></div>
    <div class="row text-center"><p>{{ description }}</p></div>
    <div class="row">
      <form action="https://github.us12.list-manage.com/subscribe/post?u=8bbe6958c201ba15d37df8174&amp;id=6f7f97b746"
        method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
        novalidate>
        <div class="input-name container">
        <div class="row">
          <div class="col-sm-6 col-xs-10">
            <div class="form-group">
              <input id="firstName" name="FNAME" type="text" placeholder="First name" class="form-control">
            </div>
          </div>
          <div class="col-sm-6 col-xs-10">
            <div class="form-group">
              <input id="lastName" name="LNAME" type="text" placeholder="Last name" class="form-control">
            </div>
          </div>
        </div>
        <div class="row">
          <input id="emailText" name="EMAIL" type="text" placeholder="Email address" class="form-control">
            <span class="input-group-btn">
              <button id="signUpSubmit" type="submit" class="btn">Submit <i class="fa fa-power-off"></i></button>
            </span>
          </div>
        </div>
      </form>
    </div>
    </div>
  </section>
</template>
<script>


export default {
  name: 'Signup',
  data () {
    return{
      header: 'Subscribe',
      description: 'Get news & updates from us!',

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
  padding: 5%;
  position: relative;
}
.row{
  display: flex;
  justify-content: center;
  align-content: center;

}
p{
  color: #d7d5d9;
}

#signUpSubmit {
  background-color: #5cb59b;
  color: #d1d1d1;
  -webkit-transition-duration: 0.4s;
  /* Safari */
  transition-duration: 0.4s; }

#signUpSubmit:hover,
#signUpSubmit:focus .fa-power-off {
  color: #5cb59b; 
  background: #802225;
}

.form-control {
  color: #ffdb76;
  background: #802225;
  border: 1px solid #5cb59b;
  margin-bottom: 1%;
  border-radius: 5px;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.form-control::-moz-placeholder {
  color: #999999;
  opacity: 1; }

.form-control:-ms-input-placeholder {
  color: #999999; }

.form-control::-webkit-input-placeholder {
  color: #d7d5d9;
  /* placeholder text color */ }

.form-group {
  margin-bottom: 5px; }

</style>
