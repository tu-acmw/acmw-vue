<template>
  <div id="about">
    <div class="no-show"></div>
    <div class="jumbotron">
      <h3>Unfortunately, ACM-W will not be having any more meetings for the Spring 2020 semester. See you in August 2020!</h3>
    </div>
    <div class="jumbotron">
      <div class="col-md-12"><h2>{{ header }}</h2></div>
      <div class="col-md-12"><p>{{ description }} <a :href="acm.url">{{ acm.desc }}</a></p></div>
  
      <div class="grid">
        <div v-for="value in values">
          <i class="fa" :class="value.icon"></i>
          <h3>{{ value.header }}</h3>
          <p>{{ value.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'About',
  data () {
    return{
      header: 'Who We Are',
      description: 'We are an organization that focuses on empowering women in the IT/Computing industry. We are the sister organization to ACM.',
      values: [
        { icon: 'fa-users', header: 'Community', description: 'We strive to create a community for women in technology where they can come together to learn, bond, network, discuss, and encourage each other.' },
        { icon: 'fa-bullhorn', header: 'Awareness', description: 'We want women in tech to be aware of all the opportunities they have and to encourage them to pursue these opportunities. Some of our opportunities include: Women In tech Conferences, Female Hackathons, Girls in tech, Community service and more.' },
        { icon: 'fa-graduation-cap', header: 'Empowerment', description: 'We encourage women to always reach for more and to never give up; to improve our abilities as leaders. Some leadership meetings we held were: Resume Workshops, Interviews, Essay Writing, Job Fair Prep, and Hackathon Teamwork.' },
        { icon: 'fa-comments', header: 'Mentorship', description: 'We provide students opportunities to find mentors and/or provide mentorship to girls in our clubs as well as in our community. We are always willing to hold each other up and achieve the best.' }
      ],
      acm: { url: 'https://acm.temple.edu/', desc: 'Learn about opportunities from ACM.' }
    }  
  },
  methods (){
  }
}
</script>

<style scoped>
.jumbotron{
  width: 85%;
  background: #2c2c2c;
  margin: 0 7.5%;
  padding: 2%;
  text-align: center;
}
h2 {
  color: #d7d5d9;
}
h3 {
}
.grid{
  display: inline-grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3%;
}
.container{
  display: inline-block;
}
i{
  margin: 10px;
  font-size: 18pt;
  color: #d7d5d9;
}
@media (max-width: 576px){
  .jumbotron{ 
    width: 100%;
    margin: 0;
    border-radius: 0;
  }
  .grid{
    display: block;
  }
}

</style>
