
<template>
  <section id="events">
    <div class="no-show"></div>
    <div class="jumbotron">
      <div class="col-md-12">
        <h2>{{ title }}</h2>
        <!--
          <Timeline></Timeline>
          -->
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <!-- Wrapper for carousel items -->
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <p v-html="upcomingEventDesc"></p>
              <img :src="upcomingEvent">
            </div>
            <div :key="event.id" v-for="event in events" class="carousel-item">
              <p v-html="event.desc"></p>
              <img :src="event.pic">
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
      </div>
    </div>
  </section> 
</template>
<script>
import Timeline from './Timeline';
export default {
  name: 'Events',
  components: { Timeline },
  data () {
    return{
      title: 'Events',
      subtitle: "Meetings",
      subtitle2: "Hackathons",
      btn: { text: 'Follow us for updates!', class:'btn', link: '#socialmedia'},
      ths: [ "Date", "Time", "Location", "Meeting"],
      trs: [
        { id: 0, date: '2/24/20', time: '5-6', location: 'Temple Mr. Wish', meeting: 'Bubble Tea & Chat'},
      ],
      hackathons: [
        { id: 1, name: 'OwlHacks', website: 'https://owlhacks.com', date: '4/18 - 4/19'}
      ], 
      pastevents: { btntext: 'Past Events', link: '/pastevents'},
      events: [ 
        { id: 2, desc: "Learn how to make a successful GHC Scholarship essay", pic: require('@/assets/events/spring_2020/ghc.jpg') },
        { id: 1, desc: "Get ready for the career fair", pic: require('@/assets/events/spring_2020/career_fair.png') },
        { id: 0, desc: "Welcome back! Come to the first general body meeting", pic: require('@/assets/events/spring_2020/gbm.png') }
      ],
      upcomingEvent: require('@/assets/events/spring_2020/bubble_tea.jpg'),
      upcomingEventDesc: "Drink bubble tea and chat with members"
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
  width: 75%;
  margin-bottom: 5vh;
}
#myCarousel{
  margin-left: auto;
  margin-right: auto;
  width: 70vh;
  height: 80vh;
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
