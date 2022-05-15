<template>
      <div  v-bind:style="{ bottom: this.y, left: this.x,  }"   class="mark">
        <div class="pulse" :style="{opacity: this.heat}"></div>
      </div>
</template>

<script>


export default {

    props:['x','y', 'state'],
    data(){
      return{
        heat:0,
        intervalo:"",
        ativado: this.state
      }

    },

    watch:{
      state(){
        this.ativaHeat()
        this.playSound ('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3')
      }
    },
    
    methods: {
      playSound (sound) {
        if(sound) {
          var audio = new Audio(sound);
          audio.play();
      }
      },
      setFalse(){
      this.$emit('setFalse')
      },

      ativaHeat(){

        if(this.heat != 0){  
        clearInterval(this.intervalo)
        }
        if(this.state == true){
          this.heat = 9000 / 10000
          clearInterval(this.intervalo)
        }else if(this.state == false){
          this.heat = 900
        let initial = 9000
        this.intervalo = setInterval(() => {
          initial = initial - 100
          
          if(initial == 0){
            clearInterval(this.intervalo)
          }
          this.heat = initial / 10000
        }, 100);
        }
        
      }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.mark{
  display: inline;
  width: 28px;
  height: 28px;
  border-radius: 600px;
  background:#fff0;
  border: solid 1px rgba(47, 205, 253, 0.392);
  position: absolute;
  transform: translate(-50%, 50%);
}

.pulse{
  width: 100%;
  height: 100%;
  background: rgb(136,0,0);
  background: radial-gradient(circle, rgba(136,0,0,1) 0%, rgba(230,43,43,1) 51%, rgba(252,88,88,0) 100%);
  border-radius: 1000px;
}

.center{
    width: 5px;
    height: 5px;
    background-color: rgba(38, 38, 38, 0.392);
    display: inline;
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 100px;
}

.icon{
  transform: translate(-50%, -50%);
  width: 16px;
  height: auto;
}
</style>





