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
          { id: 2, title: 'TechGirlz Workshop - TBD', link: 'https://forms.gle/Eadzgujgzknyxrfa6', date: '03/13 @ 4:30 AM - 6:30 PM EST', desc: 'ACM-W/ACM will be hosting TechGirlz workshop virtually for middle school girls! If you would be interested in volunteering please fill out the form using the link. This is a great opportunity to get some experience on your resume and also help a great cause.'},
          { id: 2, title: 'TechGirlz Workshop - TBD', link: 'https://forms.gle/Eadzgujgzknyxrfa6', date: '03/20 @ 4:30 AM - 6:30 PM EST', desc: 'ACM-W/ACM will be hosting TechGirlz workshop virtually for middle school girls! If you would be interested in volunteering please fill out the form using the link. This is a great opportunity to get some experience on your resume and also help a great cause.'},
          //{ id: 2, title: 'Title', link: 'https://forms.gle/Eadzgujgzknyxrfa6', date: 'time', desc: 'description'},
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
