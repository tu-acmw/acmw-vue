
<template>
  <section id="events">
    <div class="jumbotron">
      <div class="col-md-12">
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
            <table class="table table-hover rounded  show-on-scroll magic-text-right">
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
          <a class="btn" :href="pastevents.link">{{ pastevents.btntext }}</a>
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
        { date: 'TBD', time: '3-4PM', location: 'TBD', meeting: 'First General Body Meeting'},
        { date: 'TBD', time: '3-4PM', location: 'TBD', meeting: 'Second General Body Meeting'},
        { date: 'TBD', time: '3-4PM', location: 'TBD', meeting: 'Third General Body Meeting'},
        { date: 'TBD', time: '3-4PM', location: 'TBD', meeting: 'Fourth General Body Meeting'}
      ],
      hackathons: [
        { name: 'PennApps XX', website: 'http://2019f.pennapps.com', date: 'Sept 6-8th', location: 'Penn Engineering Quad', googlemapslink: 'https://goo.gl/maps/G2ydzvKD52qaG78d8'},
        { name: 'Technica 2019', website: 'https://gotechnica.org', date: 'Nov 9-10th', location: 'College Park, Maryland', googlemapslink: 'https://goo.gl/maps/JboRbapTP8krxPrX6'}
      ],
      pastevents: { btntext: 'Past Events', link: '/pastevents'}
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
h3{
  color: #d7d5d9;
}
.title{
  text-align: center;
}
.btn{
  margin-bottom: 2%;
  background: #3ba3c3;
  color: #d7d5d9;
  float: right;
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
  color: #3ba3c3;
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
  border-radius: 5px;
  color: #5cb59b;
  text-align: center;
}
@media (max-width: 768px){ 
  .jumbotron{
    margin-bottom: 10%;
  }
  .grid{
    display: block;
  }
  tr, th{
    font-size: 8pt;
  }
  .btn{
    width: 50%;
  }
  
}
</style>
