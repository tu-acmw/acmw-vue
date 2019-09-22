
<template>
  <section id="events">
    <div class="no-show"></div>
    <div class="jumbotron">
      <div class="col-md-12">
        <h2>{{ title }}</h2>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <!-- Carousel indicators 
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
          </ol>
          -->
          <!-- Wrapper for carousel items -->
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="eventPic1">
              <p v-html="event1Desc"></p>
            </div>
            <div class="carousel-item">
              <img :src="eventPic2" alt="Second Slide">
              <p v-html="event2Desc"></p>
            </div>
          </div>
          <!-- Carousel controls -->
          <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#myCarousel" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
        <div class="grid">
          <!--Upcoming Events-->
          <div class="grid-item">
            <div class="subtitle">
              <h3>{{ subtitle }}</h3>
              <a target="_blank" :class="btn.class" class="" :href="btn.link">{{ btn.text }}</a>
            </div>
            <table class="">
              <tr>
                <th :key="th.id" v-for="th in ths">{{ th }}</th>
              </tr>
              <tr :key="tr.id" v-for="tr in trs">
                <td>{{ tr.date }}</td>
                <td>{{ tr.time }}</td>
                <td>{{ tr.location }}</td>
                <td>{{ tr.meeting }}</td>
              </tr>
            </table>
          </div>
          <!--Hackathons-->
          <div class="grid-item">
            <div class="subtitle">
              <h3>{{ subtitle2 }}</h3>
            </div>
            <div :key="hackathon.id" v-for="hackathon in hackathons" class="hackathon-container">
              <h4><a :href="hackathon.website">{{ hackathon.name }}</a></h4>
              <div class="text-md">
                  <p><i class="fa fa-calendar"></i> {{ hackathon.date }}</p>
                  <p><a target="_blank" :href="hackathon.website"><i class="fa fa-globe"></i> Website</a></p>
              </div>
            </div>
          </div>
        </div>
        
        <!--
        <div>
          <a class="btn show-on-scroll magic-text" :href="pastevents.link">{{ pastevents.btntext }}</a>
        </div>
        -->
      </div>
    </div>
  </section> 
</template>
<script>

export default {
  name: 'Events',
  data () {
    return{
      title: 'Events',
      subtitle: "Meetings",
      subtitle2: "Hackathons",
      btn: { text: 'Follow us for updates!', class:'btn', link: '#socialmedia'},
      ths: [ "Date", "Time", "Location", "Meeting"],
      trs: [
        { id: 0, date: '9/23/19', time: '3-4PM', location: 'SERC 358', meeting: 'Career Fair Prep'},
        { id: 1, date: '9/30/19', time: '3-4PM', location: 'SERC 358', meeting: 'Sip & Chat'},
        { id: 1, date: '10/7/19', time: '3-4PM', location: 'SERC 358', meeting: 'Women In Tech Panel'},
      ],
      hackathons: [
        { id: 0, name: 'codeLinc', website: 'https://www.lfg.com/public/aboutus/companyoverview/corporateresponsibility/codelinc?fbclid=IwAR2WPsRsT-zTG3w34DlK6LenAdoVVKFqMx0yRaURVYI3xm4aR-g5rofTH50', date: 'Sept 27-29th'},
        { id: 0, name: 'Technica', website: 'https://gotechnica.org/', date: 'Nov 9-10th'}
      ], 
      pastevents: { btntext: 'Past Events', link: '/pastevents'},
      eventPic1: require('@/assets/events/fall_2019/9.23.19_career_fair.png'),
      eventPic2: require('@/assets/events/fall_2019/codeLinc.jpg'),
      event1Desc: 'Learn tips and get your resume reviewed in time for the career fair!',
      event2Desc: '<a target="_blank" href="https://form.jotform.com/92254483567163">Click to fill out the official registration form</a>'
    }
  }
}
</script>

<style scoped>
.jumbotron{
  background: transparent;
}
.grid{
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 2%;
}
.grid-item{
  width: 100%;
}
.subtitle{
  display: flex;
  justify-content: space-evenly;
  align-content: center;
}
h2, h3{
  color: #d7d5d9;
  text-align: center;
}
table{
  width: 100%;
  background-color: #232323;
  color: #d7d5d9; 
}
th{
  text-align: center; 
  color: #5cb59b;
}
tr:hover td, tr:hover th {
  background-color: #3d3d3d;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
table, th, td {
  border: 1px solid #3d3d3d;
  text-align: center;
}
th, td{
  padding: 3% 0;
}
.hackathon-container{
  background: #232323;
  margin: 2%;
  padding: 4%;
  border-radius: 5px;
  color: #5cb59b;
  text-align: center;
}
img{
  width: 80%;
}
#myCarousel{
  margin-left: auto;
  margin-right: auto;
  max-width: 70vh;
}
.carousel{
  background: none;
  margin-bottom: 5vh;
}
.carousel-item{
  text-align: center;
}
@media (max-width: 768px){ 
  .jumbotron{
    margin-bottom: 10%;
    margin: 0 -4%;
  }
  .grid{
    display: block;
  }
  .btn{
    width: 50%;
  }
}
</style>
