<template>
  <section id="board">
    <div class="no-show"></div>
    <div class="jumbotron">
      <div class="container">
        <div><h2>{{ header }}</h2></div>
          <div class="board-profiles">
            <div class="profile" v-for="member in members">
              <img :src="member.img" alt="">
              <h4>{{ member.name }}</h4>
              <p> <a target="_blank" :href="member.linkedin">{{ member.position }} <i class="fab fa-linkedin"></i></a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>


export default {
  name: 'Board',
  data () {
    return{
      header: 'Board Members',
      members: [
        {
          name: "Annica Chiu",
          position: "President",
          linkedin: "https://www.linkedin.com/in/annicachiu/",
          img: require("@/assets/profile/annica.png"),
        },
        {
          name: "Dariia Dragunova",
          position: "Co-Vice President",
          linkedin: "https://www.linkedin.com/in/dariiadragunova/",
          img: require("@/assets/acmw_logo.png"),
        }, //Need profile picture
        {
          name: "Erin Ross",
          position: "Co-Vice President",
          linkedin: "https://www.linkedin.com/in/erin-c-ross/",
          img: require("@/assets/profile/erin.png"),
        },
        {
          name: "Hadassah Galapo",
          position: "Secretary",
          linkedin: "https://www.linkedin.com/in/hadassah-galapo-4100b61b8/",          
          img: require("@/assets/profile/dassie.png"),
        }, //Need profile picture
        {
          name: "Jackie Gan",
          position: "Treasurer",
          linkedin: "https://www.linkedin.com/in/jiajingan/",
          img: require("@/assets/profile/jackie.png"),
        }, 
        {
          name: "Delanie Wolff",
          position: "Events and Community Service Officer Coordinator",
          linkedin: "https://www.linkedin.com/in/delaniewolff/",          
          img: require("@/assets/acmw_logo.png"),
        }, // Need profile picture
        {
          name: "Khushi Patel",
          position: "STARS Coordinator",
          linkedin: "https://www.linkedin.com/in/khushipatel6/",
          img: require("@/assets/profile/khushi.png"),
        },
        {
          name: "Jasmine Liu",
          position: "TSG Representative",
          linkedin: "https://www.linkedin.com/in/liu-jasmine/",
          img: require("@/assets/acmw_logo.png"),
        }, //Need linked and profile picture
        {
          name: "Jiayi Yin",
          position: "Co-Webmaster",
          linkedin: "https://www.linkedin.com/in/jiayi-yin-65a27a195/",
          img: require("@/assets/profile/jiayi.jpg"),
        },
        {
          name: "Yael Galapo",
          position: "Co-Webmaster",
          linkedin: "",
          img: require("@/assets/acmw_logo.png"),
        }, //Need linkedin and profile picture
      ]
    }  
  },
  methods (){
  }
}
</script>

<style scoped>
.jumbotron{
  width: 85%;
  background: #232323;
  margin: 0 7.5%;
  padding: 2%;
}
.board-profiles {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.profile{
  text-align: center;
  padding: 2vh;
}
.profile > img{
  max-width: 80%;
  border-radius: 50%;
}
h2{
  text-align: center;
  color: #FFD6E3;
}
h4{
  color: #d7d5d9;
}
a:hover{
  text-decoration: none;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
.row{
  display: flex;
  justify-content: center;
}
p{
  color: #d7d5d9;
}
@media (max-width: 768px){
  .jumbotron{ 
    width: 100%;
    margin: 0;
    border-radius: 0;
  }
  .board-profiles {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
