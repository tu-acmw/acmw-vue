
<template>
  <section id="events">
    <div class="no-show"></div>
    <div class="jumbotron">
      <div class="col-md-12">
        <div class="title">
          <h2>{{ title }}</h2>
        </div>
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
            </div>
            <div class="carousel-item">
              <img :src="eventPic2" alt="Second Slide">
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
          <div>
            <div class="subtitle">
              <h3>{{ subtitle }}</h3>
              <a target="_blank" :class="btn.class" class="show-on-scroll magic-text-right" :href="btn.link">{{ btn.text }}</a>
            </div>
            <table class="table table-hover rounded show-on-scroll magic-text-right">
              <tr>
                <th v-for="th in ths">{{ th }}</th>
              </tr>
              <tr v-for="tr in trs">
                <td>{{ tr.date }}</td>
                <td>{{ tr.time }}</td>
                <td>{{ tr.location }}</td>
                <td>{{ tr.meeting }}</td>
              </tr>
            </table>
          </div>
          <!--Hackathons-->
          <div>
            <div class="subtitle">
              <h3>{{ subtitle2 }}</h3>
            </div>
            <div v-for="hackathon in hackathons" class="hackathon-container show-on-scroll magic-text-left">
              <h4><a :href="hackathon.website">{{ hackathon.name }}</a></h4>
              <div class="text-md">
                  <p><i class="fa fa-calendar"></i> {{ hackathon.date }}</p>
                  <p><a target="__blank" :href="hackathon.googlemapslink"><i class="fa fa-map-marker"></i> {{ hackathon.location }}</a></p>
                  <p><a target="_blank" :href="hackathon.website"><i class="fa fa-globe"></i> Website</a></p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <a class="btn show-on-scroll magic-text" :href="pastevents.link">{{ pastevents.btntext }}</a>
        </div>
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
      btn: { text: 'Add to Google Calendar', class:'btn', link: 'https://calendar.google.com/calendar/b/1?cid=dHVhY213QGdtYWlsLmNvbQ'},
      ths: ["Date", "Time", "Location", "Meeting"],
      trs: [
        { date: '9/16/19', time: '3-8PM', location: 'Howard Gittis Student Center', meeting: 'Game Night'},
        { date: '9/23/19', time: '3-4PM', location: 'SERC 358', meeting: 'General Body Meeting'},
        { date: '9/30/19', time: '3-4PM', location: 'SERC 358', meeting: 'General Body Meeting'}
      ],
      hackathons: [
        { name: 'PennApps XX', website: 'http://2019f.pennapps.com', date: 'Sept 6-8th', location: 'Penn Engineering Quad', googlemapslink: 'https://goo.gl/maps/G2ydzvKD52qaG78d8'},
        { name: 'codeLinc', website: 'https://www.lfg.com/public/aboutus/companyoverview/corporateresponsibility/codelinc?fbclid=IwAR2WPsRsT-zTG3w34DlK6LenAdoVVKFqMx0yRaURVYI3xm4aR-g5rofTH50', date: 'Sept 27-29th', location: 'Lincoln Financial Greensboro Office', googlemapslink: 'https://www.google.com/maps/place/100+N+Greene+St,+Greensboro,+NC+27401/@36.0728375,-79.7930303,17z/data=!3m1!4b1!4m5!3m4!1s0x885319242e811ba5:0xc2fa6e54a99b67f2!8m2!3d36.0728375!4d-79.7908416?shorturl=1'}
      ], 
      pastevents: { btntext: 'Past Events', link: '/pastevents'},
      eventPic1: require('@/assets/events/fall_2019/9.16.19_game_night.png'),
      eventPic2: require('@/assets/events/fall_2019/codeLinc.jpg')
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
.subtitle{
  display: flex;
  justify-content: space-evenly;
  align-content: center;
}
h2, h3{
  color: #d7d5d9;
}
.title{
  text-align: center;
}
.table-container{
  border-radius: 20px;
}
table {
  background-color: #232323;
  color: #d7d5d9; 
}
th {
  text-align: center; 
  color: #5cb59b;
}
tr{
  text-align: center;
}
tr:hover td, tr:hover th {
  background-color: #3d3d3d;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
table, th, td {
  border: 1px solid #3d3d3d;
}
.hackathon-container{
  background: #232323;
  margin: 10px;
  padding: 5%;
  border-radius: 5px;
  color: #5cb59b;
  text-align: center;
}
img{
  width: 45vh;
}
#myCarousel{
  margin-left: auto;
  margin-right: auto;
  width: 60vh;
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
  }
  .grid{
    display: block;
  }
  .btn{
    width: 50%;
  }
  
}
</style>
