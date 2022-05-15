<template >
    <div :style="{ bottom: this.y, left: this.x,  borderColor: this.sentryRaio}" class="raio" @click="ativaRaio()">
      <div  class="mark">
        <span class="player-name">{{steamId}}</span>
      </div>
    </div>
</template>

<script>


export default {

    props:['x','y','steamId'],

    data(){
      return{
        nomePlayer: '',
        sentryRaio: 'none'
      }

    },

    methods:{
        ativaRaio(){
          if(this.sentryRaio == "#ffffff00"){
            this.sentryRaio = 'red'
          }else{
            this.sentryRaio = '#ffffff00'
          }
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

.raio{
  position: absolute;
  transform: translate(-50%, 50%);
  display: flex;
  width: 28px;
  height: 28px;
  align-content: center;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: solid 1px #ffffff00
}

.mark{
  display: inline;
  width: 5px;
  height: 5px;
  border-radius: 15px;
  background: greenyellow;
  border: solid 1px rgb(97, 187, 0);
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





