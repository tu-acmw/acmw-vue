<template>
  <section id="board" class="jumbotron  show-on-scroll magic-text">
    <div class="container">
      <div class="text-center"><h2>{{ header }}</h2></div>
        <div class="row center">
          <div v-for="member in members" >
            <img class="img-responsive lazy text-center" :src="member.img" alt="">
            <h4 class="text-center">{{ member.name }}</h4>
            <p class="text-center"><a target="_blank" :href="member.linkedin">{{ member.position }} <i class="fab fa-linkedin"></i></a></p>
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
        { name: 'Bob', position: 'President', linkedin: 'https://google.com', img: require('@/assets/acmw_logo.png') },
        { name: 'Bob', position: 'President', linkedin: 'https://google.com', img: require('@/assets/acmw_logo.png') },
        { name: 'Bob', position: 'President', linkedin: 'https://google.com', img: require('@/assets/acmw_logo.png') },
        { name: 'Bob', position: 'President', linkedin: 'https://google.com', img: require('@/assets/acmw_logo.png') },
        { name: 'Bob', position: 'President', linkedin: 'https://google.com', img: require('@/assets/acmw_logo.png') },
        { name: 'Bob', position: 'President', linkedin: 'https://google.com', img: require('@/assets/acmw_logo.png') },
        { name: 'Bob', position: 'President', linkedin: 'https://google.com', img: require('@/assets/acmw_logo.png') },
        { name: 'Bob', position: 'President', linkedin: 'https://google.com', img: require('@/assets/acmw_logo.png') },
        { name: 'Bob', position: 'President', linkedin: 'https://google.com', img: require('@/assets/acmw_logo.png') },
        { name: 'Bob', position: 'President', linkedin: 'https://google.com', img: require('@/assets/acmw_logo.png') },
        { name: 'Bob', position: 'President', linkedin: 'https://google.com', img: require('@/assets/acmw_logo.png') },
        { name: 'Bob', position: 'President', linkedin: 'https://google.com', img: require('@/assets/acmw_logo.png') }
      ]
    }  
  },
  methods (){
  }
}
</script>

<style scoped>
.jumbotron{
  width: 94%;
  background: #2c2c2c;
  margin: 3%;
  padding: 3%;
  position: relative;
}
.center{
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
}
img{
  width: 200px;
  border-radius: 50%;
}
h4{
  color: #d7d5d9;
}
a{
  color: #3ba3c3;
}
a:hover{
  text-decoration: none;
  color: #d7d5d9;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
.row{
  display: flex;
  justify-content: center;
  align-content: center;
}
p{
  color: #d7d5d9;
}
</style>
