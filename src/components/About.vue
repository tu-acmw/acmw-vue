<template>
  <div id="about" class="jumbotron show-on-scroll magic-text">
    <div class="grid">
      <div class="col-md-12"><h2>{{ header }}</h2></div>
      <div class="col-md-12"><p>{{ description }}</p></div>
      <div class="row center">
        <div class="col-sm-6 col-md-3" v-for="value in values">
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
      description: 'We are an organization that focuses on empowering women in the IT/Computing industry.',
      values: [
        { icon: 'fa-users', header: 'Community', description: 'We strive to create a community for women in technology where they can come together to learn, bond, network, discuss, and encourage each other.' },
        { icon: 'fa-bullhorn', header: 'Awareness', description: 'We want women in tech to be aware of all the opportunities they have and to encourage them to pursue these opportunities. Some of our opportunities include: Women In tech Conferences, Female Hackathons, Girls in tech, Community service and more.' },
        { icon: 'fa-graduation-cap', header: 'Empowerment', description: 'We encourage women to always reach for more and to never give up; to improve our abilities as leaders. Some leadership meetings we held were: Resume Workshops, Interviews, Essay Writing, Job Fair Prep, and Hackathon Teamwork.' },
        { icon: 'fa-comments', header: 'Mentorship', description: 'We provide students opportunities to find mentors and/or provide mentorship to girls in our clubs as well as in our community. We are always willing to hold each other up and achieve the best.' }
      ]
    }  
  },
  methods (){
  }
}
</script>

<style scoped>
.jumbotron{
  width: 94%;
  background: #2c2c2c;
  margin: 3%;
  padding: 3%;
  position: relative;
}
.grid{
  display: inline-grid;
  grid-template-rows: auto auto auto;
  text-align: center;
}
.container{
  display: inline-block;
}
p{
  color: #d7d5d9;
}
i{
  margin: 10px;
  font-size: 18pt;
  color: #d7d5d9;
}
@media (max-width: 576px){
  .grid{
    display: block;
  }
}

</style>
