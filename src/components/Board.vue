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
        { name: 'Annalise McLarnon', position: 'President', linkedin: 'https://www.linkedin.com/in/annalise-mclarnon-38aba9bb/', img: require('@/assets/profile/annalise.jpg') },
        { name: 'Emily Trinh', position: 'Co-Vice President', linkedin: 'https://www.linkedin.com/in/emily-trinh-755416151/', img: require('@/assets/profile/emily.jpg') },
        //{ name: 'Ariel Pellumbi', position: 'Co-Vice President', linkedin: 'https://www.linkedin.com/in/arielapellumbi/', img: require('@/assets/profile/ariel.jpg') },
        { name: 'Megha Patel', position: 'Secretary', linkedin: 'https://www.linkedin.com/in/meghapatel99/', img: require('@/assets/profile/megha.jpg') },
        { name: 'Mary Liu', position: 'Treasurer', linkedin: 'https://www.linkedin.com/in/mary-liu-ba3812149/', img: require('@/assets/profile/mary.jpg') },
        //{ name: 'Priyal Patel', position: 'Communications Officer', linkedin: 'https://www.linkedin.com/in/rose-keenan/', img: require('@/assets/profile/priyal.jpg') },
        { name: 'Rose Keenan', position: 'Events Coordinator', linkedin: 'https://www.linkedin.com/in/rose-keenan/', img: require('@/assets/profile/rose.jpg') },
        //{ name: 'Bianca Tuliao', position: 'Community Service Officer', linkedin: 'https://www.linkedin.com/in/biancatuliao/', img: require('@/assets/profile/bianca.jpg') },
        //{ name: 'Zakia Hossain', position: 'Fundraising Chair', linkedin: 'https://www.linkedin.com/in/zakia-hossain/', img: require('@/assets/profile/zakia.jpg') },
        //{ name: 'Jane Chen', position: 'Stars Coordinator', linkedin: 'https://www.linkedin.com/in/janeechenn/', img: require('@/assets/profile/jane.jpg') },
        { name: 'Jiayi Yin', position: 'TSG Representative', linkedin: 'https://www.linkedin.com/in/jiayi-yin-65a27a195/', img: require('@/assets/profile/jiayi.jpg') },
        { name: 'Annica Chiu', position: 'Webmaster', linkedin: 'https://www.linkedin.com/in/annica-chiu-45369a17b/', img: require('@/assets/profile/annica.jpg') }
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
  background: #2c2c2c;
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
  color: #d7d5d9;
}
h4{
  color: #d7d5d9;
}
a{
  color: #3ba3c3;
}
a:hover{
  color: #3ba3c3c5;
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
