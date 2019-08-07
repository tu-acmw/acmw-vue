<template>
  <div id="blog">
    <p>Why does this not work</p>
  </div>
</template>

<script>




export default {
  name: 'Blog',
  components: {
  }
}
</script>

<style>
html{
  height: 100%;
}
#blog {
  background: #802225;
  font-size: 12pt;
}
h1, h2, h3, h4{
  color: #5cb59b;
  font-size: 24pt;
  margin-bottom: 2%;
}
h3, h4{
  font-size: 18pt;
}

@media (max-width: 576px){
  h1, h2, h3, h4{
    color: #5cb59b;
    font-size: 12pt;
  }
  p, a, .btn{
    font-size: 10pt;
  }
  .jumbotron{
    margin: 0%;
    padding: 2%;
  }
}
@media (min-width: 768px){ 
}

@media (min-width: 992px){

}
@media (min-width: 1200px){

}

.magic-text {
  opacity: 0;
  transform: translateY(4em);
  transition: transform 4s .25s cubic-bezier(0,1,0.3,1),
              opacity .3s .25s ease-out;
  will-change: transform, opacity;
}
.magic-text.is-visible {
  opacity: 1;
  transform: rotateZ(0deg);
}
.magic-text-right {
  opacity: 0;
  transform: translateX(-4em);
  transition: transform 4s .25s cubic-bezier(0,1,0.3,1),
              opacity .3s .25s ease-out;
  will-change: transform, opacity;
}
.magic-text-right.is-visible {
  opacity: 1;
  transform: rotateZ(0deg);
}
.magic-text-left {
  opacity: 0;
  transform: translateX(4em);
  transition: transform 4s .25s cubic-bezier(0,1,0.3,1),
              opacity .3s .25s ease-out;
  will-change: transform, opacity;
}
.magic-text-left.is-visible {
  opacity: 1;
  transform: rotateZ(0deg);
}
</style>
