<template>
  <div class="jumbotron">
    <div class="grid">
      <div class="col-md-12"><h1>{{ header }}</h1></div>
      <div class="col-md-12"><p>{{ description }}</p></div>
      <div class="row center">
        <div class="col-sm-6 col-md-3" v-for="value in values">
          <i class="fa" :class="value.icon"></i>
          <h2>{{ value.header }}</h2>
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
html{
  font-family: sans-serif;
}
.grid{
  display: inline-grid;
  grid-template-rows: 1fr 1fr 5fr;
  text-align: center;
}
.container{
  display: inline-block;
}
.jumbotron{
  display: flex;
  justify-content: center;
  background: #2c2c2c;
  margin: 2%;
}
h1, h2{
  color: #5cb59b;
}
h2{
  font-size: 18pt;
}
p{
  color: #d7d5d9;
}
i{
  margin: 10px;
  font-size: 24pt;
  color: #d7d5d9;
}

</style>
