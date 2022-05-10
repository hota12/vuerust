<template >

      <div :style="{ bottom: this.y, left: this.x }" class="mark" >
        <span class="player-name">{{steamId}}</span>
      </div>
</template>

<script>


export default {

    props:['x','y','steamId'],

    data(){
      return{
        nomePlayer: ''
      }

    },
    
    computed:{
      atualizaX(){
        
        return  this.x
      },
      atualizaY(){   
        return  this.y
      },
      cssStyle() {
      return {
        
        '--name-player-t': String(this.steamId)
        
      }
    }
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.mark{
  display: inline;
  width: 10px;
  height: 10px;
  border-radius: 15px;
  background: greenyellow;
  border: solid 2px rgb(97, 187, 0);
  position: absolute;
  transform: translate(-50%, 50%);
}

.player-name{
    font-family: 'Red Hat Text', sans-serif;
    font-size: 14px;
    color: #adff2f;
    font-weight: 700;
    position: absolute;
    left: 21px;
    top: -1px;
    width: 100px;
}
</style>





