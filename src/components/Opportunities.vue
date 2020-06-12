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
          { id: 0, title: "Online Career Fair", link: "https://www.onlinecareerfair.org/p/swe?fbclid=IwAR3V5cb9sgfiXqZqf3RowBEpPYa645aRwU2-smBhidNe1a3kVrU1JO6RyIM", date: "5/25 - 6/30", desc: "\"Book free 20-minute video calls with professionals from hundreds of companies like Pepsi, Amazon, LinkedIn, and Microsoft. Get the career clarity and connections you need to feel confident about your future.\"" },
          { id: 1, title: "Diversity Reboot 2020", link: "https://events.powertofly.com/?fbclid=IwAR1fMKmskei5RYH49vOqJtgVe4j8Hm-6jWxR7RpK2Tq695h11nBhDG877ik", date: "6/15 - 6/18", desc: "\"Diversity Reboot 2020 is the free virtual gathering for women, allies, policymakers and business leaders who understand that talk is cheap: jobs and commitments from leaders are what we need now.\" <strong>Including a virtual career fair and speakers.</strong>" }
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
