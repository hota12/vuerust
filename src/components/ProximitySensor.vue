<template>

      <div  v-bind:style="{ bottom: this.y, left: this.x }" class="mark">
        <div class="center"></div>
      </div>
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
  width: 60px;
  height: 60px;
  border-radius: 600px;
  background:#fff0;
  border: solid 2px rgb(97, 187, 0);
  position: absolute;
  transform: translate(-50%, 50%);
}

.center{
    width: 5px;
    height: 5px;
    background-color: red;
    display: inline;
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 100px;
}
</style>





