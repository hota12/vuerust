<template>
  <div>
    <div id="map">
      <MarcaPlayer  :x="x" :y="y"/>
    </div>
  </div>
</template>

<script>
import MarcaPlayer from './components/MarcaPlayer.vue'


export default {
  name: 'App',
  components: {
    MarcaPlayer
  },
  data: function(){
    
    return{
        players:[],
        x:'',
        y:''
    }

  },

  created: function(){
      console.log("Starting connection to WebSocket Server")
      this.connection = new WebSocket("ws://189.59.57.77:3001/geolocation")

      this.connection.addEventListener("message", (message) =>{
        this.players = JSON.parse(message.data)
        this.x = this.convertCord(this.players[0].x)
        this.y = this.convertCord(this.players[0].y)
        
      });

      this.connection.onopen = function(event) {
        console.log(event)
        console.log("Successfully connected to the echo websocket server...")
      }
    },
    methods:{
      convertCord(entrada){
      return String(entrada / 15) + "%"
}
    }
}

</script>

<style>
#map {
  width: 1750px;
  height: 1750px;
  background-image: url('/src/assets/map.jpg');
  background-size: 4100px 4100px;
  background-position: center;
  position: relative;
}
</style>
