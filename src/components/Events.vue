    <section id="events" style="padding-top:0; padding-bottom: 0;">
        <div class="container">
            <div class="row">
                <div class="col-md-7 col-md-offset-1 calendar-fix">
                    <div class="row">
                        <div class="col-md-6">
                            <p class="lead heading-event">Upcoming Events</p>
                        </div>
                        <div class="col-md-6">
                            <a target="_blank" href="https://calendar.google.com/calendar/b/1?cid=dHVhY213QGdtYWlsLmNvbQ"
                                class="btn btn-white" style="margin-top: 25px;">Add to Google Calendar</a>
                        </div>
                    </div>
                    <div style="overflow-x:auto;">
                        <table class="table table-hover rounded">
                            <tr style="color: #5cb59b">
                                <th>Date</th>
                                <th>Meeting</th>
                                <th>Location</th>
                                <th>Time</th>
                            </tr>
                            <tr>
                                <td>TBD</td>
                                <td>First General Body Meeting</td>
                                <td>TBD</td>
                                <td>5PM - 6PM</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="col-md-4">
                    <p class="lead heading-event">Hackathons</p>
                    <div class="row center">
                        <div class="col-md-11 col-sm-6 no-padding">
                            <div class="page-content-mini rounded margin-bottom">
                                <h4><a class="lead-h heading-color" href="http://2019f.pennapps.com">PennApps XX</a></h4>
                                <div class="text-md">
                                    <p><i class="fa fa-calendar"></i> Sept 6-8th</p>
                                    <p><i class="fa fa-map-marker"></i><a target="__blank" href="https://goo.gl/maps/CEeVabjmuzyxusqj9"> Penn Engineering Quad</a></p>
                                    <p><i class="fa fa-globe"></i> <a target="_blank" href="http://2019f.pennapps.com"> Website</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="2018_events.html" class="btn btn-white">Past Events</a>
        </div>
    </section>
<template>
  <section id="events">
    <div class="jumbotron">
      <div class="container">
        <div class="title">
          <h2>{{ title }}</h2>
        </div>
        <div class="grid">
          <!--Upcoming Events-->
          <div>
            <div class="subtitle">
              <h3>{{ subtitle }}</h3>
              <a target="_blank" :class="btn.class" :href="btn.link">{{ btn.text }}</a>
            </div>
            <table class="table table-hover rounded">
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
            <div v-for="hackathon in hackathons" class="hackathon-container">
              <h4><a :href="hackathon.website">{{ hackathon.name }}</a></h4>
              <div class="text-md">
                  <p><i class="fa fa-calendar"></i> {{ hackathon.date }}</p>
                  <p><i class="fa fa-map-marker"></i><a target="__blank" :href="hackathon.googlemapslink"> {{ hackathon.location }}</a></p>
                  <p><i class="fa fa-globe"></i> <a target="_blank" :href="hackathon.website"> Website</a></p>
              </div>
            </div>
          </div>
        </div>
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
      subtitle: "Upcoming Meetings",
      subtitle2: "Hackathons",
      btn: { text: 'Add to Google Calendar', class:'btn', link: 'https://calendar.google.com/calendar/b/1?cid=dHVhY213QGdtYWlsLmNvbQ'},
      ths: ["Date", "Time", "Location", "Meeting"],
      trs: [
        { date: 'TBD', time: '3-4PM', location: 'TBD', meeting: 'First General Body Meeting'},
        { date: 'TBD', time: '3-4PM', location: 'TBD', meeting: 'Second General Body Meeting'},
        { date: 'TBD', time: '3-4PM', location: 'TBD', meeting: 'Third General Body Meeting'},
        { date: 'TBD', time: '3-4PM', location: 'TBD', meeting: 'Fourth General Body Meeting'}
      ],
      hackathons: [
        { name: 'PennApps XX', website: 'http://2019f.pennapps.com', date: 'Sept 6-8th', location: 'Penn Engineering Quad', googlemapslink: 'https://goo.gl/maps/G2ydzvKD52qaG78d8'},
        { name: 'Technica 2019', website: 'https://gotechnica.org', date: 'Nov 9-10th', location: 'College Park, Maryland', googlemapslink: 'https://goo.gl/maps/JboRbapTP8krxPrX6'}

      ]
    }
  }
}
</script>

<style scoped>
.jumbotron{
  height: 100%; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background: #2c2c2c;
  height: 100%;
  margin: 2%;
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
}
.container{
  display: inline-block;
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
.title{
  text-align: center;
}
.btn{
  margin-bottom: 2%;
  background: #802225;
}
.btn:hover, .btn:focus{
  background:#5cb59b;
  color: #d7d5d9;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
a{
  color: #d7d5d9;
  text-decoration: none;
}
a:hover{
  color: #802225;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
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
  border-radius: 10px;
  color: #5cb59b;;
}
@media (max-width: 768px){ 
  .grid{
    display: block;
  }
}
</style>
