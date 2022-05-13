<template>

      <div  v-bind:style="{ bottom: this.y, left: this.x,  }" class="mark">
        <div class="pulse" :style="{opacity: this.heat}"></div>
        <button @click="ativaHeat()">Iniciar Intervalo</button>
        <div class="center"><img src="../assets/smartalarm.png" alt="" class="icon"></div>
      </div>
</template>

<script>


export default {

    props:['x','y'],

    data(){
      return{
        heat:0,
        intervalo:""
      }

    },
    methods: {
      ativaHeat(){
        if(this.heat != 0){  
        clearInterval(this.intervalo)
        }
        this.heat = 900
        let initial = 9000
        this.intervalo = setInterval(() => {
          initial = initial - 100
          console.log (initial)
          if(initial == 0){
            clearInterval(this.intervalo)
          }
          this.heat = initial / 10000
        }, 100);
      }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.mark{
  display: inline;
  width: 40px;
  height: 40px;
  border-radius: 600px;
  background:#fff0;
  border: solid 2px rgba(38, 38, 38, 0.392);
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





