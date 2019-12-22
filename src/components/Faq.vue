<template>
  <section id="faq">
    <div class="no-show"></div>
    <div class="jumbotron">
      <h2>{{ header }}</h2>
        <div class="panel-group faqgrid" id="faqAccordion">
          <div v-for="question in questions" :class="question.num">
            <div class="panel panel-default">
              <div class="panel-heading accordion-toggle question-toggle collapsed" data-toggle="collapse" data-parent="#faqAccordion" :data-target="question.target">
                <p>
                  <i class="far fa-hand-pointer"></i>
                  {{ question.q }}
                </p>
              </div>
            <div :id="question.num" class="panel-collapse collapse">
              <div class="panel-body">
                <p v-html="question.a"></p>
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
  name: 'Faq',
  data () {
    return{
      header: 'FAQ',
      questions: [
        { num: 'one', target: '#one', q: 'How do I join?', a: 'You can sign up to <a href="#signup">our mailing list</a> and introduce yourself at our next meeting.'},
        { num: 'two', target: '#two', q: 'Is membership free?', a: 'Yes!'},
        { num: 'three', target: '#three', q: 'Where/When are your meetings?', a: 'In the Student Education and Research Center (SERC) Rm 358 every Monday* from 3-4PM excluding holidays & breaks, unless stated otherwise.'},
        { num: 'four', target: '#four',  q: 'Can guys join too?', a: 'Yes. ACM-W is an organization centered around women in technology, but is not limited to only women.'},
        { num: 'five', target: '#five', q: "What's your relationship with ACM?", a: 'ACM and ACM-W are student chapters of the national Association of Computing Machinery. ACM-W focuses on women in computing, while ACM focuses on computing as a whole. We encourage membership in both organizations because of the unique experience each offers.'},    
        { num: 'six', target: '#six', q: 'How can I leave feedback/suggestions?', a: 'You can send us feedback/suggestions on <a href="https://goo.gl/forms/AeBk6ST8iEqxRUvL2">our feedback form</a>.'}
  
      ]
    }  
  },
  methods (){
  }
}
</script>

<style scoped>

.jumbotron{
  background: none;
  margin: 0 10%;
}
h2{
  text-align: center;
  color: #d7d5d9;
}
.panel {
  background: #232323;
  border: 0;
  border-radius: 5px;
  color: #d7d5d9;
  margin-bottom: 0.5%;
  cursor: pointer;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
.panel .far{
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
.panel:hover .far{
  transform: scaleY(-1);
    -moz-transform: scaleY(-1);
    -webkit-transform: scaleY(-1);
    -ms-transform: scaleY(-1);
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
.panel-heading{
  padding: 1%;
  padding-left: 4%;
}
.panel-body {
  border: 1px solid transparent;
  border-top-color: #5cb59b;
  padding: 1.5%; 
  background: #2c2c2c
  }

.panel-primary .panel-title {
  font-weight: 300; }

.panel-primary .panel-title a:hover {
  color: #fff;
  text-decoration: none; }
@media (max-width: 576px){
  .jumbotron{ 
    width: 100%;
    margin: 10% 0;
    border-radius: 0;
  }
  .grid{
    display: block;
  }
}
</style>
