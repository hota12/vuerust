<template>
      <div  v-bind:style="{ bottom: this.y, left: this.x }" class="mark">{{x}}</div>
</template>

<script>


export default {

    props:['x','y'],

    data(){
      return{
        styleObject: {
          top:this.x,
          left:this.y
        }
      }

    },
    computed:{
      atualizaX(){
        
        return  this.x
      },
      atualizaY(){
        return  this.y
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.mark{
  display: inline;
  width: 20px;
  height: 20px;
  background: greenyellow;
  position: absolute;
  

}
</style>





