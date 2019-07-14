<template>
  <section id="board" class="jumbotron">
    <div class="container">
      <div class="row col-md-12"><h2>{{ header }}</h2></div>
        <div class="row center">
          <div v-for="member in members" >
            <div class="col-lg-3">
              <img class="img-responsive lazy" :src="member.img" alt="picture of member">
              <h4 class="heading-color">{{ member.name }}</h4>
              <a target="_blank" :href="member.linkedin">{{ member.position }} <i class="fa fa-linkedin"></i></a>
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
h4{
  color: #d7d5d9;
}
a{
  color: #5cb59b;
}
a:hover{
  text-decoration: none;
  color: #d7d5d9;
}
img{
  width: 200px;
  border-radius: 50%;
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
