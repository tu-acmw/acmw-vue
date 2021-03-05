
<template>
  <section id="events">
    <div class="no-show"></div>
    <div class="jumbotron">
      <div class="col-md-12">
        <h2>{{ title }}</h2>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="upcomingEvent">
            </div>
            <div :key="event.id" v-for="event in events" class="carousel-item">
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
        <div id="event-table">
          <h2>{{ tableTitle }}</h2>
          <table>
            <tr>
              <th :key="th.id" v-for="th in ths">{{ th }}</th>
            </tr>
            <tr :key="tr.id" v-for="tr in trs">
              <td>{{ tr.date }}</td>
              <td>{{ tr.time }}</td>
              <td><a :href="tr.location">Click to Join</a></td>
              <td>{{ tr.meeting }}</td>
            </tr>
          </table>
        </div>
        <div class="btn-container">
          <a target="_blank" :class="btn.class" class="btn" :href="btn.link">{{ btn.text }}</a>
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
      title: 'Upcoming Events',
      tableTitle: 'Event Details',
      btn: { text: 'Connect with us for updates!', class:'btn', link: '#socialmedia'},
      ths: [ "Date", "Time", "Location", "Event"],
      trs: [
        { id: 0, date: '3/15/2021', time: '5 PM - 6 PM', location: 'https://temple.zoom.us/j/93833159419', meeting: 'General Body Meeting'},
        //{ id: 0, date: 'Monday, 11/30/2020', time: '3 - 4 PM EST', location: 'https://temple.zoom.us/j/93833159419', meeting: 'Among Us'},
        //{ id: 0, date: 'Monday, 12/7/2020', time: '3 - 4 PM EST', location: 'https://temple.zoom.us/j/93833159419', meeting: 'Tips for Self Care During Finals & Virtual Bob Ross Paint Night'},
      ],
      pastevents: { btntext: 'Past Events', link: '/pastevents'},
      events: [ 
        require('@/assets/events/spring_2021/internPanel.png'),
        require('@/assets/events/spring_2021/sipchat.png'),
        require('@/assets/events/spring_2021/technical_interview_preparation.png'),
      ],
      upcomingEvent: require('@/assets/events/spring_2021/gbm1.png')
    }
  }
}
</script>

 <style scoped>
.jumbotron{
  width: 85%;
  background: transparent;
  margin: 0 7.5%;
  padding: 2%;
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
  color: #D6C1D7;
  font-weight: normal;
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
img{
  width: 75%;
  margin-bottom: 5vh;
}
#myCarousel{
  margin-left: auto;
  margin-right: auto;
  max-width: 70vh;
  overflow-y: 0;
}
.carousel{
  background: none;
}
.carousel-item{
  text-align: center;
}
.btn-container {
  margin-top: 5vh;
  display: flex;
  justify-content: center;
  align-content: center;
}
@media (max-width: 768px){ 
  .jumbotron{
    margin: 0;
    width: 100%;
    margin-bottom: 10%;
  }
  .grid{
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .btn{
    width: 50%;
  }
}
</style>
