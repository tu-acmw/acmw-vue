<template>
  <section id="opportunities">
    <div class="no-show"></div>
    <div class="jumbotron">
      <h2>{{ title }}</h2>
      <div class="ops">
        <div class="op" :key="op.id" v-for="op in opportunities">
          <h4><a :href="op.link">{{ op.title }}</a></h4>
          <p><a :href="op.link"><i class="fa fa-globe"></i> Register</a></p>
          <p><i class="fa fa-calendar"></i> {{ op.date }}</p>
          <p v-html="op.desc" class="op-desc"></p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>


export default {
  name: 'Opportunities',
  data () {
      return {
        title: 'Opportunities',
        opportunities: [
          { id: 0, title: 'CST Virtual Technology Employer Meet Up', link: 'https://temple.joinhandshake.com/events/567954?utm_source=Email_marketing&utm_campaign=Friday_September_11_2020&cmp=1&utm_medium=HTMLEmail', date: 'September 25', desc: 'Spend an afternoon talking with employers who will be attending the CST Virtual Technology Job Fair! You will have the ability to meet with multiple employers to learn about their organizations and their available opportunities.'},
          { id: 0, title: 'Virtual College of Science and Technology Fall 2020 Technology Job Fair', link: 'https://temple.joinhandshake.com/career_fairs/16755?register=true&mass_email_id=647406&lor=3&utm_source=mass_mailer&utm_medium=email&utm_content=647406&utm_campaign=uni_targeted_emails', date: 'October 2', desc: 'The Virtual College of Science and Technology Fall 2020 Technology Job Fair is open to all CST students and alumni seeking an internship or full-time position with an employer who is seeking to hire technology students. '},
          { id: 0, title: 'OwlHacks', link: 'https://owlhacks.com', date: 'October 17-18', desc: 'Join us virtually for an awesome hackathon!'}
        ]
      }
  }
}
</script>

<style scoped>
body, html {
  height: 100%;
}

.jumbotron{
  width: 85%;
  background: #232323;
  margin: 0 7.5%;
  margin-bottom: 5%;
  padding: 2%;
}
h2, h4 {
  color: #FFD6E3;
}
h2 {
  text-align: center;
}
h4 {
  margin: 0; 
  margin-bottom: 1%;
}
p {
  margin: 0;
  margin-bottom: 1%;
}
.ops {
  width: 80%;
  margin: 0 10%;
}
.op {
  border-bottom: 1px solid #3d3d3d;
  margin: 3% 0;
}
@media (max-width: 576px){
  .jumbotron{ 
    width: 100%;
    margin: 0;
    border-radius: 0;
  }
  .ops {
    width: 100%;
    margin: 0;
  }
}
</style>
